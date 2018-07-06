var express = require('express');  
var router = express.Router();  
var User = require('./model/user');  

router.get('/login', function(req, res, next) {  
    User.getAllUser(function(err, results, fields) {  
        if (err) {  
            res.json(err);  
        } else {  
            res.json(results);
        }  
    });  
});

module.exports = router;  