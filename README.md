<h1 align="center">telegram-inline-calendar</h1>

<div align="center">

Date and time picker and Inline calendar for Node.js telegram bots.


[![Bot API](https://img.shields.io/badge/Bot%20API-v.6.3-00aced.svg?style=flat-square&logo=telegram)](https://core.telegram.org/bots/api)
[![npm package](https://img.shields.io/npm/v/telegram-inline-calendar?logo=npm&style=flat-square)](https://www.npmjs.org/package/telegram-inline-calendar)
[![npm download](https://img.shields.io/npm/dt/telegram-inline-calendar)](https://www.npmjs.org/package/telegram-inline-calendar)

</div>

## 📙 Description

Using this simple inline calendar you can allow your Telegram bot to ask dates.

<img src="https://github.com/VDS13/telegram-inline-calendar/blob/main/img/demo2.gif" width="400"/>

Supported languages:
* English
* French
* Russian
* Spanish
* Italian
* German

Supported Telegram bot libraries:
* [Telegraf](https://github.com/telegraf/telegraf)
* [node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api)
* [telebot](https://github.com/mullwar/telebot)
* [grammy](https://github.com/grammyjs/grammY)

## 📦 Install

```sh
npm i telegram-inline-calendar
```
## [🎚️ Changelog](https://github.com/VDS13/telegram-inline-calendar/blob/main/CHANGELOG.md)

## [🗺 API](https://github.com/VDS13/telegram-inline-calendar/blob/main/API.md)

## [🖥️ Examples](https://github.com/VDS13/telegram-inline-calendar/blob/main/EXAMPLES.md)

## 🚀 Usage

### node-telegram-bot-api
```js
const TOKEN = process.env.TELEGRAM_TOKEN || 'YOUR_TELEGRAM_BOT_TOKEN';

const TelegramBot = require('node-telegram-bot-api');
const NavCalendar = require('telegram-inline-calendar')
process.env.NTBA_FIX_319 = 1;
const bot = new TelegramBot(TOKEN, {polling: true});
const calendar = new NavCalendar(bot, {
    date_format: 'DD-MM-YYYY',
    language: 'en'
});


bot.onText(/\/start/, (msg) => calendar.startNavCalendar(msg));

bot.on("callback_query", (query) => {
    if (query.message.message_id == calendar.chats.get(query.message.chat.id)) {
        res = calendar.clickButtonCalendar(query);
        if (res !== -1) {
            bot.sendMessage(query.message.chat.id, "You selected: " + res);
        }
    }
});
```

### telegraf
```js

const TOKEN = process.env.TELEGRAM_TOKEN || 'YOUR_TELEGRAM_BOT_TOKEN';

const {Telegraf} = require('telegraf');
const NavCalendar = require('telegram-inline-calendar')
const bot = new Telegraf(TOKEN);
const calendar = new NavCalendar(bot, {
    date_format: 'DD-MM-YYYY',
    language: 'en',
    bot_api: 'telegraf'
});

bot.start((ctx) => calendar.startNavCalendar(ctx.message));

bot.on("callback_query", (ctx) => {
    if (ctx.callbackQuery.message.message_id == calendar.chats.get(ctx.callbackQuery.message.chat.id)) {
        res = calendar.clickButtonCalendar(ctx.callbackQuery);
        if (res !== -1) {
            bot.telegram.sendMessage(ctx.callbackQuery.message.chat.id, "You selected: " + res);
        }
    }
});
bot.launch();
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
```

### telebot
```js
const TOKEN = process.env.TELEGRAM_TOKEN || 'YOUR_TELEGRAM_BOT_TOKEN';

const Telebot = require('telebot');
const NavCalendar = require('telegram-inline-calendar')
const bot = new Telebot(TOKEN);
const calendar = new NavCalendar(bot, {
    date_format: 'DD-MM-YYYY',
    language: 'en',
    bot_api: 'telebot'
});


bot.on('/start', (msg) => calendar.startNavCalendar(msg));

bot.on("callbackQuery", (query) => {
    if (query.message.message_id == calendar.chats.get(query.message.chat.id)) {
        res = calendar.clickButtonCalendar(query);
        if (res !== -1) {
            bot.sendMessage(query.message.chat.id, "You selected: " + res);
        }
    }
});
bot.connect();
```

### grammy
```js
const TOKEN = process.env.TELEGRAM_TOKEN || 'YOUR_TELEGRAM_BOT_TOKEN';

const { Bot } = require('grammy');
const NavCalendar = require('telegram-inline-calendar')
const bot = new Bot(TOKEN);
const calendar = new NavCalendar(bot, {
    date_format: 'DD-MM-YYYY',
    language: 'en',
    bot_api: 'grammy'
});

bot.command('start', ctx => calendar.startNavCalendar(ctx.msg))

bot.on("callback_query:data", async (ctx) => {
    if (ctx.msg.message_id === calendar.chats.get(ctx.chat.id)) {
        res = calendar.clickButtonCalendar(ctx.callbackQuery);
        if (res !== -1) {
            await ctx.reply("You selected: " + res);
        }
    }
});
bot.start();
```

## ⚙️ Default options

```javascript
{
    date_format: 'YYYY-MM-DD',                     //Datetime result format
    language: 'en',                                //Language (en/es/de/es/fr/it)
    bot_api: 'node-telegram-bot-api',              //telegram bot library
    close_calendar: true,                          //Close calendar after date selection
    start_week_day: 0,                             //First day of the week(Sunday - `0`, Monday - `1`, Tuesday - `2` and so on)
    time_selector_mod: false,                      //Enable time selection after a date is selected.
    time_range: "00:00-23:59",                     //Allowed time range in "HH:mm-HH:mm" format
    time_step: "30m"                               //Time step in the format "<Time step><m | h>"
}
```

## License

**The MIT License (MIT)**

Copyright © 2022-2023 Dmitry Vyazin
