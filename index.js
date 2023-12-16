const express=require('express')
const app=express();
const cors=require("cors")


const studmodel=require('./db')
const usersRouter=require('./router/userRouter')

app.use(cors());
app.use(express.json())

app.use('/api/users',usersRouter)

app.listen(3005,()=>
{
    console.log("connected")
})