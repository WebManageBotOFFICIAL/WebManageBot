/* eslint-disable no-undef */
const { Client } = require('..');
const fs = require('fs');

module.exports = (client) => {
    try {
        let command = 0;
        fs.readdirSync("./commands").forEach(cmd => {

            let commands = fs.readdirSync(`./commands/${cmd}/`).filter((file) => file.endsWith(".js"));
            for (cmds of commands) {
                let pull = require(`../commands/${cmd}/${cmds}`);
                if (pull.name) {
                    client.commands.set(pull.name, pull);
                    command++;
                } else {
                    console.log(`${cmds} Command is not ready; pCommand`);
                    continue;
                }
                if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));

            }
        });
        console.log(`${command}s were loaded!`);
    } catch (error) {
        console.log(error);
    }
};