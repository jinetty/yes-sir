module.exports = client => {
    const channelID = 'CHANNEL ID';
    const updateMembers = guild => {
        const channel = guild.channels.cache.get(channelID);
        channel.setName(`Üyeler : ${guild.memberCount.toLocaleString()}`)
    }
    client.on('guildMemberAdd', (member) => updateMembers(member.guild));
    client.on('guildMemberRemove', (member) => updateMembers(member.guild));
    const guild = client.guilds.cache.get('GUILD ID');
    updateMembers(guild)
}