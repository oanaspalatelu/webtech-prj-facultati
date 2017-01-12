var models  = require('../models');
var express = require('express');
var router  = express.Router();

var Mail = models.Mail;

// create an article
router.post('/mails', function(request,response) {
  Mail.create(request.body).then(function(mail) {
      Mail.findById(mail.id).then(function(mail) {
          response.status(201).send(mail);
      });
  });
});

// returns all articles
router.get('/mails', function(request,response){
   
  
    Mail.findAll().then(function(mails){
        response.status(200).send(mails);
    });
});

// returns one article by id
router.get('/mails/:id', function(request,response){
    Mail.findById(request.params.id).then(function(article){
        if(article) {
            response.status(200).send(article);
        } else {
            response.status(404).send();
        }
    });
});

// update a specific article by id
router.put('/mails/:id', function(request,response){
    Mail
        .findById(request.params.id)
        .then(function(article){
            if(article) {
                article
                    .updateAttributes(request.body)
                    .then(function(){
                        response.status(202).send('updated');
                    })
                    .catch(function(error){
                        console.warn(error);
                        response.status(400).send('server error');
                    });
            } else {
                response.status(404).send();
            }
        });
});

// delete an article by id
router.delete('/mails/:id', function(req,res){
    Mail
        .findById(req.params.id)
        .then(function(article){
            if(article) {
                article
                    .destroy()
                    .then(function(){
                        res.status(204).send();
                    })
                    .catch(function(error){
                        console.warn(error);
                        res.status(400).send('server error');
                    });
            } else {
                res.status(404).send();
            }
        });
});


module.exports = router;