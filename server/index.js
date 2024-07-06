const express=require('express')
const mongoose=require('mongoose')
const {ApolloServer,gql}=require('apollo-server-express')
const typeDefs=require('./schema')
const resolvers=require('./resolvers')
const cors=require('cors')
const app=express()
const port=3001
const url='mongodb+srv://gopalreddytheluckier:zS0pf0c0UJGVF77W@cluster0.mazavb5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const userApiFromRouter=require('./routes/userRoutes')
app.use(express.json())
app.use(cors())
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{console.log('DB connected')})
.catch((err)=>{console.log(err.message)})

const server=new ApolloServer({typeDefs,resolvers})

app.use("/user",userApiFromRouter)
async function StartServer(){
    await server.start();
    server.applyMiddleware({app})
    app.listen(port,()=>{console.log(`Server is live on ${port}`)})
}
StartServer()