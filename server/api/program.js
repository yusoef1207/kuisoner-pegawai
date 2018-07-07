var express = require('express');  
var router = express.Router();  
var Program = require('./model/program');  

router.get('/program', function(req, res, next) {  
    Program.getAllProgram(function(err, results, fields) {
        if (err) {  
            res.json(err);  
        } else {  
            res.json(results);
        }  
    }); 
});

router.get('/question/:id', function(req, res, next) {  
    if(req.params.id) {
    	Program.getAllQuestion(req.params.id, function(err, results, fields) {
	        if (err) {  
	            res.json(err);  
	        } else {  
	            res.json(results);
	        }  
	    }); 
    }else {
    	res.json({})
    }
});

module.exports = router;  