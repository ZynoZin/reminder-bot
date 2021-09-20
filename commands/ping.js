module.exports = {
    data: {
        "name": "ping",
        "description": "Replies with pong"
    },
    async execute(message, remainingArgs) {
        await message.channel.send("pong!")
    }
}