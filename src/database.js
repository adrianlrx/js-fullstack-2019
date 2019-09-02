const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/tareadb', {useNewUrlParser: true})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(er));