const { Client, Message, MessageEmbed, Formatters } = require("discord.js");
const Errorhandler = require('discord-error-handler');
const config = require('../../configs/config.json');

module.exports = {
	name: "report",
	description: "Reports all sent errors",
	aliases: "rpe",
	run: async (client, message, args) => {
    const handle = new Errorhandler(client, {
        webhook: { id: process.env.webhook_id, token: process.env.webhook_token },
    });
  if (message.author.id !== config.ownerId)
	  return message.reply(
     `This command can only be used by VenomousSteam81#7772!`
  	);
      return handle.report(client , message)
	},
};
