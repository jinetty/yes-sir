const { PREFIX } = require('../src/settings.json')
module.exports = {
    name: "müzik",
    description: "gives info about music commands",
    async run(client, message, args, MessageEmbed) {
        const embed = new MessageEmbed()
        .setColor('#ffff00')
        .setTitle('Müzik Komutları')
        .setAuthor(message.author.tag, message.member.user.displayAvatarURL())
        .setDescription(`**\`${PREFIX}play [URL] || [Arama]\`**   Müzik çalar ! \n **\`${PREFIX}skip\`**  Müziği atlar ! \n **\`${PREFIX}stop\`**  Müziği durdurur ve kuyruğu temizler ! \n **\`${PREFIX}pause\`**  Müziği duraklatır ! \n **\`${PREFIX}resume\`**  Müziği devam ettirir ! \n **\`${PREFIX}np\`**  Şuan ki çalan parçayı gösterir ! \n **\`${PREFIX}queue\`**  Kuyruğu listeler \n **\`${PREFIX}volume\`**  Ses düzeyini ayarlar ! \n **\`${PREFIX}loop\`** Müziği tekrarlar \n **\`${PREFIX}shuffle\`** Müziklerin sırasını karıştırır !`)
        .setThumbnail(client.user.displayAvatarURL())
        .addFields(
            { name: 'İletişim için', value: 'https://twitter.com/Umitking06', inline: true },
        )
        .setTimestamp()
        .setFooter('©️ 2020 Ümit Taylan', 'https://cdn.discordapp.com/app-icons/748965198345404489/f417810c6f468c1245a66e76ebd75078.png?size=128');
    
        message.channel.send(embed);
    }
    
}