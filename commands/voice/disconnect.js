const { Client, Message, MessageEmbed } = require("discord.js");
const { joinVoiceChannel } = require('@discordjs/voice');

module.exports = {
	name: "disconnect",
	description: "Leave the current VC",
	aliases: "dc",
	run: async (client, message, args) => {
        const { getVoiceConnection } = require('@discordjs/voice');
        const connection = getVoiceConnection(myVoiceChannel.guild.id);
    try {
        connection.destroy();
    } catch (error) {
        console.log(error)
    };
	},
};
