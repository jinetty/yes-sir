module.exports = {
    name: "reverse",
    description: "Reverse command",
    async run(client, message, args, MessageEmbed) {
        if(message.author.id === client.user.id)
        {
            const msg = args.join(" ");
            if (!msg) return message.channel.send("Please specify a message to reverse!");
        
            return message.channel.send(new MessageEmbed().setColor('#FFFF00').setAuthor(message.author.tag, message.member.user.displayAvatarURL()).setDescription(msg.split("").reverse().join("")));
        }
        else
        {
            return;
        }
    }
}