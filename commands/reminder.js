const ms = require('ms');
module.exports = {
    data: {
        "name": "reminder",
        "description": "Reminds server members about a functionality"
    },
    async execute(message, remainingArgs) {
        let [time, ...reminderArray] = remainingArgs

        if (!time) {
            return message.channel.send("You need to specify a time for the reminder.")
        }

        const reminder = reminderArray.join(" ")

        if (!reminder) {
            return message.channel.send("You need to give a valid reminder.")
        }

        message.channel.send(`You have set a reminder, I will remind you in ${time}`)

        setTimeout(() => {
            message.channel.send(`${reminder}`)
        }, ms(time))
        
    }
}