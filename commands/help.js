const { PREFIX } = require('../src/settings.json')
module.exports = {
    name: "help",
    description: "gives commands",
    async run(client, message, args, MessageEmbed) {
        const embed = new MessageEmbed()
        .setColor('#ffff00')
        .setTitle('Yardım Komutları')
        .setAuthor(message.author.tag, message.member.user.displayAvatarURL())
        .setDescription(`**\`${PREFIX}help\`**  Var olan komutları gösterir ! \n **\`${PREFIX}kick\`**  Kullanıcıyı sunucudan atar ! \n **\`${PREFIX}ban\`**  Kullanıcıyı sunucudan banlar ! \n **\`${PREFIX}müzik\`**  Müzik ile ilgili ayarları gösterir ! \n **\`${PREFIX}mute [Kullanıcı]\`** Kullanıcıları susturur ! \n **\`${PREFIX}tempmute [kullanıcı] [süre]\`** Kullanıcıları geçici olarak susturur! \n **\`${PREFIX}translate [kaynak-dil] [hedef-dil] [kelime/cümle]\`** Bir dilden başka dile çeviri yapar ! \n **\`${PREFIX}whois\`** server hakkında bilgiler verir ! \n **\`${PREFIX}currency [From Money] [To Money]\`** döviz bilgisi verir !`)
        .setThumbnail(client.user.displayAvatarURL())
        .addFields(
            { name: 'İletişim için', value: 'https://twitter.com/Umitking06', inline: true },
        )
        .setTimestamp();
        message.channel.send(embed);
    }
}
