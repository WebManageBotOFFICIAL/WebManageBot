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
	Current    :: 1.2.1
	Last       :: 1.2.0
	`;
		const changeLogs = stripIndent`
	* Changed the commands structure
* Changed stats command
	`;
		
		const embed = new MessageEmbed()
			.setTitle('**Bot Changelog**')
			.setDescription('You might ask \`What does the x.x.x mean?\` Well, here it is! \n major ver.minor ver.sml features ver')
			.addField('All Version Info', `\`\`\`asciidoc\n${allVerInfo}\`\`\``)
			.addField('Main Changelogs', `\`\`\`asciidoc\n${changeLogs}\`\`\``)
			.setTimestamp()
			.setColor(message.guild.me.displayHexColor);
		message.channel.send({ embeds: [embed] });
	},
};
