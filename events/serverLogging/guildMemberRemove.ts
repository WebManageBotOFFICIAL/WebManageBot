const client = require('../..');
const idConfig = require('../../configs/idConfig.json');

client.on('guildMemberRemove', async (message, member) => {
	const fetchedLogs = await member.guild.fetchAuditLogs({
		limit: 1,
		type: 'MEMBER_KICK',
	});
	// Since there's only 1 audit log entry in this collection, grab the first one
	const kickLog = fetchedLogs.entries.first();

	// Perform a coherence check to make sure that there's *something*
	const channelName = idConfig.logOldChannelName;
	const LogChannel = message.guild.channels.cache.find(ch => ch.name(channelName));
	if (!kickLog) return LogChannel.send(`${member.user.tag} left the guild, most likely of their own will.`);

	// Now grab the user object of the person who kicked the member
	// Also grab the target of this action to double-check things
	const { executor, target } = kickLog;

	// Update the output with a bit more information
	// Also run a check to make sure that the log returned was for the same kicked member
	if (target.id === member.id) {
		console.log(`${member.user.tag} left the guild; kicked by ${executor.tag}?`),
		LogChannel.send(`${member.user.tag} left the guild; kicked by ${executor.tag}?`);
	} else {
		console.log(`${member.user.tag} left the guild, audit log fetch was inconclusive.`),
		LogChannel.send(`${member.user.tag} left the guild, audit log fetch was inconclusive.`);
	}
});