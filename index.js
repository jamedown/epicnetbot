const Discord = require("discord.js");
const moment = require("moment");
const fs = require('fs');
const got = require('got');
const DIG = require("discord-image-generation");
const client = new Discord.Client();
client.setMaxListeners(0);
require('dotenv').config();
const { prefix } = require(`./config.json`);
//cooldown
const talkedRecently = new Set();
//cooldown

///// console [On]
client.on("ready", () => {
client.user.setActivity(`${prefix}help`)
console.log(`Epic Bot ON`)})
/////help
  client.on("message", function(message) {
    if (message.content.startsWith(prefix + "help")) {
      if (message.channel.type == "dm") return;
      let messageArgs = message.content.split(" ").slice(1).join(" ");
      let messageRPS = message.content.split(" ").slice(2).join(" ");
      let arrayRPS = ['**# - Rock**', '**# - Paper**', '**# - Scissors**', '**# - Haha**'];
      let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
      let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(message.author.username)
        .setThumbnail(message.author.avatarURL)
        .addField("General", "💬", true)
        .addField("Admins", "🛠️", true)
        .addField("FUN", "✨", true)
        .addField("Other", "🔣", true)
      message.channel.send(embed).then(msg => {
        msg.react('💬')
        msg.react('🛠️')
        msg.react('✨')
        msg.react('🔣')
          .then(() => msg.react('💬'))
          .then(() => msg.react('🛠️'))
          .then(() => msg.react('✨'))
          .then(() => msg.react('🔣'))
        let reaction1Filter = (reaction, user) => reaction.emoji.name === '💬' && user.id === message.author.id;
        let reaction2Filter = (reaction, user) => reaction.emoji.name === '🛠️' && user.id === message.author.id;
        let reaction3Filter = (reaction, user) => reaction.emoji.name === '✨' && user.id === message.author.id;
        let reaction4Filter = (reaction, user) => reaction.emoji.name === '🔣' && user.id === message.author.id;
        let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 20000 });
        let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 19000 });
        let reaction3 = msg.createReactionCollector(reaction3Filter, { time: 18000 });
        let reaction4 = msg.createReactionCollector(reaction4Filter, { time: 17000 });
        reaction1.on("collect", r => {
          const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .addField(`**1️⃣ User Info :**`, `**\`${prefix}user\`**`, true)
            .addField(`**2️⃣ User id :**`, `**\`${prefix}id\`**`, true)
            .addField(`**3️⃣ User Avatar :**`, `**\`${prefix}avatar\`**`, true)
            .addField(`**4️⃣ Server Info :**`, `**\`${prefix}server\`**`, true)
            .addField(`**5️⃣ Server Icon :**`, `**\`${prefix}icon\`**`, true)
            .addField(`**6️⃣ Server Emojis :**`, `**\`${prefix}emojis\`**`, true)
            .addField(`**8️⃣ Bot Info :**`, `**\`${prefix}bot\`**`, true)
            .addField(`**9️⃣ Bot Ping :**`, `**\`${prefix}ping\`**`, true)
            .addField(`**🔟 Show Bans :**`, `**\`${prefix}sbans\`**`, true)
            .addField(`**🔟 Show All Roles :**`, `**\`${prefix}roles\`**`, true)
          message.channel.send(embed)
        })
        reaction2.on("collect", r => {
          const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .addField(`**1️⃣ Ban :**`, `**\`${prefix}ban\`**`, true)
            .addField(`**2️⃣ Unban :**`, `**\`${prefix}unban\`**`, true)
            .addField(`**3️⃣ Text Mute :**`, `**\`${prefix}mute\`**`, true)
            .addField(`**4️⃣ Text Unmute :**`, `**\`${prefix}unmute\`**`, true)
            .addField(`**5️⃣ Voice Mute :**`, `**\`${prefix}vmute\`**`, true)
            .addField(`**6️⃣ Voice Unmute :**`, `**\`${prefix}vunmute\`**`, true)
            .addField(`**7️⃣ Move Member :**`, `**\`${prefix}move\`**`, true)
            .addField(`**8️⃣ Lock Channel :**`, `**\`${prefix}lock\`**`, true)
            .addField(`**9️⃣ UnLock Channel :**`, `**\`${prefix}unlock\`**`, true)
            .addField(`***️⃣ Hide Channel :**`, `**\`${prefix}hide\`**`, true)
            .addField(`***️⃣ Show Channel :**`, `**\`${prefix}show\`**`, true)
            .addField(`***️⃣ Say :**`, `**\`${prefix}say\`**`, true)
            .addField(`***️⃣ Embed Say :**`, `**\`${prefix}embed\`**`, true)
            .addField(`***️⃣ Add Role :**`, `**\`${prefix}role add\`**`, true)
            .addField(`***️⃣ Remove Role :**`, `**\`${prefix}role remove\`**`, true)
            .addField(`***️⃣ Set NickName :**`, `**\`${prefix}setnick\`**`, true)
          message.channel.send(embed)
        })
        reaction3.on("collect", r => {
          const embed = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .addField(`**🙋‍♂️ Spank :**`, `**\`${prefix}spank\`**`, true)
          .addField(`**💋 Kiss :**`, `**\`${prefix}kiss\`**`, true)
          .addField(`**✂️ Delete :**`, `**\`${prefix}delete\`**`, true)
          .addField(`**🗑️ Trash :**`, `**\`${prefix}trash\`**`, true)
          .addField(`**👋 Slap :**`, `**\`${prefix}slap\`**`, true)
          .addField(`**🏴󠁴󠁬󠁤󠁩󠁿 Rip :**`, `**\`${prefix}rip\`**`, true)
          .addField(`**🌈 Gay :**`, `**\`${prefix}gay\`**`, true)
          .addField(`**📜 Wanted :**`, `**\`${prefix}wanted\`**`, true)
          .addField(`**🖼️ Invert :**`, `**\`${prefix}invert\`**`, true)
          .addField(`**🖼️ Sepia :**`, `**\`${prefix}sepia\`**`, true)
          .addField(`**👁️‍🗨️ image Ad :**`, `**\`${prefix}ad\`**`, true)
          .addField(`**💀 Affect :**`, `**\`${prefix}affect\`**`, true)
          .addField(`**🥚 MMs :**`, `**\`${prefix}mms\`**`, true)
          .addField(`**✨ Beautiful :**`, `**\`${prefix}beautiful\`**`, true)
          .addField(`**🖍️ Bobross :**`, `**\`${prefix}bobross\`**`, true)
          .addField(`**🖤 Discord-Black :**`, `**\`${prefix}discordblack\`**`, true)
          .addField(`**💙 Discord-Blue :**`, `**\`${prefix}discordblue\`**`, true)
          .addField(`**🤦‍♂️ Facepalm :**`, `**\`${prefix}facepalm\`**`, true)
          .addField(`**👺 Hitler :**`, `**\`${prefix}hitler\`**`, true)
          .addField(`**🚓 Jail :**`, `**\`${prefix}jail\`**`, true)
          .addField(`**🔻 Triggered :**`, `**\`${prefix}triggered\`**`, true)
          .addField(`**⏺️ Blur :**`, `**\`${prefix}blur\`**`, true)
          .addField(`**↗️ stonk :**`, `**\`${prefix}stonk\`**`, true)
          .addField(`**↙️ Not Stonk :**`, `**\`${prefix}notstonk\`**`, true)
          .addField(`**👯 Double Stonk :**`, `**\`${prefix}dstonk\`**`, true)
          message.channel.send(embed)
        })
          reaction4.on("collect", r => {
            const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .addField(`**💚 Memes :**`, `**\`${prefix}meme\`**`, true)
            .addField(`**🧡 Pics :**`, `**\`${prefix}pics\`**`, true)
            .addField(`**❤️ Gifs :**`, `**\`${prefix}gifs\`**`, true)
            message.channel.send(embed)
        })
      })
    }
  });
/////Show-Bans/////
    client.on('message', message => {
    if (message.content.startsWith(prefix + "sbans")) {
    if (message.channel.type == "dm") return;
          //cool
          if (talkedRecently.has(message.author.id)) {
          message.channel.send("__**Cooldown, Please Wait A Moment!**__").then(messages => 
          messages.delete({timeout:1000})).catch(console.error)
          } else {
          //cool
      if (!message.channel.guild) return;
      message.channel
      message.guild.fetchBans()
        .then(bans => message.channel.send(`🚫 **Server Ban Count :** **\`${bans.size}\`**`)).catch(console.error)
        //down
        talkedRecently.add(message.author.id);
        setTimeout(() => {
        talkedRecently.delete(message.author.id);
       }, 5000);
     }
        //down
   }
})
/////user/////
client.on('message', message =>{
	if (message.content.startsWith(prefix + "user")) {
    if (message.channel.type == "dm") return;
    var args = message.content.split(" ").slice(1);
    var men = message.mentions.users.first();
    var heg;
    if (men) {
      heg = men
    } else {
      heg = message.author
    }
    var mentionned = message.mentions.members.first();
    var h;
    if (mentionned) {
      h = mentionned
    } else {
      h = message.member
    }
        //cool
        if (talkedRecently.has(message.author.id)) {
        message.channel.send("__**Cooldown, Please Wait A Moment!**__").then(messages => 
        messages.delete({timeout:1000})).catch(console.error);
        } else {
        //cool
		var args = message.content.split(" ").slice(1);
	    let mention = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
	  var user = message.mentions.users.first() || message.author; 
	  if(!mention) mention = message.member;
	  var embed = new Discord.MessageEmbed()
	  .setColor(`RANDOM`)
	  .setTitle(`**User Info**`)

	  .setDescription(`
	  📛 **User Name** : \`${user.username}\`

	  #️⃣ **Discriminator** : \`#${mention.user.discriminator}\`

	  🆔 **User ID** : \`${user.id}\`

	  ➡️ **Join Server** : \`${moment(h.joinedAt).format('YYYY/M/D')}\` \n \`${moment(h.joinedAt).fromNow()}\` 

	  ⬅️ **Join Discord** : \`${moment(heg.createdTimestamp).format('YYYY/M/D')}\` \n \`${moment(heg.createdTimestamp).fromNow()}\``)
	  .setThumbnail(`${mention.user.displayAvatarURL()}`)
	  message.channel.send(embed).catch(console.error)
      //down
      talkedRecently.add(message.author.id);
      setTimeout(() => {
      talkedRecently.delete(message.author.id);
     }, 5000);
   }
      //down
 }
})
/////avatar/////
client.on("message", message => {
	if(message.content.startsWith(prefix + "avatar")) {
    if (message.channel.type == "dm") return;
      //cool
      if (talkedRecently.has(message.author.id)) {
      message.channel.send("__**Cooldown, Please Wait A Moment!**__").then(messages => 
      messages.delete({timeout:1000})).catch(console.error);
      } else {
      //cool
		var args = message.content.split(" ").slice(1);
		let ava = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
if(!ava) ava = message.member;
        let avatar = ava.user.avatarURL({dynamic: true, size: 4096, format: `png`})
		let embed = new Discord.MessageEmbed()
		.setColor(`RANDOM`)
		.setTitle(`**${ava.user.tag}**`)
        .setDescription(`[**Avatar Link**](${avatar})`)
        .setImage(avatar);
        message.channel.send(embed).catch(console.error)
      //down
      talkedRecently.add(message.author.id);
      setTimeout(() => {
      talkedRecently.delete(message.author.id);
     }, 5000);
   }
      //down
 }
})
/////Ping/////
client.on("message", message => {
	if(message.content === (prefix + "ping")) {
    if (message.channel.type == "dm") return;
      //cool
      if (talkedRecently.has(message.author.id)) {
      message.channel.send("__**Cooldown, Please Wait A Moment!**__").then(messages => 
      messages.delete({timeout:1000})).catch(console.error);
      } else {
      //cool
        message.channel.send("pong!").then(message => message.edit(`\`\`\`js
📶 Time Taken: ${client.ws.ping} ms
📶 Discord API: ${Date.now() - message.createdTimestamp} ms
\`\`\``)).catch(console.error);
      //down
      talkedRecently.add(message.author.id);
      setTimeout(() => {
      talkedRecently.delete(message.author.id);
     }, 5000);
   }
      //down
    }
})
//////Emojies/////
client.on("message", message => {
    if (message.content.toLowerCase() === prefix + "emojis") {
      if (message.channel.type == "dm") return;
      //cool
      if (talkedRecently.has(message.author.id)) {
      message.channel.send("__**Cooldown, Please Wait A Moment!**__").then(messages => 
      messages.delete({timeout:1000})).catch(console.error);
      } else {
      //cool
      let emojis = message.guild.emojis.cache.map(e => ` ${e}`).join("\n");
      let embed = new Discord.MessageEmbed()
	  .setColor(`RANDOM`)
      .setThumbnail(message.guild.iconURL())
      .setTitle("**Server Emojis**")
      .setDescription(emojis);
      message.channel.send(embed).catch(console.error);
      //down
      talkedRecently.add(message.author.id);
      setTimeout(() => {
      talkedRecently.delete(message.author.id);
     }, 5000);
   }
      //down
    }
})
/////Server/////
const verificationLevels = {
	NONE: 'None',
	LOW: 'Low',
	MEDIUM: 'Medium',
	HIGH: 'High',
	VERY_HIGH: 'Highest'
};
client.on("message", message => {
	if(message.content.startsWith(prefix + "server")) {
    if (message.channel.type == "dm") return;
          const roles = message.guild.roles.cache.size
				  const text = message.guild.channels.cache.filter(r => r.type === "text").size
				  const voice = message.guild.channels.cache.filter(r => r.type === "voice").size
      //cool
      if (talkedRecently.has(message.author.id)) {
        message.channel.send("__**Cooldown, Please Wait A Moment!**__").then(messages => 
        messages.delete({timeout:1000})).catch(console.error);
        } else {
      //cool    
    	let embed = new Discord.MessageEmbed()
    	.setColor(`RANDOM`)
      .setThumbnail(message.guild.iconURL())
    	.setTitle(`**${message.guild.name}**`)
	   	.addField(`**👑 Owned By**`, `${message.guild.owner}`, true)
    	.addField(`**📆 Created On**`, `\`${message.guild.createdAt.toLocaleString()}\`
		\`${moment(message.guild.createdTimestamp).fromNow()}\``, true)
	  	.addField(`**🆔 Server id**`, `\`${message.guild.id}\``, true)
      .addField(`**👥 Members Count**`, `\`${message.guild.memberCount}\``, true)
	    .addField(`**💬 Channels Count**`, `\`${text} Text | ${voice} Voice\``, true)
      .addField(`**✨ Roles Count**`, `\`${roles}\``, true)
	    .addField(`**🌡️ Boost Count**`, `\`${message.guild.premiumSubscriptionCount || '0'}\``, true)
	    .addField(`**🔥 Boost Lvl**`, `\`${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'None'}\``, true)
	    .addField(`**🔐 Verification Level**`, `\`${verificationLevels[message.guild.verificationLevel]}\``, true)
	    .addField(`**🗺️ Server Region**`, `\`${message.guild.region}\``, true)
message.channel.send(embed).catch(console.error);
      //down
      talkedRecently.add(message.author.id);
      setTimeout(() => {
      talkedRecently.delete(message.author.id);
     }, 5000);
   }
      //down
  }
})
/////icon/////
client.on("message", message => {
	if(message.content.startsWith(prefix + "icon")) {
    if (message.channel.type == "dm") return;
      //cool
      if (talkedRecently.has(message.author.id)) {
        message.channel.send("__**Cooldown, Please Wait A Moment!**__").then(messages => 
        messages.delete({timeout:1000})).catch(console.error);
        } else {
      //cool
		var args = message.content.split(" ").slice(1);
		let ava = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if(!ava) ava = message.member;
        let avatar = ava.guild.iconURL({dynamic: true, size: 4096, format: `png`})
		let embed = new Discord.MessageEmbed()
		.setColor(`RANDOM`)
		.setTitle(`**${ava.guild.name}**`)
        .setDescription(`[**Icon Link**](${avatar})`)
        .setImage(avatar);
message.channel.send(embed).catch(console.error);
      //down
      talkedRecently.add(message.author.id);
      setTimeout(() => {
      talkedRecently.delete(message.author.id);
     }, 5000);
   }
      //down
  }
})
/////bot
const commands = '15'; //< Commands Count
const { version: djsversion } = require('discord.js');
const { version } = require('./package.json');
const { utc } = require('moment');
const os = require('os');
const ms = require('ms');
client.on("message", (msg) => {
  if(msg.content.startsWith(prefix + 'bot')){
    if (msg.channel.type == "dm") return;
          //cool
          if (talkedRecently.has(msg.author.id)) {
            msg.channel.send("__**Cooldown, Please Wait A Moment!**__").then(messages => 
            messages.delete({timeout:1000})).catch(console.error);
            } else {
          //cool
    var mentionned = msg.mentions.members.first();
    var h;
    if (mentionned) {
      h = mentionned
    } else {
      h = msg.member
    }
    const core = os.cpus()[0];
        var usedMemory = os.totalmem() - os.freemem(),
            totalMemory = os.totalmem();
        var getpercentage =
            ((usedMemory / totalMemory) * 100).toFixed(2) + '%'
        const embed = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setColor(msg.guild.me.displayHexColor || 'BLUE')
            .addField('General :', [
                `**Client ❯** **\`${client.user.tag}\`** **Id ❯** **\`${client.user.id}\`**`,
                `**Commands ❯** **\`${commands}\`**`,
                `**Servers ❯** **\`${client.guilds.cache.size.toLocaleString()}\`**`,
                `**Users ❯** **\`${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}\`**`,
                `**Channels ❯** **\`${client.channels.cache.size.toLocaleString()}\`**`,
                `**Joined Discord ❯** **\`${utc(client.user.createdTimestamp).format('YYYY/M/D')}\`** **\`${moment(h.joinedAt).fromNow()}\`**`,
              ])
            .addField('System :', [
                `**Platform ❯** **\`${process.platform}\`**`,
                `**Uptime ❯** **\`${ms(os.uptime() * 1000, { long: true })}\`**`,
                `**CPU :**`,
                `\u3000 Cores ❯ **\`${os.cpus().length}\`**`,
                `\u3000 Model ❯ **\`${core.model}\`**`,
                `\u3000 Speed ❯ **\`${core.speed}MHz\`**`,
                `**Memory :**`,
                `\u3000 Total ❯ **\`${process.memoryUsage().heapTotal}\`**`,
                `\u3000 Used ❯ **\`${process.memoryUsage().heapUsed}\`**`
              ])
              .addField('Versions :', [
                `**Node.js ❯** \`${process.version}\``,
                `**Version ❯** \`v${version}\``,
                `**Discord.js ❯** \`v${djsversion}\``,
                '\u200b'
              ])
        msg.channel.send(embed).catch(console.error);
      //down
      talkedRecently.add(msg.author.id);
      setTimeout(() => {
      talkedRecently.delete(msg.author.id);
     }, 5000);
   }
      //down
  }
})
/////id/////
client.on("message", message => {
	if(message.content.startsWith(prefix + "id")) {
    if (message.channel.type == "dm") return;
      //cool
      if (talkedRecently.has(message.author.id)) {
        message.channel.send("__**Cooldown, Please Wait A Moment!**__").then(messages => 
        messages.delete({timeout:1000})).catch(console.error);
        } else {
      //cool
		var args = message.content.split(" ").slice(1);
		let mention = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
if(!mention) mention = message.member;
let embed = new Discord.MessageEmbed()
		.setColor(`RANDOM`)
		.setThumbnail(`${mention.user.displayAvatarURL()}`)
    .addField(`🆔 User ID :`, `**\`${mention.user.id}\`**`)
    .addField(`📛 Username :`, `**\`${mention.user.username}\`**`)
		.addField(`#️⃣ Discriminator :`, `**\`#${mention.user.discriminator}\`**`)
		message.channel.send(embed).catch(console.error);
      //down
      talkedRecently.add(message.author.id);
      setTimeout(() => {
      talkedRecently.delete(message.author.id);
     }, 5000);
   }
      //down
  }
})
////roles////
client.on('message', message => {
	if (message.content.toLowerCase() === prefix + 'roles') {
    if (message.channel.type == "dm") return;
     //cool
     if (talkedRecently.has(message.author.id)) {
      message.channel.send("__**Cooldown, Please Wait A Moment!**__").then(messages => 
      messages.delete({timeout:1000})).catch(console.error);
      } else {
    //cool
		let roles = message.guild.roles.cache
			.map(r => `@${r.name}`)
			.join('\n');
		let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
		.setDescription('\n' + roles + '');
		message.channel.send(embed).catch(console.error);
      //down
      talkedRecently.add(message.author.id);
      setTimeout(() => {
      talkedRecently.delete(message.author.id);
     }, 5000);
   }
      //down
	}
});

 /////ban/////
 client.on('message', async (message) => {
    if(message.author.bot) return undefined;
    if (message.content.startsWith(prefix + 'ban')) {
      if (message.channel.type == "dm") return;
    if(!message.member.hasPermission('BAN_MEMBERS')) 
	return message.channel.send(`❌ **You Don't Have The Permission : \`BAN_MEMBER\`**`).catch(console.error);
        let user = message.mentions.members.first();
        let args = message.content.split(' ');
    if(!user || !args[1]) 
	return message.channel.send(`➡️ **Usage: ${prefix}ban \`<@MentionUser>\` \`<Reason>\`**`).catch(console.error);
    if(message.mentions.users.size < 1) return message.channel.send(`❌ **i Can't Found This Member.**`).catch(console.error);
    if(!message.guild.member(user).bannable) return message.channel.send(`❌ **This Member Have Role higher Than Me, Can't Ban.**`).catch(console.error);
        message.channel.send(`${user}, **Banned** ✅`).catch(console.error);
        user.ban({ reason: args[1] });
    }
})
////unban////
client.on("message", message => {
    let command = message.content.split(" ")[0];
    if (command == prefix + "unban") {
      if (message.channel.type == "dm") return;
      if (!message.member.hasPermission("BAN_MEMBERS")) return;
      let args = message.content
        .split(" ")
        .slice(1)
        .join(" ");
      if (!args)
        return message.channel.send(`➡️ **Usage: ${prefix}ban \`UserId\`**`).catch(console.error);
      message.guild
      .members.unban(args)
        .then(m => {
          message.channel.send(`**${m.username}, Unbanned** ☑️`).catch(console.error);
        })
        .catch(stry => {
          message.channel.send(`** ${args}, Is Not In The Ban List** ❗`).catch(console.error);
        });
    }
  });
/////mute
    client.on('message', async message => {
    if(message.content.startsWith(prefix + 'mute')) {
    if (message.channel.type == "dm") return;
    if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send(`❌ **You Don't Have The Permission : \`MUTE_MEMBERS\`.**`).catch(console.error);
    let mention = message.mentions.members.first();
    let role = message.guild.roles.cache.find(ro => ro.name == 'Muted');
    if(!role) {
        message.guild.roles.create({
            data: {
                name: 'Muted',
                permissions: [],
                color: 'random'
            }
        })
    }
    if(!mention) return message.channel.send(`➡️ **Usage: ${prefix}mute \`<@MentionUser>\`**`).catch(console.error);
    message.guild.channels.cache.forEach(c => {
    c.updateOverwrite(role , {
    SEND_MESSAGES: false, 
    ADD_REACTIONS: false
    });
    });
    mention.roles.add(role)
    message.channel.send(`**${mention.user.tag}, Muted** ✅`).catch(console.error)
    }
    });
/////unmute
    client.on('message', async message => {
            if(message.content.startsWith(prefix + 'unmute')) {
            if (message.channel.type == "dm") return;
            if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send(`❌ **You Don't Have The Permission : \`MUTE_MEMBERS\`.**`).catch(console.error);
          let mention = message.mentions.members.first();
         var args = message.content.split(" ").slice(2).join(" ")
          let member = message.mentions.members.first()
          let role = message.guild.roles.cache.find(ro => ro.name == 'Muted');
            if(!mention) 
            return message.channel.send(`➡️ **Usage: ${prefix}unmute \`<@MentionUser>\`**`).catch(console.error);
            if (member.user.id === client.user.id) return message.channel.send(`**I can't found this member**`).catch(console.error);
    mention.roles.remove(role)
    message.channel.send(`**${mention.user.tag}, UnMuted** ☑️`).catch(console.error);
  }
});
/////vmute
    client.on("message", message => {
        if (message.content.startsWith(prefix + "vmute")) {
          if (message.channel.type == "dm") return;
            if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS")) return message.channel.send("❌ **You Don't Have The Permission : \`MUTE_MEMBERS\`.**").catch(console.error);
            if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.channel.send("**Please Check My Permission!**").catch(console.error);
            let user = message.mentions.users.first();
                if (!user) return message.channel.send(`➡️ **Usage: ${prefix}vmute \`<@MentionUser>\`**`).catch(console.error);
            if (!message.guild.member(user).voice.channel)
              return message.channel.send(`**${user.username}** This member is not in voice channel`).catch(console.error);
            message.guild.member(user).voice.setMute(true);
            return message.channel.send(` **${user.username},** **Has Been Voice Muted!** ✅`).catch(console.error);
      }
  });
/////vunmute
    client.on("message", message => {
    if (message.content.startsWith(prefix + "vunmute")) {
      if (message.channel.type == "dm") return;
        if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS")) return message.channel.send("❌ **You Don't Have The Permission : \`MUTE_MEMBERS\`.**").catch(console.error);
        if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.channel.send("**Please Check My Permission!**").catch(console.error);
        let user = message.mentions.users.first();
                if (!user) return message.channel.send(`➡️ **Usage: ${prefix}vunmute \`<@MentionUser>\`**`).catch(console.error);
        if (!message.guild.member(user).voice.channel)
            return message.channel.send(`**${user.username}** This member is not in voice channel`).catch(console.error);
            message.guild.member(user).voice.setMute(false);
            return message.channel.send(` **${user.username},** **Has Been Voice UnMuted!** ☑️`).catch(console.error);
      }
 });
//////VKick
client.on("message", async message => {
    if (message.content.startsWith(prefix + "vkick")) {
      if (message.channel.type == "dm") return;
      let args = message.content.split(" ");
      let user = message.guild.member(
        message.mentions.users.first() || message.guild.members.cache.get(args[1])
      );
      if (!message.channel.guild || message.author.bot) return;
      if (!message.guild.member(message.author).hasPermission("MOVE_MEMBERS")) return message.channel.send("❌ **You Don't Have The Permission : \`MUTE_MEMBERS\`.**").catch(console.error);
      if (!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.channel.send("**Please Check My Permission**").catch(console.error);
      if (!message.member.voice.channel)
        return message.channel.send("**Your are not in voice channel**").catch(console.error);
      if (!user) return message.channel.send(`➡️ **Usage: ${prefix}vkick \`<@MentionUser>\`**`).catch(console.error);
      if (!message.guild.member(user).voice.channel)
        return message.channel.send(`**${user.user.username},** **Has not in Voice channel**`).catch(console.error);
      await user.voice.kick();
      message.channel.send(`**${user.user.username},** **has been kicked from Voice Channel** ✅`).catch(console.error);
  }
});
////move
client.on('message', message => {
	if (message.content.startsWith(prefix + 'move')) {
    if (message.channel.type == "dm") return;
		let args = message.content.split(' ');
		let user = message.guild.member(
			message.mentions.users.first() || message.guild.members.cache.get(args[1])
		);
		if (!message.channel.guild || message.author.bot) return;
		if (!message.guild.member(message.author).hasPermission('MOVE_MEMBERS'))
			return message.channel.send("❌ **You Don't Have The Permission : \`MOVE_MEMBERS\`.**").catch(console.error);
		if (!message.guild.member(client.user).hasPermission('MOVE_MEMBERS'))
			return message.channel.send("Please Check My Permission").catch(console.error);
		if (!message.member.voice.channel)
			return message.channel.send('Your are not in voice channel').catch(console.error);
		if (!user)
			return message.channel.send(`➡️ **Usage ${prefix}move** <@MentionUser or id>`).catch(console.error);
		if (!message.guild.member(user.id).voice.channel)
			return message.channel.send(`**${user.user.username},** Has not in Voice channel`).catch(console.error);
		message.guild
			.member(user.id)
			.voice.setChannel(message.member.voice.channel.id)
			.then(() => {
				message.channel.send(`**${user.user.username},** Moved to **${message.guild.member(message.author).voice.channel.name}**`).catch(console.error);
			});
	}
});

/////hide 
client.on('message', message =>{
    if(message.content === prefix +"hide"){
      if (message.channel.type == "dm") return;
    if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("❌  **You Don't have the permission \`MANAGE_CHANNELS\`**").catch(console.error)
    let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
        message.channel.createOverwrite(everyone, {
          VIEW_CHANNEL : false
            }).then(() => {
               const embed = new Discord.MessageEmbed()
                .setColor("BLUE")
                .setDescription(`${message.channel} **Is Now Hidden** ☑️`)
                message.channel.send(embed).catch(console.error)
        })
    }
})
/////show
client.on('message', message =>{
    if(message.content === prefix +"show"){
    if (message.channel.type == "dm") return;
    if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("❌  **You Don't have the permission \`MANAGE_CHANNELS\`**").catch(console.error)
    let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
            message.channel.createOverwrite(everyone, {
                   VIEW_CHANNEL: true
                }).then(() => {
                    const embed = new Discord.MessageEmbed()
                    .setColor("GREEN")
                    .setDescription(`${message.channel} **Is Now Visible** ✅`)
                    message.channel.send(embed).catch(console.error)
            })
        }
    })
/////lock
client.on('message', message=>{
    if(message.content.startsWith(prefix + 'lock')){
      if (message.channel.type == "dm") return;
       if(!message.guild.me.hasPermission('MANAGE_CHANNELS'))return message.reply('**i dont hava premission `MANAGE_CHANNELS`**').catch(console.error)
      if(!message.member.hasPermission('MANAGE_CHANNELS'))return message.reply("❌ **You Don't have the permission\`MANAGE_CHANNELS\`**").catch(console.error)
  
  message.channel.overwritePermissions([{
      id:message.guild.id,
      deny:['SEND_MESSAGES'],
    }]).then(p=>{
        var embed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setDescription(`${message.channel} **has been Locked** ☑️`)
        message.channel.send(embed).catch(console.error)
})   
/////unlock
    }
    if(message.content.startsWith(prefix + 'unlock')){
      if (message.channel.type == "dm") return;
       if(!message.guild.me.hasPermission('MANAGE_CHANNELS'))return message.reply("**i dont hava premission \`MANAGE_CHANNELS\`**").catch(console.error)
  if(!message.member.hasPermission('MANAGE_CHANNELS'))return message.reply("❌ **You Don't have the permission \`MANAGE_CHANNELS\`**").catch(console.error)
  
  message.channel.overwritePermissions([{
      id:message.guild.id,
      allow:['SEND_MESSAGES'],
    }]).then(p=>{
        var embed = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setDescription(`${message.channel} **has been unlocked** ✅`)
        message.channel.send(embed).catch(console.error)
    })
  }
})
//////say
client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
  if (command === "say") {
    if (message.channel.type == "dm") return;
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("❌ **You Don't have the permission \`ADMINISTRATOR\`**").catch(console.error);
    message.delete();
    message.channel.send(args.join(" ")).catch(error => message.reply(`**i Can't Say A Empty Message**❗`)).catch(console.error);
  }
////say-embed
  if (command == "embed") {
    if (message.channel.type == "dm") return;
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("❌ **You Don't have the permission \`ADMINISTRATOR\`**").catch(console.error);
    let say = new Discord.MessageEmbed()
      .setDescription(args.join("  "))
      .setColor("RANDOM");
    message.channel.send(say).catch(error => message.reply(`**i Can't Say A Empty Embed Message**❗`)).catch(console.error);
    message.delete()
  }
});
///role
client.on('message', message => {
  if (message.content.startsWith(prefix + 'role')) {
    if (message.channel.type == "dm") return;
      var args = message.content.split(' ');
      var mention = message.mentions.members.first();
      var user = message.guild.member(mention);
      var role = message.guild.roles.cache.filter(r => r.name === args[3]).first() || message.mentions.roles.first() || message.guild.roles.cache.filter(r => r.id === args[3]).first()
      if (message.author.bot) return;
      if (args[1] === "add") {
        if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("❌ **You Don't have the permission** `MANAGE_ROLES`").catch(console.error);        
          if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) return message.channel.send(new Discord.MessageEmbed().setDescription("❌" + " **Need `MANAGE_ROLES` Permission To Use This Command!**").setColor("RED")).catch(console.error);
          if (!user) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(" **Usage : \`_role add @R0mani @role\`**")).catch(console.error);
          if (!role) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(" **Usage : \`_role add @R0mani @role\`**")).catch(console.error);
          user.roles.add(role).then((m) => {
              return message.channel.send('**Done, Role Add** ✅').catch(console.error);
          })
      } else if (args[1] === "remove") {
        if (message.channel.type == "dm") return;
        if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("❌ **You Don't have the permission** `MANAGE_ROLES`").catch(console.error);        
          if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) return message.channel.send(new Discord.MessageEmbed().setDescription("❌" + " **You Need `MANAGE_ROLES` Permission To Use This Command!**").setColor("RED")).catch(console.error);
          if (!user) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(" **Usage : \`_role add @R0mani @role\`**")).catch(console.error);
          if (!role) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(" **Usage : \`_role add @R0mani @role\`**")).catch(console.error);
          user.roles.remove(role).then((m) => {
              if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) return message.channel.send(new Discord.MessageEmbed().setDescription("❌" + " **You Need `MANAGE_ROLES` Permission To Use This Command!**").setColor("RED")).catch(console.error)
              if (!role) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(" **Usage : \`_role add @R0mani @role\`**"))
              return message.channel.send('**Done, Role Removed** ☑️').catch(console.error)

          })
      }
  }
});
////setnick
client.on("message", message => {
  if (message.content.startsWith(prefix + "setnick")) {
    if (message.channel.type == "dm") return;
    if (message.author.bot || message.channel.type == "dm" || !message.member.hasPermission("MANAGE_NICKNAMES") || !message.guild.member(client.user).hasPermission("MANAGE_NICKNAMES")) return;
    var user = message.mentions.members.first();
    var args = message.content.split(" ").slice(2);
    var nick = args.join(" ");
    if (!user || !args) return message.channel.send(`**➡️ Usage:** ${prefix}setnick \`<@MentionUser>\` \`nickname\``).catch(console.error);
    message.guild.member(user.user).setNickname(`${nick}`);
    message.channel.send(`Successfully changed **${user}** nickname to **${nick}**`).catch(console.error);
  }
});
/////fun/other
client.on('message', message => {
  if (message.content.startsWith(prefix + "meme")) {
    if (message.channel.type == "dm") return;
              //cool
              if (talkedRecently.has(message.author.id)) {
                message.channel.send("__**Cooldown, Please Wait A Moment!**__").then(messages => 
                messages.delete({timeout:1000})).catch(console.error);
                } else {
              //cool
          const embed = new Discord.MessageEmbed()
      got('https://www.reddit.com/r/memes/random/.json').then(response => {
          let content = JSON.parse(response.body);
          let permalink = content[0].data.children[0].data.permalink;
          let memeUrl = `https://reddit.com${permalink}`;
          let memeImage = content[0].data.children[0].data.url;
          let memeTitle = content[0].data.children[0].data.title;
          let memeUpvotes = content[0].data.children[0].data.ups;
          let memeDownvotes = content[0].data.children[0].data.downs;
          let memeNumComments = content[0].data.children[0].data.num_comments;
          embed.setTitle(`${memeTitle}`)
          embed.setURL(`${memeUrl}`)
          embed.setImage(memeImage)
          embed.setColor('RANDOM')
          embed.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`)
          message.channel.send(embed).catch(console.error);
      })
      //down
      talkedRecently.add(message.author.id);
      setTimeout(() => {
      talkedRecently.delete(message.author.id);
     }, 7000);
   }
      //down
  }
})

client.on('message', message => {
  if (message.content.startsWith(prefix + "pics")) {
    if (message.channel.type == "dm") return;
              //cool
              if (talkedRecently.has(message.author.id)) {
                message.channel.send("__**Cooldown, Please Wait A Moment!**__").then(messages => 
                messages.delete({timeout:1000})).catch(console.error);
                } else {
              //cool
          const embed = new Discord.MessageEmbed()
      got('https://www.reddit.com/r/pics/random/.json').then(response => {
          let content = JSON.parse(response.body);
          let permalink = content[0].data.children[0].data.permalink;
          let memeUrl = `https://reddit.com${permalink}`;
          let memeImage = content[0].data.children[0].data.url;
          let memeTitle = content[0].data.children[0].data.title;
          let memeUpvotes = content[0].data.children[0].data.ups;
          let memeDownvotes = content[0].data.children[0].data.downs;
          let memeNumComments = content[0].data.children[0].data.num_comments;
          embed.setTitle(`${memeTitle}`)
          embed.setURL(`${memeUrl}`)
          embed.setImage(memeImage)
          embed.setColor('RANDOM')
          embed.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`)
          message.channel.send(embed).catch(console.error);
      })
      //down
      talkedRecently.add(message.author.id);
      setTimeout(() => {
      talkedRecently.delete(message.author.id);
     }, 7000);
   }
      //down
  }
})
client.on('message', message => {
  if (message.content.startsWith(prefix + "gifs")) {
    if (message.channel.type == "dm") return;
              //cool
              if (talkedRecently.has(message.author.id)) {
                message.channel.send("__**Cooldown, Please Wait A Moment!**__").then(messages => 
                messages.delete({timeout:1000})).catch(console.error);
                } else {
              //cool
          const embed = new Discord.MessageEmbed()
      got('https://www.reddit.com/r/gifs/random/.json').then(response => {
          let content = JSON.parse(response.body);
          let permalink = content[0].data.children[0].data.permalink;
          let memeUrl = `https://reddit.com${permalink}`;
          let memeImage = content[0].data.children[0].data.url;
          let memeTitle = content[0].data.children[0].data.title;
          let memeUpvotes = content[0].data.children[0].data.ups;
          let memeDownvotes = content[0].data.children[0].data.downs;
          let memeNumComments = content[0].data.children[0].data.num_comments;
          embed.setTitle(`${memeTitle}`)
          embed.setURL(`${memeUrl}`)
          embed.setImage(memeImage)
          embed.setColor('RANDOM')
          embed.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`)
          message.channel.send(embed).catch(console.error);
      })
      //down
      talkedRecently.add(message.author.id);
      setTimeout(() => {
      talkedRecently.delete(message.author.id);
     }, 7000);
   }
      //down
  }
}) 

client.on("message", async (message) => {
  if (message.content.startsWith(prefix + "spank")) {
    if (message.channel.type == "dm") return;
            //cool
            if (talkedRecently.has(message.author.id)) {
              message.channel.send("__**Cooldown, Please Wait A Moment!**__").then(messages => 
              messages.delete({timeout:1000})).catch(console.error);
              } else {
              //cool
            let user = message.mentions.users.first();
            if(!user) return message.reply("need mention user").catch(console.error);
      let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
      const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
      let img = await new DIG.Spank().getImage(`${avatar}`, `${avatar2}`);
      let attach = new Discord.MessageAttachment(img, "Spank.png");;
      message.channel.send(attach).catch(console.error)
              //down
              talkedRecently.add(message.author.id);
              setTimeout(() => {
              talkedRecently.delete(message.author.id);
             }, 10000);
           }
              //down
  }
});
client.on("message", async (message) => {
  if (message.content.startsWith(prefix + "kiss")) {
    if (message.channel.type == "dm") return;
                //cool
                if (talkedRecently.has(message.author.id)) {
                  message.channel.send("__**Cooldown, Please Wait A Moment!**__").then(messages => 
                  messages.delete({timeout:1000})).catch(console.error);
                  } else {
                  //cool
            let user = message.mentions.users.first();
            if(!user) return message.reply("need mention user").catch(console.error);
      let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
      const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
      let img = await new DIG.Kiss().getImage(`${avatar}`, `${avatar2}`);
      let attach = new Discord.MessageAttachment(img, "Kiss.png");;
      message.channel.send(attach).catch(console.error)
                  //down
                  talkedRecently.add(message.author.id);
                  setTimeout(() => {
                  talkedRecently.delete(message.author.id);
                  }, 10000);
                  }
                  //down
  }
});
client.on("message", async (message) => {
  if (message.content.startsWith(prefix + "stonk")) {
    if (message.channel.type == "dm") return;
                //cool
                if (talkedRecently.has(message.author.id)) {
                message.channel.send("__**Cooldown, Please Wait A Moment!**__").then(messages => 
                messages.delete({timeout:1000})).catch(console.error);
                } else {
                //cool
      let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
      let img = await new DIG.Stonk().getImage(avatar)
      let attach = new Discord.MessageAttachment(img, "Stonk.png");;
      message.channel.send(attach).catch(console.error)
                //down
                talkedRecently.add(message.author.id);
                setTimeout(() => {
                talkedRecently.delete(message.author.id);
                }, 10000);
                }
                //down     
  }
});
client.on("message", async (message) => {
  if (message.content.startsWith(prefix + "notstonk")) {
    if (message.channel.type == "dm") return;
              //cool
              if (talkedRecently.has(message.author.id)) {
              message.channel.send("__**Cooldown, Please Wait A Moment!**__").then(messages => 
              messages.delete({timeout:1000})).catch(console.error);
              } else {
              //cool

      let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
      let img = await new DIG.NotStonk().getImage(avatar)
      let attach = new Discord.MessageAttachment(img, "NotStonk.png");;
      message.channel.send(attach).catch(console.error)
              //down
              talkedRecently.add(message.author.id);
              setTimeout(() => {
              talkedRecently.delete(message.author.id);
              }, 15000);
              }
              //down  
  }
});
client.on("message", async (message) => {
  if (message.content.startsWith(prefix + "invert")) {
    if (message.channel.type == "dm") return;
              //cool
              if (talkedRecently.has(message.author.id)) {
              message.channel.send("__**Cooldown, Please Wait A Moment!**__").then(messages => 
              messages.delete({timeout:1000})).catch(console.error);
              } else {
              //cool

      let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
      let img = await new DIG.Invert().getImage(avatar)
      let attach = new Discord.MessageAttachment(img, "Invert.png");;
      message.channel.send(attach).catch(console.error)
              //down
              talkedRecently.add(message.author.id);
              setTimeout(() => {
              talkedRecently.delete(message.author.id);
              }, 10000);
              }
              //down 
  }
});
client.on("message", async (message) => {
  if (message.content.startsWith(prefix + "mms")) {
    if (message.channel.type == "dm") return;
              //cool
              if (talkedRecently.has(message.author.id)) {
              message.channel.send("__**Cooldown, Please Wait A Moment!**__").then(messages => 
              messages.delete({timeout:1000})).catch(console.error);
              } else {
              //cool
      let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
      let img = await new DIG.Mms().getImage(avatar)
      let attach = new Discord.MessageAttachment(img, "Mms.png");;
      message.channel.send(attach).catch(console.error)
            //down
            talkedRecently.add(message.author.id);
            setTimeout(() => {
            talkedRecently.delete(message.author.id);
            }, 10000);
            }
            //down
  }
});
client.on("message", async (message) => {
  if (message.content.startsWith(prefix + "sepia")) {
    if (message.channel.type == "dm") return;
              //cool
              if (talkedRecently.has(message.author.id)) {
              message.channel.send("__**Cooldown, Please Wait A Moment!**__").then(messages => 
              messages.delete({timeout:1000})).catch(console.error);
              } else {
              //cool
      let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
      let img = await new DIG.Sepia().getImage(avatar)
      let attach = new Discord.MessageAttachment(img, "Sepia.png");;
      message.channel.send(attach).catch(console.error)
            //down
            talkedRecently.add(message.author.id);
            setTimeout(() => {
            talkedRecently.delete(message.author.id);
            }, 10000);
            }
            //down
  }
});
client.on("message", async (message) => {
  if (message.content.startsWith(prefix + "image ad")) {
    if (message.channel.type == "dm") return;
              //cool
              if (talkedRecently.has(message.author.id)) {
              message.channel.send("__**Cooldown, Please Wait A Moment!**__").then(messages => 
              messages.delete({timeout:1000})).catch(console.error);
              } else {
              //cool
      let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
      let img = await new DIG.Ad().getImage(avatar)
      let attach = new Discord.MessageAttachment(img, "Ad.png");;
      message.channel.send(attach).catch(console.error)
            //down
            talkedRecently.add(message.author.id);
            setTimeout(() => {
            talkedRecently.delete(message.author.id);
            }, 10000);
            }
            //down
  }
});
client.on("message", async (message) => {
  if (message.content.startsWith(prefix + "affect")) {
    if (message.channel.type == "dm") return;
              //cool
              if (talkedRecently.has(message.author.id)) {
              message.channel.send("__**Cooldown, Please Wait A Moment!**__").then(messages => 
              messages.delete({timeout:1000})).catch(console.error);
              } else {
              //cool
      let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
      let img = await new DIG.Affect().getImage(avatar)
      let attach = new Discord.MessageAttachment(img, "Affect.png");;
      message.channel.send(attach).catch(console.error)
            //down
            talkedRecently.add(message.author.id);
            setTimeout(() => {
            talkedRecently.delete(message.author.id);
            }, 10000);
            }
            //down
  }
});
client.on("message", async (message) => {
  if (message.content.startsWith(prefix + "beautiful")) {
    if (message.channel.type == "dm") return;
              //cool
              if (talkedRecently.has(message.author.id)) {
              message.channel.send("__**Cooldown, Please Wait A Moment!**__").then(messages => 
              messages.delete({timeout:1000})).catch(console.error);
              } else {
              //cool
      let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
      let img = await new DIG.Beautiful().getImage(avatar)
      let attach = new Discord.MessageAttachment(img, "Beautiful.png");;
      message.channel.send(attach).catch(console.error)
            //down
            talkedRecently.add(message.author.id);
            setTimeout(() => {
            talkedRecently.delete(message.author.id);
            }, 10000);
            }
            //down
  }
});
client.on("message", async (message) => {
  if (message.content.startsWith(prefix + "bobross")) {
    if (message.channel.type == "dm") return;
              //cool
              if (talkedRecently.has(message.author.id)) {
              message.channel.send("__**Cooldown, Please Wait A Moment!**__").then(messages => 
              messages.delete({timeout:1000})).catch(console.error);
              } else {
              //cool
      let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
      let img = await new DIG.Bobross().getImage(avatar)
      let attach = new Discord.MessageAttachment(img, "Bobross.png");;
      message.channel.send(attach).catch(console.error)
            //down
            talkedRecently.add(message.author.id);
            setTimeout(() => {
            talkedRecently.delete(message.author.id);
            }, 10000);
            }
            //down
  }
});
client.on("message", async (message) => {
  if (message.content.startsWith(prefix + "discordblack")) {$
    if (message.channel.type == "dm") return;
              //cool
              if (talkedRecently.has(message.author.id)) {
              message.channel.send("__**Cooldown, Please Wait A Moment!**__").then(messages => 
              messages.delete({timeout:1000})).catch(console.error);
              } else {
              //cool
      let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
      let img = await new DIG.DiscordBlack().getImage(avatar)
      let attach = new Discord.MessageAttachment(img, "DiscordBlack.png");;
      message.channel.send(attach).catch(console.error)
            //down
            talkedRecently.add(message.author.id);
            setTimeout(() => {
            talkedRecently.delete(message.author.id);
            }, 10000);
            }
            //down
  }
});
client.on("message", async (message) => {
  if (message.content.startsWith(prefix + "discordblue")) {
    if (message.channel.type == "dm") return;
              //cool
              if (talkedRecently.has(message.author.id)) {
              message.channel.send("__**Cooldown, Please Wait A Moment!**__").then(messages => 
              messages.delete({timeout:1000})).catch(console.error);
              } else {
              //cool
      let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
      let img = await new DIG.DiscordBlue().getImage(avatar)
      let attach = new Discord.MessageAttachment(img, "DiscordBlue.png");;
      message.channel.send(attach).catch(console.error)
            //down
            talkedRecently.add(message.author.id);
            setTimeout(() => {
            talkedRecently.delete(message.author.id);
            }, 10000);
            }
            //down
  }
});
client.on("message", async (message) => {
  if (message.content.startsWith(prefix + "facepalm")) {
    if (message.channel.type == "dm") return;
              //cool
              if (talkedRecently.has(message.author.id)) {
              message.channel.send("__**Cooldown, Please Wait A Moment!**__").then(messages => 
              messages.delete({timeout:1000})).catch(console.error);
              } else {
              //cool
      let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
      let img = await new DIG.Facepalm().getImage(avatar)
      let attach = new Discord.MessageAttachment(img, "Facepalm.png");;
      message.channel.send(attach).catch(console.error)
            //down
            talkedRecently.add(message.author.id);
            setTimeout(() => {
            talkedRecently.delete(message.author.id);
            }, 10000);
            }
            //down
  }
});
client.on("message", async (message) => {
  if (message.content.startsWith(prefix + "hitler")) {
    if (message.channel.type == "dm") return;
              //cool
              if (talkedRecently.has(message.author.id)) {
              message.channel.send("__**Cooldown, Please Wait A Moment!**__").then(messages => 
              messages.delete({timeout:1000})).catch(console.error);
              } else {
              //cool
      let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
      let img = await new DIG.Hitler().getImage(avatar)
      let attach = new Discord.MessageAttachment(img, "Hitler.png");;
      message.channel.send(attach).catch(console.error)
            //down
            talkedRecently.add(message.author.id);
            setTimeout(() => {
            talkedRecently.delete(message.author.id);
            }, 10000);
            }
            //down
  }
});
client.on("message", async (message) => {
  if (message.content.startsWith(prefix + "jail")) {
    if (message.channel.type == "dm") return;
              //cool
              if (talkedRecently.has(message.author.id)) {
              message.channel.send("__**Cooldown, Please Wait A Moment!**__").then(messages => 
              messages.delete({timeout:1000})).catch(console.error);
              } else {
              //cool
      let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
      let img = await new DIG.Jail().getImage(avatar)
      let attach = new Discord.MessageAttachment(img, "Jail.png");;
      message.channel.send(attach).catch(console.error)
            //down
            talkedRecently.add(message.author.id);
            setTimeout(() => {
            talkedRecently.delete(message.author.id);
            }, 10000);
            }
            //down
  }
});
client.on("message", async (message) => {
  if (message.content.startsWith(prefix + "dstonk")) {
    if (message.channel.type == "dm") return;
              //cool
              if (talkedRecently.has(message.author.id)) {
              message.channel.send("__**Cooldown, Please Wait A Moment!**__").then(messages => 
              messages.delete({timeout:1000})).catch(console.error);
              } else {
              //cool
            let user = message.mentions.users.first();
            if(!user) return message.reply("need mention user").catch(console.error);

      let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
      const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
      let img = await new DIG.DoubleStonk().getImage(`${avatar}`, `${avatar2}`);
      let attach = new Discord.MessageAttachment(img, "DoubleStonk.png");;
      message.channel.send(attach).catch(console.error)
            //down
            talkedRecently.add(message.author.id);
            setTimeout(() => {
            talkedRecently.delete(message.author.id);
            }, 10000);
            }
            //down
  }
});
client.on("message", async (message) => {
  if (message.content.startsWith(prefix + "gay")) {
    if (message.channel.type == "dm") return;
              //cool
              if (talkedRecently.has(message.author.id)) {
              message.channel.send("__**Cooldown, Please Wait A Moment!**__").then(messages => 
              messages.delete({timeout:1000})).catch(console.error);
              } else {
              //cool
            let user = message.mentions.users.first();
            if(!user) return message.reply("need mention user").catch(console.error);
      const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
      let img = await new DIG.Gay().getImage(`${avatar2}`);
      let attach = new Discord.MessageAttachment(img, "Gay.png");;
      message.channel.send(attach).catch(console.error)
            //down
            talkedRecently.add(message.author.id);
            setTimeout(() => {
            talkedRecently.delete(message.author.id);
            }, 10000);
            }
            //down
  }
});
client.on("message", async (message) => {
  if (message.content.startsWith(prefix + "wanted")) {
    if (message.channel.type == "dm") return;
              //cool
              if (talkedRecently.has(message.author.id)) {
                message.channel.send("__**Cooldown, Please Wait A Moment!**__").then(messages => 
                messages.delete({timeout:1000})).catch(console.error);
                } else {
                //cool
            let user = message.mentions.users.first();
            if(!user) return message.reply("need mention user").catch(console.error);
      const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
      let img = await new DIG.Wanted().getImage(`${avatar2}`);
      let attach = new Discord.MessageAttachment(img, "Wanted.png");;
      message.channel.send(attach).catch(console.error)
            //down
            talkedRecently.add(message.author.id);
            setTimeout(() => {
            talkedRecently.delete(message.author.id);
            }, 10000);
            }
            //down
  }
});
client.on("message", async (message) => {
  if(message.content.startsWith(prefix + "triggered")){
    if (message.channel.type == "dm") return;
              //cool
              if (talkedRecently.has(message.author.id)) {
                message.channel.send("__**Cooldown, Please Wait A Moment!**__").then(messages => 
                messages.delete({timeout:1000})).catch(console.error);
                } else {
                //cool
        var user = message.mentions.users.first() || message.author || message.guild.members.cache.get(message.content.split(' ')[1]);
      let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
      let img = await new DIG.Triggered().getImage(avatar)
      let attach = new Discord.MessageAttachment(img, "Triggered.gif");;
      message.channel.send(attach).catch(console.error)
            //down
            talkedRecently.add(message.author.id);
            setTimeout(() => {
            talkedRecently.delete(message.author.id);
            }, 10000);
            }
            //down
  }
});
client.on("message", async (message) => {
  if (message.content.startsWith(prefix + "delete")) {
    if (message.channel.type == "dm") return;
              //cool
              if (talkedRecently.has(message.author.id)) {
              message.channel.send("__**Cooldown, Please Wait A Moment!**__").then(messages => 
              messages.delete({timeout:1000})).catch(console.error);
              } else {
              //cool
            let user = message.mentions.users.first();
            if(!user) return message.reply("need mention user").catch(console.error);
      let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
      const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
      let img = await new DIG.Delete().getImage(`${avatar2}`);
      let attach = new Discord.MessageAttachment(img, "Delete.png");;
      message.channel.send(attach).catch(console.error)
            //down
            talkedRecently.add(message.author.id);
            setTimeout(() => {
            talkedRecently.delete(message.author.id);
            }, 10000);
            }
            //down
  }
});
client.on("message", async (message) => {
  if (message.content.startsWith(prefix + "trash")) {
    if (message.channel.type == "dm") return;
              //cool
              if (talkedRecently.has(message.author.id)) {
              message.channel.send("__**Cooldown, Please Wait A Moment!**__").then(messages => 
              messages.delete({timeout:1000})).catch(console.error);
              } else {
              //cool
            let user = message.mentions.users.first();
            if(!user) return message.reply("need mention user").catch(console.error);
      const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
      let img = await new DIG.Trash().getImage(`${avatar2}`);
      let attach = new Discord.MessageAttachment(img, "Trash.png");;
      message.channel.send(attach).catch(console.error)
            //down
            talkedRecently.add(message.author.id);
            setTimeout(() => {
            talkedRecently.delete(message.author.id);
            }, 10000);
            }
            //down
  }
});
client.on("message", async (message) => {
  if (message.content.startsWith(prefix + "slap")) {
    if (message.channel.type == "dm") return;
              //cool
              if (talkedRecently.has(message.author.id)) {
                message.channel.send("__**Cooldown, Please Wait A Moment!**__").then(messages => 
                messages.delete({timeout:1000})).catch(console.error);
                } else {
                //cool
            let user = message.mentions.users.first();
            if(!user) return message.reply("need mention user").catch(console.error);
      let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
      const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
      let img = await new DIG.Batslap().getImage(`${avatar}`, `${avatar2}`);
      let attach = new Discord.MessageAttachment(img, "slap.png");;
      message.channel.send(attach).catch(console.error)
            //down
            talkedRecently.add(message.author.id);
            setTimeout(() => {
            talkedRecently.delete(message.author.id);
            }, 10000);
            }
            //down
  }
});
client.on("message", async (message) => {
  if (message.content.startsWith(prefix + "blur")) {
    if (message.channel.type == "dm") return;
              //cool
              if (talkedRecently.has(message.author.id)) {
                message.channel.send("__**Cooldown, Please Wait A Moment!**__").then(messages => 
                messages.delete({timeout:1000})).catch(console.error);
                } else {
                //cool
      var avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
      let img = await new DIG.Blur().getImage(`${avatar}`,);
      let attach = new Discord.MessageAttachment(img, "Blur.png");;
      message.channel.send(attach).catch(console.error)
            //down
            talkedRecently.add(message.author.id);
            setTimeout(() => {
            talkedRecently.delete(message.author.id);
            }, 10000);
            }
            //down
  }
});
client.on("message", async (message) => {
  if (message.content.startsWith(prefix + "rip")) {
    if (message.channel.type == "dm") return;
              //cool
              if (talkedRecently.has(message.author.id)) {
                message.channel.send("__**Cooldown, Please Wait A Moment!**__").then(messages => 
                messages.delete({timeout:1000})).catch(console.error);
                } else {
                //cool
            let user = message.mentions.users.first();
            if(!user) return message.reply("need mention user").catch(console.error);

      const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
      let img = await new DIG.Rip().getImage(`${avatar2}`);
      let attach = new Discord.MessageAttachment(img, "Ri.png");;
      message.channel.send(attach).catch(console.error)
            //down
            talkedRecently.add(message.author.id);
            setTimeout(() => {
            talkedRecently.delete(message.author.id);
            }, 10000);
            }
            //down
  }
});

/*
.catch(err => message.channel.send("Unknown Message, Can't Delete It !!!"));
.catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
.catch(console.error)
*/
client.login(process.env.TOKEN).catch(err => { console.error(`Worng Token !`) })