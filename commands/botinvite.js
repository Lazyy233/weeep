const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
 message.delete()

message.channel.send("Here is the link! https://discord.com/api/oauth2/authorize?client_id=753789476278370304&permissions=8&scope=bot")
  
  
  
  }



  module.exports.help = {
  name: "botinvite"
}