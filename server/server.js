import express from 'express'

const app = express()

app.get('/',(req,res)=>{
    res.send({
        message:'server running home page'
    })
})

const PORT = 8000

app.listen(PORT,()=>{
    console.log('Server running')
})