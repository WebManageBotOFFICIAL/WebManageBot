const { Client, Message, MessageEmbed, Collection, Intents } = require("discord.js");
const config = require('../../configs/config.json');

module.exports = {
	name: "stop",
	description: "Stops me if I won't go offline, due to 2 or more bot instances",
	run: async (client, message) => {
  	if (message.author.id !== config.ownerId)
	  return message.reply(
     `This command can only be used by VenomousSteam81#7772!`
  	);
	  message.reply('STOPPING...')
	  	.setTimeout(function(){
	  console.log('STOPPED ALL PROCESSES'),
	  process.exit();
		  }, 2000);
	},
};
