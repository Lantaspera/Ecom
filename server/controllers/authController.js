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
        const user = await userModel.findOne({email})
        //exisiting user
        if(exisitingUser){
            return res.status(200).send({})
        }
    }catch(error){
        console.lof(error)
        res.status(500).send({
            sucess:false,
            message:'error in registeration',
            error
        })

    }
};
