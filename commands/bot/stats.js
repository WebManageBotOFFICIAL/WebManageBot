const { MessageEmbed } = require('discord.js');
const moment = require('moment');
const { mem, cpu, os } = require('node-os-utils');
const { stripIndent } = require('common-tags');
const config = require('../../configs/config.json');

module.exports = {
	name: "stats",
	aliases: [ "botinfo", "status", "debug", "deb" ],
	description: 'Show my \`status\`',
	run: async (client, message, args, prefix) => {
		let ramUsage = process.memoryUsage().heapUsed / 1024;
		const d = moment.duration(message.client.uptime);
		const days = (d.days() == 1) ? `${d.days()} day` : `${d.days()} days`;
		const hours = (d.hours() == 1) ? `${d.hours()} hour` : `${d.hours()} hours`;
		const minutes = (d.minutes() == 1) ? `${d.minutes()} minute` : `${d.minutes()} minutes`;
		const mainStats = stripIndent`
	  	  Owner      :: VenomousSteam81
	  	  Host       :: [Railway-Hosting](https://railway.app/)
	  	  Prefix     :: ${config.defaultPrefix}
	   `;
		const clientStats = stripIndent`
          Servers    :: ${message.client.guilds.cache.size}
          Users      :: ${message.client.users.cache.size}
          Channels   :: ${message.client.channels.cache.size}
          WS Ping    :: ${Math.round(message.client.ws.ping)}ms
          Uptime     :: ${days}, ${hours}, ${minutes}
       `;
		const { totalMemMb, usedMemMb } = await mem.info();
		const serverStats = stripIndent`
          OS         :: ${await os.oos()}
          Cores      :: ${cpu.count()}
          CPU Usage  :: ${await cpu.usage()} %
          RAM        :: ${totalMemMb} MB
          RAM Usage  :: ${ramUsage} MB
       `;
		const debugInfo = stripIndent`
		  GIT Branch :: ${process.env.RAILWAY_GIT_BRANCH}
		  GIT Owner  :: ${process.env.RAILWAY_GIT_REPO_OWNER}
		  GIT Commit :: ${process.env.RAILWAY_GIT_COMMIT_MESSAGE}
		  Environment:: ${process.env.RAILWAY_ENVIRONMENT}
	   `;
    	const links = stripIndent`
      	  GitHub     :: [WebManageBot](https://github.com/WebManageBotOFFICIAL/WebManageBot)
    	`;

		const embed = new MessageEmbed()
			.setTitle('Bot\'s Statistics')
			.addField('Commands', `\`${message.client.commands.size}\` commands`, true)
			.addField('Aliases', `\`${message.client.aliases.size}\` aliases`, true)
			.addField('Main', `\`\`\`asciidoc\n${mainStats}\`\`\``)
			.addField('Client', `\`\`\`asciidoc\n${clientStats}\`\`\``)
			.addField('Server', `\`\`\`asciidoc\n${serverStats}\`\`\``)
			.addField('Debug Info', `\`\`\`asciidoc\n${debugInfo}\`\`\``)
      		.addField('Links', `${links}`)
			.setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
			.setTimestamp()
			.setColor(message.guild.me.displayHexColor);
		message.channel.send({ embeds: [embed] });
	},
};
