const client = require('..');
const Discord = require('discord.js');
const webhookClient = new Discord.WebhookClient({ url: process.env.ratelimitWebhook_url });

client.on("rateLimit", data => {
	const embed = new Discord.MessageEmbed()
		.setTitle('Ratelimit')
		.setDescription('WebManageBot hit a ratelimit!')
		.addFields(
			{ name: 'Date and Time', value: `${Date.now}`, inline: true },
			{ name: 'Data Timeout', value: `${data.timeout}`, inline: true },
		)
		.setColor(random);
	
  if (data.timeout > 1000) process.kill(1),
		webhookClient.send({
			content: ``,
			username: 'Ratelimit',
			embeds: [embed],
	});
});