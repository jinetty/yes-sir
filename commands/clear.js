module.exports = {
    name: "clear",
    description: "clears messages",
    async run(client, message, args, MessageEmbed) {
        const amount = args.join(" ");
        if(!amount) return message.channel.send(new MessageEmbed().setAuthor(message.author.tag, message.member.user.displayAvatarURL()).setDescription('Ne kadar silineceğini belirtin efendim !'));
        if(amount > 100) return message.channel.send(new MessageEmbed().setAuthor(message.author.tag, message.member.user.displayAvatarURL()).setDescription(`100 mesajdan fazlasını temizleyemezsiniz efendim !`));
        if(amount < 1) return message.channel.send(new MessageEmbed().setAuthor(message.author.tag, message.member.user.displayAvatarURL()).setDescription(`Efendim en az 1 mesaj temizlemelisiniz !`));
        if(!message.member.hasPermission('MANAGE_MESSAGES'))
        {
            message.channel.send(new MessageEmbed().setAuthor(message.author.tag, message.member.user.displayAvatarURL()).setDescription('Mesaj silmeye yetkiniz yok efendim !'));
        }
        else
        {
            await message.channel.messages.fetch({limit: amount}).then(messages => {
                message.channel.bulkDelete(messages)
            });
            message.channel.send(new MessageEmbed().setAuthor(message.author.tag, message.member.user.displayAvatarURL()).setDescription(`${amount} başarıyla temizlendi efendim !`)).then(msg => msg.delete({timeout: 5000}));
        }
    }
}