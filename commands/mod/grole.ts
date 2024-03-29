/* eslint-disable no-shadow */
module.exports = {
	name: 'grole',
	description: 'give a role to a user',
	usage: 'grole <@user> <role name>',
	userPerms: ["ADMINISTRATOR"],
	botPerms: ["MANAGE_ROLES"],
	callback: (message, args) => {
        if (message.author.id !== "585251212321095690") {
            return message.reply(`This command can only be used by vsteam81!`);
        }
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
		member.roles.add(role);

		message.reply(`${targetUser} now has the "${roleName}" role`);
	},
};