function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var _process_env_STAY_IN_VC_AFTER_FINISHED, _process_env_ENABLE_SLASH_COMMAND, _process_env_ENABLE_24_7_COMMAND, _process_env_NODE_ENV, _process_env_DEBUG_MODE, _process_env_REPL, _process_env_MUSIC_SELECTION_TYPE, _process_env_EMBED_COLOR;
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";
import { parse } from "dotenv";
import { parseEnvValue } from "../utils/functions/parseEnvValue.js";
var devEnvPath = path.resolve(process.cwd(), "dev.env");
if (existsSync(devEnvPath)) {
    var parsed = parse(readFileSync(devEnvPath));
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Object.entries(parsed)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array(_step.value, 2), key = _step_value[0], val = _step_value[1];
            process.env[key] = val;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
var toCapitalCase = function(text) {
    if (text === "") return "";
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};
var formatLocale = function(locale) {
    var _locale_length;
    if (((_locale_length = locale === null || locale === void 0 ? void 0 : locale.length) !== null && _locale_length !== void 0 ? _locale_length : 0) === 0) return "en";
    var _locale_toLowerCase_split;
    var parts = (_locale_toLowerCase_split = locale === null || locale === void 0 ? void 0 : locale.toLowerCase().split('-')) !== null && _locale_toLowerCase_split !== void 0 ? _locale_toLowerCase_split : [];
    if (parts.length === 2) {
        parts[1] = parts[1].toUpperCase();
    }
    return parts.join('-');
};
export var stayInVCAfterFinished = ((_process_env_STAY_IN_VC_AFTER_FINISHED = process.env.STAY_IN_VC_AFTER_FINISHED) === null || _process_env_STAY_IN_VC_AFTER_FINISHED === void 0 ? void 0 : _process_env_STAY_IN_VC_AFTER_FINISHED.toLowerCase()) === "yes";
export var enableSlashCommand = ((_process_env_ENABLE_SLASH_COMMAND = process.env.ENABLE_SLASH_COMMAND) === null || _process_env_ENABLE_SLASH_COMMAND === void 0 ? void 0 : _process_env_ENABLE_SLASH_COMMAND.toLowerCase()) !== "no";
export var is247Allowed = ((_process_env_ENABLE_24_7_COMMAND = process.env.ENABLE_24_7_COMMAND) === null || _process_env_ENABLE_24_7_COMMAND === void 0 ? void 0 : _process_env_ENABLE_24_7_COMMAND.toLowerCase()) === "yes";
export var isDev = ((_process_env_NODE_ENV = process.env.NODE_ENV) === null || _process_env_NODE_ENV === void 0 ? void 0 : _process_env_NODE_ENV.toLowerCase()) === "development";
export var debugMode = ((_process_env_DEBUG_MODE = process.env.DEBUG_MODE) === null || _process_env_DEBUG_MODE === void 0 ? void 0 : _process_env_DEBUG_MODE.toLowerCase()) === "yes";
export var enableRepl = ((_process_env_REPL = process.env.REPL) === null || _process_env_REPL === void 0 ? void 0 : _process_env_REPL.toLowerCase()) === "yes";
export var isProd = !isDev;
var _process_env_MUSIC_SELECTION_TYPE_toLowerCase;
export var musicSelectionType = ((_process_env_MUSIC_SELECTION_TYPE_toLowerCase = (_process_env_MUSIC_SELECTION_TYPE = process.env.MUSIC_SELECTION_TYPE) === null || _process_env_MUSIC_SELECTION_TYPE === void 0 ? void 0 : _process_env_MUSIC_SELECTION_TYPE.toLowerCase()) !== null && _process_env_MUSIC_SELECTION_TYPE_toLowerCase !== void 0 ? _process_env_MUSIC_SELECTION_TYPE_toLowerCase : "") || "message";
var _process_env_EMBED_COLOR_toUpperCase;
export var embedColor = ((_process_env_EMBED_COLOR_toUpperCase = (_process_env_EMBED_COLOR = process.env.EMBED_COLOR) === null || _process_env_EMBED_COLOR === void 0 ? void 0 : _process_env_EMBED_COLOR.toUpperCase()) !== null && _process_env_EMBED_COLOR_toUpperCase !== void 0 ? _process_env_EMBED_COLOR_toUpperCase : "") || "00AD95";
var _process_env_DEFAULT_VOLUME;
export var defaultVolume = Number((_process_env_DEFAULT_VOLUME = process.env.DEFAULT_VOLUME) !== null && _process_env_DEFAULT_VOLUME !== void 0 ? _process_env_DEFAULT_VOLUME : 100) || 100;
var _process_env_MAIN_PREFIX;
export var mainPrefix = isDev ? "d!" : ((_process_env_MAIN_PREFIX = process.env.MAIN_PREFIX) !== null && _process_env_MAIN_PREFIX !== void 0 ? _process_env_MAIN_PREFIX : "") || "!";
var _process_env_STREAM_STRATEGY;
export var streamStrategy = ((_process_env_STREAM_STRATEGY = process.env.STREAM_STRATEGY) !== null && _process_env_STREAM_STRATEGY !== void 0 ? _process_env_STREAM_STRATEGY : "") || "yt-dlp";
export var lang = formatLocale(process.env.LOCALE) || "en";
var _process_env_YES_EMOJI;
export var yesEmoji = ((_process_env_YES_EMOJI = process.env.YES_EMOJI) !== null && _process_env_YES_EMOJI !== void 0 ? _process_env_YES_EMOJI : "") || "✅";
var _process_env_NO_EMOJI;
export var noEmoji = ((_process_env_NO_EMOJI = process.env.NO_EMOJI) !== null && _process_env_NO_EMOJI !== void 0 ? _process_env_NO_EMOJI : "") || "❌";
var _process_env_ALT_PREFIX;
export var altPrefixes = parseEnvValue(((_process_env_ALT_PREFIX = process.env.ALT_PREFIX) !== null && _process_env_ALT_PREFIX !== void 0 ? _process_env_ALT_PREFIX : "") || "{mention}").filter(function(x, i, a) {
    return a.indexOf(x) === i && x !== mainPrefix;
});
var _process_env_DEVS;
export var devs = parseEnvValue((_process_env_DEVS = process.env.DEVS) !== null && _process_env_DEVS !== void 0 ? _process_env_DEVS : "");
var _process_env_MAIN_GUILD;
export var mainGuild = parseEnvValue((_process_env_MAIN_GUILD = process.env.MAIN_GUILD) !== null && _process_env_MAIN_GUILD !== void 0 ? _process_env_MAIN_GUILD : "");
var _process_env_ACTIVITIES;
export var presenceData = {
    activities: parseEnvValue((_process_env_ACTIVITIES = process.env.ACTIVITIES) !== null && _process_env_ACTIVITIES !== void 0 ? _process_env_ACTIVITIES : "").map(function(x, i) {
        var _process_env_ACTIVITY_TYPES;
        return {
            name: x,
            type: toCapitalCase(parseEnvValue((_process_env_ACTIVITY_TYPES = process.env.ACTIVITY_TYPES) !== null && _process_env_ACTIVITY_TYPES !== void 0 ? _process_env_ACTIVITY_TYPES : "")[i]) || "Playing"
        };
    }),
    status: [
        "online"
    ],
    interval: 60000
};
