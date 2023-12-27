const Discord = require('discord.js')

module.exports = {
  name: 'slowmode',
  description: '[Moderation] Adiconar o modo lento nas mensagens em um canal específico',
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
      name: 'duração',
      description: 'Escolha uma duração para o modo',
      type: Discord.ApplicationCommandOptionType.Integer,
      required: true,
    },
    {
      name: 'canal',
      description: 'Escolha o canal para ativar o modo',
      type: Discord.ApplicationCommandOptionType.Channel,
    }
  ],
  async run(client, interaction, args) {
    const duration = interaction.options.getInteger('duração');
    const channel = interaction.options.getChannel('canal') || interaction.channel;

    const embed = new Discord.EmbedBuilder()
      .setColor('Blue')
      .setDescription(`✅ ${channel} agora tem ${duration} segundos de Modo Lento.`)

    channel.setRateLimitPerUser(duration).catch(err => {
      return;
    });

    await interaction.reply({ embeds: [embed] });

  }
}