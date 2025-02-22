const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const moment = require('moment');

const app = express();
const port = 8000;
const cors = require('cors');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const jwt = require('jsonwebtoken');

mongoose.connect(
  'mongodb+srv://emrekod01:123456789asD.@cluster0.18xf5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
).then(()=>{
    console.log('connected to mobgodb')
}).catch(err=>{
    console.log('error connecting to mongodb',err)
});

app.listen(port,()=>{
    console.log('server running on ',port)
})
