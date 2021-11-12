// Credits:
// Physical Programming: Hyperz#0001
// Helpful Sources: discord.js.org, DiscordJS Discord Server
// Special Thanks: LukaGaming#8725 for help with presence & Monbrey#4502 with his MessageEmbed knowledge!
const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token, presname, prestype, presstatus, botimageurl, colorhex, serverinvite } = require('../config.json');
const ws = require('ws');
module.exports = {
    name: 'help',
    description: 'shows commands for the server!',
    execute(message, arg){
    const helpEmbed = new Discord.MessageEmbed()
    .setColor(colorhex)
    .setTitle(`Main Commands:`)
    .setURL(serverinvite)
    .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`, 'https://discord.gg/d5Wbegw')
    .setThumbnail(message.guild.iconURL())
    .addFields(
        { name: 'Bot Prefix:', value: `${prefix}`},
        { name: 'Help:', value: `Shows **all** the __available__ commands!`},
        { name: 'User:', value: `Shows user info on the message **author**!`},
        { name: 'Say:', value: `Deletes and resends a listed message **as the bot**!`},
        { name: 'Embed:', value: `Deletes and resends a listed message **as the bot** but as an embed!`},
        { name: 'Knock:', value: `Sends a knock knock joke from a list of jokes in the bot!`},
        { name: 'Suggest:', value: `Leave a suggestion for the server and what it can do to improve!`},
        { name: 'Invite:', value: `Sends an invite to the Developers Discord server!`},
        { name: 'Dice:', value: `Generates a RANDOM number, it is __not__ limited!`},
        { name: 'Avatar:', value: `Displays the __messaging members__ avatar!`},
        { name: 'Ping:', value: `Pings the bot, if successful it will respond with **"Pong!"**`},
        { name: 'Creator:', value: `Responds with the **__creator__** of the bot!`}, // You CANNOT Change The Creator Of The BOT!
    )
    .setTimestamp()
    .setFooter('MultiBot Built By Hyperz#0001', 'https://cdn.discordapp.com/attachments/776156820921384970/781370806580019200/hyperzlogotrans.png')
    
    message.channel.send(helpEmbed)
    
    const help2Embed = new Discord.MessageEmbed()
    .setColor(colorhex)
    .setTitle(`My Moderation Commands:`)
    .setURL(serverinvite)
    .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`, 'https://discord.gg/d5Wbegw')
    .setThumbnail(message.guild.iconURL())
    .addFields(
        { name: 'Kick:', value: `Kicks the **mentioned** member!`},
        { name: 'Ban:', value: `Bans the **mentioned** member!`},
        { name: 'Purge:', value: `**Deletes** the number specified messages from that channel!`},
        { name: 'Poll:', value: `**Creates** a yes / no poll for the server members to react to!`},
    )
    .setTimestamp()
    .setFooter('MultiBot Built By Hyperz#0001', 'https://cdn.discordapp.com/attachments/776156820921384970/781370806580019200/hyperzlogotrans.png')
    
    message.channel.send(help2Embed)
    
    const creatorEmbed = new Discord.MessageEmbed()
    .setColor(colorhex)
    .setTitle(`Bot Creator`)
    .setURL('https://github.com/itz-hyperz')
    .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`, 'https://github.com/itz-hyperz')
    .setDescription(`This Bot was **Coded / Programmed** __By__: Hyperz#0001 ( 704094587836301392 )`)
    .setThumbnail('https://cdn.discordapp.com/attachments/776156820921384970/781370806580019200/hyperzlogotrans.png')
    .setTimestamp()
    .setFooter('MultiBot Built By Hyperz#0001', 'https://cdn.discordapp.com/attachments/776156820921384970/781370806580019200/hyperzlogotrans.png')
    
    message.channel.send(creatorEmbed)
    }
}

// Credits:
// Physical Programming: Hyperz#0001
// Helpful Sources: discord.js.org, DiscordJS Discord Server
// Special Thanks: LukaGaming#8725 for help with presence & Monbrey#4502 with his MessageEmbed knowledge!
