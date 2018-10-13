const Eris = require('eris');
 
const bot = new Eris(process.env.DISCORD_BOT_TOKEN);   // Replace DISCORD_BOT_TOKEN in .env with your bot accounts token
 
const elevatorWords = ['Elevator', 'elevator', 'acensor', 'Acensor', 'lift', 'Lift', 'illav8r', '엘리베이터', '电梯', 'aufzug', 'Aufzug']

bot.on('ready', () => {                                // When the bot is ready
    console.log('Ready!');                             // Log "Ready!"
});
 
bot.on('messageCreate', (msg) => {                     // When a message is created
    if (msg.author.bot) return;
    if(elevatorWords.some(el => msg.content.includes(el))) {        
        bot.createMessage(msg.channel.id, "Elevator Code: 12105"); 
    }
});

 
bot.connect();                                         // Get the bot to connect to Discord