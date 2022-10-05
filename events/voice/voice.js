const client = require('..');
const { VoiceConnectionStatus, AudioPlayerStatus } = require('@discordjs/voice');

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