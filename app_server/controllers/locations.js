/* GET HOME PAGE */
module.exports.homelist = function (req, res){
	res.render('index',{title :'Home list'});
};
module.exports.locationInfo = function (req, res){
	res.render('index',{title :'location info'});
};
module.exports.addReview = function (req, res){
	res.render('index',{title :'add review'});
};