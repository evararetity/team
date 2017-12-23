const   Schema = require("../model/schema.js"),
        User = Schema.User;

module.exports = (express, app)=>{
    const   router = express.Router();

// The Landing Page
    router.route("/")
        .get((req, res)=>{
            res.sendFile('./public/index.html');
        })
        .post((req, res)=>{
            User.findOne({docID: 1234}, (err, user)=>{
                if(err)console.log(err);
                if(!user){
                    let newUser = new User();

                    newUser.docID = 1234;
                    newUser.emails.push(req.body.email);
                    
                    newUser.save((err)=>{
                        if(err)console.log(err);
                        else{
                            res.redirect('/');
                        }
                    })
                }else{
                    user.emails.push(req.body.email);

                    user.save((err)=>{
                        if(err)console.log(err);
                        else{
                            res.redirect('/');
                        }
                    })
                }
            })
        })

    app.use("/", router);
}