const Client = require("../../index");
require("colors");

Client.on("ready", () => {
  console.clear(); //Opcional
  console.log("|  🖥️  SYSTEM  |".bgMagenta + `  I am online! Use my commands by typing: "/" on my server.`.green);
  console.log("|  🖥️  SYSTEM  |".bgMagenta + "  ➥  Production:" + " VxctorDev. | 2024 ®".cyan);
})