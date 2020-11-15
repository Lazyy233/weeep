const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

  await message.delete()
const msg = await message.channel.send('Ping?');
	msg.edit(`Pong! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms`);
};
//name this whatever the command name is.
module.exports.help = {
  name: "ping"
}