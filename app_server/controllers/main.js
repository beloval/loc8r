/* GET HOME PAGE */
module.exports.index = function (req, res){
	res.render('index',{title :'External Express'});
};