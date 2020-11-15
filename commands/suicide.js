const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
message.delete()

message.channel.send('***'+message.author.username+' has committed suicide***');
      message.member.kick();
  }

 module.exports.help = {
  name: "suicide"
}