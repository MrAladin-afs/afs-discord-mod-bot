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