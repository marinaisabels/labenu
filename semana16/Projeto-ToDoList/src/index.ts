import knex from "knex";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import moment from "moment";
dotenv.config()


const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE_NAME,
    },
})

// async function main(): Promise<void> {
//     await connection.raw(`
//         CREATE TABLE TodoListUser (
//             id VARCHAR(255) PRIMARY KEY,
//             name VARCHAR(255) NULL,
//             nickname VARCHAR(255) UNIQUE NOT NULL,
//             email VARCHAR(255) UNIQUE NOT NULL
//         )
//     `);
//     console.log("Tabela criada com sucesso")
// }

// async function main(): Promise<void> {
//     await connection.raw(`
//     CREATE TABLE TodoListTask (
// 		id VARCHAR(255) PRIMARY KEY, 
//         title VARCHAR(255) NOT NULL, 
//         description TEXT NOT NULL, 
//         status VARCHAR(255) NOT NULL DEFAULT "to_do",
//         limit_date DATE NOT NULL,
//         creator_user_id varchar(255) NOT NULL,
//         FOREIGN KEY (creator_user_id) REFERENCES TodoListUser(id)
// );
//     `);
//     console.log("Tabela criada com sucesso")
// }

// async function main(): Promise<void> {
//     await connection.raw(`
//     CREATE TABLE TodoListResponsibleUserTaskRelation (
// 		task_id VARCHAR(255),
//     responsible_user_id VARCHAR(255),
//     FOREIGN KEY (task_id) REFERENCES TodoListTask(id),
//     FOREIGN KEY (responsible_user_id) REFERENCES TodoListUser(id)
// );
//     `);
//     console.log("Tabela criada com sucesso")
// }


// INSERT
const createUser = async (
    id: string,
    name: string,
    nickname: string,
    email: string,
): Promise<void> => {
    await connection.insert({
        id: id,
        name: name,
        nickname: nickname,
        email: email
    })
        .into("TodoListUser")
    console.log("Usuário criado com sucesso!")
}

const getUserById = async (id: string, nickname: string): Promise<any> => {
    const result = await connection.select("*").from("TodoListUser").where({
        id: id,
        nickname:nickname
    });
    return result;
}

const updateUser = async (id: string, name: string, nickname: string): Promise<void> => {
    await connection("TodoListUser")
        .update({
            name: name,
            nickname: nickname,
        })
        .where({ id })
};

const createTask = async (
    title: string,
    description: string,
    limitDate: moment.Moment,
    creatorUserId: string,
): Promise<void> => {
    await connection.insert({
        title: title,
        description: description,
        limitDate: limitDate,
        creatorUserId: creatorUserId,
    })
        .into("TodoListTask")
    console.log("Tarefa criada com sucesso!")
}

const getTaskById = async (id: string): Promise<any> => {
    const result = await connection.select("*").from("TodoListTask").where({
        id: id,
    });
    return result;
}

async function main(): Promise<void> {
    try {
        // await createUser("002","Astro ", "ast", "astro@dev.com.br")
        // await createTask("Criar banco dos alunos", "Devemos criar o banco dos alunos para o módulo do backed", moment("04/05/2020", "DD/MM/YYYY"), "001")
    } catch (err) {
        console.log(err)
    }
    // console.log("Tabela criada com sucesso")
}


main();




const app = express();
app.use(express.json());
//  CRIAR USUÁRIO

app.put("/user", async (req: Request, res: Response) => {
    try {
        const id = req.body.id
        const name = req.body.name
        const nickname = req.body.nickname
        const email = req.body.email

        // console.log("id: ", id)
        // console.log("name: ", name)
        // console.log("nickname: ", nickname)
        // console.log("email: ", email)

        await createUser(id, name, nickname, email)
        res.status(200).send()
    } catch (err) {
        res.status(400).send({
            message: err.message,
        })

    }

})

// PEGAR USUÁRIO PELO ID

app.get("/user/:id", async (req: Request, res: Response) => {
    try {
        const id = req.body.id
        const nickname = req.body.nickname

        await getUserById(id, nickname)
        res.status(200).send()
    } catch (err) {
        res.status(400).send({
            message: err.message,
        })
    }
})


// EDITAR USUÁRIO

app.post("/user/edit", async(req:Request, res: Response) => {
    try {
        const id = req.body.id
        const name = req.body.name
        const nickname = req.body.nickname

        await updateUser(id, name, nickname)
        res.status(200).send()
    }catch (err) {
        res.status(400).send({
            message :err.message
        })
    }
})

// CRIAR TAREFA
app.put("/task", async(req: Request, res:Response) => {
    try {
        const title = req.body.title
        const description = req.body.description
        const limitDate = req.body.limitDate
        const creatorUserId = req.body.creatorUserId

        await createTask(title, description, limitDate, creatorUserId)
        res.status(200).send()
    }catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
})


// PEGAR TAREFA PELO ID
app.get("/task/:id", async(req: Request,res: Response) => {
    try {
        const id = req.body.id
        const taskId= req.body.taskId
        const title = req.body.title
        const description= req.body.description
        const limitDate = req.body.limitDate
        const status = req.body.status
        const creatorUserId = req.body.creatorUserId
        const creatorUserNickName = req.body.creatorUserNickName

        await getTaskById(id)
        res.status(200).send()
    }catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
})

const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});