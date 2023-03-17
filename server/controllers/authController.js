import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import JWT from 'jsonwebtoken';

export const registerController = async(req, res) =>{
    try{
        const {name, email, password, phone, address} = req.body
        //validation
        if(!name){
            return res.send({error:'name is requirred'})
        }
        if(!email){
            return res.send({error:'email is requirred'})
        }if(!password){
            return res.send({error:'password is requirred'})
        }if(!phone){
            return res.send({error:'phone is requirred'})
        }if(!address){
            return res.send({error:'address is requirred'})
        }

        //Check user
        const exisitingUser = await userModel.findOne({email})
        //exisiting user
        if(exisitingUser){
            return res.status(200).send({
                success:true,
                message:'already registered. plz login'
            })
        }

        //register user
        const hashedPassword = await hashPassword(password)
        //save
        const user = await new userModel ({
            name, 
            email, 
            phone, 
            address, 
            password:hashedPassword
        }).save()

        res.status(201).send({
            success:true,
            message:'User Reg. success',
            user
        })
    }catch(error){
        console.log(error)
        res.status(500).send({
            sucess:false,
            message:'error in registeration',
            error
        })

    }
};

//post login
export const loginController = async(req, res)=>{
    try{
        const {email,password} = req.body
        //validation
        if(!email || !password){
            return res.status(404).send({
                success:false,
                message:'invalid error or password '
            })
        }
        //check user
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(404).send({
                success:false,
                message:'Email is not registerd'
            })
        }
        const match = await comparePassword(password,user.password)
        if(!match){
            
            return res.status(200).send({
                success:false,
                message:'Invalid Password'
            })
        }
        //token
        
        const token = await JWT.sign({_id:user._id}, process.env.JWT_SECRET,{
            expiresIn:'7d',
        })
        res.status(200).send({
            success:true,
            message:'login successfully',
            user:{
                name:user.name,
                phone:user.phone,
                address:user.address,
            }
        })
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in login",
            error
        })
    }
}