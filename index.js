const { Client } = require("discord.js-selfbot-v13");
const dotenv = require("dotenv");

dotenv.config()

const client = new Client();

client.on("ready", async () => {
    console.log("🗿")
});

client.on("messageCreate", async (message) => {
    try {
        await message.react("🗿")
    } catch (error) {
        console.log(error)
    }
})

client.login(process.env.TOKEN);
