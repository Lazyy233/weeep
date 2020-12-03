const Discord = require('discord.js')



module.exports.run = async (bot, message, args) => { 
 
 let person = getMember(message, args[0]);

        if (!person || message.author.id === person.id) {
            person = message.guild.members
                .filter(m => m.id !== message.author.id)
                .random();
        }

        const love = Math.random() * 100;
        const loveIndex = Math.floor(love / 10);
        const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex);

        const embed = new RichEmbed()
            .setColor("#ffb6c1")
            .addField(`☁ **${person.displayName}** loves **${message.member.displayName}** this much:`,
            `💟 ${Math.floor(love)}%\n\n${loveLevel}`);
 
    }
module.exports.help = {
  name: "report"
}
