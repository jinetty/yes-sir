const ms = require('ms');
module.exports = {
    name: "tempmute",
    description: "mutes users temporarily",
    async run(client, message, args, MessageEmbed) {
        if (!message.member.hasPermission('MUTE_MEMBERS')) return message.channel.send(new MessageEmbed().setAuthor(message.author.tag, message.member.user.displayAvatarURL()).setDescription('Bu kullanıcıyı geçici olarak susturmak için yetkiniz yok !'));
        if (args.length === 0) return message.channel.send(new MessageEmbed().setAuthor(message.author.tag, message.member.user.displayAvatarURL()).setDescription('Lütfen bir kullanıcı belirtin !'));
        const member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(member.hasPermission('MANAGE_MESSAGES'))
        {
            message.channel.send(new MessageEmbed().setAuthor(message.author.tag, message.member.user.displayAvatarURL()).setDescription('Bu kullanıcı mutelanamaz !'));
        }
        else
        {    
            let muterole = message.guild.roles.cache.find(role => role.name === 'SUSTURULDU');
            //end of create role
            let mutetime = args[1];
            if(!mutetime) return message.channel.send(new MessageEmbed().setAuthor(message.author.tag, message.member.user.displayAvatarURL()).setDescription("Zaman belirtmediniz efendim !"));
            if(!member.roles.cache.find(role => role.name === 'SUSTURULDU'))
            {
                await(member.roles.add(muterole));
                message.channel.send(new MessageEmbed().setAuthor(message.author.tag, message.member.user.displayAvatarURL()).setDescription(`${member} ${ms(ms(mutetime))} susturuldu efendim !`));
                let mutetimeout = setTimeout(function()
                {
                    member.roles.remove(muterole);
                    message.channel.send(new MessageEmbed().setAuthor(message.author.tag, message.member.user.displayAvatarURL()).setDescription(`${member} kullanıcısnın susturulması kaldırıldı efendim !`));
                }
                , ms(mutetime));
            }
            else
            {
                message.channel.send(new MessageEmbed().setAuthor(message.author.tag, message.member.user.displayAvatarURL()).setDescription(`${member} zaten SUSTURULDU !`));
            }
        }
    }
}