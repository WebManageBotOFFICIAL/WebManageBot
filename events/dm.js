const client = require("..");
const { MessageEmbed } = require("discord.js");

client.on('messageCreate', async message => {
    if (message.author.bot) return;
    const attachment = message.attachments.first()
    if (message.channel.type === 'DM') {
        console.log(message.content)

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