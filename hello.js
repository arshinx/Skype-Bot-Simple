// Import bot module
var builder = require('botbuilder');

// Connect Bots - Create Console Connector
var connector = new builder.ConsoleConnector().listen();

// Bot Object - Create Bot
var bot = new builder.UniversalBot(connector);

// Bot Dialog
// Note: Session object know the context and communicates with User
// bot.dialog('/', function(session){
//     // Retrieve User Input
//     var userMessage = session.message.text;
//     // Respond to User
//     session.send('You said: ' + userMessage);
// });

// Bot Dialog based on Waterfall Approach
bot.dialog('/',
    // First Function 
    function(session) {
        builder.prompt.text('Please enter your name: ');
    }
)