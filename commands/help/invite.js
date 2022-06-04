const discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "info",
  description: "INVITE Automodv12 beta BOT",
  run: async (client, message, args) => {

    let embed = new discord.MessageEmbed()
    .setTitle(`HERE INVITE LINK OF BOT`)
    .setDescription(`<:CPTNLINK:830835407343714325>  [CLICK HERE](https://discord.com/api/oauth2/authorize?client_id=854034237481156618&permissions=0&scope=bot) OR [support server ](https://discord.io/ALADINGAMINGZONE)`)
    .setColor("RANDOM")
    .setFooter(`made by ALADIN `)
    .setTimestamp(message.timestamp = Date.now())

    message.channel .send(embed)


  }
} 
const { MessageEmbed, Discord } = require('discord.js');const { MessageButton } = require('discord-buttons')module.exports = {    name: 'invite',    aliases: ['inv'],     description: 'wana invite bot?',    run: async(client, message, args) => {        const embed = new MessageEmbed()        .setTimestamp()        .setColor('#303136')        .setFooter(`Request by ${message.author.username}`)        const inv = new MessageButton()        .setStyle('url')        .setURL('YOUR_BOTINVITE_LINK')        .setLabel('Invite me!')        const ss = new MessageButton()        .setStyle('url')        .setURL('YOUR_SUPPORTSERVER_LINK')        .setLabel('Support Server!')        message.channel.send(embed, {          buttons: [inv, ss]        })    }}
