const Discord = require("discord.js");
const {
  Client,
  Message,
  Collection,
  Intents,
} = require("discord.js");
const libcurl = require('libcurl.js');

module.exports = {
  name: "curl",
  description: "use libcurl.js",
  run: async (client, message, args) => {
		if (message.author.id !== "585251212321095690")
      {return message.reply(
        `This command can only be used by VenomousSteam81#7772!`,
    );}
    const url = args.slice(0);
    if (!url)
		{return message.channel.send("Please specify a URL");}
    let r = await libcurl.fetch(`${url}`);
    message.reply(r.text());
	},
};