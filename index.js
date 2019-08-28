const TelegramBot = require('node-telegram-bot-api')
const fs = require('fs')

const token = '798091433:AAHam0ZCha_HSlwDI145hN_BbHtAdU7XSLM'

const bot = new TelegramBot(token, {polling: true})

bot.on('message', (msg) => {

  //anything

});

bot.on('message', (msg) => {

  const hi = "foo";
  if (msg.text.toString().toLowerCase().indexOf(hi) === 0) {
    bot.sendMessage(msg.chat.id, "Hello, you send FOO!!")
  }

  const bye = "bar"
  if (msg.text.toString().toLowerCase().includes(bye)) {
    bot.sendMessage(msg.chat.id, "Hello, you send BAR!!")
  }
})

// Describe use of bot
// Keyboard
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Welcome", {
    "reply_markup": {
      "keyboard": [["foo", "bar"], ["bye", "hi"], ["location"]]
    }
  })
})


// HTML with some user information
/**
<b>bold</b>, <strong>bold</strong>
<i>italic</i>, <em>italic</em>
<a href="http://www.example.com/">inline URL</a>
<code>inline fixed-width code</code>
<pre>pre-formatted fixed-width code block</pre>

 And for Markdown you can only use:

*bold text*
_italic text_
[text](http://www.example.com/)
`inline fixed-width code`
 **/
bot.on('message', (msg) => {
  const Hi = "hi";
  if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
    bot.sendMessage(msg.chat.id, `<b>bold</b> \n <i>italic</i> \n <em>italic with em</em> \n <a href="http://www.example.com/">inline URL</a> \n <code>inline fixed-width code</code> \n <pre>pre-formatted fixed-width code block</pre> Hello ${msg.from.first_name}` ,{parse_mode : "HTML"})
  }
})

// Location and number
bot.on('message', (msg) => {
  const location = "location";
  if (msg.text.indexOf(location) === 0) {
    bot.sendLocation(msg.chat.id, -31.6181236, -60.7762973)
    bot.sendMessage(msg.chat.id, "Santa Fe!")

  }
})

bot.on('message', (msg) => {
  const bye = "bye";
  if (msg.text.toString().toLowerCase().includes(bye)) {
    bot.sendMessage(msg.chat.id, `Have a nice day ${msg.from.first_name}`)
  }
})