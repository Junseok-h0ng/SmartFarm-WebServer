exports.isLoggedIn = (req,res,next)=>{
    if(req.isAuthenticated()){
	console.log('success') 
       next();
    }else{
	console.log('fail')
        res.status(401).send();
    }
}
