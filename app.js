var express= require('express');


const app=express();

app.get('/',(req,res)=>{
    res.send('Hello!...welcome to scholar onboarding training');
});

app.listen(5000,()=>{
    console.log('application listening to http://localhost:5000');
});