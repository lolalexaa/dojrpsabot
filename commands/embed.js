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
    name: 'embed',
    description: 'Similar to the say command, but in an embedded format.',
    execute(message, args){
    const sayEmbed = new Discord.MessageEmbed()
    .setColor(colorhex)
    .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`, 'https://github.com/itz-hyperz')
    .setDescription(args.join(" "))
    .setTimestamp()
    .setFooter('MultiBot Built By Hyperz#0001', 'https://cdn.discordapp.com/attachments/776156820921384970/781370806580019200/hyperzlogotrans.png')
    
    message.delete().catch(err => console.log(err));
    message.channel.send(sayEmbed)
    }
}

// Credits:
// Physical Programming: Hyperz#0001
// Helpful Sources: discord.js.org, DiscordJS Discord Server
// Special Thanks: LukaGaming#8725 for help with presence & Monbrey#4502 with his MessageEmbed knowledge!
