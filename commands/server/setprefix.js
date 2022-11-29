// const Database = require("@replit/database");
// const prefixes = new Database();

module.exports = {
  name: "setprefix",
	description: "Set this server's prefix",
  run: (client, message, args) => {
		if (args[0]) {
      // prefixes.set(message.guild.id, args[0]).then(() => { message.channel.send(`Set the prefix as ${args[0]}`)})
      message.reply('Sorry, doesn\'t work at this time');
    }
    else {
      // return message.channel.send("Please provide a prefix.");
      message.reply('Sorry, doesn\'t work at this time');
    }
  },
};

