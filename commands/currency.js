const https = require('https');
module.exports = {
    name: "currency",
    description: "calculates money's value",
    async run(client, message, args, MessageEmbed) {
        if(message.author.id === 'USER_ID')
        {
            function convertCurrency(amount, fromCurrency, toCurrency, cb)
            {
                var apiKey = 'api key';
    
                fromCurrency = encodeURIComponent(fromCurrency);
                toCurrency = encodeURIComponent(toCurrency);
                var query = fromCurrency + '_' + toCurrency;
    
                var url = 'https://free.currconv.com/api/v7/convert?q='+ query + '&compact=ultra&apiKey=' + apiKey;
    
                https.get(url, function(res){
                    var body = '';
    
                    res.on('data', function(chunk){
                        body += chunk;
                    });
    
                    res.on('end', function(){
                        try {
                            var jsonObj = JSON.parse(body);
    
                            var val = jsonObj[query];
                            if (val) {
                                var total = val * amount;
                                cb(null, Math.round(total * 100) / 100);
                            }
                            else 
                            {
                                var err = new Error("Value not found for " + query);
                                console.log(err);
                                cb(err);
                            }
                        } catch(e) {
                            console.log("Parse error: ", e);
                            cb(e);
                        }
                    });
                }).on('error', function(e){
                    console.log("Got an error: ", e);
                    cb(e);
                });
            }
            let amount = args[0]
            let Money_From = args[1];
            let Money_To = args[2];
            convertCurrency(amount, Money_From, Money_To, function(err, amount){
                message.channel.send(new MessageEmbed().setColor('#FFFF00').setAuthor(message.author.tag, message.member.user.displayAvatarURL()).setDescription(`${Money_From}, ${amount} ${Money_To} ile eşdeğerdir !`));
            })
        }
        else
        {
            message.channel.send(new MessageEmbed()
            .setAuthor(message.author.tag, message.member.user.displayAvatarURL())
            .setColor('#FFFF00')
            .setDescription(`Bunu sadece bot yapımcısı kullanabilir. \n Bot yapımcısı : <@384791075895902228>`));
        }
    }
    
}