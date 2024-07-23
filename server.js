require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require(mongoose)
const MONGO_URI = process.env.MONGO_URI

mongoose.connect(MONGO_URI)

mongoose.connection.once('open', () => {
    console.log('MongoDB is connected')
})

mongoose.connection.on('error', () => {
    console.error('You have a stupid error')
})

// controller & r

// Create 
app.post('/notes', async (req, res) => {
    
})