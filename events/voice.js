const client = require('..');
const { VoiceConnectionStatus, AudioPlayerStatus, joinVoiceChannel  } = require('@discordjs/voice');

client.on('ready', () => {
	client.channels.fetch(id) // voice channel's id
		.then((channel) => { // channel object
			const VoiceConnection = joinVoiceChannel({
				channelId: channel.id, // the voice channel's id
				guildId: channel.guild.id, // the guild that the channel is in
				adapterCreator: channel.guild.voiceAdapterCreator // and setting the voice adapter creator
		})
	})
})

connection.on(VoiceConnectionStatus.Ready, (oldState, newState) => {
	console.log('Connection is in the Ready state!');
});

player.on(AudioPlayerStatus.Playing, (oldState, newState) => {
	console.log('Audio player is in the Playing state!');
});

connection.on('stateChange', (oldState, newState) => {
	console.log(`Connection transitioned from ${oldState.status} to ${newState.status}`);
});

player.on('stateChange', (oldState, newState) => {
	console.log(`Audio player transitioned from ${oldState.status} to ${newState.status}`);
});