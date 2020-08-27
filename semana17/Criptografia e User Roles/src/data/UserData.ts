import { BaseDataBase } from "./BaseDataBase";

export class UserData extends BaseDataBase{
    private static TABLE_NAME: string = "User";

    public async createUser(
        id: string,
        email: string,
        password: string,
        role:  string
    ): Promise<void> {
        BaseDataBase.connection()
            .insert({
                id,
                email,
                password, 
                role
            })
            .into(UserData.TABLE_NAME)
    }

    public async getUserByEmail(email: string): Promise<any> {
        const result = await BaseDataBase.connection()
        .select("*")
        .from(UserData.TABLE_NAME)
        .where({email});

        console.log(result)
        return result[0]
    }

    public async getUserById(id: string): Promise<any> {
        const result = await BaseDataBase.connection()
        .select("*")
        .from(UserData.TABLE_NAME)
        .where({id});

        return result [0]
    }

    public async deleteUser(id: string): Promise<void> {
        await BaseDataBase.connection()
        .delete()
        .from(UserData.TABLE_NAME)
        .where({id})
    }
}

