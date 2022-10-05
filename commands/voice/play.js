const { Client, Message, MessageEmbed } = require("discord.js");
const { joinVoiceChannel } = require('@discordjs/voice');

module.exports = {
	name: "join",
	description: "Join a given VC",
	aliases: "connect",
	run: async (client, message, args) => {
        const subscription = connection.subscribe(audioPlayer);
        try {
            const connection = joinVoiceChannel({
                channelId: channel.id,
                guildId: channel.guild.id,
                adapterCreator: channel.guild.voiceAdapterCreator,
            })
            if (subscription) {
                // Unsubscribe after 5 seconds (stop playing audio on the voice connection)
                setTimeout(() => subscription.unsubscribe(), 5_000);
            }
        } catch (error) {
            console.log(error)
        }
	},
};
