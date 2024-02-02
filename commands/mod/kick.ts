const discord = module.require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "kick",
	description: "Kick the bad user with one shot",
	usage: "kick <@user> <reason>",
	userPerms: ["KICK_MEMBERS"],
	botPerms: ["KICK_MEMBERS"],
	run: async (client, message, args) => {

		let target = message.mentions.members.first() || message.guild.users.cache.get(args[0]);

		if (!target) {
			return message.channel.send(
				`**${message.author.username}**, Please mention the person who you want to kick`,
			);
		}
		if (target.id === message.guild.ownerId) {
			return message.channel.send("You cannot kick the Server Owner");
		}
		if (target.id === message.author.id) {
			return message.channel.send(
				`**${message.author.username}**, You can not kick yourself`,
			);
		}

		let reason = args.slice(1).join(" ");
		if (!reason) reason = "Was kicked. Possibly a bad user?";

		const embed = new MessageEmbed()
			.setTitle("KICK MEMBER")
			.setColor("RANDOM")
			.setThumbnail(target.user.displayAvatarURL)
			.setDescription(
				`Action : Kick \nReason: ${reason} \nUser: ${target} \nModerator: ${message.member}`,
			)
			.setTimestamp();

		message.channel.send({ embeds: [embed] });

		target.kick(args[0]);
	},
};