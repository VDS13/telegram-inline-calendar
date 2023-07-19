<h1 align="center">telegram-inline-calendar</h1>

<div align="center">

Date and time picker and inline calendar for Node.js telegram bots.


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
* Turkish
* Indonesian

Supported Telegram bot libraries:
* [Telegraf](https://github.com/telegraf/telegraf)
* [node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api)
* [telebot](https://github.com/mullwar/telebot)
* [grammY](https://github.com/grammyjs/grammY)

## 📦 Install
There are two versions:
### v1.x - if you are using CommonJS modules
```sh
npm i telegram-inline-calendar
```
### v2.x - if you are using ES modules
```sh
npm i telegram-inline-calendar@ecmascript
```
## 🎚️ Changelog ([v1.x](https://github.com/VDS13/telegram-inline-calendar/blob/main/v1.x/CHANGELOG.md) or [v2.x](https://github.com/VDS13/telegram-inline-calendar/blob/main/v2.x/CHANGELOG.md))

## 🗺 API ([v1.x](https://github.com/VDS13/telegram-inline-calendar/blob/main/v1.x/API.md) or [v2.x](https://github.com/VDS13/telegram-inline-calendar/blob/main/v2.x/API.md))

## 🖥️ Examples ([v1.x](https://github.com/VDS13/telegram-inline-calendar/blob/main/v1.x/EXAMPLES.md) or [v2.x](https://github.com/VDS13/telegram-inline-calendar/blob/main/v2.x/EXAMPLES.md))

## 🚀 Usage

### node-telegram-bot-api

#### CommonJS
```js
const TOKEN = process.env.TELEGRAM_TOKEN || 'YOUR_TELEGRAM_BOT_TOKEN';

const TelegramBot = require('node-telegram-bot-api');
const Calendar = require('telegram-inline-calendar');
process.env.NTBA_FIX_319 = 1;
const bot = new TelegramBot(TOKEN, {polling: true});
const calendar = new Calendar(bot, {
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

#### ESM
```js
const TOKEN = process.env.TELEGRAM_TOKEN || 'YOUR_TELEGRAM_BOT_TOKEN';

import TelegramBot from 'node-telegram-bot-api';
import {Calendar} from 'telegram-inline-calendar';
process.env.NTBA_FIX_319 = 1;
const bot = new TelegramBot(TOKEN, {polling: true});
const calendar = new Calendar(bot, {
    date_format: 'DD-MM-YYYY',
    language: 'en'
});


bot.onText(/\/start/, (msg) => calendar.startNavCalendar(msg));

bot.on("callback_query", (query) => {
    if (query.message.message_id == calendar.chats.get(query.message.chat.id)) {
        var res;
        res = calendar.clickButtonCalendar(query);
        if (res !== -1) {
            bot.sendMessage(query.message.chat.id, "You selected: " + res);
        }
    }
});
```

### telegraf

#### CommonJS
```js
const TOKEN = process.env.TELEGRAM_TOKEN || 'YOUR_TELEGRAM_BOT_TOKEN';

const {Telegraf} = require('telegraf');
const Calendar = require('telegram-inline-calendar');
const bot = new Telegraf(TOKEN);
const calendar = new Calendar(bot, {
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

#### ESM
```js
const TOKEN = process.env.TELEGRAM_TOKEN || 'YOUR_TELEGRAM_BOT_TOKEN';

import {Telegraf} from 'telegraf';
import {Calendar} from 'telegram-inline-calendar';
const bot = new Telegraf(TOKEN, {polling: true});
const calendar = new Calendar(bot, {
    date_format: 'DD-MM-YYYY',
    language: 'en',
    bot_api: 'telegraf'
});

bot.start((ctx) => calendar.startNavCalendar(ctx));

bot.on("callback_query", (ctx) => {
    if (ctx.callbackQuery.message.message_id == calendar.chats.get(ctx.callbackQuery.message.chat.id)) {
        var res;
        res = calendar.clickButtonCalendar(ctx);
        if (res !== -1) {
            ctx.reply("You selected: " + res);
        }
    }
});
bot.launch();
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
```

### telebot

#### CommonJS
```js
const TOKEN = process.env.TELEGRAM_TOKEN || 'YOUR_TELEGRAM_BOT_TOKEN';

const Telebot = require('telebot');
const Calendar = require('telegram-inline-calendar');
const bot = new Telebot(TOKEN);
const calendar = new Calendar(bot, {
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

#### ESM
```js
const TOKEN = process.env.TELEGRAM_TOKEN || 'YOUR_TELEGRAM_BOT_TOKEN';

import Telebot from 'telebot';
import {Calendar} from 'telegram-inline-calendar';
const bot = new Telebot(TOKEN, {polling: true});
const calendar = new Calendar(bot, {
    date_format: 'DD-MM-YYYY',
    language: 'en',
    bot_api: 'telebot'
});

bot.on('/start', (msg) => calendar.startNavCalendar(msg));

bot.on("callbackQuery", (query) => {
    if (query.message.message_id == calendar.chats.get(query.message.chat.id)) {
        var res;
        res = calendar.clickButtonCalendar(query);
        if (res !== -1) {
            bot.sendMessage(query.message.chat.id, "You selected: " + res);
        }
    }
});
bot.connect();
```

### grammY

#### CommonJS
```js
const TOKEN = process.env.TELEGRAM_TOKEN || 'YOUR_TELEGRAM_BOT_TOKEN';

const { Bot } = require('grammy');
const Calendar = require('telegram-inline-calendar');
const bot = new Bot(TOKEN);
const calendar = new Calendar(bot, {
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

#### ESM
```js
const TOKEN = process.env.TELEGRAM_TOKEN || 'YOUR_TELEGRAM_BOT_TOKEN';

import { Bot } from 'grammy';
import {Calendar} from 'telegram-inline-calendar';
const bot = new Bot(TOKEN, {polling: true});
const calendar = new Calendar(bot, {
    date_format: 'DD-MM-YYYY',
    language: 'en',
    bot_api: 'grammy'
});

bot.command('start', ctx => calendar.startNavCalendar(ctx))

bot.on("callback_query:data", (ctx) => {
    if (ctx.msg.message_id == calendar.chats.get(ctx.chat.id)) {
        var res;
        res = calendar.clickButtonCalendar(ctx);
        if (res !== -1) {
            ctx.reply("You selected: " + res);
        }
    }
});
bot.start();
```

## ⚙️ Default options

```javascript
{
    date_format: 'YYYY-MM-DD',                     //Datetime result format
    language: 'en',                                //Language (en/es/de/es/fr/it/tr/id)
    bot_api: 'node-telegram-bot-api',              //Telegram bot library
    close_calendar: true,                          //Close calendar after date selection
    start_week_day: 0,                             //First day of the week(Sunday - `0`, Monday - `1`, Tuesday - `2` and so on)
    time_selector_mod: false,                      //Enable time selection after a date is selected.
    time_range: "00:00-23:59",                     //Allowed time range in "HH:mm-HH:mm" format
    time_step: "30m",                              //Time step in the format "<Time step><m | h>"
    start_date: false,                             //Minimum date of the calendar in the format "YYYY-MM-DD"
    stop_date: false,                              //Maximum date of the calendar in the format "YYYY-MM-DD"
    custom_start_msg: false                        //Text of the message sent with the calendar/time selector
}
```

## License

**The MIT License (MIT)**

Copyright © 2022-2023 Dmitry Vyazin