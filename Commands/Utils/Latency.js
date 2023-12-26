const { ApplicationCommandType } = require("discord.js");

module.exports = {
  name: "latency",
  description: "[Moderation] Veja minha latência.",
  type: ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {
    const Latência = client.ws.ping;
    interaction.reply(`**🔆 | Minha latência está em: \`${Latência}\`ms**`)
  }
}