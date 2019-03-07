const express = require('express')
const app = express()
const {MongoClient} = require("./contrib/conections/mongoConnections");
const port = 3000;

//Iniciar servidor
app.listen(port, ()=>{
    console.log("server on port ", `${port}`)
});
app.use(express.json());