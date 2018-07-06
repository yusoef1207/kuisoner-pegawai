var db = require('../../db');
var User = {  
    getAllUser: function(callback) {  
        return db.query("Select * from tcity", callback);  
    }
};  
module.exports = User; 