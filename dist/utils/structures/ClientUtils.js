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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
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
import { execSync } from "node:child_process";
import nodePath from "node:path";
import { ChannelType } from "discord.js";
import prism from "prism-media";
var FFmpeg = prism.FFmpeg;
export var ClientUtils = /*#__PURE__*/ function() {
    "use strict";
    function ClientUtils(client) {
        _class_call_check(this, ClientUtils);
        _define_property(this, "client", void 0);
        this.client = client;
    }
    _create_class(ClientUtils, [
        {
            key: "fetchMuteRole",
            value: function fetchMuteRole(guild) {
                var _this = this;
                return _async_to_generator(function() {
                    var _this_client_data_data_guild_id, _this_client_data_data, id, _id_length;
                    return _ts_generator(this, function(_state) {
                        id = (_this_client_data_data = _this.client.data.data) === null || _this_client_data_data === void 0 ? void 0 : (_this_client_data_data_guild_id = _this_client_data_data[guild.id]) === null || _this_client_data_data_guild_id === void 0 ? void 0 : _this_client_data_data_guild_id.mute;
                        // eslint-disable-next-line promise/prefer-await-to-then
                        return [
                            2,
                            ((_id_length = id === null || id === void 0 ? void 0 : id.length) !== null && _id_length !== void 0 ? _id_length : 0) > 0 ? guild.roles.fetch(id !== null && id !== void 0 ? id : "").catch(function() {
                                return null;
                            }) : null
                        ];
                    });
                })();
            }
        },
        {
            key: "fetchDJRole",
            value: function fetchDJRole(guild) {
                var _this = this;
                return _async_to_generator(function() {
                    var _this_client_data_data_guild_id, _this_client_data_data, _data_role, data, _data_role_length, _data_role1;
                    return _ts_generator(this, function(_state) {
                        data = (_this_client_data_data = _this.client.data.data) === null || _this_client_data_data === void 0 ? void 0 : (_this_client_data_data_guild_id = _this_client_data_data[guild.id]) === null || _this_client_data_data_guild_id === void 0 ? void 0 : _this_client_data_data_guild_id.dj;
                        if ((data === null || data === void 0 ? void 0 : data.enable) === true && ((_data_role_length = (_data_role = data.role) === null || _data_role === void 0 ? void 0 : _data_role.length) !== null && _data_role_length !== void 0 ? _data_role_length : 0) > 0) return [
                            2,
                            guild.roles.fetch((_data_role1 = data.role) !== null && _data_role1 !== void 0 ? _data_role1 : "")
                        ];
                        return [
                            2,
                            null
                        ];
                    });
                })();
            }
        },
        {
            key: "requiredVoters",
            value: function requiredVoters(memberAmount) {
                return Math.round(memberAmount / 2);
            }
        },
        {
            key: "decode",
            value: function decode(string) {
                return Buffer.from(string, "base64").toString("ascii");
            }
        },
        {
            key: "getUserCount",
            value: function getUserCount() {
                var _this = this;
                return _async_to_generator(function() {
                    var arr, shardUsers, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, users;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                arr = [];
                                if (!_this.client.shard) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _this.client.shard.broadcastEval(function(c) {
                                        return c.users.cache.map(function(x) {
                                            return x.id;
                                        });
                                    })
                                ];
                            case 1:
                                shardUsers = _state.sent();
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = shardUsers[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        users = _step.value;
                                        arr = _to_consumable_array(arr).concat(_to_consumable_array(users));
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
                                return [
                                    3,
                                    3
                                ];
                            case 2:
                                arr = _this.client.users.cache.map(function(x) {
                                    return x.id;
                                });
                                _state.label = 3;
                            case 3:
                                return [
                                    2,
                                    arr.filter(function(x, i) {
                                        return arr.indexOf(x) === i;
                                    }).length
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getChannelCount",
            value: function getChannelCount() {
                var textOnly = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false, voiceOnly = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                var _this = this;
                return _async_to_generator(function() {
                    var arr, shardChannels, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, channels;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                arr = [];
                                if (!_this.client.shard) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _this.client.shard.broadcastEval(function(c, ty) {
                                        return c.channels.cache.filter(function(ch) {
                                            if (ty.textOnly) {
                                                return ch.type === ty.types.GuildText || ch.type === ty.types.PublicThread || ch.type === ty.types.PrivateThread;
                                            } else if (ty.voiceOnly) {
                                                return ch.type === ty.types.GuildVoice;
                                            }
                                            return true;
                                        }).map(function(ch) {
                                            return ch.id;
                                        });
                                    }, {
                                        context: {
                                            textOnly: textOnly,
                                            voiceOnly: voiceOnly,
                                            types: ChannelType
                                        }
                                    })
                                ];
                            case 1:
                                shardChannels = _state.sent();
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = shardChannels[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        channels = _step.value;
                                        arr = _to_consumable_array(arr).concat(_to_consumable_array(channels));
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
                                return [
                                    3,
                                    3
                                ];
                            case 2:
                                arr = _this.client.channels.cache.filter(function(ch) {
                                    if (textOnly) {
                                        return ch.type === ChannelType.GuildText || ch.type === ChannelType.PublicThread || ch.type === ChannelType.PrivateThread;
                                    } else if (voiceOnly) {
                                        return ch.type === ChannelType.GuildVoice;
                                    }
                                    return true;
                                }).map(function(ch) {
                                    return ch.id;
                                });
                                _state.label = 3;
                            case 3:
                                return [
                                    2,
                                    arr.filter(function(x, i) {
                                        return arr.indexOf(x) === i;
                                    }).length
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getGuildCount",
            value: function getGuildCount() {
                var _this = this;
                return _async_to_generator(function() {
                    var guilds;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!_this.client.shard) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _this.client.shard.broadcastEval(function(c) {
                                        return c.guilds.cache.size;
                                    })
                                ];
                            case 1:
                                guilds = _state.sent();
                                return [
                                    2,
                                    guilds.reduce(function(prev, curr) {
                                        return prev + curr;
                                    })
                                ];
                            case 2:
                                return [
                                    2,
                                    _this.client.guilds.cache.size
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getPlayingCount",
            value: function getPlayingCount() {
                var _this = this;
                return _async_to_generator(function() {
                    var playings;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!_this.client.shard) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _this.client.shard.broadcastEval(function(c) {
                                        return c.guilds.cache.filter(function(x) {
                                            var _x_queue;
                                            return ((_x_queue = x.queue) === null || _x_queue === void 0 ? void 0 : _x_queue.playing) === true;
                                        }).size;
                                    })
                                ];
                            case 1:
                                playings = _state.sent();
                                return [
                                    2,
                                    playings.reduce(function(prev, curr) {
                                        return prev + curr;
                                    })
                                ];
                            case 2:
                                return [
                                    2,
                                    _this.client.guilds.cache.filter(function(x) {
                                        var _x_queue;
                                        return ((_x_queue = x.queue) === null || _x_queue === void 0 ? void 0 : _x_queue.playing) === true;
                                    }).size
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "import",
            value: function _import(path) {
                for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    args[_key - 1] = arguments[_key];
                }
                return _async_to_generator(function() {
                    var file;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    import(path).then(function(mod) {
                                        return mod[nodePath.parse(path).name];
                                    })
                                ];
                            case 1:
                                file = _state.sent();
                                return [
                                    2,
                                    file ? _construct(file, _to_consumable_array(args)) : undefined
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getFFmpegVersion",
            value: function getFFmpegVersion() {
                try {
                    var _ffmpeg_version_split_find;
                    var ffmpeg = FFmpeg.getInfo();
                    var _ffmpeg_version_split_find_replace;
                    return (_ffmpeg_version_split_find_replace = (_ffmpeg_version_split_find = ffmpeg.version.split(RegExp("[ _-]", "u")).find(function(x) {
                        return RegExp("[\\d.]", "u").test(x);
                    })) === null || _ffmpeg_version_split_find === void 0 ? void 0 : _ffmpeg_version_split_find.replace(RegExp("[^\\d.]", "gu"), "")) !== null && _ffmpeg_version_split_find_replace !== void 0 ? _ffmpeg_version_split_find_replace : "Unknown";
                } catch (e) {
                    return "Unknown";
                }
            }
        },
        {
            key: "getCommitHash",
            value: function getCommitHash(ref) {
                var short = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                try {
                    // eslint-disable-next-line node/no-sync
                    var res = execSync("git rev-parse".concat(short ? " --short" : "", " ").concat(ref));
                    return res.toString().trim();
                } catch (e) {
                    return "???";
                }
            }
        }
    ]);
    return ClientUtils;
}();
