const db = require('./db');
const verifyUser= require('./middleware')
const route=require('express').Router()

//signup
route.post('/register', async function(req,res){
const {fullnames,email,password}=req.body;
await db.query('INSERT INTO `user`( `fullnames`, `email`, `password`) VALUES (?,?,?)',[fullnames,email,password])

res.send('new user was created successfully');
});


//login

route.post('/login',async function(req,res){
    const{email,password}=req.body
    const user = await db.query('SELECT * FROM user WHERE email=? AND password=?',[email,password])
if (user[0][0]){
    req.session.user = user[0][0];
return res.send(user[0][0])
}
 else {
    return res.send('user credentials not found ')
}
});
//logout

route.post('/logout',verifyUser,async function(req,res){
    req.session.destroy()
    return res.send('logged out')
});

//get logged in user data 
route.get('/user',verifyUser,function(req,res){
    return res.send({
        user:req.session.user,
    })


    
});
route.post('/insert',async function(req,res){
    const {name,age,classe}=req.body;
    await db.query('INSERT INTO `students`( `name`, `age`, `classe`) VALUES (?,?,?)',[name,age,classe])
    res.send('new user was created successfully');
});

module.exports=route;