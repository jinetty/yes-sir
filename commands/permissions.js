module.exports = {
    name: "permissions",
    description: "give permission list",
    async run(client, message, args, MessageEmbed) {
        const user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(user.hasPermission('ADMINISTRATOR'))
        {
            message.channel.send("he's an admin !")
        }
        else
        {
            message.channel.send("he's not an admin");
        }
    }
}