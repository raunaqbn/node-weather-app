var weather = require('./weather.js');
var location = require('./location.js');

var argv = require('yargs')
			.options({
				location: {
					alias: 'l',
					demand: false,
					describe: 'enter the coordinates of the place',
					type: 'string'
				}
			})
			.help('help')	
		    .argv;


if (typeof(argv.l) === 'string' && argv.l.length > 0 ){
	weather(argv.l, function (message){
		console.log(message);
	});	
}else{
	location(function (message){
		if (!message){
			console.log('unable to find location');
		}else{
		 	weather(message.city,function (message){
					console.log(message)
					});
		}
		
	});
}




// location(function (message){
// 	if (!message){
// 		console.log('unable to find location');
// 	}else{
// 	console.log('city: ' + message.city);
// 	console.log('lat/lon: ' + message.loc);
// 	}
// });