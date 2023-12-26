// ================== [ Production VxctorDev ] ================== \\
// ================== [ Production VxctorDev ] ================== \\
// ================== [ Production VxctorDev ] ================== \\

const Discord = require("discord.js");
const Config = require("./Configurations/Conf_Private.json");
const Client = new Discord.Client({ intents: [ Discord.GatewayIntentBits.Guilds ] });
module.exports = Client;

Client.on('interactionCreate', (interaction) => {
  if(interaction.type === Discord.InteractionType.ApplicationCommand){
      const cmd = Client.slashCommands.get(interaction.commandName);
      if (!cmd) return interaction.reply(`Command Invalid!`);
      interaction["member"] = interaction.guild.members.cache.get(interaction.user.id);
      cmd.run(Client, interaction)
   }
});

Client.slashCommands = new Discord.Collection();
require('./handler')(Client);
Client.login(Config.AcessToken);
