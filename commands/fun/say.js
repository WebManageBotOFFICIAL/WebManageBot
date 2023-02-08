module.exports = {
	name: "say",
	description: "Make me repeat what you want me to say",
	usage: "say <message>",
		run: async (client, message, args) => {
			const say = args.join(" ");
			if (!say) return message.reply('There were no commands given!');
			if (say.includes("@everyone")) {
  				message.reply("The string contains '@everyone'. Please don't try to do that!");
			}
    try {
			message.channel.send(say);
		} catch (error) {
			console.error(error);
			message.channel.send(error);
		}
  },
};
