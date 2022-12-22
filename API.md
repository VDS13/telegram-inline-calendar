 API Reference

<a name="Calendar"></a>

## Calendar
Calendar

**Kind**: global class  

* [Calendar](#Calendar)
    * [new Calendar(bot, [options])](#new_Calendar)
    * _instance_
        * [.startNavCalendar(msg)](#Calendar+startNavCalendar)
        * [.clickButtonCalendar(query)](#Calendar+clickButtonCalendar) ⇒ <code>String \| Number</code>
        * [.createNavigationKeyboard(date)](#Calendar+createNavigationKeyboard) ⇒ <code>Object</code>
### new Calendar(bot, [options])
| Param | Type | Default | Description |
| --- | --- | --- | --- |
| bot | <code>TelegramBot</code> |  | TelegramBot class instance (Telegraf/Telebot/node-telegram-bot-api) |
| [options] | <code>Object</code> |  |  |
| [options.language] | <code>String</code> | <code>"en"</code> | Calendar language. |
| [options.date_format] | <code>String</code> | <code>"YYYY-MM-DD"</code> | Date output format. |
| [options.bot_api] | <code>String</code> | <code>"node-telegram-bot-api"</code> | Telegram bot library. |
| [options.close_calendar] | <code>Boolean</code> | <code>true</code> | Close calendar after date selection. |

<a name="Calendar+startNavCalendar"></a>

### calendar.startNavCalendar(msg)
Generating and sending a calendar to the user. Set current month and year

**Kind**: instance method of [<code>Calendar</code>](#Calendar)  

| Param | Type | Description |
| --- | --- | --- |
| msg | <code>Object</code> | https://core.telegram.org/bots/api#message |

<a name="Calendar+clickButtonCalendar"></a>

### calendar.clickButtonCalendar(query) ⇒ <code>String \| Number</code>
Handle clicking on the calendar.

**Kind**: instance method of [<code>Calendar</code>](#Calendar)  
**Returns**: <code>String \| Number</code> - If a date is selected, it will return a string in the specified format, otherwise it will return -1

| Param | Type | Description |
| --- | --- | --- |
| query | <code>Object</code> | https://core.telegram.org/bots/api#callbackquery |

<a name="Calendar+createNavigationKeyboard"></a>

### calendar.createNavigationKeyboard(date) ⇒ <code>Object</code>
Calendar generation.

**Kind**: instance method of [<code>Calendar</code>](#Calendar)  
**Returns**: <code>Object</code> - InlineKeyboardMarkup (https://core.telegram.org/bots/api#inlinekeyboardmarkup)

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | Year and month for which you want to get a calendar. |