const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
message.delete()
  
  const botinfo = new Discord.MessageEmbed()
	.setColor('#5401a7')
	.setTitle('Bot Info')
	.setAuthor('Weep', 'https://cdn.discordapp.com/avatars/753789476278370304/080b8152a52f54a002f6e610032eca5f.png?size=1024', 'https://discord.gg/nCtRHn5')
	.setDescription("Weep is a bot made by @Lazyy#7933. It is made to assist in moderating servers, and also to entertain community members with fun commands! DM Lazyy#7933 for any questions!")
	.setThumbnail('https://cdn.discordapp.com/avatars/753789476278370304/080b8152a52f54a002f6e610032eca5f.png?size=900')
	.setImage('https://cdn.discordapp.com/avatars/753789476278370304/080b8152a52f54a002f6e610032eca5f.png?size=1024')
	.setTimestamp()
	.setFooter('Bot made by Lazyy#7933', 'https://cdn.discordapp.com/avatars/753789476278370304/080b8152a52f54a002f6e610032eca5f.png?size=1024');

message.channel.send(botinfo);

}



  module.exports.help = {
  name: "botinfo"
}