# <a name="ex"></a> Examples
1. [Example 1. Calendar](#ex1)
    * [node-telegram-bot-api](#ntba1)
    * [telegraf](#telegraf1)
    * [telebot](#telebot1)
    * [grammY](#grammy1)
    * [Result](#res1)
2. [Example 2. Calendar + Time Selector](#ex2)
    * [node-telegram-bot-api](#ntba2)
    * [telegraf](#telegraf2)
    * [telebot](#telebot2)
    * [grammY](#grammy2)
    * [Result](#res2)
3. [Example 3. Time Selector](#ex3)
    * [node-telegram-bot-api](#ntba3)
    * [telegraf](#telegraf3)
    * [telebot](#telebot3)
    * [grammY](#grammy3)
    * [Result](#res3)

## <a name="ex1"> Example 1. Calendar
### <a name="ntba1"> node-telegram-bot-api
```js
const TOKEN = process.env.TELEGRAM_TOKEN || 'YOUR_TELEGRAM_BOT_TOKEN';

const TelegramBot = require('node-telegram-bot-api');
const Calendar = require('telegram-inline-calendar')
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

### <a name="telegraf1"> telegraf
```js

const TOKEN = process.env.TELEGRAM_TOKEN || 'YOUR_TELEGRAM_BOT_TOKEN';

const {Telegraf} = require('telegraf');
const Calendar = require('telegram-inline-calendar')
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

### <a name="telebot1"> telebot
```js
const TOKEN = process.env.TELEGRAM_TOKEN || 'YOUR_TELEGRAM_BOT_TOKEN';

const Telebot = require('telebot');
const Calendar = require('telegram-inline-calendar')
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

### <a name="grammy1"> grammY
```js
const TOKEN = process.env.TELEGRAM_TOKEN || 'YOUR_TELEGRAM_BOT_TOKEN';

const { Bot } = require('grammy');
const Calendar = require('telegram-inline-calendar')
const bot = new Bot(TOKEN);
const calendar = new Calendar(bot, {
    date_format: 'DD-MM-YYYY',
    language: 'en',
    bot_api: 'grammy'
});

bot.command('start', ctx => calendar.startNavCalendar(ctx.msg))

bot.on("callback_query:data", (ctx) => {
    if (ctx.msg.message_id == calendar.chats.get(ctx.chat.id)) {
        res = calendar.clickButtonCalendar(ctx.callbackQuery);
        if (res !== -1) {
            await ctx.reply("You selected: " + res);
        }
    }
});
```

### <a name="res1"> Result:
<img src="https://github.com/VDS13/telegram-inline-calendar/blob/main/img/demo.gif" width="400"/>

## <a name="ex2"> Example 2. Calendar + Time Selector
### <a name="ntba2"> node-telegram-bot-api
```js
const TOKEN = process.env.TELEGRAM_TOKEN || 'YOUR_TELEGRAM_BOT_TOKEN';

const TelegramBot = require('node-telegram-bot-api');
const Calendar = require('telegram-inline-calendar')
process.env.NTBA_FIX_319 = 1;
const bot = new TelegramBot(TOKEN, {polling: true});
const calendar = new Calendar(bot, {
    date_format: 'MMM D, YYYY h:mm A',
    language: 'de',
    start_week_day: 1,
    time_selector_mod: true,
    time_range: "08:00-15:59",
    time_step: "15m"
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

### <a name="telegraf2"> telegraf
```js
const TOKEN = process.env.TELEGRAM_TOKEN || 'YOUR_TELEGRAM_BOT_TOKEN';

const {Telegraf} = require('telegraf');
const Calendar = require('telegram-inline-calendar')
const bot = new Telegraf(TOKEN);
const calendar = new Calendar(bot, {
    date_format: 'MMM D, YYYY h:mm A',
    language: 'de',
    start_week_day: 1,
    bot_api: "telegraf",
    time_selector_mod: true,
    time_range: "08:00-15:59",
    time_step: "15m"
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

### <a name="telebot2"> telebot
```js
const TOKEN = process.env.TELEGRAM_TOKEN || 'YOUR_TELEGRAM_BOT_TOKEN';

const Telebot = require('telebot');
const Calendar = require('telegram-inline-calendar')
const bot = new Telebot(TOKEN);
const calendar = new Calendar(bot, {
    date_format: 'MMM D, YYYY h:mm A',
    language: 'de',
    start_week_day: 1,
    bot_api: "telebot",
    time_selector_mod: true,
    time_range: "08:00-15:59",
    time_step: "15m"
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

### <a name="grammy2"> grammY
```js
const TOKEN = process.env.TELEGRAM_TOKEN || 'YOUR_TELEGRAM_BOT_TOKEN';

const {Bot} = require('grammy');
const Calendar = require('telegram-inline-calendar')
const bot = new Bot(TOKEN);
const calendar = new Calendar(bot, {
    date_format: 'MMM D, YYYY h:mm A',
    language: 'de',
    start_week_day: 1,
    bot_api: "grammy",
    time_selector_mod: true,
    time_range: "08:00-15:59",
    time_step: "15m"
});


bot.command('start', ctx => calendar.startNavCalendar(ctx.msg));

bot.on("callback_query:data", (ctx) => {
    if (ctx.msg.message_id == calendar.chats.get(ctx.chat.id)) {
        res = calendar.clickButtonCalendar(ctx.callbackQuery);
        if (res !== -1) {
            await ctx.reply("You selected: " + res);
        }
    }
});
bot.start();
```

### <a name="res2"> Result:
<img src="https://github.com/VDS13/telegram-inline-calendar/blob/main/img/demo2.gif" width="400"/>

## <a name="ex3"> Example 3. Time Selector
### <a name="ntba3"> node-telegram-bot-api
```js
const TOKEN = process.env.TELEGRAM_TOKEN || 'YOUR_TELEGRAM_BOT_TOKEN';

const TelegramBot = require('node-telegram-bot-api');
const Calendar = require('telegram-inline-calendar')
process.env.NTBA_FIX_319 = 1;
const bot = new TelegramBot(TOKEN, {polling: true});
const calendar = new Calendar(bot, {
    date_format: 'HH:mm',
    language: 'fr',
    time_range: "05:00-08:59",
    time_step: "10m"
});

bot.onText(/\/start/, (msg) => calendar.startTimeSelector(msg));

bot.on("callback_query", (query) => {
    if (query.message.message_id == calendar.chats.get(query.message.chat.id)) {
        res = calendar.clickButtonCalendar(query);
        if (res !== -1) {
            bot.sendMessage(query.message.chat.id, "You selected: " + res);
        }
    }
});
```

### <a name="telegraf3"> telegraf
```js

const TOKEN = process.env.TELEGRAM_TOKEN || 'YOUR_TELEGRAM_BOT_TOKEN';

const {Telegraf} = require('telegraf');
const Calendar = require('telegram-inline-calendar')
const bot = new Telegraf(TOKEN);
const calendar = new Calendar(bot, {
    date_format: 'HH:mm',
    language: 'fr',
    bot_api: "telegraf",
    time_range: "05:00-08:59",
    time_step: "10m"
});

bot.start((ctx) => calendar.startTimeSelector(ctx.message));

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

### <a name="telebot3"> telebot
```js
const TOKEN = process.env.TELEGRAM_TOKEN || 'YOUR_TELEGRAM_BOT_TOKEN';

const Telebot = require('telebot');
const Calendar = require('telegram-inline-calendar')
const bot = new Telebot(TOKEN);
const calendar = new Calendar(bot, {
    date_format: 'HH:mm',
    language: 'fr',
    bot_api: "telebot",
    time_range: "05:00-08:59",
    time_step: "10m"
});


bot.on('/start', (msg) => calendar.startTimeSelector(msg));

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

### <a name="grammy3"> grammY
```js
const TOKEN = process.env.TELEGRAM_TOKEN || 'YOUR_TELEGRAM_BOT_TOKEN';

const {Bot} = require('grammy');
const Calendar = require('telegram-inline-calendar')
const bot = new Bot(TOKEN);
const calendar = new Calendar(bot, {
    date_format: 'HH:mm',
    language: 'fr',
    bot_api: "grammy",
    time_range: "05:00-08:59",
    time_step: "10m"
});

bot.command('start', ctx => calendar.startTimeSelector(ctx.msg));

bot.on("callback_query:data", (ctx) => {
    if (ctx.msg.message_id == calendar.chats.get(ctx.chat.id)) {
        res = calendar.clickButtonCalendar(ctx.callbackQuery);
        if (res !== -1) {
            await ctx.reply("You selected: " + res);
        }
    }
});
bot.start();
```

### <a name="res3"> Result:
<img src="https://github.com/VDS13/telegram-inline-calendar/blob/main/img/demo3.gif" width="400"/>