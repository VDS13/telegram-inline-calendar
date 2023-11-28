
# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [2.1.0](https://github.com/VDS13/telegram-inline-calendar/compare/2.0.6...2.1.0) - 2023-11-28

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

More details in the [API](https://github.com/VDS13/telegram-inline-calendar/blob/main/v2.x/API.md) and [examples](https://github.com/VDS13/telegram-inline-calendar/blob/main/v2.x/EXAMPLES.md)


## [2.0.6](https://github.com/VDS13/telegram-inline-calendar/compare/2.0.3...2.0.6) - 2023-07-19

### Added:

* Indonesian language support.
* Turkish language support.
