const os = require('os');
module.exports = {
    name: "stats",
    description: "gives info about machine that bot's running",
    async run(client, message, args, MessageEmbed) {
        if(message.author.id === '384791075895902228')
        {
            message.channel.send(new MessageEmbed().setAuthor(message.author.tag, message.member.user.displayAvatarURL()).setDescription(
                `CPU : \`${os.cpus()[0].model}\` \n
                Platform : \`${os.platform}\` \n
                Architecture : \`${os.arch}\` \n
                User : \`${os.userInfo().username}\` \n
                RAM : \`${Math.floor(os.freemem/1024/1024/1024)}\` \n`
            ))
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