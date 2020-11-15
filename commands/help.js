const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
message.delete()

message.channel.send("A DM has been sent!")
message.author.send("**Here are all the commands:** | avatar | ban | botinfo | botinvite | dm | help | kick | lockdown | ping | purge | serverinfo | serverinvite | suicide | unlockdown")
  
  
  
  }



  module.exports.help = {
  name: "help"
}