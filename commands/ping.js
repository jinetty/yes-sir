module.exports = { 
    name: "ping",
    description: "Ping command",
    async run(client, message, args, MessageEmbed) {
        if(message.author.id === client.user.id)
        {
            message.channel.send(`API Latency is ${Math.round(client.ws.ping)}ms`);
        }
        else
        {
            return;
        }
    }
};