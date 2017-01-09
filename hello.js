// Import bot module
var builder = require('botbuilder');

// Connect Bots
var connector = new builder.ConsoleConnector().listen();

// Bot Object
var bot = new builder.UniversalBot(connector);

