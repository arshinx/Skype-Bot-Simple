// Import modules
var builder = require('botbuilder');    // Bots
var restify = require('restify');       // REST APIs

// Connect Bots - Create Chat Connector
var connector = new builder.ChatConnector().listen();

// Bot Object - Create Bot
var bot = new builder.UniversalBot(connector);

// Bot Dialog
// Note: Session object know the context and communicates with User
bot.dialog('/', function(session){
    // Retrieve User Input
    var userMessage = session.message.text;
    // Respond to User
    session.send('You said: ' + userMessage);
});

// Create Server Object using Restify 
var server = restify.createServer();

// Set Port for Server 
server.listen(process.env.port || process.env.PORT || 3978, function() {
    console.log('%s listening to %s', server.name, server.url);
});