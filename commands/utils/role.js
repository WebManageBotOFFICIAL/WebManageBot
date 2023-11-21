const {
	Client,
	Message,
	MessageEmbed,
	Formatters,
} = require("discord.js");

module.exports = {
	name: "role",
	description: "role",
	aliases: "role",
	run: async (client, message) => {
  if (message.author.id !== "1171815351487565894")
	{return message.reply(
     `This command can only be used by vsteam82!`,
	);}
    const member = message.mentions.members.first();
    let testRole = message.guild.roles.cache.find(role => role.id == "819629351939211356");
    member.roles.add(testRole);
	},
};
