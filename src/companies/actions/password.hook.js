const argon2 = require('argon2');
const AdminBro = require('admin-bro');


const after = async (response) => {
    if (response.record && response.record.erros) {
        response.record.errors.password = response.record.errors.encryptedPassword;
    }
    return response;
}
const before = async (response) => {
    if (response.method === 'post') {
        const { password, ...otherParams} = response.payload

        if (password) {
            const encryptedPassword = await argon2.hash(password);

            return{
               ...response,
               payload: {
                   ...otherParams,
                   encryptedPassword,
               },
            };
        }
    }
    return response;
}

module.exports = {after, before}