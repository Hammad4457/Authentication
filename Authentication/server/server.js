import mongoose from "mongoose";
import express from 'express'
const app = express();



app.get("/",(req,res)=>{
  res.send("asdsada");
})



const start = async()=>{
  try{
    await mongoose.connect("mongodb+srv://hammadkhalil04:N6w3EPoTi5k0ddHp@cluster0.g08qzv6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    app.listen(3001, () => {
      console.log("Server started on port 3001");
    });

  }
  catch(e){
    console.log(e);
  }
} 

start();
