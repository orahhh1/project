const express=require('express');
const cors=require('cors');
const expressSession=require('express-session')
const route =require("./auth")
const routes=require("./crud")


const app=express();
app.use(cors());
app.use(express.json());

app.use(expressSession({
    secret:'ntuza araje',
    
}))
app.use(route);
app.use(routes);
app.listen(3000,function(){
    console.log('Server is running')
})