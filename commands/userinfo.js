module.exports = {
    name: "userinfo",
    description: "gives info about user",
    async run(client, message, args, MessageEmbed) {
        const user = message.mentions.users.first() || message.member.user;
        const member = message.guild.members.cache.get(user.id);
        message.channel.send(new MessageEmbed()
        .setColor('BLUE')
        .setAuthor(`User info for  ${user.tag}`, user.displayAvatarURL())
        .addFields(
            {
                name: 'User Tag',
                value: user.tag,
                inline: true
            },
            {
                name: 'Is bot',
                value: user.bot,
                inline: true
            },
            {
                name: 'Nickname',
                value: member.nickname || 'None',
                inline: true
            },
            {
                name: 'Joined server',
                value: new Date(member.joinedTimestamp).toLocaleDateString(),
                inline: true
            },
            {
                name: 'Joined Discord',
                value: new Date(user.createdTimestamp).toLocaleDateString(),
                inline: true
            },
            {
                name: 'Roles',
                value: member.roles.cache.size -1
            }
        ));
    }
}