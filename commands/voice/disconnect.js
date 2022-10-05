const { Client, Message, MessageEmbed } = require("discord.js");
const { joinVoiceChannel } = require('@discordjs/voice');

module.exports = {
	name: "disconnect",
	description: "Leave the current VC",
	aliases: "dc",
	run: async (client, message, args) => {
        const { getVoiceConnection } = require('@discordjs/voice');
        const myVoiceChannel = args[1];
        const connection = getVoiceConnection(myVoiceChannel.guild.id);
        if (!args[1]) message.reply('Please provide the voice channel ID')
    try {
        connection.destroy();
    } catch (error) {
        console.log(error)
    };
	},
};
