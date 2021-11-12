// Credits:
// Physical Programming: Hyperz#0001
// Helpful Sources: discord.js.org, DiscordJS Discord Server
// Special Thanks: LukaGaming#8725 for help with presence & Monbrey#4502 with his MessageEmbed knowledge!
const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token, presname, prestype, presstatus, botimageurl, colorhex, serverinvite } = require('../config.json');
const ws = require('ws');
const client = new Discord.Client();
module.exports = {
    name: 'version',
    description: 'Displays the version of the bot',
    execute(message, arg){
    const versionEmbed = new Discord.MessageEmbed()
    .setColor(colorhex)
    .setTitle(`Bot Version`)
    .setURL('https://github.com/itz-hyperz')
    .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`, 'https://github.com/itz-hyperz')
    .setDescription(`This Bots **Active Version is:** __1.3__`)
    .setThumbnail('https://cdn.discordapp.com/attachments/763916287125749792/772565952583827476/logo.png')
    .setTimestamp()
    .setFooter('MultiBot Built By Hyperz#0001', 'https://cdn.discordapp.com/attachments/763916287125749792/772565952583827476/logo.png')
    
    message.channel.send(versionEmbed)
    }
}

// Credits:
// Physical Programming: Hyperz#0001
// Helpful Sources: discord.js.org, DiscordJS Discord Server
// Special Thanks: LukaGaming#8725 for help with presence & Monbrey#4502 with his MessageEmbed knowledge!