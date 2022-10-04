const client = require("..");
const { MessageEmbed } = require("discord.js");
const idconfig = require("../configs/idconfig.json");

client.on('messageCreate', async message => {
    if (message.author.bot) return;
		const attachment = message.attachments.first()
    if (message.channel.type === 'DM') {
				message.reply(`Hello. Your message has been logged for quality insurance`)

        const dmLogEmbed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`${message.author.tag} dmed me and said: `)
            .setDescription(message.content)
            .setFooter(`User's id: ${message.author.id}`)
        if (message.attachments.size !== 0) {
            dmLogEmbed.setImage(attachment.url)
        }
        client.channels.fetch(idconfig.dmChannelID).then((channel) => {
        channel.send({ embeds: [dmLogEmbed] })
      })
    }
});