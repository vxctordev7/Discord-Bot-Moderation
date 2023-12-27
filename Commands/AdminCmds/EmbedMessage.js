const Discord = require("discord.js");

module.exports = {
  name: "say",
  description: "[Moderation] Digite um texto e vou te enviar em minha versão.",
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
        name: "embed",
        description: "Qual mensagem deseja enviar? [Em Embed]",
        type: Discord.ApplicationCommandOptionType.String,
        required: false,
    },
    {
        name: "normal",
        description: "Qual mensagem deseja enviar? [Sem Embed]",
        type: Discord.ApplicationCommandOptionType.String,
        required: false,
    }
],

  run: async (client, interaction) => {

    if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.ManageMessages)) {
        return interaction.reply({ content: `Você não possui permissão para utilizar este comando.`, ephemeral: true });
    }

    if (!interaction.guild.members.me.permissions.has(Discord.PermissionFlagsBits.ManageMessages)) {
        return interaction.reply({ content: "Parece que estou sem permissões suficientes!", ephemeral: true });
    }
        let embed_fala = interaction.options.getString("embed");
        let normal_fala = interaction.options.getString("normal");
        
        if (!embed_fala && !normal_fala) {
            interaction.reply(`Escreva pelo menos em uma das opções.`)
        } else {
            if (!embed_fala) embed_fala = "⠀";
            if (!normal_fala) normal_fala = "⠀";

            let embed = new Discord.EmbedBuilder()
            .setColor("Random")
            .setAuthor({ name: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
            .setDescription(embed_fala);

            if (embed_fala === "⠀") {
                interaction.reply({ content: ` Sua mensagem foi enviada!`, ephemeral: true })
                interaction.channel.send({ content: `${normal_fala}` })
            } else if (normal_fala === "⠀") {
                interaction.reply({ content: ` Sua mensagem foi enviada!`, ephemeral: true })
                interaction.channel.send({ embeds: [embed] })
            } else {
                interaction.reply({ content: ` Sua mensagem foi enviada!`, ephemeral: true })
                interaction.channel.send({ content: `${normal_fala}`, embeds: [embed] })
            }
        }
    }
}