const User=require('../models/user.model')




exports.fetchloginform=( req,res,next)=>{
    res.render('login',{page:'Login',menuId:'login'})
}



exports.loginchk=(req,res)=>{
    const  {username,password}=req.body;
// console.log(username, password);
//     try{
//         User.findOne({username:username, password:password},(err, user)=>{
//             console.log('user.username >> ', user.username);
//             if(user===null){
//                 res.end('User does not exist')
//             }else if(user.username===username && user.password===password){
//                 req.session.username=username;
//                 res.render('dashboard',{page:'Dashboard',menuId:'dashboard', session:req.session})                
//             }else{
//                 res.end('Wrong credentials provided.', err);
//             }
//         })

//     }catch(err){
//         res.send(err)
//     }


User.findOne({username:username, password:password}).then(result => {
    console.log(result);
       
                if(result===null){
                res.end('User does not exist')
            }else if(result.username==username && result.password==password){
                console.log('Credienta matched ==> result.username >>', result.username);
                req.session.username=result.username;
                res.redirect(`${req.session.username}/dashboard`)
            }else{
                res.end('Wrong credentials provided.');
            }

    }).catch(err => {
    console.log("You got an error Mustafa Bacha ==> ",err)
res.end("User not found")
});


}

exports.logout=(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            return console.log(err)
        }else{
            console.log('Destroying session');
        }
        res.redirect('/users/login')
    });
}

exports.redirectLogin=(req,res,next)=>{
    if(!req.session.username){
        res.redirect(`/users/login`)
    }else{
res.redirect(`/users/${req.session.username}/dashboard`)
    }
}

exports.dashboard=(req,res)=>{
    res.render('dashboard',{page:'Dashboard', menuId:'dashboard', session:req.session})
}