const client = require('..');

// special defs
const defaultPrefix = process.env.defaultPrefix;
const guilds = client.guilds.cache.size;
const guildUsers = client.users.cache.size;

// const config = require('../configs/config.json');

const activities = [
	`for the ${defaultPrefix}help command`,
//	`${guilds} servers`,
//	`${guildUsers} members`,
	"my code on github",
	"index.js",
	"dank memes",
	"gamers game",
	"...",
	"undefined",
	"for mentions",
	"javascript",
	"the air",
	"all the errors",
	"loading...",
];

client.on("ready", () => {
  setInterval(() => {
    const randomIndex = Math.floor(Math.random() * (activities.length - 1) + 1);
    const newActivity = activities[randomIndex];

    client.user.setActivity(newActivity, { type: 'WATCHING' });
  }, 5000);
});
