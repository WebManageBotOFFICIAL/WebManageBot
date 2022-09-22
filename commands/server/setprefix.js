const Database = require("@replit/database");
const prefixes = new Database();
const defaultPrefix = require('../../configs/config.json');

module.exports = {
  name: "setprefix",
	description: "Set this server's prefix",
  run: (client, message, args) => {
		if(args[0]) {
      prefixes.set(message.guild.id, args[0]).then(() => { message.channel.send(`Set the prefix as \`${args[0]}\``)
			})
    } 
    else {
      prefixes.set(message.guild.id, config.defaultPrefix).then(() => { message.channel.send(`Set the prefix as ${config.defaultPrefix}`)
			})
    }
  }
};
