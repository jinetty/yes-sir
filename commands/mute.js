module.exports = {
    name: "mute",
    description: "mutes users",
    async run(client, message, args, MessageEmbed) {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(new MessageEmbed().setAuthor(message.author.tag, message.member.user.displayAvatarURL()).setDescription('Bu kullanıcıyı Susturmak için yetkiniz yok !'));
        if (args.length === 0) return message.channel.send(new MessageEmbed().setAuthor(message.author.tag, message.member.user.displayAvatarURL()).setDescription('Lütfen bir kullanıcı belirtin !'));
        const member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let muterole = message.guild.roles.cache.find(role => role.name === 'Gulag');
        member.roles.add(muterole);
        message.channel.send(new MessageEmbed().setAuthor(message.author.tag, message.member.user.displayAvatarURL()).setDescription(`${member} kullanıcısı susturuldu efendim !`));
    }
}