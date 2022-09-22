const { Client, Message, MessageEmbed, Collection, Intents } = require("discord.js");
const config = require('../../configs/config.json');
const Database = require("@replit/database");
const prefixes = new Database()

module.exports = {
  name: "wipe",
  description: "Wipe all keys in the `prefixes` database",
  aliases: "wipedb",
  	run: async (client, message, args) => {
    if (message.author.id !== config.ownerId)
      return message.reply(
        `This command can only be used by VenomousSteam81#7772!`
      );
				prefixes.list().then(list => {
  				for (var i = 0; i<list.length; i++) {
    		prefixes.delete(list[i]);
  		}
		})
		console.log('Cleared the prefix database'),
		message.reply('All prefixes have been cleared');
  }
}