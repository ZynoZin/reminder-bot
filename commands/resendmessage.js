module.exports = {
    data: {
        "name": "resendmessage",
        "description": "Resends a message sent by the user"
    },
    async execute(message, remainingArgs) {

        const newMessage = remainingArgs.join(' ')
        await message.channel.send(`${newMessage}`)
    }
}