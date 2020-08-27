import knex from "knex";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import { Authenticator } from "./services/Authenticator";
import { IdGenerator } from "./services/IdGenerator";
import { UserData } from "./data/UserData";

dotenv.config()

const app = express();

app.use(express.json());

const  connection = knex({
        client: "mysql",
        connection: {
            host: process.env.DB_HOST,
            port: 3306,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE_NAME,
        },
    });

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


// async function main(): Promise<void> {
//     await connection.raw(`
//         CREATE TABLE User (
//             id VARCHAR(255) PRIMARY KEY, 
//             name VARCHAR(255) NULL, 
//             email VARCHAR(255) UNIQUE NOT NULL
//         ) 
//     `);
//     console.log("Tabela criada com sucesso!")

// }

// main();

const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});


// const idGenerator = new IdGenerator()
// const id = idGenerator.generateId() 
// const authenticator = new Authenticator()
// const token = authenticator.generateToken(id)

// console.log(token)