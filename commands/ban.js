module.exports = {
    name: "ban",
    description: "ban users",
    async run(client, message, args, MessageEmbed) {
        if (!message.member.hasPermission('BAN_MEMBERS'))
        {
            return message.channel.send(new MessageEmbed().setAuthor(message.author.tag, message.member.user.displayAvatarURL()).setDescription('Bu kullanıcıyı banlamak için yetkiniz yok !'));
        }
        if (args.length === 0) return message.channel.send(new MessageEmbed().setAuthor(message.author.tag, message.member.user.displayAvatarURL()).setDescription('Lütfen bir kullanıcı belirtin !'));
        let reason = args[1];
        const member = message.guild.member(message.mentions.users.first());
        if (member)
        {
            message.channel.send(member.id)
            member.ban({
                reason: reason
            })
            .then((member) => message.channel.send(new MessageEmbed().setAuthor(message.author.tag, message.member.user.displayAvatarURL()).setDescription(`${member} sunucudan kalıcı olarak atılmıştır efendim ! \n Sebep: ${reason}`)))
            .catch((err) => console.log(err));
        }
    }
}