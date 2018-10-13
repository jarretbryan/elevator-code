const Eris = require('eris');
 
const bot = new Eris(process.env.DISCORD_BOT_TOKEN);   // Replace DISCORD_BOT_TOKEN in .env with your bot accounts token
 
const elevatorWords = ['Elevator', 'elevator', 'acensor', 'Acensor', 'lift', 'Lift', 'illav8r', '엘리베이터', '电梯', 'aufzug', 'Aufzug']

bot.on('ready', () => {                                // When the bot is ready
    console.log('Ready!');                             // Log "Ready!"
});
 
bot.on('messageCreate', (msg) => {                     // When a message is created
    if (msg.author.bot) return;
    
    if (msg.content.startsWith('Elevator Bot say')){
      bot.createMessage(msg.channel.id, msg.content.slice(17) + '!!'); 
    } 
  
    if(elevatorWords.some(el => msg.content.includes(el)) &&  !msg.content.startsWith('Elevator Bot say')) {        
      bot.createMessage(msg.channel.id, "Elevator Code: 12105"); 
    }
 
    if (msg.content.includes('12105')){
      bot.createMessage(msg.channel.id, "Did you press the button for the second floor?")
    }
});

 
bot.connect();                                         // Get the bot to connect to Discord
