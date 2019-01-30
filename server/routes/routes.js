//server/routes/routes.js
var express = require('express');
var bodyParser = require('body-parser');
var MedicalSocialNetwork = require('../../models/MedicalSocialNetwork');
var router = express.Router();

router.get('/', function(req, res){
  res.render('index')
});

router.route('/insert')
.post(function(req,res) {
 var doc = new MedicalSocialNetwork();
  doc.title = req.body.title;
  doc.description = req.body.description;

doc.save(function(err) {
      if (err)
        res.send(err);
      res.send('Doc successfully added!');
  });
});

router.route('/update')
.post(function(req, res) {
 const docPost = {
     title: req.body.title,
     description: req.body.description
 };
 console.log(docPost);
  MedicalSocialNetwork.update({_id: req.body._id}, docPost, function(err, result) {
      if (err)
        res.send(err);
      res.send('Doc successfully updated!');
  });
});

router.get('/delete', function(req, res){
 var id = req.query.id;
 MedicalSocialNetwork.find({_id: id}).remove().exec(function(err, expense) {
  if(err)
   res.send(err)
  res.send('Doc successfully deleted!');
 })
});

router.get('/getAll',function(req, res) {
 var titleRec = req.query.title;
 var descRec = req.query.description;

 if(titleRec && titleRec != 'All'){
  MedicalSocialNetwork.find({$and: [ {title: titleRec}, {description: descRec}]}, function(err, documents) {
   if (err)
    res.send(err);
   res.json(documents);
  });
 } else {
  MedicalSocialNetwork.find({title: titleRec}, function(err, documents) {
   if (err)
    res.send(err);
   res.json(documents);
  });
 }
});
module.exports = router;
