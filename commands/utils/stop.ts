const { Client, Message, MessageEmbed, Collection, Intents } = require("discord.js");

module.exports = {
	name: "stop",
	description: "Stops me if I won't go offline, due to 2 or more bot instances",
	run: async (client, message) => {
  	if (message.author.id !== "1171815351487565894")
	  {return message.reply(
     `This command can only be used by vsteam81!`,
  	);}
	  message.reply('STOPPING...')
	  	.setTimeout(function() {
	  console.log('STOPPED ALL PROCESSES'),
	  process.exit();
		  }, 2000);
	},
};
