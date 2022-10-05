const { Client, Message, MessageEmbed } = require("discord.js");
const { joinVoiceChannel } = require('@discordjs/voice');

module.exports = {
	name: "join",
	description: "Join a given VC",
	aliases: "connect",
	run: async (client, message, args) => {
        const connection = joinVoiceChannel({
            channelId: channel.id,
            guildId: channel.guild.id,
            adapterCreator: channel.guild.voiceAdapterCreator,
        })
        const subscription = connection.subscribe(audioPlayer);
        try {
            if (subscription) {
                // Unsubscribe after 5 seconds (stop playing audio on the voice connection)
                setTimeout(() => subscription.unsubscribe(), 5_000);
            }
        } catch (error) {
            console.log(error)
        }
	},
};
