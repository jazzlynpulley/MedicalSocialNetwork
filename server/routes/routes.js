//server/routes/routes.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var User = require('../../models/User');

router.get('/', function(req, res){
  res.render('index')
});

router.route('/insert')
.post(function(req,res) {
 var user = new User();
  user.email = req.body.email;
  user.firstName = req.body.firstName;
  user.lastName = req.body.lastName;
  user.password = req.body.password;
  user.monthDOB = req.body.monthDOB;
  user.dayDOB = req.body.dayDOB;
  user.yearDOB= req.body.yearDOB;

user.save(function(err) {
      if (err)
        res.send(err);
      res.send('User successfully added!');
  });
})

router.route('/update')
.post(function(req, res) {
 const doc = {
   firstName: req.body.firstName,
   lastName: req.body.lastName,
   email: req.body.email,
   password: req.body.password,
   monthDOB: req.body.monthDOB,
   dayDOB: req.body.dayDOB,
   yearDOB: req.body.yearDOB
 };

 console.log(doc);
  User.update({_id: req.body._id}, doc, function(err, result) {
      if (err)
        res.send(err);
      res.send('User successfully updated!');
  });
});

router.get('/delete', function(req, res){
 var id = req.query.id;
 User.find({_id: id}).remove().exec(function(err, user) {
  if(err)
   res.send(err)
  res.send('User successfully deleted!');
 })
});

router.get('/getAll',function(req, res) {
 var monthRec = req.query.monthDOB;
 var yearRec = req.query.yearDOB;
 if(monthRec && monthRec != 'All'){
  User.find({$and: [ {monthDOB: monthRec}, {yearDOB: yearRec}]}, function(err, users) {
   if (err)
    res.send(err);
   res.json(users);
  });
 } else {
  User.find({yearDOB: yearRec}, function(err, users) {
   if (err)
    res.send(err);
   res.json(users);
  });
 }
});

module.exports = router;
