const client = require("..");
const { Message, MessageEmbed, Collection } = require('discord.js');

// Channel Topic Updating 
client.on("guildChannelTopicUpdate", async (channel, oldTopic, newTopic) => {
	const channelName = 'discord-log';
	const LogChannel = msg.guild.channels.cache.find(ch => ch.name(channelName));
	const TopicUpdate = new MessageEmbed()
		.setTitle('Topic Updated!')
		.setColor('#2F3136')
		.setDescription(`${channel} Topic changed from **${oldTopic}** to **${newTopic}**`);

	return LogChannel.send({
		embeds: [TopicUpdate]
	});

});

// Channel Permission Updating
client.on("guildChannelPermissionsUpdate", async (channel, oldPermissions, newPermissions) => {
	const channelName = 'discord-log';
	const LogChannel = msg.guild.channels.cache.find(ch => ch.name(channelName));
	const PermissionUpdate = new MessageEmbed()
		.setTitle('Permission Updated!')
		.setColor('#2F3136')
		.setDescription(`channel.name+"'s permissions updated!"`)
		.addFields(
			{ 'Old Permissions': `${oldPermissions}` },
			{ 'New Permissions': `${newPermissions}` }
		);

	return LogChannel.send({
		embeds: [PermissionUpdate]
	});

})

// unhandled Guild Channel Update
client.on("unhandledGuildChannelUpdate", async (oldChannel, newChannel) => {
	const channelName = 'discord-log';
	const LogChannel = msg.guild.channels.cache.find(ch => ch.name(channelName));
	const unhandledGuildChannelUpdate = new MessageEmbed()
		.setTitle('Channel Updated!')
		.setColor('#2F3136')
		.setDescription("Channel '" + oldChannel.id + "' was edited but discord-logs couldn't find what was updated...");

	return LogChannel.send({
		embeds: [unhandledGuildChannelUpdate]
	});

});

// Member Started Boosting
client.on("guildMemberBoost", async (member) => {
	const channelName = 'discord-log';
	const LogChannel = msg.guild.channels.cache.find(ch => ch.name(channelName));
	const MemberBoost = new MessageEmbed()
		.setTitle('User Started Boosting!')
		.setColor('#2F3136')
		.setDescription(`**${member.user.tag}** has started boosting  ${member.guild.name}!`);
	return LogChannel.send({
		embeds: [MemberBoost]
	});

})

// Member Unboosted
client.on("guildMemberUnboost", async (member) => {
	const channelName = 'discord-log';
	const LogChannel = msg.guild.channels.cache.find(ch => ch.name(channelName));
	const MemberUnboost = new MessageEmbed()
		.setTitle('User Stoped Boosting!')
		.setColor('#2F3136')
		.setDescription(`**${member.user.tag}** has stopped boosting  ${member.guild.name}!`);

	return LogChannel.send({
		embeds: [MemberUnboost]
	});

})

// Member Got Role
client.on("guildMemberRoleAdd", async (member, role) => {
	const channelName = 'discord-log';
	const LogChannel = msg.guild.channels.cache.find(ch => ch.name(channelName));
	const MemberRoleAdd = new MessageEmbed()
		.setTitle('User Got Role!')
		.setColor('#2F3136')
		.setDescription(`**${member.user.tag}** got the role \`${role.name}\``);

	return LogChannel.send({
		embeds: [MemberRoleAdd]
	});

})

// Member Lost Role
client.on("guildMemberRoleRemove", async (member, role) => {
	const channelName = 'discord-log';
	const LogChannel = msg.guild.channels.cache.find(ch => ch.name(channelName));
	const MemberRoleRemove = new MessageEmbed()
		.setTitle('User Lost Role!')
		.setColor('#2F3136')
		.setDescription(`**${member.user.tag}** lost the role \`${role.name}\``);

	return LogChannel.send({
		embeds: [MemberRoleRemove]
	});

})

// Nickname Changed
client.on("guildMemberNicknameUpdate", async (member, oldNickname, newNickname) => {
	const channelName = 'discord-log';
	const LogChannel = msg.guild.channels.cache.find(ch => ch.name(channelName));
	const MemberNicknameUpdate = new MessageEmbed()
		.setTitle('Nickname Updated')
		.setColor('#2F3136')
		.setDescription(`${member.user.tag} changed nickname from \`${oldNickname}\` to \`${newNickname}\``);

	return LogChannel.send({
		embeds: [MemberNicknameUpdate]
	});

})

// Member Joined
client.on("guildMemberEntered", async (member) => {
	const channelName = 'discord-log';
	const LogChannel = msg.guild.channels.cache.find(ch => ch.name(channelName));
	const MemberJoined = new MessageEmbed()
		.setTitle('User Joined')
		.setColor('#2F3136')
		.setDescription(`${member.user.tag} Joined!`);

	return LogChannel.send({
		embeds: [MemberJoined]
	});

})

// Server Boost Level Up
client.on("guildBoostLevelUp", async (guild, oldLevel, newLevel) => {
	const channelName = 'discord-log';
	const LogChannel = msg.guild.channels.cache.find(ch => ch.name(channelName));
	const LevelUp = new MessageEmbed()
		.setTitle('Server Boost Level Up')
		.setColor('#2F3136')
		.setDescription(`${guild.name} reached the boost level ${newLevel}`);

	return LogChannel.send({
		embeds: [LevelUp]
	});

})

// Server Boost Level Down
client.on("guildBoostLevelDown", async (guild, oldLevel, newLevel) => {
	const channelName = 'discord-log';
	const LogChannel = msg.guild.channels.cache.find(ch => ch.name(channelName));
	const LevelDown = new MessageEmbed()
		.setTitle('Server Boost Level Down')
		.setColor('#2F3136')
		.setDescription(`${guild.name} lost a level from ${oldLevel} to ${newLevel}`);

	return LogChannel.send({
		embeds: [LevelDown]
	});

})

// Banner Added
client.on("guildBannerAdd", async (guild, bannerURL) => {
	const channelName = 'discord-log';
	const LogChannel = msg.guild.channels.cache.find(ch => ch.name(channelName));
	const BannerAdd = new MessageEmbed()
		.setTitle('Server Got a new banner')
		.setColor('#2F3136')
		.setImage(bannerURL)

	return LogChannel.send({
		embeds: [BannerAdd]
	});

})

// AFK Channel Added
client.on("guildAfkChannelAdd", async (guild, afkChannel) => {
	const channelName = 'discord-log';
	const LogChannel = msg.guild.channels.cache.find(ch => ch.name(channelName));
	const AFKAdd = new MessageEmbed()
		.setTitle('AFK Channel Added')
		.setColor('#2F3136')
		.setDescription(`${guild.name} has a new afk channel ${afkChannel}`);

	return LogChannel.send({
		embeds: [AFKAdd]
	});

})

// Guild Vanity Add
client.on("guildVanityURLAdd", async (guild, vanityURL) => {
	const channelName = 'discord-log';
	const LogChannel = msg.guild.channels.cache.find(ch => ch.name(channelName));
	const VanityAdd = new MessageEmbed()
		.setTitle('Vanity Link Added')
		.setColor('#2F3136')
		.setDescription(`${guild.name} has a vanity link ${vanityURL}`);

	return LogChannel.send({
		embeds: [VanityAdd]
	});

})

// Guild Vanity Remove
client.on("guildVanityURLRemove", async (guild, vanityURL) => {
	const channelName = 'discord-log';
	const LogChannel = msg.guild.channels.cache.find(ch => ch.name(channelName));
	const VanityRemove = new MessageEmbed()
		.setTitle('Vanity Link Removed')
		.setColor('#2F3136')
		.setDescription(`${guild.name} has removed its vanity URL ${vanityURL}`);

	return LogChannel.send({
		embeds: [VanityRemove]
	});

})

// Guild Vanity Link Updated
client.on("guildVanityURLUpdate", async (guild, oldVanityURL, newVanityURL) => {
	const channelName = 'discord-log';
	const LogChannel = msg.guild.channels.cache.find(ch => ch.name(channelName));
	const VanityUpdated = new MessageEmbed()
		.setTitle('Vanity Link Updated')
		.setColor('#2F3136')
		.setDescription(`${guild.name} has changed its vanity URL from ${oldVanityURL} to ${newVanityURL}!`);

	return LogChannel.send({
		embeds: [VanityUpdated]
	});

})

// Message Pinned
client.on("messagePinned", async (message) => {
	const channelName = 'discord-log';
	const LogChannel = msg.guild.channels.cache.find(ch => ch.name(channelName));
	const MessagePinned = new MessageEmbed()
		.setTitle('Message Pinned')
		.setColor('#2F3136')
		.setDescription("This message has been pinned : " + message);

	return LogChannel.send({ embeds: [MessagePinned] });
	//return console.log(`test passed`);

})

// Message Edited
client.on("messageContentEdited", async (message, oldContent, newContent) => {
	const channelName = 'discord-log';
	const LogChannel = msg.guild.channels.cache.find(ch => ch.name(channelName));
	const MessageEdited = new MessageEmbed()
		.setTitle('Message Edited')
		.setColor('#2F3136')
		.setDescription(`A Message was Edited \`\nOld message: ${oldContent}\n\` \`New message: ${newContent}\``);

	return LogChannel.send({
		embeds: [MessageEdited]
	});

})
/*
// Member Became Offline
client.on("guildMemberOffline", async (member, oldStatus) => {
		const MemberOffline = new MessageEmbed()
				.setTitle('Message Offline')
				.setColor('#2F3136')
				.setDescription(member.user.tag + " became offline!");

		return LogChannel.send({
				embeds: [MemberOffline]
		});

})

// Member Became Online
client.on("guildMemberOnline", async (member, newStatus) => {
		const MemberOnline = new MessageEmbed()
				.setTitle('Message Online')
				.setColor('#2F3136')
				.setDescription(member.user.tag + " was offline and is now " + newStatus + "!");

		return LogChannel.send({
				embeds: [MemberOnline]
		});

})
*/

// Role Position Updated
client.on("rolePositionUpdate", async (role, oldPosition, newPosition) => {
	const channelName = 'discord-log';
	const LogChannel = msg.guild.channels.cache.find(ch => ch.name(channelName));
	const RolePositionUpdated = new MessageEmbed()
		.setTitle('Role Position Updated')
		.setColor('#2F3136')
		.setDescription(role.name + " role was at position " + oldPosition + " and now is at position " + newPosition);

	return LogChannel.send({
		embeds: [RolePositionUpdated]
	});

})

// Role Permission Updated
client.on("rolePermissionsUpdate", async (role, oldPermissions, newPermissions) => {
	const channelName = 'discord-log';
	const LogChannel = msg.guild.channels.cache.find(ch => ch.name(channelName));
	const RolePermissionUpdated = new MessageEmbed()
		.setTitle('Role Permission Updated')
		.setColor('#2F3136')
		.setDescription(role.name + " had as permissions " + oldPermissions + " and now has as permissions " + newPermissions);

	return LogChannel.send({
		embeds: [RolePermissionUpdated]
	});

})

// Avatar Updated
client.on("userAvatarUpdate", async (user, oldAvatarURL, newAvatarURL) => {
	const channelName = 'discord-log';
	const LogChannel = msg.guild.channels.cache.find(ch => ch.name(channelName));
	const AvatarUpdated = new MessageEmbed()
		.setTitle('Avatar Updated')
		.setColor('#2F3136')
		.setDescription(`${user.tag} updated avatar from [Old Avatar](${oldAvatarURL}) to [New Avatar(${newAvatarURL})]`);

	return LogChannel.send({
		embeds: [AvatarUpdated]
	});

})

// Username Updated
client.on("userUsernameUpdate", async (user, oldUsername, newUsername) => {
	const channelName = 'discord-log';
	const LogChannel = msg.guild.channels.cache.find(ch => ch.name(channelName));
	const Username = new MessageEmbed()
		.setTitle('Username Updated')
		.setColor('#2F3136')
		.setDescription(`${user.tag} updated thier username from ${oldUsername} to ${newUsername}`);

	return LogChannel.send({
		embeds: [Username]
	});

})

// Discriminator Updated
client.on("userDiscriminatorUpdate", async (user, oldDiscriminator, newDiscriminator) => {
	const channelName = 'discord-log';
	const LogChannel = msg.guild.channels.cache.find(ch => ch.name(channelName));
	const Discriminator = new MessageEmbed()
		.setTitle('Discriminator Updated')
		.setColor('#2F3136')
		.setDescription(`${user.tag} updated thier discriminator from ${oldDiscriminator} to ${newDiscriminator}`);

	return LogChannel.send({
		embeds: [Discriminator]
	});

})

// Flags Updated
client.on("userFlagsUpdate", async (user, oldFlags, newFlags) => {
	const channelName = 'discord-log';
	const LogChannel = msg.guild.channels.cache.find(ch => ch.name(channelName));
	const FlagsUpdate = new MessageEmbed()
		.setTitle('Flags Updated')
		.setColor('#2F3136')
		.setDescription(`${user.tag} updated thier flags from ${oldFlags} to ${newFlags}`);

	return LogChannel.send({
		embeds: [FlagsUpdate]
	});

})

// Joined VC
client.on("voiceChannelJoin", async (member, channel) => {
	const channelName = 'discord-log';
	const LogChannel = msg.guild.channels.cache.find(ch => ch.name(channelName));
	const VCJoined = new MessageEmbed()
		.setTitle('Voice Channel Joined')
		.setColor('#2F3136')
		.setDescription(member.user.tag + " joined " + `${channel}` + "!");

	return LogChannel.send({
		embeds: [VCJoined]
	});

})

// Left VC
client.on("voiceChannelLeave", async (member, channel) => {
	const channelName = 'discord-log';
	const LogChannel = msg.guild.channels.cache.find(ch => ch.name(channelName));
	const VCLeft = new MessageEmbed()
		.setTitle('Voice Channel Left')
		.setColor('#2F3136')
		.setDescription(member.user.tag + " left " + `${channel}` + "!");

	return LogChannel.send({
		embeds: [VCLeft]
	});

})

// VC Switch
client.on("voiceChannelSwitch", async (member, oldChannel, newChannel) => {
	const channelName = 'discord-log';
	const LogChannel = msg.guild.channels.cache.find(ch => ch.name(channelName));
	const VCSwitch = new MessageEmbed()
		.setTitle('Voice Channel Switched')
		.setColor('#2F3136')
		.setDescription(member.user.tag + " left " + oldChannel.name + " and joined " + newChannel.name + "!");

	return LogChannel.send({
		embeds: [VCSwitch]
	});

})

// VC Mute
client.on("voiceChannelMute", async (member, MuteType) => {
	const channelName = 'discord-log';
	const LogChannel = msg.guild.channels.cache.find(ch => ch.name(channelName));
	const VCMute = new MessageEmbed()
		.setTitle('User Muted')
		.setColor('#2F3136')
		.setDescription(member.user.tag + ` became ${MuteType}`);

	return LogChannel.send({
		embeds: [VCMute]
	});

})

// VC Unmute
client.on("voiceChannelUnmute", async (member, MuteType) => {
	const channelName = 'discord-log';
	const LogChannel = msg.guild.channels.cache.find(ch => ch.name(channelName));
	const VCUnmute = new MessageEmbed()
		.setTitle('User Unmuted')
		.setColor('#2F3136')
		.setDescription(member.user.tag + ` became ${MuteType}`);

	return LogChannel.send({
		embeds: [VCUnmute]
	});

})

// VC Defean
client.on("voiceChannelDeaf", async (member, deafType) => {
	const channelName = 'discord-log';
	const LogChannel = msg.guild.channels.cache.find(ch => ch.name(channelName));
	const VCDeafen = new MessageEmbed()
		.setTitle('User Deafend')
		.setColor('#2F3136')
		.setDescription(member.user.tag + ` became ${deafType}`);

	return LogChannel.send({
		embeds: [VCDeafen]
	});

})

// VC Undefean
client.on("voiceChannelUndeaf", async (member, deafType) => {
	const channelName = 'discord-log';
	const LogChannel = msg.guild.channels.cache.find(ch => ch.name(channelName));
	const VCUndeafen = new MessageEmbed()
		.setTitle('User Undeafend')
		.setColor('#2F3136')
		.setDescription(member.user.tag + ` became ${deafType}`);

	return LogChannel.send({
		embeds: [VCUndeafen]
	});

})

// User Started to Stream
client.on("voiceStreamingStart", async (member, voiceChannel) => {
	const channelName = 'discord-log';
	const LogChannel = msg.guild.channels.cache.find(ch => ch.name(channelName));
	const UserStreaming = new MessageEmbed()
		.setTitle('User Started to Stream')
		.setColor('#2F3136')
		.setDescription(member.user.tag + " started streaming in " + voiceChannel.name);

	return LogChannel.send({
		embeds: [UserStreaming]
	});

})

// User Stopped to Stream
client.on("voiceStreamingStart", async (member, voiceChannel) => {
	const channelName = 'discord-log';
	const LogChannel = msg.guild.channels.cache.find(ch => ch.name(channelName));
	const UserStoppedStreaming = new MessageEmbed()
		.setTitle('User Stopped to Stream')
		.setColor('#2F3136')
		.setDescription(member.user.tag + " stopped streaming in " + voiceChannel.name);

	return LogChannel.send({
		embeds: [UserStoppedStreaming]
	});

})
/*
Made by: FiredragonPlayz#0087,
Modified by: VenomousSteam81#7772 (making it properly work with my setup)
*/