module.exports = {
    name: "move",
    description: "move messages to specified channel",
    async run(client, message, args, MessageEmbed) {
        if(!message.member.hasPermission('MANAGE_MESSAGES', 'MANAGE_WEBHOOKS')) return message.channel.send(new MessageEmbed().setDescription(`${message.author}, bunun için yetkiniz yok !`));
        if(!args) return message.channel.send(new MessageEmbed().setDescription(`${message.author}, lütfen kanal ve mesaj id si belirtin`));
        const channel = message.guild.channels.cache.get(args[0].replace('<#','').replace('>',''));
        message.channel.messages.fetch(`${args[1]}`).then(msg => {
            channel.createWebhook('Message moving').then(wh => {
                wh.send(msg.content, {
                    disableEveryone: true, 
                    username: msg.author.username, 
                    avatarURL: msg.author.displayAvatarURL()
                });
            channel.fetchWebhooks().then(w => {
                w.map(webhook => {
                    if(webhook.name === 'Message moving') webhook.delete();
                })
            })
            });
            msg.delete();
            message.channel.send(':white_check_mark: The message has been successfully moved, and the original has been deleted')
        })
        const updatedWebhooks = await channel.fetchWebhooks();
        console.log(updatedWebhooks);
    }
}