const https = require('https');
module.exports = {
    name: "weather",
    description: "Weather info",
    async run(client, message, args, MessageEmbed) {
        if(!args) return message.channel.send('Please specify a city !');
        function weatherinfo(city, weatherresult) {
            let apikey = "api key";
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apikey}`;
            https.get(url, res => {
                var body = '';
                res.on('data', chunk => {
                    body += chunk;
                })
                res.on('end', function(){
                    try{
                        var jsonObj = JSON.parse(body);
                        let weathercondition = `${jsonObj.weather[0].main}`;
                        switch(weathercondition)
                        {
                            case 'Rain':
                                weatherresult(`${args[0]} için hava ${jsonObj.main.temp} derece ! Hava Yağmurlu !`);
                                break;
                            case 'Clouds':
                                weatherresult(`${args[0]} için hava ${jsonObj.main.temp} derece ! Hava Bulutlu !`);
                                break;
                            case 'Snow':
                                weatherresult(`${args[0]} için hava ${jsonObj.main.temp} derece ! Hava karlı !`);
                                break;
                            case 'Clear':
                                weatherresult(`${args[0]} için hava ${jsonObj.main.temp} derece ! Hava Açık !`);
                                break;
                        }
                    }
                    catch(e){
                        console.log("Parse Error : ", e);
                    }
                })
            })
        }
        weatherinfo(args[0], function(result){
            message.channel.send(new MessageEmbed().setTitle('Weather Result').setDescription(result))
        });
    }
}