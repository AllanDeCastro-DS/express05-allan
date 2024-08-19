const mysql = require("mysql2")
const ex = require("express")


const sqlconfig = require("./mysq_config")
const mysq_config = require("./mysq_config")
const app = ex()


app.listen(3000,()=>{
    console.log("server is running")
})


const connection =mysql.createConnection(mysq_config)

app.get('/',(req,res)=>{
    let result={
        status: "sucesso pae",
        message: null,
        data:null   
    }
})


connection.query("SELECT * FROM tasks",(err,results)=>{
    if (err) {
            result.status="Erro";
            result.message="Erro na obtenção das tarefas";
            resutl.data =[];
            //res.send(result);
            res.json(results);
    }
    else{
        result.status="Sucesso";
        result.message="Ta safe";
        result.data=result;
         //res.send(result);
        res.json(results);
    }
})