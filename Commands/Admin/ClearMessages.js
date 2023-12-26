// ================== [ Production VxctorDev ] ================== \\
// ================== [ Production VxctorDev ] ================== \\
// ================== [ Production VxctorDev ] ================== \\

const Discord = require("discord.js");

module.exports = {
    name: "clear",
    description: "[Moderation] Apague mensagens de um canal.",
    type: Discord.ApplicationCommandType.ChatInput,
    options: [
        {
            name: 'number',
            description: 'Quantas mensagens deseja ser apagadas? [1-100]',
            type: Discord.ApplicationCommandOptionType.Number,
            required: true,
        }
    ],

    run: async (client, interaction) => {
        const NumberSelected = interaction.options.getNumber('number');

        if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.ManageMessages)) {
            return interaction.reply({ content: `Você não possui permissão para utilizar este comando.`, ephemeral: true });
        }

        if (!interaction.guild.members.me.permissions.has(Discord.PermissionFlagsBits.ManageMessages)) {
            return interaction.reply({ content: "Parece que estou sem permissões suficientes!", ephemeral: true });
        }

        if (NumberSelected > 100 || NumberSelected < 1) {
            const embed = new Discord.EmbedBuilder()
                .setColor("#9e1111")
                .setDescription('Use números entre 1 e 100.');
            return interaction.reply({ embeds: [embed], ephemeral: true });
        }

        
        await interaction.reply({ content: `Apagando **${NumberSelected}** mensagens...`, ephemeral: true });

        let totalDeleted = 0;
        let remaining = NumberSelected;

        while (remaining > 0) {
            const messagesToDelete = remaining > 100 ? 100 : remaining;
            const deleted = await interaction.channel.bulkDelete(messagesToDelete, true).catch((err) => {
                console.error(err);
                interaction.followUp({ content: `Houve um erro ao tentar apagar as mensagens.`, ephemeral: true });
                return null;
            });

            if (!deleted) break;
            totalDeleted += deleted.size;
            remaining -= deleted.size;

            
            if (deleted.size < messagesToDelete) break;
        }

        
        const embedSuccess = new Discord.EmbedBuilder()
            .setColor("#f0ea06")
            .setDescription(`✅ Foram apagadas **${totalDeleted}** mensagens por **${interaction.user.tag}**.`);

        await interaction.followUp({ embeds: [embedSuccess], });

    }
};
      