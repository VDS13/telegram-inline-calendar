const lang = require("./language.json");
const dayjs = require('dayjs')

module.exports = class Calendar {
    constructor(bot, options = {}) {
        this.bot = bot;
        this.chats = new Map();
        this.options = options;
        this.options.language = (typeof options.language === 'undefined') ? 'en' : options.language;
        this.options.date_format = (typeof options.date_format === 'undefined') ? 'YYYY-MM-DD' : options.date_format;
        this.options.bot_api = (typeof options.bot_api === 'undefined') ? 'node-telegram-bot-api' : options.bot_api;
        this.options.close_calendar = (typeof options.close_calendar === 'undefined') ? true : options.close_calendar;
        this.options.start_week_day = (typeof options.start_week_day === 'undefined') ? 0 : options.start_week_day;
    }
    weekDaysButtons(day) {
        return (day + this.options.start_week_day > 6) ? (day + this.options.start_week_day - 7) : (day + this.options.start_week_day);
    }
    startWeekDay(day) {
        return (day - this.options.start_week_day < 0) ? (day - this.options.start_week_day + 7) : (day - this.options.start_week_day);
    }
    twoDigits(num) {
        if (num < 10)
            return ('0' + num).slice(-2);
        return num
    }
    colRowNavigation(date, cd) {
        var tmp = cd - 7 + this.startWeekDay(date.getDay());
        return Math.ceil(tmp/7) + 4;
    }
    howMuchDays(year, month) {
        var date1 = new Date(year, month-1, 1);
        var date2 = new Date(year, month, 1);
        return Math.round((date2 - date1) / 1000 / 3600 / 24); 
    }
    editMessageReplyMarkupCalendar(date, query) {
        if (this.options.bot_api == 'node-telegram-bot-api')
            this.bot.editMessageReplyMarkup(this.createNavigationKeyboard(date),{message_id: query.message.message_id, chat_id: query.message.chat.id});
        else if (this.options.bot_api == 'telegraf')
            this.bot.telegram.editMessageReplyMarkup(query.message.chat.id, query.message.message_id, null, this.createNavigationKeyboard(date));
        else if (this.options.bot_api == 'telebot') {
            var menu = {replyMarkup: this.createNavigationKeyboard(date)};
            this.bot.editMessageReplyMarkup({messageId: query.message.message_id, chatId: query.message.chat.id}, menu);
        }
    }
    sendMessageCalendar(menu, msg) {
        if (this.options.bot_api == 'node-telegram-bot-api')
            this.bot.sendMessage(msg.chat.id, lang.select[this.options.language], menu).then((msg_promise) => this.chats.set(msg_promise.chat.id, msg_promise.message_id));
        else if (this.options.bot_api == 'telegraf')
            this.bot.telegram.sendMessage(msg.chat.id, lang.select[this.options.language], menu).then((msg_promise) => this.chats.set(msg_promise.chat.id, msg_promise.message_id));
        else if (this.options.bot_api == 'telebot')
            this.bot.sendMessage(msg.chat.id, lang.select[this.options.language], menu).then((msg_promise) => this.chats.set(msg_promise.chat.id, msg_promise.message_id));
    }
    deleteMessage(query) {
        if (this.options.bot_api === 'node-telegram-bot-api')
            this.bot.deleteMessage(query.message.chat.id,query.message.message_id)
        else if (this.options.bot_api === 'telegraf')
            this.bot.telegram.deleteMessage(query.message.chat.id,query.message.message_id)
        else if (this.options.bot_api === 'telebot')
            this.bot.deleteMessage(query.message.chat.id,query.message.message_id)
    }
    createNavigationKeyboard(date) {
        var i, j;
        var cnk = {};
        var cd = this.howMuchDays(date.getFullYear(), date.getMonth() + 1);
        var cr = this.colRowNavigation(date, cd);
        cnk.resize_keyboard = true;
        cnk.inline_keyboard = [];
        cnk.inline_keyboard.push([{},{},{}]);
        cnk.inline_keyboard[0][0] = {text: '<<', callback_data: 'n_' + dayjs(date).format("YYYY") + '_--'};
        cnk.inline_keyboard[0][1] = {text: lang.month3[this.options.language][date.getMonth()] + ' ' + date.getFullYear(), callback_data: ' '};
        cnk.inline_keyboard[0][2] = {text: '>>', callback_data: 'n_' + dayjs(date).format("YYYY") + '_++'};
        cnk.inline_keyboard.push([{},{},{},{},{},{},{}]);
        for(j = 0; j < 7; j++) {
            cnk.inline_keyboard[1][j] = {text: lang.week[this.options.language][this.weekDaysButtons(j)], callback_data: ' '};
        }
        var d = 1;
        for (i = 2; i <= cr - 2; i++) {
            cnk.inline_keyboard.push([{},{},{},{},{},{},{}]);
            for(j = 0; j < 7; j++) {
                if ((i == 2 && j < this.startWeekDay(date.getDay())) || d > cd) {
                    cnk.inline_keyboard[i][j] = {text: ' ', callback_data: ' '};
                } else {
                    cnk.inline_keyboard[i][j] = {text: d, callback_data: 'n_' + date.getFullYear() + '-' + this.twoDigits(date.getMonth() + 1) + '-' + this.twoDigits(d) + '_0'};
                    d++;
                }
            }
        }
        cnk.inline_keyboard.push([{},{},{}]);
        cnk.inline_keyboard[cr - 1][0] = {text: '<', callback_data: 'n_' + dayjs(date).format("YYYY-MM") + '_-'};
        cnk.inline_keyboard[cr - 1][1] = {text: ' ', callback_data: ' '};
        cnk.inline_keyboard[cr - 1][2] = {text: '>', callback_data: 'n_' + dayjs(date).format("YYYY-MM") + '_+'};
        return cnk;
    }
    startNavCalendar(msg) {
        var now = new Date();
        now.setDate(1);
        now.setHours(0);
        now.setMinutes(0);
        now.setSeconds(0);
        var menu = {};
        if (this.options.bot_api === 'telebot')
            menu.replyMarkup = this.createNavigationKeyboard(now);
        else
            menu.reply_markup = this.createNavigationKeyboard(now);
        this.sendMessageCalendar(menu, msg);
    }
    clickButtonCalendar(query) {
        if (query.data == ' ') {
            return -1;
        }
        var code = query.data.split('_');
        var date;
        var res = -1;
        if (code[0] == 'n') {
            switch (code[2]) {
                case '++':
                    date = new Date(code[1]);
                    date.setFullYear(date.getFullYear() + 1);
                    this.editMessageReplyMarkupCalendar(date, query);
                    break;
                case '--':
                    date = new Date(code[1]);
                    date.setFullYear(date.getFullYear() - 1);
                    this.editMessageReplyMarkupCalendar(date, query);
                    break;
                case '+':
                    date = new Date(code[1]);
                    if (date.getMonth() + 1 == 12) {
                        date.setFullYear(date.getFullYear() + 1);
                        date.setMonth(0);
                    } else {
                        date.setMonth(date.getMonth() + 1);
                    }
                    this.editMessageReplyMarkupCalendar(date, query);
                    break;
                case '-':
                    date = new Date(code[1]);
                    if (date.getMonth() - 1 == -1) {
                        date.setFullYear(date.getFullYear() - 1);
                        date.setMonth(11);
                    } else {
                        date.setMonth(date.getMonth() - 1);
                    }
                    this.editMessageReplyMarkupCalendar(date, query);
                    break;
                case '0':
                    if (this.options.close_calendar === true) {
                        this.deleteMessage(query);
                        this.chats.delete(query.message.chat.id);
                    }
                    res = dayjs(code[1]).format(this.options.date_format);
            }
        }
        return res;
    }
}