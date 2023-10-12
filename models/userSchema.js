const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type: 'string',
        required: true,
    },
    age:{
        type: 'Number',
        required: true,
    },
    email:{
        type: 'string',
        required: true,
    },
})

const User = mongoose.model('User', userSchema)
module.exports = User
