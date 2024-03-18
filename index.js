require('dotenv').config()
const express=require("express");
const app=express();

const port=3000;



app.get("/",(req,res)=>{
    res.send(`home route is working`);
});

app.get("/login",(req,res)=>{
    res.send(`i am login route`);
});

app.get("/tweet",(req,res)=>{
    res.send(`i am tweet route`);
});

app.get("/logout",(req,res)=>{
    res.send(`<h1>i am logout route</h1>`);
})

app.get("*",(req,res)=>{
    res.send(`route doen't exit`);
});

app.listen(process.env.PORT,()=>{
    console.log(`listening to the port ${port}`);
});