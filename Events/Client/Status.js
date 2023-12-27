const Client = require("../../index");
const Discord = require("discord.js");
const Status = require("../../Configurations/Conf_Status");
// Configurações do status: Configurations > Conf_Status.js!

Client.on("ready", () => {
    const ListMessages = [
        `${Status.Modified1}`, // Status 1
        `${Status.Modified2}`, // Status 2
        `${Status.Modified3}`, // Status 3
        `${Status.Modified4}` // Status 4
    ];
  
    let position = 0;
        setInterval(() => Client.user.setPresence({
            activities: [{
                name: `${ListMessages[position++ % ListMessages.length]}`,
                type: Discord.ActivityType.Streaming,
                url: `${Status.TwitchLink}`
            }]
        }), 1000 * 10);
    
        Client.user.setStatus(`${Status.StatusBol}`);
        console.log("|  🔨 STATUS  |".bgMagenta + "   ➥  Sistema de Status ativado com sucesso!".green);
    });