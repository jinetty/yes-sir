module.exports = {
    name: "setupserver",
    description: "prepare server for first use",
    async run(client, message, args, MessageEmbed) {
        if(message.author.id === message.guild.owner.id)
        {
            message.guild.roles.create({
                data: {
                    name: 'Admin',
                    color: 'BLUE',
                    permissions: 'ADMINISTRATOR'
                }
            });
            message.guild.channels.create('verification', {
                type: 'text'
            });
            message.guild.roles.create({
                data: {
                    name: 'Verified',
                    color: 'GREEN',
                }
            });
            message.guild.roles.create({
                data: {
                    name: 'Non-Verified',
                    color: 'WHITE'
                }
            });
        }
        else
        {
            message.channel.send(new MessageEmbed().setAuthor(message.author.tag, message.member.user.displayAvatarURL()).setDescription('Bunu yapmak için yetkiniz yok ! Bunu sadece owner ayarlayabilir !'));
        }    
    }
}