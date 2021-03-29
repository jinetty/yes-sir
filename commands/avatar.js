module.exports = {
    name: "avatar",
    description: "takes profile photo of specified user",
    async run(client, message, args, MessageEmbed) {
        const user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        message.channel.send(user.user.displayAvatarURL({
            size: 2048,
            dynamic:true,
            format: 'png'
        }));
    }
}