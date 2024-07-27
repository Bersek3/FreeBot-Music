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
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
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
import { ChannelType } from "discord.js";
import i18n from "../../config/index.js";
import { createEmbed } from "../functions/createEmbed.js";
export var ModerationLogs = /*#__PURE__*/ function() {
    "use strict";
    function ModerationLogs(client) {
        _class_call_check(this, ModerationLogs);
        _define_property(this, "client", void 0);
        this.client = client;
    }
    _create_class(ModerationLogs, [
        {
            key: "handleWarn",
            value: function handleWarn(options) {
                var _this = this;
                return _async_to_generator(function() {
                    var ch, _options_reason, embed;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.getCh(options.guild)
                                ];
                            case 1:
                                ch = _state.sent();
                                if (!ch) return [
                                    2
                                ];
                                embed = createEmbed("warn", i18n.__mf("commands.moderation.warn.warnSuccess", {
                                    user: options.user.tag
                                })).setThumbnail(options.user.displayAvatarURL({
                                    size: 1024
                                })).addFields([
                                    {
                                        name: i18n.__("commands.moderation.common.reasonString"),
                                        value: (_options_reason = options.reason) !== null && _options_reason !== void 0 ? _options_reason : i18n.__("commands.moderation.common.noReasonString")
                                    }
                                ]).setFooter({
                                    text: i18n.__mf("commands.moderation.warn.warnedByString", {
                                        author: options.author.tag
                                    }),
                                    iconURL: options.author.displayAvatarURL({})
                                });
                                return [
                                    4,
                                    ch.send({
                                        embeds: [
                                            embed
                                        ]
                                    }).catch(function(error) {
                                        return console.log("Failed to send warn logs: ".concat(error.message));
                                    })
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "handleBanAdd",
            value: function handleBanAdd(options) {
                var _this = this;
                return _async_to_generator(function() {
                    var fetched, ch, _fetched_reason, embed;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    options.ban.fetch().catch(function() {
                                        return void 0;
                                    })
                                ];
                            case 1:
                                fetched = _state.sent();
                                if (!fetched) return [
                                    2
                                ];
                                return [
                                    4,
                                    _this.getCh(fetched.guild)
                                ];
                            case 2:
                                ch = _state.sent();
                                if (!ch) return [
                                    2
                                ];
                                embed = createEmbed("error", i18n.__mf("commands.moderation.ban.banSuccess", {
                                    user: fetched.user.tag
                                })).setThumbnail(fetched.user.displayAvatarURL({
                                    size: 1024
                                })).addFields([
                                    {
                                        name: i18n.__("commands.moderation.common.reasonString"),
                                        value: (_fetched_reason = fetched.reason) !== null && _fetched_reason !== void 0 ? _fetched_reason : i18n.__("commands.moderation.common.noReasonString")
                                    }
                                ]);
                                if (options.author) {
                                    embed.setFooter({
                                        text: i18n.__mf("commands.moderation.ban.bannedByString", {
                                            author: options.author.tag
                                        }),
                                        iconURL: options.author.displayAvatarURL({})
                                    });
                                }
                                return [
                                    4,
                                    ch.send({
                                        embeds: [
                                            embed
                                        ]
                                    })
                                ];
                            case 3:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "handleBanRemove",
            value: function handleBanRemove(options) {
                var _this = this;
                return _async_to_generator(function() {
                    var ch, _options_ban_reason, embed;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.getCh(options.ban.guild)
                                ];
                            case 1:
                                ch = _state.sent();
                                if (!ch) return [
                                    2
                                ];
                                embed = createEmbed("info", i18n.__mf("commands.moderation.unban.unbanSuccess", {
                                    user: options.ban.user.tag
                                })).setThumbnail(options.ban.user.displayAvatarURL({
                                    size: 1024
                                })).addFields([
                                    {
                                        name: i18n.__("commands.moderation.common.reasonString"),
                                        value: (_options_ban_reason = options.ban.reason) !== null && _options_ban_reason !== void 0 ? _options_ban_reason : i18n.__("commands.moderation.common.noReasonString")
                                    }
                                ]);
                                if (options.author) {
                                    embed.setFooter({
                                        text: i18n.__mf("commands.moderation.unban.unbannedByString", {
                                            author: options.author.tag
                                        }),
                                        iconURL: options.author.displayAvatarURL({})
                                    });
                                }
                                return [
                                    4,
                                    ch.send({
                                        embeds: [
                                            embed
                                        ]
                                    })
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getCh",
            value: function getCh(guild) {
                var _this = this;
                return _async_to_generator(function() {
                    var ch, _this_client_data_data, modlog, id, channel, e;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                modlog = (_this_client_data_data = _this.client.data.data) === null || _this_client_data_data === void 0 ? void 0 : _this_client_data_data[guild.id].modLog;
                                if ((modlog === null || modlog === void 0 ? void 0 : modlog.enable) !== true) throw new Error("...");
                                id = modlog.channel;
                                return [
                                    4,
                                    guild.channels.fetch(id !== null && id !== void 0 ? id : "").catch(function() {
                                        return void 0;
                                    })
                                ];
                            case 1:
                                channel = _state.sent();
                                if ((channel === null || channel === void 0 ? void 0 : channel.type) !== ChannelType.GuildText) throw new Error("...");
                                ch = channel;
                                return [
                                    3,
                                    3
                                ];
                            case 2:
                                e = _state.sent();
                                ch = undefined;
                                return [
                                    3,
                                    3
                                ];
                            case 3:
                                return [
                                    2,
                                    ch
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return ModerationLogs;
}();
