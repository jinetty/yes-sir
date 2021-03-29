module.exports = {
    name: "newyear",
    description: "",
    async run(client, message, args, MessageEmbed) {
        const countdate = new Date('jan 1, 2021 00:00:00').getTime();
        const now = new Date().getTime();
        const gap = countdate - now;
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
        const d = Math.floor(gap / (day));
        const h = Math.floor((gap % (day)) / (hour));
        const m = Math.floor((gap % (hour)) / (minute));
        const s = Math.floor((gap % (minute)) / (second));

        message.channel.send(new MessageEmbed().setTitle('ETA')
            .setColor('BLUE')
            .setAuthor(message.author.tag, message.member.user.displayAvatarURL())
            .addFields({
                name: 'Day',
                value: d,
                inline: true
            },
            {
                name: "Hour",
                value: h,
                inline: true
            },
            {
                name: "Minutes",
                value: m,
                inline: true
            },
            {
                name: "Seconds",
                value: s
            })
        );
    }
}