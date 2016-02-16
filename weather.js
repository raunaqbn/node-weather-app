var request = require('request');
	
module.exports = function (location, callback){
	request({
		url: 'http://api.openweathermap.org/data/2.5/weather?q='+location+'&appid=44db6a862fba0b067b1930da0d769e98',
		json: true
	}, function (error,response,body){
		if (error){
			callback('unable to fetch the weather');
		}
		else{
			callback('It\'s '+ body.main.temp + ' in the city of ' + body.name);
		}
	});
}