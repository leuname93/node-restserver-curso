require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use( require('./routes/index'));

mongoose.connect(process.env.URLDB, { useNewUrlParser: true,  useCreateIndex: true } , (err, res) => {

  if (err){
    //console.log('hay un error');
    throw 'database no response';
  } 

  console.log('base de datos online');
  
});

app.listen(process.env.PORT, () => {
  console.log(`Escuchando en el puerto:`, process.env.PORT);
});