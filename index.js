const express = require('express');
const Bot = require('messenger-bot');
const config = require('./config');

const app = express();

const bot = new Bot(config[process.env.NODE_ENV]);

bot.on('error', (err) => {
  console.log(err.message)
})

bot.on('message', (payload, reply) => {
  let text = payload.message.text

  bot.getProfile(payload.sender.id, (err, profile) => {
    if (err) throw err

    reply({ text }, (err) => {
      if (err) throw err

      console.log(`Echoed back to ${profile.first_name} ${profile.last_name}: ${text}`)
    })
  })
})

app.use("/webhook", bot.middleware());
process.env.PORT = process.env.PORT || 3000;

app.listen(process.env.PORT);
console.log(`Bot server running at port ${process.env.PORT}.`);