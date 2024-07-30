
# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [1.8.0](https://github.com/VDS13/telegram-inline-calendar/compare/1.7.0...1.8.0) - 2024-07-30

### Added:

* Ukrainian language support.
* Function `changeLang`, which changes the language of the bot messages. A little later we will add the ability to bind the language to the user.
(Thanks @semklim)

## [1.7.0](https://github.com/VDS13/telegram-inline-calendar/compare/1.6.4...1.7.0) - 2023-11-28

### Added:

* Option `lock_date` to block the selection of certain dates. Defaults to `false`.
Locked dates are specified as an array of strings in the format `"YYYY-MM-DD"` in the class variable `lock_date_array` (By default the array is empty).

Example:

```js
const calendar = new Calendar(bot, {
    date_format: 'MMM D, YYYY h:mm A',
    language: 'de',
    start_week_day: 1,
    lock_date: true
});

calendar.lock_date_array = ["2023-11-17", "2023-11-19"];
```
<div align="left">
<img src="https://github.com/VDS13/telegram-inline-calendar/blob/main/img/ex4.PNG" width="200"/>
</div>

* Option `lock_datetime` to block the selection of time on a specific date.. Defaults to `false`.
Locked dates are specified as an array of strings in the format `"YYYY-MM-DD HH:mm"` in the class variable `lock_datetime_array` (By default the array is empty).

Example:

```js
const calendar = new Calendar(bot, {
    date_format: 'MMM D, YYYY h:mm A',
    language: 'en',
    start_week_day: 1,
    lock_datetime: true
});

calendar.lock_datetime_array = ["2023-11-17 08:30", "2023-11-17 11:45"];
```
<div align="left">
<img src="https://github.com/VDS13/telegram-inline-calendar/blob/main/img/ex5.PNG" width="200"/>
</div>

### Changed:

* Options `start_date` and `stop_date` can also be entered in the format `"YYYY-MM-DD HH:mm"`. The specified time is taken into account in the time selection menu.
<div align="left">
<img src="https://github.com/VDS13/telegram-inline-calendar/blob/main/img/demo4.gif" width="300"/>
</div>

* Options `start_date` and `stop_date` now work conditionally:
```js
start_date < stop_date
```
instead of:
```js
start_date <= new Date() <= stop_date
```

* In options `start_date` and `stop_date` you can specify the value `"now"`, which, when launched, will set the current date and time in the format `"YYYY-MM-DD HH:mm"` (does not change dynamically, the feature will be added in future updates).

Example:

```js
const calendar = new Calendar(bot, {
    date_format: 'MMM D, YYYY h:mm A',
    language: 'de',
    start_week_day: 1,
    time_selector_mod: true,
    time_range: "08:00-15:59",
    time_step: "15m",
    start_date: 'now',
    stop_date: '2024-04-20 14:00'
});
```
<div align="left">
<img src="https://github.com/VDS13/telegram-inline-calendar/blob/main/img/ex6.PNG" width="200"/>
</div>

More details in the [API](https://github.com/VDS13/telegram-inline-calendar/blob/main/v1.x/API.md) and [examples](https://github.com/VDS13/telegram-inline-calendar/blob/main/v1.x/EXAMPLES.md)

## [1.6.4](https://github.com/VDS13/telegram-inline-calendar/compare/1.6.2...1.6.4) - 2023-07-19

### Added:

* Indonesian language support.
* Turkish language support.

## [1.6.2](https://github.com/VDS13/telegram-inline-calendar/compare/1.6.1...1.6.2) - 2023-03-16

### Added:

* ESM Support Information.

## [1.6.1](https://github.com/VDS13/telegram-inline-calendar/compare/1.6.0...1.6.1) - 2023-03-05

### Changed:

* Fix examples.

## [1.6.0](https://github.com/VDS13/telegram-inline-calendar/compare/1.5.0...1.6.0) - 2023-03-03

### Added:

* Option `custom_start_msg` to change the text of the message sent with the calendar/time selector.

Example:
```js
const calendar = new Calendar(bot, {
    date_format: 'DD-MM-YYYY',
    language: 'en',
    bot_api: 'grammy',
    custom_start_msg: 'Сustom start message'
});
```
<div align="left">
<img src="https://github.com/VDS13/telegram-inline-calendar/blob/main/img/ex3.jpg" width="200"/>
</div>

## [1.5.0](https://github.com/VDS13/telegram-inline-calendar/compare/1.4.0...1.5.0) - 2023-02-22

### Added:

* Options `start_date` and `stop_date` to limit the pool of dates in the calendar.

Example:
```js
const calendar = new Calendar(bot, {
    date_format: 'DD-MM-YYYY',
    language: 'en',
    bot_api: 'grammy',
    start_date: '2022-11-15',
    stop_date: '2023-04-20'
});
```
<div align="left">
<img src="https://github.com/VDS13/telegram-inline-calendar/blob/main/img/ex1.jpg" width="200"/>
<img src="https://github.com/VDS13/telegram-inline-calendar/blob/main/img/ex2.jpg" width="200"/>
</div>

Note: 
```js
start_date <= new Date() <= stop_date
```

## [1.4.0](https://github.com/VDS13/telegram-inline-calendar/compare/1.3.3...1.4.0) - 2023-01-25

### Added:

* Support for [`grammy`](https://github.com/grammyjs/grammY) library

### Changed:

* Library optimization.
* Fixed bugs in `EXAMPLES.md` and `README.md`

## [1.3.3](https://github.com/VDS13/telegram-inline-calendar/compare/1.3.2...1.3.3) - 2023-01-22

### Changed:

* Library optimization.

## [1.3.2](https://github.com/VDS13/telegram-inline-calendar/compare/1.3.1...1.3.2) - 2023-01-14

### Changed:

* Hotfix ```README.md```.

## [1.3.1](https://github.com/VDS13/telegram-inline-calendar/compare/1.3.0...1.3.1) - 2023-01-14

### Changed:

* Hotfix ```README.md```.

## [1.3.0](https://github.com/VDS13/telegram-inline-calendar/compare/1.2.1...1.3.0) - 2023-01-14

### Added:

* Time selector (can be used in conjunction with the calendar and separately).
More details in the [API](https://github.com/VDS13/telegram-inline-calendar/blob/main/v1.x/API.md) and [examples](https://github.com/VDS13/telegram-inline-calendar/blob/main/v1.x/EXAMPLES.md)

## [1.2.1](https://github.com/VDS13/telegram-inline-calendar/compare/1.2.0...1.2.1) - 2023-01-14

### Changed:

* Hotfix ```close_calendar```.

## [1.2.0](https://github.com/VDS13/telegram-inline-calendar/compare/1.1.2...1.2.0) - 2023-01-12

### Added: ([issues#2](https://github.com/VDS13/telegram-inline-calendar/issues/2))

* Option `start_week_day`, which sets the first day of the week (Sunday - `0`, Monday - `1`, Tuesday - `2` and so on).

## [1.1.2](https://github.com/VDS13/telegram-inline-calendar/compare/1.1.1...1.1.2) - 2023-01-02

### Changed: ([issues#1](https://github.com/VDS13/telegram-inline-calendar/issues/1))

* Fixed bug with `callback_data` overflow.

## [1.1.1](https://github.com/VDS13/telegram-inline-calendar/compare/1.1.0...1.1.1) - 2022-12-22

### Changed:

* Hotfix ```close_calendar```.

## [1.1.0](https://github.com/VDS13/telegram-inline-calendar/compare/1.0.3...1.1.0) - 2022-12-22

### Added:

* Option ```close_calendar```, which determines whether to close the calendar after selecting a date.