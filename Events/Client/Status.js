// ================== [ Production VxctorDev ] ================== \\
// ================== [ Production VxctorDev ] ================== \\
// ================== [ Production VxctorDev ] ================== \\

const Client = require("../../index");
const Discord = require("discord.js");

Client.on("ready", () => {
    const ListMessages = [
        `🏆  Melhor bot de Moderação!`, // Status 1
        `🏆 .gg/myServer`, // Status 2
        `🏆  2024 (R)`, // Status 3
    ];
  
    let position = 0;
        setInterval(() => Client.user.setPresence({
            activities: [{
                name: `${ListMessages[position++ % ListMessages.length]}`,
                type: Discord.ActivityType.Streaming,
                url: 'https://www.twitch.tv/TwitchStatusServer'
            }]
        }), 1000 * 10);
    
        Client.user.setStatus("idle");
    });