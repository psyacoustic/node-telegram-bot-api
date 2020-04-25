var TelegramBot = require('node-telegram-bot-api');
var token = '1147764460:AAETS_-9bih4Vangoz2dhMz6Vn2Kw0u4prw';

var bot = new TelegramBot(token, {
  polling: true
});

bot.onText(/\/echo (.+)/, function(msg, match) {
  var resp = match[1];
  bot.sendMessage(msg.chat.id, resp);
});

bot.onText(/\/start/, function(msg, match) {
  bot.sendMessage(msg.chat.id, 'Im\'a cursed bot. My owner hates me.');
});
