import mongoose, { model } from "mongoose";


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        default:0
    },
    address:{
        type:{},
        default:0
    },
    role:{
        type:Number,
        default:0
    }

},{timestamps:true})

export default mongoose.model('users',userSchema)