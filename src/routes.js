//Importando modulos
const routes = require('express').Router()
const multer = require('multer')

//Importando outros arquivos da aplicacao
const multerConfig = require('./config/multer')

//Rotas
/*
    No multer, dentro dos parenteses vao as configs do multer e depois quais vao os metodos disponivies, 
    single significa upload de um unico arquivo, que eh melhor pois assim da pra "trackear" o progresso 
    de cada upload
*/
routes.post("/posts", multer(multerConfig).single, (req, res)=>{ 
    return res.json({mensage: "Hello World!"})
})

//Exportando rotas
module.exports = routes