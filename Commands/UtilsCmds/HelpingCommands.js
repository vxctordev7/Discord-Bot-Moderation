const { ApplicationCommandType, EmbedBuilder } = require("discord.js");

module.exports = {
    name: 'help',
    description: '[Moderation] Veja os comandos administrativos.',
    type: ApplicationCommandType.ChatInput,

    run: async(client, interaction) => {

const Helping = `# HELPING COMMANDS | 2024 ®
> Olá, seja bem vindo a o serviço de ajuda dos comandos de moderação!
> Abaixo terá todos comandos do bot de moderação e suas permissões.
# COMANDOS & PERMISSÕES | 2024 ®
- \`/help\` - Exibe os comandos moderativo. **(NoPermissions)**
- \`/latency\` - Verifique a velocidade do bot. **(NoPermissions)**
- \`/ban\` - Aplique banimento a um membro. **(BanMember)**
- \`/unban\` - Retire o banimento de um membro. **(BanMember)**
- \`/clear\` - Apague mensagens em um canal. **(ManageMessages)**
- \`/embed\` - Cria uma mensagem com/sem embed. **(ManageMessages)**
- \`/kick\` - Expulse um membro do servidor. **(KickMember)**
- \`/timeout\` - Aplique castigo a um membro. **(ModerateMembers)**
- \`/untimeout\` - Retire o castigo do membro. **(ModerateMembers)**
- \`/lock\` - Feche um canal especifíco. **(ManageMessages)**
- \`/unlock\`- Abra um canal especifíco. **(ManageMessages)**
- \`/slowmode\` - Coloque tempo de mensagem em um canal. **(ManageMessages)**`

        interaction.reply({
            content: `${Helping}`,
        })
    }
}