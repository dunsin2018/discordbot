const Discord = require('discord.js');
const client = new Discord.Client();


const handle_message = (msg) => {
    console.log(`Incoming message > ${msg.content}`)
    let response = null;

    switch (msg.content) {
        case 'Hi':
            msg.reply('Hello')
            break;
        case 'Bawo':
            msg.reply('Se daada ni')
            break;
        case 'Privet':
            msg.reply('Kak Dila')
            break;
        case 'Tere':
            msg.reply('Terevist')
            break;
        default:
            msg.reply('I am unable to process this word presently')
            break;
    }
    msg.reply(response);
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (!msg.author.bot) {
        handle_message(msg);

    }
});
client.login('NzE3MDU5NTAxNDk2MjA1MzIz.XtU0Fw.YDoTBkqaCdkeABI7JRds - rhNcLw');