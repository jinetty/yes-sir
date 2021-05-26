module.exports = {
    name: "roles",
    description: "list members of specified roles",
    async run(client, message, args, MessageEmbed){
        const specifiedrole = message.guild.roles.cache.find(role => role == message.mentions.roles.first());
        const role = message.guild.members.cache.filter(member => member.roles.cache.find(role => role == specifiedrole)).map(member => member.user);
        if(role.length)
        {
            message.channel.send(new MessageEmbed().setDescription(`List of ${specifiedrole} Members \n → ${role}`));
        }
        else
        {
            message.channel.send(new MessageEmbed().setDescription(`There is no Member that Has ${role} Role`));
        }
    }
}