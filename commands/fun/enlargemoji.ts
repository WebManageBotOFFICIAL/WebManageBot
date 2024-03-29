const Discord = require("discord.js");
const { parse } = require("twemoji-parser");
const { MessageEmbed } = require("discord.js");
const Color = `#ffffff`;

module.exports = {
  name: "enlargemoji",
	aliases: "ee",
  description: "Converting server emojis to PNG/GIF files",
  usage: "enlargemoji <emoji>",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    const authoravatar = message.author.avatarURL();
    const emoji = args[0];
    if (!emoji) return message.channel.send(`Please Give Me A Emoji!`);

    let customemoji = Discord.Util.parseEmoji(emoji);

    if (customemoji.id) {
      const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${
        customemoji.animated ? "gif" : "png"
      }`;

      const Added = new MessageEmbed()
        .setAuthor(`Enlarged Emoji`, authoravatar)
        .setColor(`${Color}`)
        .setDescription(`\`${customemoji.name}\` \`${customemoji.id}\``)
        .setImage(Link);
      return message.channel.send({ embeds: [Added] });
    } else {
      let CheckEmoji = parse(emoji, { assetType: "png" });
      if (!CheckEmoji[0])
        {return message.channel.send(`Please Give Me A Valid Emoji!`);}
      message.channel.send(
        `You Can Use Normal Emoji Without Adding In Server!`,
      );
    }
  },
};