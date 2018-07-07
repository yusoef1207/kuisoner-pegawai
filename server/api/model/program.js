var db = require('../../db');
var Program = {
    getAllProgram: function(callback) {  
        return db.query(`Select 
        	tp.*, COUNT(tpq.question_id) as question 
        	from tprogram tp 
        	left join 
        		tprogramquestion tpq on tpq.program_id = tp.program_id
        	group by tp.program_id
        `, callback);  
    },
    getAllQuestion: function(programId, callback) {  
        return db.query(`Select 
        	tq.*
        	from tprogramquestion tpq 
        	left join 
        		tquestion tq on tq.question_id = tpq.question_id
        	where tpq.program_id = ${programId}
        `, callback);  
    },
};  
module.exports = Program; 