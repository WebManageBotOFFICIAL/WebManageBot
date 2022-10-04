const { Message, MessageEmbed, Collection } = require('discord.js');
const idConfig = require('../../configs/idconfig.json');

module.exports = {
    name: 'logger',
    description: 'Set up logging in your Discord server',
    userPerms: ["MANAGE_SERVER"],
    botPerms: ["MANAGE_NICKNAMES"],
    run: async (client, message, args) => {
        const infoEmbed = new MessageEmbed()
          .setTitle('ALERT!')
          .setDescription(`As of right now, to use my logging features, you need to make a channel called ${idconfig.logOldChannelName}`);
          
        message.reply({ embeds: [infoEmbed]});
    }
}