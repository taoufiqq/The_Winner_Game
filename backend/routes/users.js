const express = require('express')
let User = require('../models/users.model');
const router = express.Router();

const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');

// --------------------show all Users -----------------

router.get('/', (req, res) => {
    User.find()
      .then((user) => res.json(user))
      .catch((err) => res.status(400).json("Error :" + err));
  });
  
  
  //------------------------User authentication---------------------
  
  router.route("/authentication").post((req, res) => {


    bcrypt.hash(req.body.password, 10, function(err, hashPassword) {

        if (err) {
          res.json({error : err})
          
        }

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const userName = req.body.userName;
    const email = req.body.email;
    const password = hashPassword;

    const userPush = new User({
        firstName,
        lastName,
        userName,
        email,
        password
    });
    userPush
      .save()
      .then(() => res.json("User successfully added"))
      .catch((err) => res.status(400).json("Error :" + err));
  });
});
  

//-------------------------login User----------------------

router.route('/login').post((req,res)=>{

    let userName=req.body.userName;
    let password=req.body.password;

User.findOne({userName : userName})
.then(user => {

if(user){
    bcrypt.compare(password, user.password, function(err, result){

        if (err) {
            res.json({
              error : err
            })
    
          }
       if(result){
          let token=jwt.sign({userName :userName},'tokenkey',(err,token) => {
            res.json({
                token : token
            })


          })
       }else{
           res.json({
               message : 'password incorrect try again !!'
           })
       }

    })
}else{
    res.json({
        message : 'User not found'
    })
}


}).catch((err) => res.status(400).json("Error :" + err));

})


//------------------update User----------------------
  router.route("/update/:id").put((req, res) => {

    bcrypt.hash(req.body.password, 10, function(err, hashPassword) {

        if (err) {
          res.json({error : err})
          
        }
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const userName = req.body.userName;
    const email = req.body.email;
    const password = req.body.password;
  
  
    // Validate Request
    if(!firstName || !lastName || !userName || !email || !password) {
      return res.status(400).send({
          message: "filde content can not be empty"
      });
  }
  
      // Find  and update it with the request body
  
      User.findByIdAndUpdate(req.params.id,{
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        email: req.body.email,
        password: hashPassword,
  
      },{new: true})
  
      .then(User => {
        if(!User) {
  
          return res.status(404).send({
            message: "User not found with id " + req.params._id
        });
  
        }
        res.send(User);
      }).catch(err => {
  
        if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "User not found with id " + req.params.id
          });                
      }
      return res.status(500).send({
          message: "Error updating User with id " + req.params.id
      });
  
      })
  
  
  })
})
  
  
  
//------------------delete User----------------------
  router.route("/delete/:id").delete((req, res) => {

    User.findByIdAndRemove(req.params.id)
    .then(User=> {
      if (!User) {
    
        return res.status(404).send({
          message : "User not found with id " + req.params.id
        });
        
      }
      res.send({
        message : "User deleted successfully !" });
    }).catch(err =>{
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
    
        return res.status(404).send({
          message : 'User not found with id ' + req.params.id
        });
        
      }
      return res.status(404).send({
        message : 'Could not delete note with id ' + req.params.id
      });
    })
        
    
    
    
      
     
    })
    





  module.exports = router;