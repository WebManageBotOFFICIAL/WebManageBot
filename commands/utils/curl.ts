const Discord = require("discord.js");
const { Client, Message, Collection, Intents } = require("discord.js");
// const libcurl = require('libcurl.js');
// import libcurl from 'libcurl.js';
// import * as libcurl from '../../node_modules/libcurl.js/libcurl.mjs';

module.exports = {
  name: "curl",
  description: "use libcurl.js",
  run: async (client, message, args) => {
    let libcurl = await import('../../node_modules/libcurl.js/libcurl.mjs');
		if (message.author.id !== "585251212321095690")
      {
        return message.reply(`This command can only be used by vsteam81!`);
    }
    const url = args.slice(0);
    if (!url)
		{
      return message.reply(`Please specify a URL`);
    }
    let r = await libcurl.fetch(`${url}`);
    message.reply(r.text());
	},
};