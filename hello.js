// Import modules
var builder = require('botbuilder');    // Bots
var restify = require('restify');       // REST APIs

// Connect Bots - Create Chat Connector
var connector = new builder.ChatConnector();

// Bot Object - Create Bot
var bot = new builder.UniversalBot(connector);

// Bot Dialog based on Waterfall Approach: Moving linearly in functions
bot.dialog('/',[
    // First Function - Asks Question / Prompt
    function(session) {
        builder.Prompts.text(session, 'Please enter your name: ');
    },
    // Second Function - Responds with Prompted Answer
    function(session, result) {
        session.send('Hello, ' + result.response);
    }
]);

// Create Server Object using Restify 
var server = restify.createServer();

// Set Port for Server 
server.listen(process.env.port || process.env.PORT || 3000, function() {
    console.log('%s listening to %s', server.name, server.url);
});

// Listen to Post Route - /api/messages (conventional route for Bot messages)
server.post('/api/messages', connector.listen());