import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import JWT from 'jsonwebtoken';

export const registerController = async(req, res) =>{
    try{
        const {name, email, password, phone, address} = req.body
        //validation
        if(!name){
            return res.send({message:'name is requirred'})
        }
        if(!email){
            return res.send({message:'email is requirred'})
        }if(!password){
            return res.send({message:'password is requirred'})
        }    
        // }if(!phone){
        //     return res.send({message:'phone is requirred'})
        // }if(!address){
        //     return res.send({message:'address is requirred'})
        // }

        //Check user
        const exisitingUser = await userModel.findOne({email})
        //exisiting user
        if(exisitingUser){
            return res.status(200).send({
                success: false,
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
                _id:user._id,
                name:user.name,
                role:user.role,
                phone:user.phone,
                email:user.email,
                // address:user.address,
            }, token,
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

//test controller
export const testController = (req, res)=>{
   try {
    res.send('protected router')
   } catch (error) {
    console.log(error);
    res.send({error})
   } 
}

//update prfole
export const updateProfileController = async (req, res) => {
    try {
      const { name, email, password, address, phone } = req.body;
      const user = await userModel.findById(req.user._id);
      //password
      if (password && password.length < 6) {
        return res.json({ error: "Passsword is required and 6 character long" });
      }
      const hashedPassword = password ? await hashPassword(password) : undefined;
      const updatedUser = await userModel.findByIdAndUpdate(
        req.user._id,
        {
          name: name || user.name,
          password: hashedPassword || user.password,
          phone: phone || user.phone,
          address: address || user.address,
        },
        { new: true }
      );
      res.status(200).send({
        success: true,
        message: "Profile Updated SUccessfully",
        updatedUser,
      });
    } catch (error) {
      console.log(error);
      res.status(400).send({
        success: false,
        message: "Error WHile Update profile",
        error,
      });
    }
  };