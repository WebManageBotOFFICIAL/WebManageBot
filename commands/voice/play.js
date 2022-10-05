const { Client, Message, MessageEmbed } = require("discord.js");
const { joinVoiceChannel } = require('@discordjs/voice');

module.exports = {
	name: "join",
	description: "Join a given VC",
	aliases: "connect",
	run: async (client, message, args) => {
        client.channels.fetch(id) // voice channel's id
            .then((channel) => { // channel object
                const VoiceConnection = joinVoiceChannel({
                    channelId: channel.id, // the voice channel's id
                    guildId: channel.guild.id, // the guild that the channel is in
                    adapterCreator: channel.guild.voiceAdapterCreator // and setting the voice adapter creator
                })
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
