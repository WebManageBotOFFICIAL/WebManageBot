const client = require("..");
const { MessageEmbed } = require("discord.js");

client.on('messageCreate', async message => {
    if (message.author.bot) return;
		const attachment = message.attachments.first()
/*	
	const randomReply = [
	"Did I ask you?",
	"Byebye",
	"Did you know? VenomousSteam81 collects these DMs, except for my messages so there aren't any infinite loops"
	];

		
		const randomMessage = Math.floor(Math.random() * (randomReply.length - 1) + 1);
		const randomDM = [randomMessage];
*/ //for a later date...
    if (message.channel.type === 'DM') {
        console.log(message.author.tag+message.content)
				message.reply(`Hello. Your message has been logged for quality insurance`)

        const dmLogEmbed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`${message.author.tag} dmed me and said: `)
            .setDescription(message.content)
            .setFooter(`User's id: ${message.author.id}`)
        if (message.attachments.size !== 0) {
            dmLogEmbed.setImage(attachment.url)
        }
        client.channels.fetch("1009934726489968800").then((channel) => {
        channel.send({ embeds: [dmLogEmbed] })
      })
    }
});