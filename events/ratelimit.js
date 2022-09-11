const client = require('..');

const Errorhandler = require('discord-error-handler');
const handle = new Errorhandler(client, {
	webhook: { id: process.env.webhook_id, token: process.env.webhook_token },
});

client.on("rateLimit", data => {
  if (data.timeout > 1000) process.kill(1),
	handle.createrr("WebManageBot hit a ratelimit!", data.timeout, date.now);
});