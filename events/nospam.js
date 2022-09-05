const client = require("..")
const AntiSpam = require("@devraelfreeze/discordjs-antispam");
const AntiSpamConfig = require('../configs/asconfig.json');

const antiSpam = new AntiSpam(client, {
	antispamFilter: {
		enabled: true,
		thresholds: {
			warn: 4,
			mute: 8,
			kick: 16,
			ban: 32
		},
		maxDuplicates: {
			warn: 4,
			mute: 6,
			kick: 8,
			ban: 10
		},
		maxInterval: 3000,
		maxDuplicatesInterval: 1000,
	},
	linksFilter: {
		enabled: false,
		globalLinksFilter: false,
		discordInviteLinksFilter: false,
		customLinksFilter: false,
		typeSanction: 'warn'
	},
	unMuteTime: 10,
	deleteMessagesAfterBanForPastDays: 1,
	verbose: true,
	debug: false,
	removeMessages: true
});

client.on("ready", () =>
	console.log(
		`Logged in as ${client.user.tag}.`
	));
client.on("messageCreate", async (message) => {
	if (!message.guild) return;
	if (message.author.bot) return;
	try {
		/** Add message in cache */
		await antiSpam.addMessagesCache(message); // You must do this if you want to use antispamFilter System
		await antiSpam.messageAntiSpam(message);
	} catch (error) {
		console.log(error);
	}
});