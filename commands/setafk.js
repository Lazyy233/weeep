const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
message.delete()


const setStatus = message.content.split(' ');

    if(setStatus[1] === 'afk'){
        bot.user.setAFK(true);
        message.channel.send("Your status has been set to afk!");
    }

    else if(setStatus[1] === 'notafk'){
        bot.user.setAFK(false);
        message.channel.send(`Welcome back ${message.author}`);
    }

    else if(!setStatus[1] || setStatus[1] === undefined){
        message.channel.send("You did not choose afk or notafk as current status!");
    }

    else{
        message.channel.send("You did not choose afk or notafk as current status!");
    }

}

module.exports.help = {
  name: "setafk"
}
