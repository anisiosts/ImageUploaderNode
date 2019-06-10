//Importando modulos
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

//Importando outros arquivos da aplicação
const routes = require('./routes')

//Iniciando constante app
const app = express()

//Confguracoes: 
    //Fazendo o express lidar com mensagens vindas no formato JSON
    app.use(express.json())
    //Fazendo o express lidar com requisicoes no padrao urlencoded
    app.use(express.urlencoded({extended: true}))
    //Inportando modulo para logs, vamos utilizar o morgan
    app.use(morgan('dev'))
    //Banco de dados
    mongoose.connect('mongodb://localhost/uploader', {
        useNewUrlParser: true //Diz para o mongo que estamos utilizando o novo estilo de url
    })


//Definindo rotas
app.use(require('./routes'))

//Iniciando servidor na porta do ambiente
const PORT =  9000 //process.env.PORT ||
app.listen(PORT, ()=>[
    console.log('Servidor iniciado!')
])