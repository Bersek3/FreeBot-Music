function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
import path from "node:path";
import process from "node:process";
import { Client } from "discord.js";
import got from "got";
import { Soundcloud } from "soundcloud.ts";
import * as config from "../config/index.js";
import { importURLToString } from "../utils/functions/importURLToString.js";
import { SpotifyUtil } from "../utils/handlers/SpotifyUtil.js";
import { ClientUtils } from "../utils/structures/ClientUtils.js";
import { CommandManager } from "../utils/structures/CommandManager.js";
import { DebugLogManager } from "../utils/structures/DebugLogManager.js";
import { EventsLoader } from "../utils/structures/EventsLoader.js";
import { JSONDataManager } from "../utils/structures/JSONDataManager.js";
import { ModerationLogs } from "../utils/structures/ModerationLogs.js";
import { RawonLogger } from "../utils/structures/RawonLogger.js";
export var Rawon = /*#__PURE__*/ function(Client) {
    "use strict";
    _inherits(Rawon, Client);
    var _super = _create_super(Rawon);
    function Rawon(opt) {
        _class_call_check(this, Rawon);
        var _this;
        _this = _super.call(this, opt);
        _define_property(_assert_this_initialized(_this), "startTimestamp", 0);
        _define_property(_assert_this_initialized(_this), "config", config);
        _define_property(_assert_this_initialized(_this), "commands", new CommandManager(_assert_this_initialized(_this), path.resolve(importURLToString(import.meta.url), "..", "commands")));
        _define_property(_assert_this_initialized(_this), "events", new EventsLoader(_assert_this_initialized(_this), path.resolve(importURLToString(import.meta.url), "..", "events")));
        _define_property(_assert_this_initialized(_this), "data", new JSONDataManager(path.resolve(process.cwd(), "data.json")));
        _define_property(_assert_this_initialized(_this), "logger", new RawonLogger({
            prod: _this.config.isProd
        }));
        _define_property(_assert_this_initialized(_this), "debugLog", new DebugLogManager(_this.config.debugMode, _this.config.isProd));
        _define_property(_assert_this_initialized(_this), "modlogs", new ModerationLogs(_assert_this_initialized(_this)));
        _define_property(_assert_this_initialized(_this), "spotify", new SpotifyUtil(_assert_this_initialized(_this)));
        _define_property(_assert_this_initialized(_this), "utils", new ClientUtils(_assert_this_initialized(_this)));
        _define_property(_assert_this_initialized(_this), "soundcloud", new Soundcloud());
        _define_property(_assert_this_initialized(_this), "request", got.extend({
            hooks: {
                beforeError: [
                    function(error) {
                        var _error_options_url, _error_response;
                        var _error_options_url_toString, _error_response_rawBody_toString;
                        _this.debugLog.logData("error", "GOT_REQUEST", [
                            [
                                "URL",
                                (_error_options_url_toString = (_error_options_url = error.options.url) === null || _error_options_url === void 0 ? void 0 : _error_options_url.toString()) !== null && _error_options_url_toString !== void 0 ? _error_options_url_toString : "[???]"
                            ],
                            [
                                "Code",
                                error.code
                            ],
                            [
                                "Response",
                                (_error_response_rawBody_toString = (_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.rawBody.toString("ascii")) !== null && _error_response_rawBody_toString !== void 0 ? _error_response_rawBody_toString : "[???]"
                            ]
                        ]);
                        return error;
                    }
                ],
                beforeRequest: [
                    function(options) {
                        var _options_url;
                        var _options_url_toString, _options_encoding;
                        _this.debugLog.logData("info", "GOT_REQUEST", [
                            [
                                "URL",
                                (_options_url_toString = (_options_url = options.url) === null || _options_url === void 0 ? void 0 : _options_url.toString()) !== null && _options_url_toString !== void 0 ? _options_url_toString : "[???]"
                            ],
                            [
                                "Method",
                                options.method
                            ],
                            // eslint-disable-next-line unicorn/text-encoding-identifier-case
                            [
                                "Encoding",
                                (_options_encoding = options.encoding) !== null && _options_encoding !== void 0 ? _options_encoding : "UTF-8"
                            ],
                            // eslint-disable-next-line typescript/strict-boolean-expressions
                            [
                                "Agent",
                                options.agent.http ? "HTTP" : "HTTPS"
                            ]
                        ]);
                    }
                ]
            }
        }));
        var _this1 = _assert_this_initialized(_this);
        _define_property(_assert_this_initialized(_this), "build", /*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _this1.startTimestamp = Date.now();
                        _this1.events.load();
                        return [
                            4,
                            _this1.login()
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2,
                            _this1
                        ];
                }
            });
        }));
        return _this;
    }
    return Rawon;
}(Client);
