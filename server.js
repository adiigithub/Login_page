const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db=require('./db/conn')
const User=require('./models/User')
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());


app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) {
        res.status(201).send({ success: true, message: 'Login successful' });
    } else {
      
        res.status(401).send({ success: false, message: 'Invalid email or password' });
    }
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
