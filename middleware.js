function verifyUser(req,res,next){
    if(req.session.user){
        next();
    } else{
        return res.send('PLEASE LOGIN TO CONTINUE');
    }

}
module.exports= verifyUser;