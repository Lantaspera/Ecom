import express from 'express'
import dotenv from 'dotenv'

dotenv.config

const app = express()

app.get('/',(req,res)=>{
    res.send({
        message:'server running home page'
    })
})

const PORT = process.env.PORT || 8000

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`)
})