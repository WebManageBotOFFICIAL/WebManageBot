const discord = require('discord.js');

module.exports = {
	name: 'rmrole',
	description: 'remove a role from a user',
	permissions: 'ADMINISTRATOR',
	callback: (message, args) => {
		const targetUser = message.mentions.users.first();
		if (!targetUser) {
			message.reply('Please specify someone to give a role to.');
			return;
		}

		arguments.shift();

		const roleName = arguments.join(' ');
		const { guild } = message;

		const role = guild.roles.cache.find((role) => {
			return role.name === roleName;
		});
		if (!role) {
			message.reply(`There is no role with the name "${roleName}"`);
			return;
		}

		const member = guild.members.cache.get(targetUser.id);

		if (member.roles.cache.get(role.id)) {
			member.roles.remove(role);
			message.reply(`That user no longer has the ${roleName} role`);
		} else {
			message.reply(`That user does not have the ${roleName} role`);
		}
	},
};