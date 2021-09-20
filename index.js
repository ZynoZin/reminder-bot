const {Client, Collection, Intents} = require('discord.js')
const fs = require('fs')

require("dotenv").config()


const myIntents = new Intents(32767)

const client = new Client({ intents: myIntents })

const prefix = "!"

client.once("ready", () => console.log("Reminder Bot is Online!"))

client.commands = new Collection()

const messageFunction = async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return

    const args = message.content.slice(prefix.length).split(" ") 

    const [commandFromArgs, ...remainingArgs] = args

    if (!commandFromArgs) return
    
    const command = client.commands.get(commandFromArgs.toLocaleLowerCase())

    if (!command) return message.channel.send("Such command doesn't exist!")
    
    try {
        await command.execute(message, remainingArgs)
    } catch (error) {
        console.log(error);
    }
}

fs.readdir('./commands', (err, files) => {
    if (err) {
        console.log(err)
        return
    }
    files.filter(file => file.endsWith(".js"))
        .map(file => require(`./commands/${file}`))
        .forEach((command) => client.commands.set(command.data.name, command))
    
    
    client.on("messageCreate", messageFunction)
})




client.login(process.env.BOT_TOKEN)

