const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    endereco: {
        type: String,
    },
    senha: {
        type: String,
    },

});

const User = mongoose.model('Usuário', UserSchema);

module.exports = { UserSchema, User }
