//Importando modulos
const routes = require('express').Router()
const multer = require('multer')

//Importando outros arquivos da aplicacao
const multerConfig = require('./config/multer')

//Importando models
const Post = require('./models/Post')

//Rotas
/*
 *  No multer, dentro dos parenteses vao as configs do multer e depois quais vao os metodos disponivies, 
 *  single significa upload de um unico arquivo, que eh melhor pois assim da pra "trackear" o progresso 
 *  de cada upload.
 *  Dentro do single, passamos o name que ira receber a imagem, nesse caso eh file.
 */
routes.post("/posts", multer(multerConfig).single('file'),async (req, res)=>{ 
    console.log(req.file)// No req.file que ficam as infos do arquivo
    const {originalname: name, size, filename: key} = req.file
    console.log(name,size,key)
    const post = await Post.create({
        name,
        size,
        key,
        url : ""
    })
    return res.json(post)
})

//Exportando rotas
module.exports = routes