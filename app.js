const express = require('express');
const userRoute = require('../backEnd/router/userRoute')

const app=express()
app.use(express.json())
app.use('/api/v1/user',userRoute)

module.exports = app;