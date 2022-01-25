const express = require("express");
const app = express();


app.get('/', (req, res) => {
    res.send("teste2")
});

app.listen(3001, ()=>{
    console.log("rodando Servidor");
})