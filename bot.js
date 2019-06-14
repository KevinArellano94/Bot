const Discord = require("discord.js");
const client = new Discord.Client();
const auth = require("./auth.json");

client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("pong");
  }
});

client.login(auth.token);
