import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js'
import authRoutes from './routes/authRoute.js'
import cors from 'cors'

dotenv.config();

//database config
connectDB();

//rest object
const app = express()

//middleware
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/auth', authRoutes);


//rest api
app.get('/',(req,res)=>{
    res.send({
        message:'server running home page'
    })
})

const PORT = process.env.PORT || 8000

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`)
})