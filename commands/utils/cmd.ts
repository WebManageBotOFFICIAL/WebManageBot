const { Client, Message, MessageEmbed, Formatters } = require("discord.js");
const child = require('child_process');

module.exports = {
	name: "exec",
	description: "Executes remote commands from discord to host",
	aliases: "cmd",
	run: async (client, message, args) => {
  if (message.author.id !== "1171815351487565894")
	{return message.reply(
     `This command can only be used by vsteam81!`,
	);}
		const command = args.join(" ");
		if (!command) return message.reply('There were no commands given!');
		child.exec(command, (err, res) => {
			if (err) return console.log(err);
			if (err) return message.reply(`An error occured: \n ${err}`);
			message.channel.send(res.slice(0, 2000), { code: 'bash' });
		});
	},
};
