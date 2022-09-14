const client = require('..');

client.on("rateLimit", data => {
  if (data.timeout > 1000) process.kill(1);
});