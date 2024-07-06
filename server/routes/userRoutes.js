const express=require('express')
const router=express.Router()
const {ApolloServer,gql}=require('apollo-server-express')
const typeDefs=require('../schema')
const resolvers=require('../resolvers')

const server=new ApolloServer({typeDefs,resolvers})

//:3001/users/register
router.post("/register",async (req,res)=>{
    const {name,email,password}=req.body
    try{
        const {data,errors}=await server.executeOperation({
            query:gql`mutation{
            createUser(input:{name:"${name}",email:"${email}",password:"${password}"}){
            id name email password}
            }`
        })
        if(errors){
          return   res.status(404).send(errors)
        }
        res.status(201).send(data)
    }catch(err){
        res.status(500).send({message:err.message})
    }

})
router.post("/login",async (req,res)=>{
    const {email,password}=req.body
    try{
    const {data,errors}=await server.executeOperation({
        query:gql`query{
        getUser(email:"${email}",password:"${password}"){
            id }
        }`
    })
    if(errors){
       return res.status(404).send(errors)
    }
    res.status(201).send(data)
    }
    catch(err){
        res.status(500).send(err.message)
    }
})
module.exports=router