/* eslint-disable unicorn/filename-case */ import { createRequire } from "node:module";
import { format, formatDuration, intervalToDuration } from "date-fns";
import { lang } from "../../config/index.js";
var req = createRequire(import.meta.url);
var locales = req("date-fns/locale");
var key = Object.keys(locales).find(function(val) {
    return val.toLowerCase() === lang.toLowerCase();
});
var locale = key === undefined ? locales.enUS : locales[key];
export function formatMS(ms) {
    if (Number.isNaN(ms)) throw new Error("Value is not a number.");
    return formatDuration(intervalToDuration({
        start: 0,
        end: ms
    }), {
        locale: locale
    });
}
export function formatTime(time) {
    if (Number.isNaN(time)) throw new Error("Value is not a number.");
    return format(time, "P HH:mm", {
        locale: locale
    });
}
