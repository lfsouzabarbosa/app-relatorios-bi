const { GoogleSpreadsheet } = require('google-spreadsheet');
const credenciais = require('./credenciais.json');
const arquivo = require('./arquivo.json');
const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')
const AdminBroMongoose = require('@admin-bro/mongoose')
const mongoose = require('mongoose')
const c6 = require('./c6Trends')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

const express = require('express')
const app = express()

app.use(adminBro.options.rootPath, router)
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

app.listen(8081, () => console.log('api google sheets'))

const getDoc = async () => {
    const doc = new GoogleSpreadsheet(arquivo.id);
    
    await doc.useServiceAccountAuth({
        client_email: credenciais.client_email,
        private_key: credenciais.private_key.replace(/\\n/g, '\n')
    })
    await doc.loadInfo();
    return doc;
}

let teste = getDoc().then(doc => {
    console.log(doc.title);
})

app.get('/', (req, res) => {
    return res.json(teste)
})