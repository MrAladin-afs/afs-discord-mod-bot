const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "chatbot",
  category: "moderation",
  args: true,
  usage: "qcahtbot set #channel",
  description: "Set the channel",
  
 run: (client, message, args) => {
   
          const channel = message.mentions.channels.first();
    const [key, ...value] = args;
    switch (key) {
      default:
        return message.channel.send(
          new Discord.MessageEmbed()
            .setColor("RED")
            .setTimestamp()
            .setFooter(
              message.author.tag,
              message.author.displayAvatarURL({ dynamic: true }) ||
                client.user.displayAvatarURL({ dynamic: true })
            )
            .setDescription("Error: Invalid Key provided, Please try again.")
        );
        break;
      case "set":
        {
          if (!channel) {
            return message.channel.send(
              `${client.emotes.error}Pls Give Invalid channel... Try again...`
            );
          }
          db.set(`chatbot_${message.guild.id}`, channel.id);
          const chat = new Discord.MessageEmbed()
            .setDescription(
              `**Done** From now on I will send Chatbot in ${channel}`
            )
            .setColor("RED");
          message.channel.send(chat);
        }
    }}}
