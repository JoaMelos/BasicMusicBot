const discord = require("discord.js");
const client = new discord.Client();
const { readdirSync } = require("fs");
const weather = require('weather-js');
const { join } = require("path");
const config = require("./config.json");
const prefix = config.json;

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("music bot !help")
})
 client.on("message", async message => {
if (message.author.bot) return;
  if (message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content
    .slice(config.prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();
  const { Permissions } = require("discord.js");
  const permissions = new Permissions([
    "MANAGE_CHANNELS",
    "EMBED_LINKS",
    "ATTACH_FILES",
    "READ_MESSAGE_HISTORY",
    "MANAGE_ROLES",
    "ADMINISTRATOR",
    "BAN_MEMBERS",
    "KICK_MEMBERS",
    "MANAGE_GUILD",
    "VIEW_AUDIT_LOG",
    "MANAGE_NICKNAMES",
    "MANAGE_WEBHOOKS",
    "MANAGE_MESSAGES",
    "ADD_REACTIONS",
    "CONNECT",
    "SPEAK",
    "MUTE_MEMBERS",
    "DEAFEN_MEMBERS",
    "SEND_MESSAGES",
    "CREATE_INSTANT_INVITE"
  ]);
  if (command === "help1") {
    let embed = new discord.MessageEmbed()
      .setAuthor(
        `Help`,
        `https://media.discordapp.net/attachments/706156735739723827/706909705460777050/output-onlinepngtools.png`
      )
      .addFields(
        { name: "purge/p", value: "purge messages", inline: true },
        { name: "ban/b", value: "ban someone", inline: true },
        { name: "kick/k", value: "Kick someone", inline: true },
        {name: "unban/ub",value: "Unban someone [USE THEIR ID]", inline: true},

        { name: "warn", value: "warn someone", inline: true }
      )
      .setColor(`#ee2782`);
    message.channel.send(embed);
  }
});
