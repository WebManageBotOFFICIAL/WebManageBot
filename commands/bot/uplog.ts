const { MessageEmbed, Message, Client } = require("discord.js");
const config = require('../../configs/config.json');
const rTips = require('../../configs/tips.json'); // new feature to come soon

module.exports = {
	name: "uplog",
	description: "Shows my latest changelog",
	aliases: ["changelog", "update", "uplog", "cl"],
	run: async (client, message, args) => {
		const embed = new MessageEmbed()
			.setTitle('**Bot Changelog**')
			.setDescription('(View the changelog here)[https://github.com/WebManageBotOFFICIAL/WebManageBot/blob/aee20936d1f6f698b40a473dcd2bec177228a932/UPDATES.md]')
			.setTimestamp()
			.setColor(message.guild.me.displayHexColor);
		message.channel.send({ embeds: [embed] });
	},
};
