module.exports = {
    name: "whois",
    description: "gives a list of which user has role",
    async run(client, message, args, MessageEmbed) {
        if(args.length === 0) message.channel.send(new MessageEmbed()
        .setColor('BLUE')
        .setAuthor(message.author.tag, message.member.user.displayAvatarURL())
        .setTitle('please specify an argument')
        .setDescription('`owner` : shows owner of this server ! \n `admin`: shows admins of this server ! \n `verified`: shows verified members of this server'));
        if(args[0] === 'owner')
        {
            message.channel.send(new MessageEmbed().setColor('#ffa500').setAuthor(message.author.tag, message.member.user.displayAvatarURL()).setDescription(`Owner : ${message.guild.owner}`));
        }
        if(args[0] === 'verified')
        {
            const VerifiedRole = message.guild.roles.cache.find(role => role.name == "Verified");
            const VerifiedMembers = message.guild.members.cache.filter(member => member.roles.cache.find(role => role == VerifiedRole)).map(member => member.user.tag);
            if(VerifiedMembers.length)
            {
                message.channel.send(new MessageEmbed().setColor('GREEN').setAuthor(message.author.tag, message.member.user.displayAvatarURL()).setTitle('List of **Verified** Members').setDescription(VerifiedMembers));
            }
            else
            {
                return message.channel.send(new MessageEmbed().setAuthor(message.author.tag, message.member.user.displayAvatarURL()).setDescription(`There is no Member that Has ${VerifiedRole} Role`));
            }
        }
        if(args[0] === 'admin')
        {
            const AdminRole = message.guild.roles.cache.find(role => role.name == "Stalin");
            const AdminMembers = message.guild.members.cache.filter(member => member.roles.cache.find(role => role == AdminRole)).map(member => member.user.tag);
            if(AdminMembers.length)
            {
                message.channel.send(new MessageEmbed().setColor('BLUE').setAuthor(message.author.tag, message.member.user.displayAvatarURL()).setTitle('List of **Admin** Members').setDescription(AdminMembers));
            }
            else
            {
                return message.channel.send(new MessageEmbed().setAuthor(message.author.tag, message.member.user.displayAvatarURL()).setDescription(`There is no Member that Has ${AdminRole} Role`));
            }
        }
    }
}