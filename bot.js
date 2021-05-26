const {Client, MessageEmbed, Collection, Guild} = require('discord.js');
const client = new Client({
    partials: ['MESSAGE', 'REACTION']
});
const { TOKEN, PREFIX, YoutubeAPI} = require('./src/settings.json');
const MusicBot = require('./src/Music/MusicBot'); // Require the best package ever created on NPM (= require discord-music-system)
const { readdirSync } = require('fs');
const { join } = require('path');
const memberCount = require('./src/membercount');
client.commands = new Collection();
const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));
for (const file of commandFiles)
{
    const command = require(join(__dirname, "commands", `${file}`));
    console.log(`Loading commands : ${file}`)
    client.commands.set(command.name, command);
}
const bot = new MusicBot({
    botPrefix: PREFIX, // Example: !
    ytApiKey: YoutubeAPI, // Video to explain how to get it: https://www.youtube.com/watch?v=VqML5F8hcRQ
    botClient: client // Your Discord client. Here we're using discord.js so it's the Discord.Client()
});
client.on("error", console.error);
client.on("ready", () => {
    console.log(`${client.user.tag} has logged in !`);
    client.user.setActivity(`${PREFIX}help | ${client.guilds.cache.size} servers !`);
    memberCount(client);
});
client.on('guildCreate', () => {
    client.user.setActivity(`${PREFIX}help | ${client.guilds.cache.size} servers !`);
})
client.on('guildDelete', () => {
    client.user.setActivity(`${PREFIX}help | ${client.guilds.cache.size} servers !`);
})
client.on("message", async (message) => {
    if(message.content.startsWith(bot.prefix)) { // If the message starts with your prefix
        bot.onMessage(message); // The music-system must read the message, to check if it is a music command and execute it.
    };
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
    if(message.content.startsWith(PREFIX))
    {
        const args = message.content.trim().slice(PREFIX.length).split(/\s+/);
        const command = args.shift().toLowerCase();
        if(!client.commands.has(command)) return;
        try{
            client.commands.get(command).run(client, message, args, MessageEmbed);
        }
        catch (error){
            console.error(error);
        }
    }
})
client.login(TOKEN);