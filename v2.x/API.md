 API Reference

<a name="Calendar"></a>

## Calendar
Calendar

**Kind**: global class  

* [Calendar](#Calendar)
    * [new Calendar(bot, [options])](#new_Calendar)
    * _instance_
        * [.startNavCalendar(msg)](#Calendar+startNavCalendar)
        * [.startTimeSelector(msg)](#Calendar+startTimeSelector)
        * [.clickButtonCalendar(query)](#Calendar+clickButtonCalendar) ⇒ <code>String \| Number</code>
        * [.createNavigationKeyboard(date)](#Calendar+createNavigationKeyboard) ⇒ <code>Object</code>
        * [.createTimeSelector(date, from_calendar)](#Calendar+createTimeSelector) ⇒ <code>Object</code>
        * [.changeLang(language)](#Calendar+changeLang)
### new Calendar(bot, [options])
| Param | Type | Default | Description |
| --- | --- | --- | --- |
| bot | <code>Boolean\|TelegramBot</code> | <code>false</code> | TelegramBot class instance (Telebot/node-telegram-bot-api) or <code>false</code>(Telegraf/grammY) |
| [options] | <code>Object</code> |  |  |
| [options.language] | <code>String</code> | <code>"en"</code> | Calendar language. |
| [options.date_format] | <code>String</code> | <code>"YYYY-MM-DD"</code> | Date output format. |
| [options.bot_api] | <code>String</code> | <code>"node-telegram-bot-api"</code> | Telegram bot library. |
| [options.close_calendar] | <code>Boolean</code> | <code>true</code> | Close calendar after date selection. |
| [options.start_week_day] | <code>Number</code> | <code>0</code> | First day of the week (Sunday - `0`, Monday - `1`, Tuesday - `2` and so on). |
| [options.time_selector_mod] | <code>Boolean</code> | <code>false</code> | Enable time selection after a date is selected. |
| [options.time_range] | <code>String</code> | <code>"00:00-23:59"</code> | Allowed time range in "HH:mm-HH:mm" format. |
| [options.time_step] | <code>String</code> | <code>"30m"</code> | Time step in the format "\<Time step\>\<m \| h\>", where "m" - minutes, "h" - hours. (For example: <code>"30m"</code>, <code>"1h"</code>, <code>"150m"</code>). |
| [options.start_date] | <code>Boolean\|String</code> | <code>false</code> | Minimum date of the calendar in the format "YYYY-MM-DD". |
| [options.stop_date] | <code>Boolean\|String</code> | <code>false</code> | Maximum date of the calendar in the format "YYYY-MM-DD". |
| [options.custom_start_msg] | <code>Boolean\|String</code> | <code>false</code> | Text of the message sent with the calendar/time selector. |
| [options.lock_date] | <code>Boolean</code> | <code>false</code> | Enable blocked dates list. |
| [options.lock_datetime] | <code>Boolean</code> | <code>false</code> | Enable list of blocked dates and times. |
| [lock_date_array] | <code>Array</code> | <code>[]</code> | Аrray of blocked dates in string format in the format `"YYYY-MM-DD"`. |
| [lock_datetime_array] | <code>Array</code> | <code>[]</code> | Аrray of blocked dates and times in string format in the format `"YYYY-MM-DD HH:mm"`. |

<a name="Calendar+startNavCalendar"></a>

### calendar.startNavCalendar(msg)
Generating and sending a calendar to the user. Sets the current month and year.

**Kind**: instance method of [<code>Calendar</code>](#Calendar)  

| Param | Type | Description |
| --- | --- | --- |
| msg | <code>Object</code> | https://core.telegram.org/bots/api#message (Telebot/node-telegram-bot-api) <br> https://deno.land/x/grammy@v1.15.1/mod.ts?s=Context (grammY) <br> https://telegraf.js.org/classes/Context.html (Telegraf)|

<a name="Calendar+startTimeSelector"></a>

### calendar.startTimeSelector(msg)
Generating and sending a time selector to the user.

**Kind**: instance method of [<code>Calendar</code>](#Calendar)  

| Param | Type | Description |
| --- | --- | --- |
| msg | <code>Object</code> | https://core.telegram.org/bots/api#message (Telebot/node-telegram-bot-api) <br> https://deno.land/x/grammy@v1.15.1/mod.ts?s=Context (grammY) <br> https://telegraf.js.org/classes/Context.html (Telegraf)|

<a name="Calendar+clickButtonCalendar"></a>

### calendar.clickButtonCalendar(query) ⇒ <code>String \| Number</code>
Handle clicking on the calendar or the time selector.

**Kind**: instance method of [<code>Calendar</code>](#Calendar)  
**Returns**: <code>String \| Number</code> - If a date is selected, it will return a string in the specified format, otherwise it will return -1.

| Param | Type | Description |
| --- | --- | --- |
| query | <code>Object</code> | https://core.telegram.org/bots/api#callbackquery (Telebot/node-telegram-bot-api) <br> https://deno.land/x/grammy@v1.15.1/mod.ts?s=Context (grammY) <br> https://telegraf.js.org/classes/Context.html (Telegraf)|

<a name="Calendar+createNavigationKeyboard"></a>

### calendar.createNavigationKeyboard(date) ⇒ <code>Object</code>
Calendar generation.

**Kind**: instance method of [<code>Calendar</code>](#Calendar)  
**Returns**: <code>Object</code> - InlineKeyboardMarkup (https://core.telegram.org/bots/api#inlinekeyboardmarkup)

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | Year and month for which you want to get a calendar. |

<a name="Calendar+createTimeSelector"></a>

### calendar.createTimeSelector(date, from_calendar) ⇒ <code>Object</code>
Time selector generation.

**Kind**: instance method of [<code>Calendar</code>](#Calendar)  
**Returns**: <code>Object</code> - InlineKeyboardMarkup (https://core.telegram.org/bots/api#inlinekeyboardmarkup)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| date | <code>Date</code> | <code>undefined</code> | Date Objects for which you want to get a time selector. |
| from_calendar | <code>Boolean</code> | <code>false</code> | Calling the time selector from the calendar. |

<a name="Calendar+changeLang"></a>

### calendar.changeLang(language)
Changes the language of the bot messages.

**Kind**: instance method of [<code>Calendar</code>](#Calendar)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| language | <code>String</code> | <code>undefined</code> | Language (en/es/de/es/fr/it/tr/id/uk). |