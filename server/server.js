import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js'



dotenv.config();

connectDB();
const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.get('/',(req,res)=>{
    res.send({
        message:'server running home page'
    })
})

const PORT = process.env.PORT || 8000

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`)
})