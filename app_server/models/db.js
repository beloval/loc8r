var mongoose= require('mongoose');

var dbURI = 'mongodb://xu/loc8r';
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
//dbURI ='mongodb://belov:b41967200@ds019936.mlab.com:19936/loc8r_of_belov';
dbURI = process.env.MONGOLAB_URI;
};
console.log(dbURI);
mongoose.connect(dbURI);

var readLine = require ("readline");


if (process.platform === "win32"){
	const rl = readLine.createInterface ({
		input: process.stdin,
		output: process.stdout
	});
	rl.on ("SIGINT", function (){
		process.emit ("SIGINT");
	});
}


mongoose.connection.on('connected', function() {
	console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error', function(err) {
	console.log('Mongoose connection error ' + err);
});
mongoose.connection.on('disconnected', function() {
	console.log('Mongoose disconnected with ' + dbURI);
});


var gracefulShutdown = function (msg, callback) {
	mongoose.connection.close(function () {
		console.log('Mongoose disconnected through ' + msg);
		callback();
	});
};

process.once('SIGUSR2', function () {
	gracefulShutdown('nodemon restart', function () {
		process.kill(process.pid, 'SIGUSR2');
	});
});
process.on('SIGINT', function () {
	gracefulShutdown('app termination', function () {
		process.exit(0);
	});
});

process.on('SIGTERM', function() {
	gracefulShutdown('Heroku app shutdown', function () {
		process.exit(0);
	});
});
require('./locations');
require('./users');




