const { ReactionUserManager } = require("discord.js");

module.exports = {
    name: 'membercounter',
    description: 'counts member\'s number',
    async run(client, message, args, MessageEmbed) {
        message.channel.send(new MessageEmbed().setColor('#FF0000').setAuthor(message.author.tag, message.member.user.displayAvatarURL()).setDescription(`Member Count: **\`${message.guild.memberCount.toLocaleString()}\`**`));
    }
}