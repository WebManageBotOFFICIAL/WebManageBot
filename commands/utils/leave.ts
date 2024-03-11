const Discord = require("discord.js");
const { Client, Message, Collection, Intents } = require("discord.js");

module.exports = {
  name: "leave",
  description: "Force me to leave a server",
  run: async (client, message, args) => {
		if (message.author.id !== "1171815351487565894")
      {return message.reply(
        `This command can only be used by vsteam81!`,
    );}
		message.guild.leave();
	},
};