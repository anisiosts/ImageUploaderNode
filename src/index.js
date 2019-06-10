//Importando modulos
const express = require('express')

//Iniciando constante app
const app = express()

//Definindo rotas
app.get('/', (req, res)=>{
    res.status(200).send('Servidor iniciado com sucesso!')
})

//Iniciando servidor na porta do ambiente
const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>[
    console.log('Servidor iniciado!')
])