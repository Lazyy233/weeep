const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
message.delete()
  
message.channel.send("Heres the invite! https://www.discord.gg/nCtRHn5")
  
  }



  module.exports.help = {
  name: "serverinvite"
}