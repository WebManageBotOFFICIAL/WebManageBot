const discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "timeout",
	description: "Timeout a user with discords timeout feature",
	usage: "<@user> <time (in minutes)> <reason>",
	userPerms: ["MANAGE_ROLES"],
	run: async (client, message, args) => {
		// const args = message.content.trim().split(/ +/g);
		const guildMember = message.mentions.members.first();
		const minutes = args.slice(1);
		// const reason = args.slice(2).join(' ');
		if (!minutes) {return message.reply('Please specify the time in minutes')
			// if (!reason) return guildMember.timeout({minutes} * 60 * 1000, `Unspecified`);

			.then(
				guildMember.timeout({ minutes } * 60 * 1000, `You deserved it`),
				// message.reply(`I\'ve timed out ${guildMember}`),
				console.log,
			)
			.catch(
				console.error,
			);
		}
	},
};