require('dotenv').config(); // para leer .env en desarrollo

const express = require('express');
const morgan = require('morgan');

// init
const app = express();
require('./database');

//settings
app.set('port', 4000);
app.set('author', 'adrianlrx');
app.set('appName', 'Curso JS FullStack');

//middleware
app.use(express.json());
app.use(morgan('dev'));
app.use('/api/tareas', require('./routes/tareas.routes'));
app.use('/api/users', require('./routes/user.routes'));

// routing
// app.get('/', (req, res)=>{
//     console.log(req.body);
//     res.send('Hello');
// });

// server
app.listen(app.get('port'),()=>{
    console.log(`Server on port:${app.get('port')}`);
});