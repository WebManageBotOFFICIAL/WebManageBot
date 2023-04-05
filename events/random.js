const client = require('..');

client.on('ready', () => {
 setInterval(() => {
   const randomMessage = Math.floor(Math.random() * messages.length);
   client.channels.cache.get("1093216937938522113").send(messages[randomMessage]);
 }, 1000* 60* 60) // 1 hour
});
