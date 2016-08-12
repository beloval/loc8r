/* GET HOME PAGE */
module.exports.homelist = function (req, res){
	res.render('locations-list',{title :'Home list'});
};
module.exports.locationInfo = function (req, res){
	res.render('locations-info',{title :'location info'});
};
module.exports.addReview = function (req, res){
	res.render('locations-review-form',{title :'Add review'});
};