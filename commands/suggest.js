// Credits:
// Physical Programming: Hyperz#0001
// Helpful Sources: discord.js.org, DiscordJS Discord Server
// Special Thanks: LukaGaming#8725 for help with presence & Monbrey#4502 with his MessageEmbed knowledge!
const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token, presname, prestype, presstatus, botimageurl, colorhex, serverinvite, voicechanneltojoin, suggestionschannelid, memberrolename, userjoinchannel, userleavechannel } = require('../config.json');
const ws = require('ws');
module.exports = {
    name: 'suggest',
    description: 'sends suggestions to a specified channel!',
    execute(message, args){
        message.channel.send("We have recieved your suggestion, please be patient and a staff member will review it soon!")

        message.guild.channels.cache.get(suggestionschannelid).send(`**New suggestion from,** <@${message.author.id}>: ${args.join(" ")}`)
        
        message.delete().catch(err => console.log(err));
    }
}

// Credits:
// Physical Programming: Hyperz#0001
// Helpful Sources: discord.js.org, DiscordJS Discord Server
// Special Thanks: LukaGaming#8725 for help with presence & Monbrey#4502 with his MessageEmbed knowledge!