const client = require("..");
const { Message, MessageEmbed, Collection } = require('..');
const Database = require("@replit/database");
const config = require("../configs/config.json");
var ee = require("../configs/embed.json");
const cprefix = config.defaultPrefix;
const prefixes = new Database();

client.on("messageCreate", async (message) => {
    getPrefix = await prefixes.get(message.guild.id).then((value) => {return value});

    let prefix = getPrefix || cprefix
    
    if(message.content.startsWith(prefix) && !message.author.bot) {
        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();

        const cmd = client.commands.get(command) || client.aliases.get(command);

        if(cmd) cmd.run(client, message, args);
    };
});