const Discord = require('discord.js');

module.exports = {
    name: "unban",
    description: "[Moderation] Retire o banimento de algum usuario do discord",
    type: Discord.ApplicationCommandType.ChatInput,
    options: [
        {
            name: 'user',
            description: 'Selecione um usuario',
            type: Discord.ApplicationCommandOptionType.User,
            require: true,
        },
        {
            name: 'motivo',
            description: 'Defina um motivo para desbanir o usuario',
            type: Discord.ApplicationCommandOptionType.String,
            required: false,
        },
    ],

    run: async (client, interaction) => {


        if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.BanMembers)) {
            return interaction.reply({ content: `Você não possui permissão para utilizar este comando.`, ephemeral: true });
        }

        if (!interaction.guild.members.me.permissions.has(Discord.PermissionFlagsBits.BanMembers)) {
            return interaction.reply({ content: "Parece que estou sem permissões suficientes!", ephemeral: true });
        }

            let user = interaction.options.getUser("user")
            let user2 = interaction.guild.members.cache.get(user.id)
            let motivo = interaction.options.getString("motivo")
            if (!motivo) motivo = "Não definido"
            if (!user) return interaction.reply({ content: 'Insira um id ou usuário válido', ephemeral: true })


            let EmbedDesbanido = new Discord.EmbedBuilder()
                .setColor("Green")
                .setDescription(`
            **O usuario ${user} ( \`${user.id}\` ) foi desbanido do servidor pelo motivo \`${motivo}\` com sucesso!**`)
                .setFooter({ text: `Comando requisitado por: ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL({ format: "png" }) });

            let erro = new Discord.EmbedBuilder()
                .setColor("Red")
                .setDescription(`
                **Houve um erro ao tentar desbanir usuario, Coloque um ID valido para conseguir desbanir o usuario.**`)

            interaction.guild.members.unban(user, motivo).then(() => {
                interaction.reply({ embeds: [EmbedDesbanido] })
            }).catch(e => {
                interaction.reply({ embeds: [erro] })
            })
    }
}
