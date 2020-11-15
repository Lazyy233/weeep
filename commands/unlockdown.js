 const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
message.delete()
 
 if (!bot.lockit) bot.lockit = [];
  //if (!message.member.hasPermission("MANAGE_CHANNELS")) return msg.reply("❌**Error:** You don't have the permission to do that!");

    message.channel.createOverwrite(message.guild.id, {
      SEND_MESSAGES: null
    }).then(() => {
      message.channel.send('Lockdown lifted <a:white_check_mark:556017659419033653> WEEEEEEEEEEEEEEEEEEEEEE, enjoy talking while you still can:wink:');
      delete bot.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    })

}

 module.exports.help = {
  name: "unlockdown"
}