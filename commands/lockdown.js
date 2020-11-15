const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
message.delete()

if (!bot.lockit) bot.lockit = [];
if (!message.member.hasPermission("MANAGE_CHANNELS")) return msg.reply("❌**Error:** You don't have the permission to do that!");

  message.channel.createOverwrite(message.guild.id, {
      SEND_MESSAGES: false
    })
      message.channel.send(`Damnn, **${message.author.username}** just locked the channel down. Don't worry, Admins will soon open the chat again so be patient.`);
}

module.exports.help = {
  name: "lockdown"
}