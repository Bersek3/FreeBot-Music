/* eslint-disable no-await-in-loop */ function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _async_iterator(iterable) {
    var method, async, sync, retry = 2;
    for("undefined" != typeof Symbol && (async = Symbol.asyncIterator, sync = Symbol.iterator); retry--;){
        if (async && null != (method = iterable[async])) return method.call(iterable);
        if (sync && null != (method = iterable[sync])) return new AsyncFromSyncIterator(method.call(iterable));
        async = "@@asyncIterator", sync = "@@iterator";
    }
    throw new TypeError("Object is not async iterable");
}
function AsyncFromSyncIterator(s) {
    function AsyncFromSyncIteratorContinuation(r) {
        if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object."));
        var done = r.done;
        return Promise.resolve(r.value).then(function(value) {
            return {
                value: value,
                done: done
            };
        });
    }
    return AsyncFromSyncIterator = function(s) {
        this.s = s, this.n = s.next;
    }, AsyncFromSyncIterator.prototype = {
        s: null,
        n: null,
        next: function() {
            return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments));
        },
        return: function(value) {
            var ret = this.s.return;
            return void 0 === ret ? Promise.resolve({
                value: value,
                done: !0
            }) : AsyncFromSyncIteratorContinuation(ret.apply(this.s, arguments));
        },
        throw: function(value) {
            var thr = this.s.return;
            return void 0 === thr ? Promise.reject(value) : AsyncFromSyncIteratorContinuation(thr.apply(this.s, arguments));
        }
    }, new AsyncFromSyncIterator(s);
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
function _ts_values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
import { promises as fs } from "node:fs";
import nodePath from "node:path";
import { setTimeout } from "node:timers";
import { ApplicationCommandType, Collection } from "discord.js";
import i18n from "../../config/index.js";
import { CommandContext } from "../../structures/CommandContext.js";
import { createEmbed } from "../functions/createEmbed.js";
import { pathStringToURLString } from "../functions/pathStringToURLString.js";
export var CommandManager = /*#__PURE__*/ function(Collection1) {
    "use strict";
    _inherits(CommandManager, Collection1);
    var _super = _create_super(CommandManager);
    function CommandManager(client, path) {
        _class_call_check(this, CommandManager);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "client", void 0);
        _define_property(_assert_this_initialized(_this), "path", void 0);
        _define_property(_assert_this_initialized(_this), "isReady", void 0);
        _define_property(_assert_this_initialized(_this), "categories", void 0);
        _define_property(_assert_this_initialized(_this), "aliases", void 0);
        _define_property(_assert_this_initialized(_this), "cooldowns", void 0);
        _this.client = client;
        _this.path = path;
        _this.isReady = false;
        _this.categories = new Collection();
        _this.aliases = new Collection();
        _this.cooldowns = new Collection();
        return _this;
    }
    _create_class(CommandManager, [
        {
            key: "load",
            value: function load() {
                var _this = this;
                return _async_to_generator(function() {
                    var categories, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _loop, _iterator, _step, err, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    15,
                                    16,
                                    17
                                ]);
                                return [
                                    4,
                                    fs.readdir(nodePath.resolve(_this.path))
                                ];
                            case 1:
                                categories = _state.sent();
                                _this.client.logger.info("Found ".concat(categories.length, " categories, registering..."));
                                _iteratorAbruptCompletion = false, _didIteratorError = false;
                                _state.label = 2;
                            case 2:
                                _state.trys.push([
                                    2,
                                    8,
                                    9,
                                    14
                                ]);
                                _loop = function() {
                                    var _value, category, meta, files, disabledCount, allCmd, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _loop, _iterator, _step1, err, error;
                                    return _ts_generator(this, function(_state) {
                                        switch(_state.label){
                                            case 0:
                                                _value = _step.value;
                                                category = _value;
                                                _state.label = 1;
                                            case 1:
                                                _state.trys.push([
                                                    1,
                                                    18,
                                                    19,
                                                    20
                                                ]);
                                                return [
                                                    4,
                                                    import(pathStringToURLString(nodePath.resolve(_this.path, category, "category.meta.js")))
                                                ];
                                            case 2:
                                                meta = _state.sent().default;
                                                _this.categories.set(category, meta);
                                                _this.client.logger.info("Registering ".concat(category, " category..."));
                                                return [
                                                    4,
                                                    fs.readdir(nodePath.resolve(_this.path, category)).then(function(fls) {
                                                        return fls.filter(function(fl) {
                                                            return fl !== "category.meta.js";
                                                        });
                                                    })
                                                ];
                                            case 3:
                                                files = _state.sent();
                                                disabledCount = 0;
                                                _this.client.logger.info("Found ".concat(files.length, " of commands in ").concat(category, ", loading..."));
                                                return [
                                                    4,
                                                    _this.client.application.commands.fetch()
                                                ];
                                            case 4:
                                                allCmd = _state.sent();
                                                _iteratorAbruptCompletion = false, _didIteratorError = false;
                                                _state.label = 5;
                                            case 5:
                                                _state.trys.push([
                                                    5,
                                                    11,
                                                    12,
                                                    17
                                                ]);
                                                _loop = function() {
                                                    var _value, file, _command_meta_aliases, _command_meta_contextChat, _command_meta_contextUser, path, command, _command_meta_aliases1, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, alias, _command_meta_contextChat_length, _command_meta_contextChat1, _command_meta_contextUser_length, _command_meta_contextUser1, _command_meta_slash_name, _command_meta_slash_description, _command_meta_slash_name_length, _command_meta_slash_description_length, error;
                                                    return _ts_generator(this, function(_state) {
                                                        switch(_state.label){
                                                            case 0:
                                                                _value = _step1.value;
                                                                file = _value;
                                                                _state.label = 1;
                                                            case 1:
                                                                _state.trys.push([
                                                                    1,
                                                                    9,
                                                                    ,
                                                                    10
                                                                ]);
                                                                path = pathStringToURLString(nodePath.resolve(_this.path, category, file));
                                                                return [
                                                                    4,
                                                                    _this.client.utils.import(path, _this.client)
                                                                ];
                                                            case 2:
                                                                command = _state.sent();
                                                                if (command === undefined) throw new Error("File ".concat(file, " is not a valid command file."));
                                                                command.meta = Object.assign(command.meta, {
                                                                    path: path,
                                                                    category: category
                                                                });
                                                                if (Number((_command_meta_aliases = command.meta.aliases) === null || _command_meta_aliases === void 0 ? void 0 : _command_meta_aliases.length) > 0) {
                                                                    ;
                                                                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                                                    try {
                                                                        for(_iterator = ((_command_meta_aliases1 = command.meta.aliases) !== null && _command_meta_aliases1 !== void 0 ? _command_meta_aliases1 : [])[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                                                            alias = _step.value;
                                                                            _this.aliases.set(alias, command.meta.name);
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
                                                                _this.set(command.meta.name, command);
                                                                if (!(((_command_meta_contextChat_length = (_command_meta_contextChat = command.meta.contextChat) === null || _command_meta_contextChat === void 0 ? void 0 : _command_meta_contextChat.length) !== null && _command_meta_contextChat_length !== void 0 ? _command_meta_contextChat_length : 0) > 0)) return [
                                                                    3,
                                                                    4
                                                                ];
                                                                return [
                                                                    4,
                                                                    _this.registerCmd({
                                                                        name: (_command_meta_contextChat1 = command.meta.contextChat) !== null && _command_meta_contextChat1 !== void 0 ? _command_meta_contextChat1 : "",
                                                                        type: ApplicationCommandType.Message
                                                                    }, {
                                                                        onError: function(gld, err) {
                                                                            var _gld_id;
                                                                            return _this.client.logger.error("Unable to register ".concat(command.meta.name, " to message context for ").concat((_gld_id = gld === null || gld === void 0 ? void 0 : gld.id) !== null && _gld_id !== void 0 ? _gld_id : "???", ", reason: ").concat(err.message));
                                                                        },
                                                                        onRegistered: function(gld) {
                                                                            return _this.client.logger.info("Registered ".concat(command.meta.name, " to message context for ").concat(gld.id));
                                                                        }
                                                                    })
                                                                ];
                                                            case 3:
                                                                _state.sent();
                                                                if (!_this.client.config.isDev) _this.client.logger.info("Registered ".concat(command.meta.name, " to message context for global."));
                                                                _state.label = 4;
                                                            case 4:
                                                                if (!(((_command_meta_contextUser_length = (_command_meta_contextUser = command.meta.contextUser) === null || _command_meta_contextUser === void 0 ? void 0 : _command_meta_contextUser.length) !== null && _command_meta_contextUser_length !== void 0 ? _command_meta_contextUser_length : 0) > 0)) return [
                                                                    3,
                                                                    6
                                                                ];
                                                                return [
                                                                    4,
                                                                    _this.registerCmd({
                                                                        name: (_command_meta_contextUser1 = command.meta.contextUser) !== null && _command_meta_contextUser1 !== void 0 ? _command_meta_contextUser1 : "",
                                                                        type: ApplicationCommandType.User
                                                                    }, {
                                                                        onError: function(gld, err) {
                                                                            var _gld_id;
                                                                            return _this.client.logger.error("Unable to register ".concat(command.meta.name, " to user context for ").concat((_gld_id = gld === null || gld === void 0 ? void 0 : gld.id) !== null && _gld_id !== void 0 ? _gld_id : "???", ", reason: ").concat(err.message));
                                                                        },
                                                                        onRegistered: function(gld) {
                                                                            return _this.client.logger.info("Registered ".concat(command.meta.name, " to user context for ").concat(gld.id));
                                                                        }
                                                                    })
                                                                ];
                                                            case 5:
                                                                _state.sent();
                                                                if (!_this.client.config.isDev) _this.client.logger.info("Registered ".concat(command.meta.name, " to user context for global."));
                                                                _state.label = 6;
                                                            case 6:
                                                                if (!(!allCmd.has(command.meta.name) && command.meta.slash && _this.client.config.enableSlashCommand)) return [
                                                                    3,
                                                                    8
                                                                ];
                                                                if (((_command_meta_slash_name_length = (_command_meta_slash_name = command.meta.slash.name) === null || _command_meta_slash_name === void 0 ? void 0 : _command_meta_slash_name.length) !== null && _command_meta_slash_name_length !== void 0 ? _command_meta_slash_name_length : 0) === 0) {
                                                                    Object.assign(command.meta.slash, {
                                                                        name: command.meta.name
                                                                    });
                                                                }
                                                                if (((_command_meta_slash_description_length = (_command_meta_slash_description = command.meta.slash.description) === null || _command_meta_slash_description === void 0 ? void 0 : _command_meta_slash_description.length) !== null && _command_meta_slash_description_length !== void 0 ? _command_meta_slash_description_length : 0) === 0) {
                                                                    Object.assign(command.meta.slash, {
                                                                        description: command.meta.description
                                                                    });
                                                                }
                                                                return [
                                                                    4,
                                                                    _this.registerCmd(command.meta.slash, {
                                                                        onError: function(gld, err) {
                                                                            var _gld_id;
                                                                            return _this.client.logger.error("Unable to register ".concat(command.meta.name, " to slash command for ").concat((_gld_id = gld === null || gld === void 0 ? void 0 : gld.id) !== null && _gld_id !== void 0 ? _gld_id : "???", ", reason: ").concat(err.message));
                                                                        },
                                                                        onRegistered: function(gld) {
                                                                            return _this.client.logger.info("Registered ".concat(command.meta.name, " to slash command for ").concat(gld.id));
                                                                        }
                                                                    })
                                                                ];
                                                            case 7:
                                                                _state.sent();
                                                                if (!_this.client.config.isDev) _this.client.logger.info("Registered ".concat(command.meta.name, " to slash command for global."));
                                                                _state.label = 8;
                                                            case 8:
                                                                _this.client.logger.info("Command ".concat(command.meta.name, " from ").concat(category, " category is now loaded."));
                                                                if (command.meta.disable === true) disabledCount++;
                                                                return [
                                                                    3,
                                                                    10
                                                                ];
                                                            case 9:
                                                                error = _state.sent();
                                                                _this.client.logger.error("Error occured while loading ".concat(file, ": ").concat(error.message));
                                                                return [
                                                                    3,
                                                                    10
                                                                ];
                                                            case 10:
                                                                return [
                                                                    2
                                                                ];
                                                        }
                                                    });
                                                };
                                                _iterator = _async_iterator(files);
                                                _state.label = 6;
                                            case 6:
                                                return [
                                                    4,
                                                    _iterator.next()
                                                ];
                                            case 7:
                                                if (!(_iteratorAbruptCompletion = !(_step1 = _state.sent()).done)) return [
                                                    3,
                                                    10
                                                ];
                                                return [
                                                    5,
                                                    _ts_values(_loop())
                                                ];
                                            case 8:
                                                _state.sent();
                                                _state.label = 9;
                                            case 9:
                                                _iteratorAbruptCompletion = false;
                                                return [
                                                    3,
                                                    6
                                                ];
                                            case 10:
                                                return [
                                                    3,
                                                    17
                                                ];
                                            case 11:
                                                err = _state.sent();
                                                _didIteratorError = true;
                                                _iteratorError = err;
                                                return [
                                                    3,
                                                    17
                                                ];
                                            case 12:
                                                _state.trys.push([
                                                    12,
                                                    ,
                                                    15,
                                                    16
                                                ]);
                                                if (!(_iteratorAbruptCompletion && _iterator.return != null)) return [
                                                    3,
                                                    14
                                                ];
                                                return [
                                                    4,
                                                    _iterator.return()
                                                ];
                                            case 13:
                                                _state.sent();
                                                _state.label = 14;
                                            case 14:
                                                return [
                                                    3,
                                                    16
                                                ];
                                            case 15:
                                                if (_didIteratorError) {
                                                    throw _iteratorError;
                                                }
                                                return [
                                                    7
                                                ];
                                            case 16:
                                                return [
                                                    7
                                                ];
                                            case 17:
                                                _this.categories.set(category, Object.assign(meta, {
                                                    cmds: _this.filter(function(c) {
                                                        return c.meta.category === category;
                                                    })
                                                }));
                                                _this.client.logger.info("Done loading ".concat(files.length, " commands in ").concat(category, " category."));
                                                if (disabledCount > 0) {
                                                    _this.client.logger.info("".concat(disabledCount, " out of ").concat(files.length, " commands in ").concat(category, " category is disabled."));
                                                }
                                                return [
                                                    3,
                                                    20
                                                ];
                                            case 18:
                                                error = _state.sent();
                                                _this.client.logger.error("CMD_LOADER_ERR:", error);
                                                return [
                                                    3,
                                                    20
                                                ];
                                            case 19:
                                                _this.client.logger.info("Done registering ".concat(category, " category."));
                                                return [
                                                    7
                                                ];
                                            case 20:
                                                return [
                                                    2
                                                ];
                                        }
                                    });
                                };
                                _iterator = _async_iterator(categories);
                                _state.label = 3;
                            case 3:
                                return [
                                    4,
                                    _iterator.next()
                                ];
                            case 4:
                                if (!(_iteratorAbruptCompletion = !(_step = _state.sent()).done)) return [
                                    3,
                                    7
                                ];
                                return [
                                    5,
                                    _ts_values(_loop())
                                ];
                            case 5:
                                _state.sent();
                                _state.label = 6;
                            case 6:
                                _iteratorAbruptCompletion = false;
                                return [
                                    3,
                                    3
                                ];
                            case 7:
                                return [
                                    3,
                                    14
                                ];
                            case 8:
                                err = _state.sent();
                                _didIteratorError = true;
                                _iteratorError = err;
                                return [
                                    3,
                                    14
                                ];
                            case 9:
                                _state.trys.push([
                                    9,
                                    ,
                                    12,
                                    13
                                ]);
                                if (!(_iteratorAbruptCompletion && _iterator.return != null)) return [
                                    3,
                                    11
                                ];
                                return [
                                    4,
                                    _iterator.return()
                                ];
                            case 10:
                                _state.sent();
                                _state.label = 11;
                            case 11:
                                return [
                                    3,
                                    13
                                ];
                            case 12:
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                                return [
                                    7
                                ];
                            case 13:
                                return [
                                    7
                                ];
                            case 14:
                                return [
                                    3,
                                    17
                                ];
                            case 15:
                                error = _state.sent();
                                _this.client.logger.error("CMD_LOADER_ERR:", error);
                                return [
                                    3,
                                    17
                                ];
                            case 16:
                                _this.client.logger.info("All categories has been registered.");
                                _this.client.logger.info("Current bot language is ".concat(_this.client.config.lang.toUpperCase()));
                                _this.isReady = true;
                                return [
                                    7
                                ];
                            case 17:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "handle",
            value: function handle(message, pref) {
                var _args_shift;
                // eslint-disable-next-line prefer-named-capture-group
                var prefix = pref === "{mention}" ? RegExp("<@(!)?\\d*?>", "u").exec(message.content)[0] : pref;
                var args = message.content.slice(prefix.length).trim().split(RegExp(" +", "u"));
                var cmd = (_args_shift = args.shift()) === null || _args_shift === void 0 ? void 0 : _args_shift.toLowerCase();
                var _this_aliases_get, _this_get;
                var command = (_this_get = this.get(cmd !== null && cmd !== void 0 ? cmd : "")) !== null && _this_get !== void 0 ? _this_get : this.get((_this_aliases_get = this.aliases.get(cmd !== null && cmd !== void 0 ? cmd : "")) !== null && _this_aliases_get !== void 0 ? _this_aliases_get : "");
                this.client.debugLog.logData("info", "COMMAND_MANAGER_HANDLE", [
                    [
                        "Content",
                        message.content
                    ],
                    [
                        "Prefix",
                        pref
                    ],
                    [
                        "Cmd Name",
                        cmd !== null && cmd !== void 0 ? cmd : "[???]"
                    ],
                    [
                        "Is Command",
                        command === undefined ? "No" : "Yes"
                    ]
                ]);
                if (!command || command.meta.disable === true) return;
                if (!this.cooldowns.has(command.meta.name)) this.cooldowns.set(command.meta.name, new Collection());
                var now = Date.now();
                var timestamps = this.cooldowns.get(command.meta.name);
                var _command_meta_cooldown;
                var cooldownAmount = ((_command_meta_cooldown = command.meta.cooldown) !== null && _command_meta_cooldown !== void 0 ? _command_meta_cooldown : 3) * 1000;
                if ((timestamps === null || timestamps === void 0 ? void 0 : timestamps.has(message.author.id)) === true) {
                    var expirationTime = timestamps.get(message.author.id) + cooldownAmount;
                    if (now < expirationTime) {
                        var timeLeft = (expirationTime - now) / 1000;
                        var _this = this;
                        _async_to_generator(function() {
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        return [
                                            4,
                                            message.channel.send({
                                                embeds: [
                                                    createEmbed("warn", "⚠️ **|** ".concat(i18n.__mf("utils.cooldownMessage", {
                                                        author: message.author.toString(),
                                                        timeleft: timeLeft.toFixed(1)
                                                    })), true)
                                                ]
                                            }).then(function(msg) {
                                                // eslint-disable-next-line promise/no-nesting
                                                setTimeout(/*#__PURE__*/ _async_to_generator(function() {
                                                    return _ts_generator(this, function(_state) {
                                                        return [
                                                            2,
                                                            msg.delete().catch(function(error) {
                                                                return _this.client.logger.error("PROMISE_ERR:", error);
                                                            })
                                                        ];
                                                    });
                                                }), 3500);
                                                return 0;
                                            }).catch(function(error) {
                                                return _this.client.logger.error("PROMISE_ERR:", error);
                                            })
                                        ];
                                    case 1:
                                        _state.sent();
                                        return [
                                            2
                                        ];
                                }
                            });
                        })();
                        return;
                    }
                    timestamps.set(message.author.id, now);
                    setTimeout(function() {
                        return timestamps.delete(message.author.id);
                    }, cooldownAmount);
                } else {
                    timestamps === null || timestamps === void 0 ? void 0 : timestamps.set(message.author.id, now);
                    if (this.client.config.devs.includes(message.author.id)) timestamps === null || timestamps === void 0 ? void 0 : timestamps.delete(message.author.id);
                }
                try {
                    if (command.meta.devOnly === true && !this.client.config.devs.includes(message.author.id)) return;
                    command.execute(new CommandContext(message, args));
                } catch (error) {
                    this.client.logger.error("COMMAND_HANDLER_ERR:", error);
                } finally{
                    var _message_guild, _message_guild1;
                    // eslint-disable-next-line no-unsafe-finally
                    if (command.meta.devOnly === true && !this.client.config.devs.includes(message.author.id)) return;
                    this.client.logger.info("".concat(message.author.tag, " [").concat(message.author.id, "] is using ").concat(command.meta.name, " command from ").concat(command.meta.category, " category ") + "on #".concat(message.channel.name, " [").concat(message.channel.id, "] in guild: ").concat((_message_guild = message.guild) === null || _message_guild === void 0 ? void 0 : _message_guild.name, " [").concat((_message_guild1 = message.guild) === null || _message_guild1 === void 0 ? void 0 : _message_guild1.id, "]"));
                }
            }
        },
        {
            key: "registerCmd",
            value: function registerCmd(data, options) {
                var _this = this;
                return _async_to_generator(function() {
                    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, id, guild, error, err, _this_client_application;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!(options && _this.client.config.isDev)) return [
                                    3,
                                    12
                                ];
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    9,
                                    10,
                                    11
                                ]);
                                _iterator = _this.client.config.mainGuild[Symbol.iterator]();
                                _state.label = 2;
                            case 2:
                                if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                    3,
                                    8
                                ];
                                id = _step.value;
                                guild = null;
                                _state.label = 3;
                            case 3:
                                _state.trys.push([
                                    3,
                                    6,
                                    ,
                                    7
                                ]);
                                return [
                                    4,
                                    _this.client.guilds.fetch(id).catch(function() {
                                        return null;
                                    })
                                ];
                            case 4:
                                guild = _state.sent();
                                if (!guild) throw new Error("Invalid Guild.");
                                return [
                                    4,
                                    guild.commands.create(data)
                                ];
                            case 5:
                                _state.sent();
                                void options.onRegistered(guild);
                                return [
                                    3,
                                    7
                                ];
                            case 6:
                                error = _state.sent();
                                void options.onError(guild, error);
                                return [
                                    3,
                                    7
                                ];
                            case 7:
                                _iteratorNormalCompletion = true;
                                return [
                                    3,
                                    2
                                ];
                            case 8:
                                return [
                                    3,
                                    11
                                ];
                            case 9:
                                err = _state.sent();
                                _didIteratorError = true;
                                _iteratorError = err;
                                return [
                                    3,
                                    11
                                ];
                            case 10:
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                                        _iterator.return();
                                    }
                                } finally{
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                                return [
                                    7
                                ];
                            case 11:
                                return [
                                    3,
                                    14
                                ];
                            case 12:
                                return [
                                    4,
                                    (_this_client_application = _this.client.application) === null || _this_client_application === void 0 ? void 0 : _this_client_application.commands.create(data)
                                ];
                            case 13:
                                _state.sent();
                                _state.label = 14;
                            case 14:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return CommandManager;
}(Collection);
