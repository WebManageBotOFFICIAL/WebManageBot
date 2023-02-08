module.exports = {
	name: "say",
	description: "Make me repeat what you want me to say",
	usage: "say <message>",
		run: async (client, message, args) => {
			const say = args.join(" ");
			if (!say) return message.reply('There were no commands given!');
			if (say.includes("@everyone")) {
  				message.reply("The string contains '\@everyone'. Please don't do that!");
			} else {
			try {
				message.channel.send(say);
			}
		}
	},
};
