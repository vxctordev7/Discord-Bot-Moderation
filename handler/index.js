const fs = require("fs");

module.exports = async (Client) => {
  const SlashsArray = [];

  fs.readdir(`./Commands`, (error, folder) => {
    folder.forEach(subfolder => {
      fs.readdir(`./Commands/${subfolder}/`, (error, files) => {
        files.forEach(files => {
          if (!files?.endsWith('.js')) return;
          files = require(`../Commands/${subfolder}/${files}`);
          if (!files?.name) return;
          Client.slashCommands.set(files?.name, files);
          SlashsArray.push(files);
        });
      });
    });
  });

  fs.readdir(`./Events/`, (erro, pasta) => {
    pasta.forEach(subpasta => {
      fs.readdir(`./Events/${subpasta}/`, (erro, arquivos) => {
        arquivos.forEach(arquivo => {
          if (!arquivo.endsWith('.js')) return; require(`../Events/${subpasta}/${arquivo}`);
        });
      });
    });
  });

Client.on("ready", async () => {
    Client.guilds.cache.forEach(guild => guild.commands.set(SlashsArray));
  });
};