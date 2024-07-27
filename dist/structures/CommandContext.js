function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
import { Buffer } from "node:buffer";
import { ActionRowBuilder, BaseInteraction, ButtonBuilder, ButtonInteraction, ButtonStyle, Collection, CommandInteraction, ContextMenuCommandInteraction, Message, MessageComponentInteraction, ModalSubmitInteraction } from "discord.js";
export var CommandContext = /*#__PURE__*/ function() {
    "use strict";
    function CommandContext(context) {
        var args = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
        _class_call_check(this, CommandContext);
        _define_property(this, "context", void 0);
        _define_property(this, "args", void 0);
        _define_property(this, "additionalArgs", void 0);
        _define_property(this, "channel", void 0);
        _define_property(this, "guild", void 0);
        this.context = context;
        this.args = args;
        this.additionalArgs = new Collection();
        this.channel = this.context.channel;
        this.guild = this.context.guild;
    }
    _create_class(CommandContext, [
        {
            key: "deferReply",
            value: function deferReply() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        if (_this.isInteraction()) {
                            return [
                                2,
                                _this.context.deferReply()
                            ];
                        }
                        return [
                            2,
                            undefined
                        ];
                    });
                })();
            }
        },
        {
            key: "reply",
            value: function reply(options, autoedit) {
                var _this = this;
                return _async_to_generator(function() {
                    var context, rep;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (_this.isInteraction() && (_this.context.isCommand() || _this.context.isStringSelectMenu()) && _this.context.replied && autoedit !== true) throw new Error("Interaction is already replied.");
                                context = _this.context;
                                return [
                                    4,
                                    _this.send(options, _this.isInteraction() ? context.isCommand() || context.isStringSelectMenu() ? context.replied || context.deferred ? "editReply" : "reply" : "reply" : "reply").catch(function(error) {
                                        return {
                                            error: error
                                        };
                                    })
                                ];
                            case 1:
                                rep = _state.sent();
                                if ("error" in rep) {
                                    throw new Error("Unable to reply context, because: ".concat(rep.error.message));
                                }
                                // @ts-expect-error-next-line
                                // eslint-disable-next-line typescript/no-unsafe-return
                                return [
                                    2,
                                    _instanceof(rep, Message) ? rep : new Message(_this.context.client, rep)
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "send",
            value: function send(options) {
                var type = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "editReply";
                var _this = this;
                return _async_to_generator(function() {
                    var _options, deletionBtn, _options_components, msg, channel, res, _allowedMentions;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                deletionBtn = new ActionRowBuilder().addComponents(new ButtonBuilder().setEmoji("🗑️").setStyle(ButtonStyle.Danger));
                                if (options.askDeletion) {
                                    deletionBtn.components[0].setCustomId(Buffer.from("".concat(options.askDeletion.reference, "_delete-msg")).toString("base64"));
                                    ;
                                    options.components = _to_consumable_array((_options_components = options.components) !== null && _options_components !== void 0 ? _options_components : []).concat([
                                        deletionBtn
                                    ]);
                                }
                                if (!_this.isInteraction()) return [
                                    3,
                                    3
                                ];
                                options.fetchReply = true;
                                return [
                                    4,
                                    _this.context[type](options)
                                ];
                            case 1:
                                msg = _state.sent();
                                channel = _this.context.channel;
                                return [
                                    4,
                                    channel === null || channel === void 0 ? void 0 : channel.messages.fetch(msg.id).catch(function() {
                                        return null;
                                    })
                                ];
                            case 2:
                                res = _state.sent();
                                return [
                                    2,
                                    res !== null && res !== void 0 ? res : msg
                                ];
                            case 3:
                                if (options.ephemeral === true) {
                                    throw new Error("Cannot send ephemeral message in a non-interaction context.");
                                }
                                if (typeof options === "string") {
                                    // eslint-disable-next-line no-param-reassign
                                    options = {
                                        content: options
                                    };
                                }
                                ((_allowedMentions = (_options = options).allowedMentions) !== null && _allowedMentions !== void 0 ? _allowedMentions : _options.allowedMentions = {}).repliedUser = false;
                                return [
                                    2,
                                    _this.context.reply(options)
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "isInteraction",
            value: function isInteraction() {
                return _instanceof(this.context, BaseInteraction);
            }
        },
        {
            key: "isCommand",
            value: function isCommand() {
                return _instanceof(this.context, CommandInteraction);
            }
        },
        {
            key: "isContextMenu",
            value: function isContextMenu() {
                return _instanceof(this.context, ContextMenuCommandInteraction);
            }
        },
        {
            key: "isMessageComponent",
            value: function isMessageComponent() {
                return _instanceof(this.context, MessageComponentInteraction);
            }
        },
        {
            key: "isButton",
            value: function isButton() {
                return _instanceof(this.context, ButtonInteraction);
            }
        },
        {
            key: "isStringSelectMenu",
            value: function isStringSelectMenu() {
                return _instanceof(this.context, MessageComponentInteraction);
            }
        },
        {
            key: "isModal",
            value: function isModal() {
                return _instanceof(this.context, ModalSubmitInteraction);
            }
        },
        {
            key: "mentions",
            get: function get() {
                return _instanceof(this.context, Message) ? this.context.mentions : null;
            }
        },
        {
            key: "deferred",
            get: function get() {
                return _instanceof(this.context, BaseInteraction) ? this.context.deferred : false;
            }
        },
        {
            key: "options",
            get: function get() {
                /* Not sure about this but CommandInteraction does not provides getString method anymore */ return _instanceof(this.context, BaseInteraction) ? this.context.options : null;
            }
        },
        {
            key: "fields",
            get: function get() {
                return _instanceof(this.context, ModalSubmitInteraction) ? this.context.fields : null;
            }
        },
        {
            key: "author",
            get: function get() {
                return _instanceof(this.context, BaseInteraction) ? this.context.user : this.context.author;
            }
        },
        {
            key: "member",
            get: function get() {
                var _this_guild;
                var _this_guild_members_resolve;
                return (_this_guild_members_resolve = (_this_guild = this.guild) === null || _this_guild === void 0 ? void 0 : _this_guild.members.resolve(this.author.id)) !== null && _this_guild_members_resolve !== void 0 ? _this_guild_members_resolve : null;
            }
        }
    ]);
    return CommandContext;
}();
