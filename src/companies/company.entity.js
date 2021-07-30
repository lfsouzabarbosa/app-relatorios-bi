const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
     Nome: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    endereço: {
        type: String,
    },
    encryptedPassword: {
        type: String,
    },

});

const Company = mongoose.model('Usuário', CompanySchema);

module.exports = { CompanySchema, Company }
