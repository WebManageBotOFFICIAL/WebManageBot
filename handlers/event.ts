/* eslint-disable no-shadow */
const { Client } = require('..');
const fs = require('fs');

module.exports = (client) => {
  try {
      fs.readdirSync("./events/").forEach((file) => {
          const events = fs.readdirSync("./events/").filter((file) =>
            file.endsWith(".ts"),
          );
          for (let file of events) {
            let pull = require(`../events/${file}`);
            if (pull.name) {
              client.events.set(pull.name, pull);
            }
          }
          console.log((`${file} Events Loaded Successfully`));
        });
  } catch (e) {
      console.log(e);
  }
};