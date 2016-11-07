var logger = require('./logger');
exports.write = function(req,res){
	// var msg = req.ebayjCookie.email +' '+ req.param('text');
	var msg = 'some cookkie'+' '+ req.param('text');
	logger.info(msg);
	res.send(200);
};