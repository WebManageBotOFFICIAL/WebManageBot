const Discord = require("discord.js");
const child = require("child_process");
const {
	Client,
	Message,
	MessageEmbed,
	Collection,
	Intents,
} = require("discord.js");
const fs = require("fs");
// these are config files that can easily be evaluated by venom only UNLESS you fork the code, then you can change the author id to your id. maybe one day venom (or other user) will make an automatic system to search for config files
let config = require("../../configs/config.json");
let assets = require("../../configs/assets.json");
let embeds = require("../../configs/embed.json");
let pkg = require("../../package.json");
let pkglock = require("../../package-lock.json");

module.exports = {
	name: "eval",
	description: "Evaluate something",
	aliases: "evaluate",
	run: async (client, message, args) => {
		const env = child.exec('env');
		const evalcommand = args.slice(0).join(" ");
		const { inspect } = require("util");
		if (message.author.id !== "585251212321095690")
			{return message.reply(
				`This command can only be used by VenomousSteam81#7772!`,
			);}

		if (!evalcommand)
			{return message.channel.send("Please specify something to Evaluate");}

		try {
			const evaled = eval(evalcommand);
			let embedeval = new Discord.MessageEmbed()
				.setColor("#f03824")
				.setTitle("Evaluated")
				.addField(`To Eval`, `\`\`\`${evalcommand}\`\`\``)
				.addField(`Evalved`, `\`\`\`js\n${inspect(evaled, { depth: 0 })}\`\`\``)
				.addField(`TypeOf`, `\`\`\`${typeof evaled}\`\`\``);
			message.channel.send({ embeds: [embedeval] });
		} catch (error) {
			let embederr = new Discord.MessageEmbed()
				.setColor("#f03824")
				.setTitle("Error")
				.addField(`Error`, `${error}`);
			message.channel.send({ embeds: [embederr] });
		}
	},
};
