module.exports = {
    name: "unmute",
    description: "remove user's mute",
    async run(client, message, args, MessageEmbed) {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(new MessageEmbed().setAuthor(message.author.tag, message.member.user.displayAvatarURL()).setDescription('Bu kullanıcının Susturmasını kaldırmak için yetkiniz yok !'));
        if (args.length === 0) return message.channel.send(new MessageEmbed().setAuthor(message.author.tag, message.member.user.displayAvatarURL()).setDescription('Lütfen bir kullanıcı belirtin !'));
        const member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let muterole = message.guild.roles.cache.find(role => role.name === 'Gulag');
        member.roles.remove(muterole);
        message.channel.send(new MessageEmbed().setAuthor(message.author.tag, message.member.user.displayAvatarURL()).setDescription(`${member} kullanıcısının susturulması kaldırıldı efendim !`));
    }   
}