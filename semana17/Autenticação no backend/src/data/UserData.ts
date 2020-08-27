import knex from "knex";

export class UserData {
    private connection() {
        return knex({
            client: "mysql",
            connection: {
                host: process.env.DB_HOST,
                port: 3306,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_DATABASE_NAME,
            },
        });
    }

    private static TABLE_NAME: string = "User";
    public async createUser(
        id: string,
        email: string,
        password: string,
    ): Promise<void> {
        this.connection()
            .insert({
                id,
                email,
                password
            })
            .into(UserData.TABLE_NAME)
    }

    public async getUserByEmail(email: string): Promise<any> {
        const result = await this.connection()
        .select("*")
        .from(UserData.TABLE_NAME)
        .where({email});

        console.log(result)
        return result[0]
    }

    public async getUserById(id: string): Promise<any> {
        const result = await this. connection()
        .select("*")
        .from(UserData.TABLE_NAME)
        .where({id});

        return result [0]
    }
}

