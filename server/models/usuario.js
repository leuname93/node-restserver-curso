const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
let Schema = mongoose.Schema;

let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol valido'
};

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'el nombre es necesario']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'el correo es necesario']
    },
    password: {
        type: String,
        required: [true, 'password necesario']
    },
    img: {
        type: String,
        required: false
    }, //no es obligatoria
    rol: {
        type: String,
        enum: rolesValidos,
        default: 'USER_ROLE'
    }, //default user_role
    estado:{
        type: Boolean,
        default: true
    },
    google:{
        type: Boolean,
        default: false
    } 
});

usuarioSchema.methods.toJSON = function () {
    
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;

    return userObject;
    
}

usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser unico'});
module.exports = mongoose.model('Usuario', usuarioSchema );
