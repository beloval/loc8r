
module.exports.about = function (req, res){
	res.render('generic-text',{title :'About page',
		abouttext : "Loc8r was created to help people find places to sit down and get a bit of work done."+
		"|<br /><br />"+
		"|So Alors write here something more!!!!'"
	});
};