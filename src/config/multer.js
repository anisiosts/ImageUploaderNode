//Importando modulos
const multer = require('multer')
const path = require('path') //Propria do node
const crypto = require('crypto') //Propria do node

//Exportando configuracoes do multer do jeito que a gente precisa
module.exports = {
    //Referindo para onde os arquivos vao depois do upload
    dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'), //Voltando duas pastas e avancando para /temp/uploads

    storage: multer.diskStorage({
        //Basicamente a mesma coisa que a dest:, se nao tiver a destination o codigo olha a dest
        destination: (req, file, cb) => { 
            cb(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'))
        },
        //Feita para rennomear as imagens
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if(err) cb(err) //Caso de um erro, retorna ele para o callback
                const filename = `${hash.toString('hex')}-${file.originalname}`
                cb(null, filename)
            })
        }
    }),

    //Configurando limites do upload (tamanho dos arquivos,  quantidade de uploads por vez e etc)
    limits: {
        fileSize: 2 * 1024 * 1024 //As multiplicacoes eh porque eh em bytes logo 2MB
    },

    //Limitando tipos de arquivo que podem ser feitos upload
    fileFilter: (req, file, cb) => { 
        //Tipos permitidos
        const allowesMimes = [
            "image/jpeg",
            "image/pjgep",
            "image/png",
            "image/gif"
        ]
        //Verificando se o arquivo recebido pertence a um dos tipos
        if(allowesMimes.includes(file.mimetype)){
            cb(null, file) //Primeiro parametro eh sempre o erro, como nesse caso deu certo ele eh nulo
        }else{
            cb(new Error("Invalid file type."))
        }
    }
}