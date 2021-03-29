module.exports = {
    name: "unban",
    description: "remove user's ban",
    async run(client, message, args, MessageEmbed) {
        const member = args[0];
        console.log(member);
        if (!member) {
            return message.channel.send(`Please enter an id!`)
        }
    
        try {
            message.guild.fetchBans().then(bans => {
                message.guild.members.unban(member)
            })
            await message.channel.send(`<${member}> has been unbanned!`)
        } catch (e) {
            return message.channel.send(`An error occured! \n Reason : ${e}`)
        }
    }
}