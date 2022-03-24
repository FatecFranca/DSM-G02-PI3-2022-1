const mongoose = require('mongoose');

module.exports = function() {
    const schema = mongoose.Schema({
        fullname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        email_confirmed: {
            type: Boolean,
            required: true,
            default: false // valor padrao do atributo
        },
        password_hash: {
            type: String,
            required: true
        },
        data_registered: {
            type: Date,
            required: true,
            default: Date.now() // valr padrão do campo é a data de hoje;
        }
    })

    return mongoose.model('User', schema, 'users')
}