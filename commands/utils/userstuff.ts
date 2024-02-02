const { Client, Message, MessageEmbed, Collection, Intents } = require("discord.js");
const Keyv = require('keyv');
// const keyv = new Keyv(`mongodb://${process.env.MONGOUSER}:${process.env.MONGOPASSWORD}@${process.env.MONGOHOST}:${process.env.MONGOPORT}`, { collection: 'userBans' });

module.exports = {
	name: "userBan",
	description: "Ban a user from using WebManageBot",
	run: async (client, message, args) => {
		if (message.author.id !== "585251212321095690")
	  {return message.reply(
     `This command can only be used by vsteam81!`,
  	);}

		const userID = args.shift().toLowerCase();
		const reason = args[1]().split(' ');

		if (!userID) return message.reply('Please provide a user ID');
		if (!reason) return message.reply('Please provide a reason');

		try {
			/*
			(async () => {
				await keyv.set(userID, reason);
			})(),
			*/
		message.reply(`Banned user ${userID} for reason ${reason}`);
		} catch (error) {
			console.log(error);
		}
	},
};