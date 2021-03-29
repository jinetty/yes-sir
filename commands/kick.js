module.exports = {
    name: "kick",
    description: "kick users",
    async run(client, message, args, MessageEmbed) {
        if (!message.member.hasPermission('KICK_MEMBERS'))
        return message.reply(new MessageEmbed().setAuthor(message.author.tag, message.member.user.displayAvatarURL()).setDescription('Bu kullanıcıyı geçici olarak atmak için yetkiniz yok !'));
        if (args.length === 0) return message.channel.send(new MessageEmbed().setAuthor(message.author.tag, message.member.user.displayAvatarURL()).setDescription('Lütfen bir kullanıcı belirtin !'));
        const member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (member)
        {
            member.kick()
            .then((member) => message.channel.send(new MessageEmbed().setAuthor(message.author.tag, message.member.user.displayAvatarURL).setDescription(`${member} sunucduan geçici olarak atılmıştır !`)))
            .catch((err) => message.channel.send(new MessageEmbed().setAuthor(message.author.tag, message.member.user.displayAvatarURL()).setDescription('Bunu yapmak için yetkim yok efendim !')));
        }
        else
        {
            message.channel.send('Bu kullanıcı serverda bulunmuyor !');
        }
    }
}