module.exports = {
    name: "owner",
    description: "shows owner of this server",
    async run(client, message, args, MessageEmbed) {
        message.channel.send(new MessageEmbed().setDescription(`Owner: ${message.guild.owner}`))
    }
}