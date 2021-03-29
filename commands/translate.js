var translate = require('node-google-translate-skidz');
module.exports = {
    name: "translate",
    description: "translates a couple of words or a sentence",
    async run(client, message, args, MessageEmbed) {
        let kelime = args.slice(2).join(" ");
        let dil1 = args[0];
        let dil2 = args[1];
        const uyarıarg1 = new MessageEmbed()
            .setColor('#FF5500')
            .setTitle('Uyarı')
            .setDescription('Lütfen kaynak dili belirtiniz !')
            .setAuthor(message.member.user.tag, message.member.user.displayAvatarURL);
        const uyarıarg2 = new MessageEmbed()
            .setColor('#FF5500')
            .setTitle('Uyarı')
            .setDescription('Lütfen hedef dili belirtiniz !')
            .setAuthor(message.member.user.tag, message.member.user.displayAvatarURL);
        const uyarıkelime = new MessageEmbed()
            .setColor('#FF5500')
            .setTitle('Uyarı')
            .setDescription('çevireceğiniz cümleyi yazınız !')
            .setAuthor(message.member.user.tag, message.member.user.displayAvatarURL);
        if(!args[0])
        {
            return message.channel.send(uyarıarg1);
        } 
        else if(!args[1])
        {
            return message.channel.send(uyarıarg2);
        }
        else if(!kelime)
        {
            return message.channel.send(uyarıkelime);
        }
        else
        {
            translate({
                text: kelime,
                source: dil1,
                target: dil2
              }, function(sonuç) {
                const embed = new MessageEmbed()
                    .setColor('#FF5500')
                    .setTitle('Translate Result')
                    .setThumbnail('https://cdn.discordapp.com/app-icons/748965198345404489/f417810c6f468c1245a66e76ebd75078.png?size=128')
                    .setDescription(sonuç.translation)
                    .setAuthor(message.author.tag, message.member.user.displayAvatarURL());
                message.channel.send(embed);
              });
        }   
    }
}