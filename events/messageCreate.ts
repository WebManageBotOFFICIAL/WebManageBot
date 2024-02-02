const { Message, MessageContent, MessageEmbed, Collection } = require('..');
const config = require("../configs/config.json");
let ee = require("../configs/embed.json");
const client = require("..");
const { defaultPrefix } = require('../configs/bot.json');


client.on("messageCreate", async (message) => {
	const { escapeRegex, onCoolDown } = require("../utils/function.ts");
	if (!message.guild) return;
	if (message.author.bot) return;
	if (message.channel.partial) await message.channel.fetch();
	if (message.partial) await message.fetch();
	// if (blockedUsers.includes(message.user.id)) return message.reply(`You were blocked for reason`);
	const prefixRegex = new RegExp(
		`^(<@!?${client.user.id}>|${escapeRegex(defaultPrefix)})\\s*`,
	);
	if (!prefixRegex.test(message.content)) return;
	const [, matchedPrefix] = message.content.match(prefixRegex);
	const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
	const cmd = args.shift().toLowerCase();
	// Retrieve mention defaultPrefix
	if (cmd.length === 0) {
		if (matchedPrefix.includes(client.user.id)) {
			message.reply(
				`To see all commands type: ${defaultPrefix}help`,
			);
		}
	}
	const command = client.commands.get(cmd.toLowerCase());
	if (!command) return;
	if (command) {
		if (!message.member.permissions.has(command.permissions || []))
			{return message.channel.send('You do not have the perms to complete such actions...');}

		// Check if user is on cooldown with the cmd, with Tomato#6966's Function from /handlers/functions.js
		if (onCoolDown(message, command)) {
			let cool = new MessageEmbed()
				.setDescription(`❌ Please wait ${onCoolDown(message, command)} more second(s) before reusing the ${command.name} command.`);
			return message.channel.send({ embeds: [cool] });
		}
		await command.run(client, message, args, defaultPrefix);
	}
});
