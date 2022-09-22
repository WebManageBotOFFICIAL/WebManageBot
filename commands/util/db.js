const { Client, Message, MessageEmbed, Collection, Intents } = require("discord.js");
const Database = require("@replit/database");
const prefixes = new Database()

module.exports = {
  name: "db",
  description: "Show all keys in the `prefixes` database",
  aliases: "database",
  	run: async (client, message, args) => {
    if (message.author.id !== "585251212321095690")
      return message.reply(
        `This command can only be used by VenomousSteam81#7772!`
      );
		const kPrefixes = prefixes.list().then(keys => {keys});
		return message.reply(`${kPrefixes}`)
  }
}