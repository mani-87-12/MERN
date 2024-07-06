const User=require('./model/userSchema')

const resolvers={
    Query:{
        getUsers: async ()=>{
            return await User.find()
        },
        getUser: async (_,{email,password})=>{
            try{
                if(!email || !password){
                    throw new Error("Enter all feilds")
                }
                const user=await User.find(
                    {email:new RegExp(`^${email}$`,'i'),
                    password:new RegExp(`^${password}$`,'i')}) // `^${}$ this is used for exact match
                if(user.length === 0){
                    throw new Error("Email or Password is Invalid!")
                }else{
                return user;}
            }catch(err){
                throw Error(err.message)
            }
        }
    },
    Mutation:{
        createUser: async(_,{input})=>{
            try{
            const {name,email,password}=input
            if(!name || !email || !password){
                throw new Error("Enter all fields")
            }
            const newUser=new User({name,email,password})
            return await newUser.save()
            }catch(err){
                throw Error(err.message)
            }
        },
        changePass: async (_,{id,password})=>{
            try{
            const user= await User.findByIdAndUpdate(id,{password:password},{new:true})
            if(!user){
                throw new Error("User not found")
            }
            return user;
        }catch(err){
            throw Error(err.message)
        }
    }
    },
   /*  User:{// to return something rather than null
        email:(parent)=>parent.email || "",
        password:(parent)=>parent.password || "",
        id:(parent)=>parent.id || "",
    } */
}
module.exports=resolvers;