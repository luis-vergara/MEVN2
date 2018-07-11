const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const itemRoutes = require('./routes/Item');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mevn-stacks')
    .then(()=> console.log('db connect'))
    .catch(err =>console.log(err));
//settings
app.set('port',process.env.PORT || 3000);

//middlewres
app.use(cors());
app.use(bodyParser.json());

//routes
app.use('/item',itemRoutes);

//static files
app.use(express.static(path.join(__dirname,'public')));


app.listen(app.get('port'),()=>{
    console.log('server on port', app.get('port'));

});