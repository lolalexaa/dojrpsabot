// Credits:
// Physical Programming: Hyperz#0001
// Helpful Sources: discord.js.org, DiscordJS Discord Server
// Special Thanks: LukaGaming#8725 for help with presence & Monbrey#4502 with his MessageEmbed knowledge!

// DONT TOUCH ANY OF THIS CODE

const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token, preschangetimer, presname1, prestype1, presstatus1, presname2, prestype2, presstatus2, presname3, prestype3, presstatus3, botimageurl, colorhex, serverinvite, voicechanneltojoin, memberrolename, userjoinchannel, userleavechannel } = require('./config.json');
const ws = require('ws');
const { error } = require('console');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('ready', () => {
	console.log(`\x1b[36m ${String.raw` ________               ________`} \x1b[0m`);
	console.log(`\x1b[36m ${String.raw`|        |             |        |`} \x1b[0m`);
	console.log(`\x1b[36m ${String.raw`|        |             |        |`} \x1b[0m`);
	console.log(`\x1b[36m ${String.raw`|        |             |        |`} \x1b[0m`);
	console.log(`\x1b[36m ${String.raw`|        |             |        |`} \x1b[0m`);
	console.log(`\x1b[36m ${String.raw`|        |             |        |`} \x1b[0m`);
	console.log(`\x1b[36m ${String.raw`|        |_____________|        |`} \x1b[0m`);
  console.log(`\x1b[36m ${String.raw`|                               |`} \x1b[0m`);
  console.log(`\x1b[36m ${String.raw`|           MultiBot            |`} \x1b[0m`);
  console.log(`\x1b[36m ${String.raw`|          Hyperz#0001          |`} \x1b[0m`);
  console.log(`\x1b[36m ${String.raw`|         _____________         |`} \x1b[0m`);
  console.log(`\x1b[36m ${String.raw`|        |             |        |`} \x1b[0m`);
  console.log(`\x1b[36m ${String.raw`|        |             |        |`} \x1b[0m`);
  console.log(`\x1b[36m ${String.raw`|        |             |        |`} \x1b[0m`);
  console.log(`\x1b[36m ${String.raw`|        |             |        |`} \x1b[0m`);
  console.log(`\x1b[36m ${String.raw`|        |             |        |`} \x1b[0m`);
  console.log(`\x1b[36m ${String.raw`|        |             |        |`} \x1b[0m`);
  console.log(`\x1b[36m ${String.raw`|________|             |________|`} \x1b[0m`);
  console.log(`\x1b[36m ${String.raw` `} \x1b[0m`);
  console.log(`\x1b[36m ${String.raw`https://www.hyperz.dev/`} \x1b[0m`);
  console.log(`\x1b[36m ${String.raw` `} \x1b[0m`);
});

// Here is where you can set the bots status!
client.on('ready', () => {
let statuses = [
    {activity: { name: `${presname1}`, type: `${prestype1}` }, status: `${presstatus1}` },
    {activity: { name: `${presname2}`, type: `${prestype2}` }, status: `${presstatus2}` },
    {activity: { name: `${presname3}`, type: `${prestype3}` }, status: `${presstatus3}` }
];
// Fucking Hate Intervals
let i = 0;
setInterval(() => {
     let status = statuses[i];
     if(!status){
         status = statuses[0];
         i = 0;
     }
     client.user.setPresence(status);
     i++;
}, preschangetimer);

// Connects to the voice channel ID in config.json
  const channel = client.channels.cache.get(voicechanneltojoin);
if (!channel) return console.error("The voice channel does not exist (change config voicechanneltojoin)!");
channel.join().then(connection => {
  console.log("Successfully connected to the voice channel!");
}).catch(e => {
  console.error(e);
});
// Tells you the bot is online & ready in the console!
console.log(`${client.user.tag}, By Hyperz#0001 is now READY!`);
});

// My command handler (its really basic, shut up, I know...)
client.on('message', message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if(command === 'ping'){
      client.commands.get('ping').execute(message, args);
  } else if (command == 'creator'){
      client.commands.get('creator').execute(message, args);
  } else if (command == 'user'){
    client.commands.get('user').execute(message, args);
  } else if (command == 'help'){
    client.commands.get('help').execute(message, args);
  } else if (command == 'kick'){
    client.commands.get('kick').execute(message, args);
  } else if (command == 'ban'){
    client.commands.get('ban').execute(message, args);
  } else if (command == 'purge'){
    client.commands.get('purge').execute(message, args);
  } else if (command == 'avatar'){
    client.commands.get('avatar').execute(message, args);
  } else if (command == 'dice'){
    client.commands.get('dice').execute(message, args);
  } else if (command == 'invite'){
    client.commands.get('invite').execute(message, args);
  } else if (command == 'embed'){
    client.commands.get('embed').execute(message, args);
  } else if (command == 'poll'){
    client.commands.get('poll').execute(message, args);
  } else if (command == 'version'){
    client.commands.get('version').execute(message, args);
  } else if (command == 'say'){
    client.commands.get('say').execute(message, args);
  } else if (command == 'suggest'){
    client.commands.get('suggest').execute(message, args);
  } else if (command == 'getrandyoutofhererightnowcommand'){
    client.commands.get('ban').execute(message, args);
  }
});

// Knock Knock jokes are here... (yeah, I know, mega cringe...)
var jokes = [
    { name: 'Dozen', answer: 'anybody want to let me in?' },
    { name: 'Avenue', answer: 'knocked on this door before?' },
    { name: 'Ice Cream', answer: 'if you don\'t let me in!' },
    { name: 'Adore', answer: 'is between us. Open up!' },
    { name: 'Lettuce', answer: 'in. Its cold out here!' },
    { name: 'Bed', answer: 'you can not guess who I am.' },
    { name: 'Al', answer: 'give you a kiss if you open the door.' },
    { name: 'Olive', answer: 'you!' },
    { name: 'Abby', answer: 'birthday to you!' },
    { name: 'Rufus', answer: 'the most important part of your house.' },
    { name: 'Cheese', answer: 'a cute girl.' },
    { name: 'Wanda', answer: 'hang out with me right now?' },
    { name: 'Ho-ho.', answer: 'You know, your Santa impression could use a little work.' },
    { name: 'Mary and Abbey.', answer: 'Mary Christmas and Abbey New Year!' },
    { name: 'Carmen', answer: 'let me in already!' },
    { name: 'Ya', answer: 'I’m excited to see you too!' },
    { name: 'Scold', answer: 'outside—let me in!' },
    { name: 'Robin', answer: 'you! Hand over your cash!' },
    { name: 'Irish', answer: 'you a Merry Christmas!' },
    { name: 'Otto', answer: 'know whats taking you so long!' },
    { name: 'Needle', answer: 'little help gettin in the door.' },
    { name: 'Luke', answer: 'through the keyhole to see!' },
    { name: 'Justin', answer: 'the neighborhood and thought Id come over.' },
    { name: 'Europe', answer: 'No, you are a poo' },
    { name: 'To', answer: 'To Whom.' },
    { name: 'Etch', answer: 'Bless You!' },
    { name: 'Mikey', answer: 'doesnt fit through this keyhole' }
]

// Choosing a random joke ones listed above!
var knock = function() {
    var joke = jokes[Math.floor(Math.random() * jokes.length)]
    return formatJoke(joke)
}

// Properly formatting this joke!
function formatJoke(joke) {
    return [
        'Knock, knock.',
        'Who’s there?',
        joke.name + '.',
        joke.name + ' who?',
        joke.name + ' ' + joke.answer
    ].join('\n')
}

// The (prefix)knock command!
client.on('message', (message) => {
    if (message.content.includes(`${prefix}knock`)) {
        const msg = message.content.split(' ');

            message.reply(knock());
       
    }
});

client.on('guildMemberAdd', guildMember =>{
  let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === memberrolename);

  guildMember.roles.add(welcomeRole);
  guildMember.guild.channels.cache.get(userjoinchannel).send(`Welcome <@${guildMember.user.id}> to the server!`)
});

client.on('guildMemberRemove', guildMember2 =>{
  guildMember2.guild.channels.cache.get(userleavechannel).send(`Unfortunatly, <@${guildMember2.user.id}> has just left the server!`)
});

client.on('message', message => {
let whatever = ('no u.')
  if (message.content.includes('EZFLOW')) {
  message.channel.send('<@547684225336213505> is a fucking king, he is one of my favorite people!');
  } else if (message.content.includes('Jellybeans')) {
  message.channel.send('<@328731272497201154> is a cool kid.');
  } else if (message.content.includes('Hyperz')) {
  message.channel.send('<@704094587836301392> is fucking amazing, literally change my mind, oh wait, you cant because he programmed me into saying this regardless of what my bot brain actually thinks... POGGERS!');
  } else if (message.content.includes('am I')) {
  message.channel.send('Hell Yes...');
  } else if (message.content.includes('shit bot')) {
  message.channel.send(whatever);
  } else if (message.content.includes('abcdefghijklmnopqrstuvwxyz')) {
  message.channel.send('I was __created__ by: <@704094587836301392>');
  } else if (message.content.includes(`you're gay`)) {
  message.channel.send(whatever);
  } else if (message.content.includes('fuck you')) {
  message.channel.send(whatever);
  }
  
  });

client.on('ready', () => {
  console.log(`Please allow me 1 Minute to enable my configuration!`);
});

// Logs the bot in
client.login(token);

// Credits:
// Physical Programming: Hyperz#0001
// Helpful Sources: discord.js.org, DiscordJS Discord Server
// Special Thanks: LukaGaming#8725 for help with presence & Monbrey#4502 with his MessageEmbed knowledge!
