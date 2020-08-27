### Exercício 1 

## a) 
round é o custo indicado por dois dígitos e um $ que está relacionado com a segurança da senha.
salt é uma string usada no processo de hash.
Utilizei o valor 12 por ser valor padrão das libs.
##b)

import * as bcrypt from 'bcryptjs';

export class HashManager {
    public async hash(s: string): Promise<string> {
        const rounds = Number(process.env.BCRYPT_COST);
        const salt = await bcrypt.genSalt(rounds);
        const result = await bcrypt.hash(s, salt);
        return result;
    }

    public async compare(s: string, hash: string): Promise<boolean> {
        return bcrypt.compare(s, hash);
    }
} 

### Exercício 2 

## a) 
Irei implementar a signup antes pois é necessário criptografar a senha antes de salvar.

## b) 
app.post("/signup", async (req: Request, res: Response) => {
    try {

        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid email");
          }
          if (!req.body.password || req.body.password.length < 6) {
            throw new Error("Invalid password");
          }
        const user = {
            email: req.body.email, 
            password: req.body.password,

        };
            const idGenerator = new IdGenerator();
            const id = idGenerator.generateId();

            const hashManager = new HashManager();
            const hashPassword = await hashManager.hash(user.password)

            const userDataBase =  new UserData()
            await userDataBase.createUser(id, user.email, hashPassword);

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

        const hashManager = new HashManager();
        const compareResult = await hashManager.compare(
            user.password, 
            userD.password
        )

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

FALTOU O --->  if (!compareResult) {
            throw new Error("Invalid password");
          }

## d) 


### Exercício 3

## a) 
ALTER TABLE User ADD COLUMN role VARCHAR(255) DEFAULT "normal";

## b)

import * as jwt from "jsonwebtoken";

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
            role: data.role
        }
    }

    public getData(token: string): AuthenticationData {
        const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
        const result = {
          id: payload.id,
          role: payload.role
        };
        return result;
      }
}

export interface AuthenticationData {
    id: string;
    role: string;
}

## c) 
app.post("/signup", async (req: Request, res: Response) => {
    try {

        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid email");
          }
          if (!req.body.password || req.body.password.length < 6) {
            throw new Error("Invalid password");
          }
        const user = {
            email: req.body.email, 
            password: req.body.password,
            role: req.body.role

        };
            const idGenerator = new IdGenerator();
            const id = idGenerator.generateId();

            const hashManager = new HashManager();
            const hashPassword = await hashManager.hash(user.password)

            const userDataBase =  new UserData()
            await userDataBase.createUser(id, user.email, hashPassword, user.role);

            const authenticator = new Authenticator();
            const token = authenticator.generateToken({
                id, 
                role: user.role,
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

## d) 

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

        const hashManager = new HashManager();
        const compareResult = await hashManager.compare(
            user.password, 
            userD.password
        )

        if (!compareResult) {
            throw new Error("Invalid password");
          }

        const authenticator = new Authenticator();
        const token = authenticator.generateToken({
                id: userD.id,
                role: userD.role
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

### Exercício 4 
## a) 
if(authenticationData.role !== "normal") {
            throw new Error("Unauthorized")
        }
        
### Exercício 5 
a) 

app.delete("/user/:id", async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string

        const authenticator = new Authenticator()
        const tokenData = authenticator.verify(token)

        if (tokenData.role !== "admin") {
            throw new Error("Only admins can acess")
        }

        const userDataBase = new UserData()
        await userDataBase.deleteUser(req.params.id)

        res.status(200).send()
    } catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
})

 public async deleteUser(id: string): Promise<void> {
        await this.connection()
        .delete()
        .from(UserData.TABLE_NAME)
        .where({id})
    }

### Exercício 6

app.get("/user/:id", async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string

        const id = req.params.id

        const authenticator = new Authenticator();
        authenticator.getData(token);

        const userDataBase = new UserData()
        const users = await userDataBase.getUserById(id)

        res.status(200).send({
            id: users.id,
            email: users.email, 
            role: users.role
        })
    }catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
})


### Exercício 7 

## a)
export class BaseDataBase {
    private static KNEX_CONNECTION: Knex | null = null
    
    protected  connection() {
        if(BaseDataBase.KNEX_CONNECTION === null){
            
        BaseDataBase.KNEX_CONNECTION = knex({
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
        return BaseDataBase.KNEX_CONNECTION
    }

}
    
## b) 
public static destroyConnection() { 
        if(BaseDataBase.KNEX_CONNECTION !== null) { 
            BaseDataBase.KNEX_CONNECTION.destroy();
        }
        BaseDataBase.connection = null;
    }

Colocar após o catch ->
await BaseDataBase.destroyConnection()





