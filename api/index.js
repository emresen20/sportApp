const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const moment = require('moment');
const crypto = require('crypto');


const app = express();
const port = 8000;
const cors = require('cors');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const jwt = require('jsonwebtoken');

const User = require('./models/user');
const Game = require('./models/game');
const Venue = require('./models/venue');

mongoose
  .connect(
    'mongodb+srv://emrekod01:123456789asD.@cluster0.18xf5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
  )
  .then(() => {
    console.log('connected to mobgodb');
  })
  .catch(err => {
    console.log('error connecting to mongodb', err);
  });

app.listen(port, () => {
  console.log('server running on ', port);
});

app.post('/register', async (req,res) => {
  try {
   
    const userData = req.body;
    // Kullanıcının zaten kayıtlı olup olmadığını kontrol et
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email is already registered' });
    }


    const newUser = new User(userData);
    await newUser.save();

    const secretKey = crypto.randomBytes(32).toString('hex');
    const token = jwt.sign({userId: newUser._id}, secretKey);

    res.status(200).json({token});
  } catch (error) {
    console.log('Error creating user', error);
    res.status(500).json({error: 'Internal server Error'});
  }
});

app.post('/login', async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user= await User.findOne({email});
        if(!user){
            return res.status(401).json({message:'Invalid email'});
        }
        if(user.password !==password){
            return res.status(401).json({message:'Invalid password'})
        }

        const secretKey = crypto.randomBytes(32).toString('hex');
        const token = jwt.sign({userId: user._id}, secretKey);
        res.status(200).json({token})
    
    } catch (error) {
        console.log('Error loggingg in',error);
        res.status(500).json({error: 'Logged server Error'});
    }
})
