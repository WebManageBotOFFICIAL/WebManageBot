const { MessageEmbed, Message, Client } = require("discord.js");
const config = require('../../configs/config.json');
const { stripIndent } = require('common-tags');
const rTips = require('../../configs/tips.json'); // new feature to come soon

module.exports = {
	name: "uplog",
	description: "Shows my latest changelog",
	aliases: ["changelog", "update", "uplog", "cl"],
	run: async (client, message, args) => {
		const allVerInfo = stripIndent`
	Current    :: 1.3.0
	Last       :: 1.2.1
	`;
		const changeLogs = stripIndent`
	* Decided to update this. Includes:
		- Login page (not much yet)
		- Nothing else to mention. Be on the lookout for the next update!
	`;
		
		const embed = new MessageEmbed()
			.setTitle('**Bot Changelog**')
			.addField('All Version Info', `\`\`\`asciidoc\n${allVerInfo}\`\`\``)
			.addField('Main Changelogs', `\`\`\`asciidoc\n${changeLogs}\`\`\``)
			.setTimestamp()
			.setColor(message.guild.me.displayHexColor);
		message.channel.send({ embeds: [embed] });
	},
};
