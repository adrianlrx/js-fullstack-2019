const {Schema, model} = require('mongoose');

const TareaSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    userID:{
        type: String,
        required: true
    },
    completed:{
        type: Boolean,
        default: false
    }
    
}, {
    timestamp: false
});

module.exports = model('Tarea', TareaSchema);