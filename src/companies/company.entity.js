const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    address: {
        type: String,
    },
    encryptedPassword: {
        type: String,
    },

});

const Company = mongoose.model('Usuario', CompanySchema);

module.exports = { CompanySchema, Company }
