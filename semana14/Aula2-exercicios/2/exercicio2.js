const fs = require('fs');
const name = process.argv[2]
console.log("Lista de" , name,)

const data = "Nova Tarefa"
const fileName = "tasks.txt"
    try{
        fs.appendFileSync(fileName, data, 'utf8')
        console.log("Tarefa adicionada com sucesso!")
    }catch(err){
        
        console.error(err)
    }