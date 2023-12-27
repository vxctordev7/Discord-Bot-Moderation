const Discord = require("discord.js")

module.exports = {
    name: "unlock",
    description: "[Moderation] Destranca o Canal Selecionado!",
    type: Discord.ApplicationCommandType.ChatInput,
    options: [
        {
            name: 'canal',
            type: Discord.ApplicationCommandOptionType.Channel,
            description: 'Escolha o Canal que será Destrancado!',
            required: true,
        },
    ],
    run: async (client, interaction) => {

        if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.ManageChannels)) {
            interaction.reply(`❌ Você não tem permissão para utilizar esse comando!`)
            
        } else {

                let channel = interaction.options.getChannel('canal')
                interaction.reply(`✔️ O(a) ${channel} foi destrancado com sucesso!`).then(msg => {
                channel.permissionOverwrites.edit(interaction.guild.id, { SendMessages: true }).catch(e => {
                    console.log(e)
                    interaction.editReply(`Reporte esse erro à um Administrador!`)
                })
            })
        }
    }    
}