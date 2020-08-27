### Exercício 1

## a) 
Para facilitar na identificação do usuário.

## b)

import { v4 } from "uuid";

export class IdGenerator {
    public generatId(): string {
        return v4()
    }
}

### Exercício 2

## a) 
const userTableName = "User";
representa a tabela.
const connection = knex
é para conectar com o banco de dados. 
const createUser 
é para criar um usuário para a tabela  


## b)
async function main(): Promise<void> {
    await connection.raw(`
        CREATE TABLE User (
            id VARCHAR(255) PRIMARY KEY, 
            email VARCHAR(255) NULL, 
            password VARCHAR(255) UNIQUE NOT NULL
        ) 
    `);
    console.log("Tabela criada com sucesso!")

}

main();

## c) 
export class UserData {
    private connection = knex({
        client: "mysql",
        connection: {
            host: process.env.DB_HOST,
            port: 3306,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE_NAME,
        },
    });

    private static TABLE_NAME: string = "User";
    public async createUser(
        id: string, 
        email:string, 
        password: string,
    ): Promise<void> {
        this.connection
        .insert({
            id,
            email,
            password
        })
        .into(UserData.TABLE_NAME)
    }
}

## d) 

private static TABLE_NAME: string = "User";
    public async createUser(
        id: string, 
        email:string, 
        password: string,
    ): Promise<void> {
        this.connection
        .insert({
            id,
            email,
            password
        })
        .into(UserData.TABLE_NAME)
    }
    
    ### Exercício 3
    
 ## a) 
    as string possibilita que a informação seja usada como string. 
    
## b) 
    
export class Authenticator {
    private static getExpiresIn(): number {
        return Number(process.env.ACCESS_TOKEN_EXPIRES_IN)
    }

    public generateToken(data: AuthenticationData): string {
        return jwt.sign(
            data, process.env.JWT_KEY as string, {
            expiresIn: Authenticator.getExpiresIn(),
        }
        );
    }

    public verify(token: string): AuthenticationData {
        const data = jwt.verify(token, process.env.JWT_KEY as string) as any;
        return {
            id: data.id,
        }
    }
}

export interface AuthenticationData {
    id: string
}
   
    
### Exercício 4 

## a) 
app.post("/signup", async (req: Request, res: Response) => {
    try {
        const user = {
            email: req.body.email, 
            password: req.body.password,

        };
            const idGenerator = new IdGenerator();
            const id = idGenerator.generateId();

            const userDataBase =  new UserData()
            await userDataBase.createUser(id, user.email, user.password);

            const authenticator = new Authenticator();
            const token = authenticator.generateToken({
                id, 
            })

        res.status(200).send({
            token,
        });
    }catch(err) {
        res.status(400).send({
            message: err.message
        });
    }
});
  
## b) 
app.post("/signup", async (req: Request, res: Response) => {
    try {

// Eu não sabia fazer isso! -->
        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid email");
          }
        const user = {
            email: req.body.email, 
            password: req.body.password,

        };
            const idGenerator = new IdGenerator();
            const id = idGenerator.generateId();

            const userDataBase =  new UserData()
            await userDataBase.createUser(id, user.email, user.password);

            const authenticator = new Authenticator();
            const token = authenticator.generateToken({
                id, 
            })

        res.status(200).send({
            token,
        });
    }catch(err) {
        res.status(400).send({
            message: err.message
        });
    }
});

## c) 

try {
    if (!req.body.password || req.body.password.length < 6) {
            throw new Error("Invalid password");
          }
        const user = {
            email: req.body.email, 
            password: req.body.password,

        };
            const idGenerator = new IdGenerator();
            const id = idGenerator.generateId();

            const userDataBase =  new UserData()
            await userDataBase.createUser(id, user.email, user.password);

            const authenticator = new Authenticator();
            const token = authenticator.generateToken({
                id, 
            })

        res.status(200).send({
            token,
        });
    }catch(err) {
        res.status(400).send({
            message: err.message
        });
    }
});

### Exercício 5 

## a -b )


    public async getUserByEmail(email: string): Promise<any> {
        const result = await this.connection()
        .select("*")
        .from(UserData.TABLE_NAME)
        .where({email});

        console.log(result)
        return result[0]
    }
    
### Exercício 6 
## a e b ) 


app.post ("/login", async (req: Request, res: Response) => {
    try {

        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid email");
          }

        const user = {
            email: req.body.email, 
            password: req.body.password,
        };
        
        const userDataBase =  new UserData()
        const userD = await userDataBase.getUserByEmail(user.email);

        const authenticator = new Authenticator();
        const token = authenticator.generateToken({
                id: userD.id,
            })
        res.status(200).send({
            token
        });
    }catch (err) {
        res.status(400).send({
            message: err.message
        });
    }
})  

### Exercício 7

## a) 

## b) 

// public verify(token: string): AuthenticationData {
    //     const data = jwt.verify(token, process.env.JWT_KEY as string) as any;
    //     return {
    //         id: data.id,
    //     }
    // }
    public getData(token: string): AuthenticationData {
        const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
        const result = {
          id: payload.id,
        };
        return result;
      }

### Exercício 8 


## a) 
 public async getUserById(id: string): Promise<any> {
        const result = await this. connection()
        .select("*")
        .from(UserData.TABLE_NAME)
        .where({id});

        return result [0]
    }
## b) 
app.get("/user/profile", async (req: Request, res: Response) => {
    try { 
        const token = req.headers.authorization as string;

        const authenticator = new Authenticator();
        const authenticationData = authenticator.getData(token);
    
        const userDb = new UserData();
        const user = await userDb.getUserById(authenticationData.id);
    
        res.status(200).send({
          id: user.id,
          email: user.email,
        });
    }catch (err) {
        res.status(400).send({
            message: err.message
        });
    }
})  

