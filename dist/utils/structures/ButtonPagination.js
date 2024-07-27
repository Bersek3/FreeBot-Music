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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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
import { ActionRowBuilder, ButtonBuilder, ButtonStyle, CommandInteraction, ComponentType } from "discord.js";
var DATAS = [
    {
        style: ButtonStyle.Secondary,
        emoji: "⏪",
        customId: "PREV10",
        type: ComponentType.Button
    },
    {
        style: ButtonStyle.Primary,
        emoji: "⬅️",
        customId: "PREV",
        type: ComponentType.Button
    },
    {
        style: ButtonStyle.Danger,
        emoji: "🚫",
        customId: "STOP",
        type: ComponentType.Button
    },
    {
        style: ButtonStyle.Primary,
        emoji: "➡️",
        customId: "NEXT",
        type: ComponentType.Button
    },
    {
        style: ButtonStyle.Secondary,
        emoji: "⏩",
        customId: "NEXT10",
        type: ComponentType.Button
    }
];
export var ButtonPagination = /*#__PURE__*/ function() {
    "use strict";
    function ButtonPagination(msg, payload) {
        _class_call_check(this, ButtonPagination);
        _define_property(this, "msg", void 0);
        _define_property(this, "payload", void 0);
        this.msg = msg;
        this.payload = payload;
    }
    _create_class(ButtonPagination, [
        {
            key: "start",
            value: function start() {
                var _this = this;
                return _async_to_generator(function() {
                    var embed, pages, index, isInteraction, buttons, toSend, msg, _tmp, _this_msg_channelId, fetchedMsg, collector;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                embed = _this.payload.embed;
                                pages = _this.payload.pages;
                                index = 0;
                                _this.payload.edit.call(_this, index, embed, pages[index]);
                                isInteraction = _instanceof(_this.msg, CommandInteraction);
                                buttons = DATAS.map(function(data) {
                                    return new ButtonBuilder(data);
                                });
                                toSend = {
                                    content: _this.payload.content,
                                    embeds: [
                                        embed
                                    ],
                                    components: pages.length < 2 ? [] : [
                                        new ActionRowBuilder().addComponents(buttons)
                                    ]
                                };
                                if (!isInteraction) return [
                                    3,
                                    1
                                ];
                                _tmp = _this.msg.editReply(toSend);
                                return [
                                    3,
                                    3
                                ];
                            case 1:
                                return [
                                    4,
                                    _this.msg.edit(toSend)
                                ];
                            case 2:
                                _tmp = _state.sent();
                                _state.label = 3;
                            case 3:
                                return [
                                    4,
                                    _tmp
                                ];
                            case 4:
                                msg = _state.sent();
                                return [
                                    4,
                                    _this.msg.client.channels.cache.get((_this_msg_channelId = _this.msg.channelId) !== null && _this_msg_channelId !== void 0 ? _this_msg_channelId : "").messages.fetch(msg.id)
                                ];
                            case 5:
                                fetchedMsg = _state.sent();
                                if (pages.length < 2) return [
                                    2
                                ];
                                collector = fetchedMsg.createMessageComponentCollector({
                                    filter: function(i) {
                                        void i.deferUpdate();
                                        return DATAS.map(function(x) {
                                            return x.customId.toLowerCase();
                                        }).includes(i.customId.toLowerCase()) && i.user.id === _this.payload.author;
                                    },
                                    componentType: ComponentType.Button
                                });
                                collector.on("collect", function() {
                                    var _ref = _async_to_generator(function(i) {
                                        return _ts_generator(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    switch(i.customId){
                                                        case "PREV10":
                                                            index -= 10;
                                                            break;
                                                        case "PREV":
                                                            index--;
                                                            break;
                                                        case "NEXT":
                                                            index++;
                                                            break;
                                                        case "NEXT10":
                                                            index += 10;
                                                            break;
                                                        default:
                                                            void msg.delete();
                                                            return [
                                                                2
                                                            ];
                                                    }
                                                    index = (index % pages.length + Number(pages.length)) % pages.length;
                                                    _this.payload.edit.call(_this, index, embed, pages[index]);
                                                    return [
                                                        4,
                                                        fetchedMsg.edit({
                                                            embeds: [
                                                                embed
                                                            ],
                                                            content: _this.payload.content,
                                                            components: pages.length < 2 ? [] : [
                                                                new ActionRowBuilder().addComponents(buttons)
                                                            ]
                                                        })
                                                    ];
                                                case 1:
                                                    _state.sent();
                                                    return [
                                                        2
                                                    ];
                                            }
                                        });
                                    });
                                    return function(i) {
                                        return _ref.apply(this, arguments);
                                    };
                                }());
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return ButtonPagination;
}();
