const discord = require('discord.js');
module.exports = {
	name: "purge",
	aliases: "clear",
	description: "Delete the given number of messages in one shot",
	usage: "purge <message number>",
	userPerms: ["MANAGE_MESSAGES"],
	botPerms: ["MANAGE_MESSAGES"],
	run: async (client, message, args) => {

		const fetched = message.channel || message.mentions.members.first();
		let messageArray = message.content.split(" ");
		const amount = parseInt(args[0]) + 1;

		if (isNaN(amount)) {
			return message.channel.send(
				`${message.author.username}, you can only clear messages from 1-99`,
			);
		} else if (amount <= 1 || amount > 100) {
			return message.channel.send(
				`${message.author.username}, you can only clear messages from 1-99`,
			);
		}

		fetched.bulkDelete(amount, true);
		fetched.bulkDelete(amount);
	},
};