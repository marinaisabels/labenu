import { readFile, readdir } from 'fs';

//Lê um diretório 
readdir("./textos", (err: Error, files: string[]) => {
    console.log(files)
})


const Promise1 = new Promise((resolve, reject) => {

    const handleFileRead = (err: Error, data: Buffer) => {
        try {
            const fileContent: string = data.toString()
            resolve(fileContent);
        } catch (e) {
            reject(err)

        }
    }

    readFile("./textos/1.txt", handleFileRead)
})

const Promise2 = new Promise((resolve, reject) => {

    const handleFileRead = (err: Error, data: Buffer) => {
        try {
            const fileContent: string = data.toString()
            resolve(fileContent);
        } catch (e) {
            reject(err)

        }
    }

    readFile("./textos/2.txt", handleFileRead)
})

const Promise3 = new Promise((resolve, reject) => {

    const handleFileRead = (err: Error, data: Buffer) => {
        try {
            const fileContent: string = data.toString()
            resolve(fileContent);
        } catch (e) {
            reject(err)

        }
    }

    readFile("./textos/3.txt", handleFileRead)
})

const Promise4 = new Promise((resolve, reject) => {

    const handleFileRead = (err: Error, data: Buffer) => {
        try {
            const fileContent: string = data.toString()
            resolve(fileContent);
        } catch (e) {
            reject(err)

        }
    }

    readFile("./textos/4.txt", handleFileRead)
})

const Promise5 = new Promise((resolve, reject) => {

    const handleFileRead = (err: Error, data: Buffer) => {
        try {
            const fileContent: string = data.toString()
            resolve(fileContent);
        } catch (e) {
            reject(err)

        }
    }

    readFile("./textos/5.txt", handleFileRead)
})



Promise.all([Promise1, Promise2, Promise3, Promise4, Promise5])
.then((result)=>{
   console.log("Eu não acredito que isso ta certo", result) 
}).catch((err) =>{
    console.error("Deu errado :(!")
})



