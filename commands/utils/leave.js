const Discord = require("discord.js");
const {
  Client,
  Message,
  Collection,
  Intents,
} = require("discord.js");

module.exports = {
  name: "leave",
  description: "Force me to leave a server",
  run: async (client, message, args) => {
		if (message.author.id !== "585251212321095690")
      {return message.reply(
        `This command can only be used by VenomousSteam81#7772!`,
    );}
		message.guild.leave();
	},
};