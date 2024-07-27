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
import { clearTimeout } from "node:timers";
import { AudioPlayerStatus, createAudioPlayer } from "@discordjs/voice";
import i18n from "../config/index.js";
import { createEmbed } from "../utils/functions/createEmbed.js";
import { play } from "../utils/handlers/GeneralUtil.js";
import { SongManager } from "../utils/structures/SongManager.js";
var nonEnum = {
    enumerable: false
};
export var ServerQueue = /*#__PURE__*/ function() {
    "use strict";
    function ServerQueue(textChannel) {
        var _this = this;
        _class_call_check(this, ServerQueue);
        _define_property(this, "textChannel", void 0);
        _define_property(this, "stayInVC", void 0);
        _define_property(this, "player", void 0);
        _define_property(this, "connection", void 0);
        _define_property(this, "dcTimeout", void 0);
        _define_property(this, "timeout", void 0);
        _define_property(this, "songs", void 0);
        _define_property(this, "loopMode", void 0);
        _define_property(this, "shuffle", void 0);
        _define_property(this, "filters", void 0);
        _define_property(this, "_volume", void 0);
        _define_property(this, "_lastVSUpdateMsg", void 0);
        _define_property(this, "_lastMusicMsg", void 0);
        _define_property(this, "_skipVoters", void 0);
        this.textChannel = textChannel;
        this.stayInVC = this.client.config.stayInVCAfterFinished;
        this.player = createAudioPlayer();
        this.connection = null;
        this.dcTimeout = null;
        this.timeout = null;
        this.loopMode = "OFF";
        this.shuffle = false;
        this.filters = {};
        this._volume = this.client.config.defaultVolume;
        this._lastVSUpdateMsg = null;
        this._lastMusicMsg = null;
        this._skipVoters = [];
        Object.defineProperties(this, {
            _skipVoters: nonEnum,
            _lastMusicMsg: nonEnum,
            _lastVSUpdateMsg: nonEnum,
            _volume: nonEnum
        });
        this.songs = new SongManager(this.client, this.textChannel.guild);
        var _this1 = this;
        this.player.on("stateChange", function() {
            var _ref = _async_to_generator(function(oldState, newState) {
                var _newState_resource_volume, newSong, _this_songs_random, _this_songs_sortByIndex_filter_first, _this_songs_sortByIndex_first, song, _this_songs_sortByIndex_first_key, _this_songs_sortByIndex_filter_first_key, nextS;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            if (!(newState.status === AudioPlayerStatus.Playing && oldState.status !== AudioPlayerStatus.Paused)) return [
                                3,
                                1
                            ];
                            (_newState_resource_volume = newState.resource.volume) === null || _newState_resource_volume === void 0 ? void 0 : _newState_resource_volume.setVolumeLogarithmic(_this1.volume / 100);
                            newSong = _this1.player.state.resource.metadata.song;
                            _this1.sendStartPlayingMsg(newSong);
                            return [
                                3,
                                3
                            ];
                        case 1:
                            if (!(newState.status === AudioPlayerStatus.Idle)) return [
                                3,
                                3
                            ];
                            song = oldState.resource.metadata;
                            _this1.client.logger.info("".concat(_this1.client.shard ? "[Shard #".concat(_this1.client.shard.ids[0], "]") : "", ' Track: "').concat(song.song.title, '" on ').concat(_this1.textChannel.guild.name, " has ended."));
                            _this1.skipVoters = [];
                            if (_this1.loopMode === "OFF") {
                                _this1.songs.delete(song.key);
                            }
                            nextS = _this1.shuffle && _this1.loopMode !== "SONG" ? (_this_songs_random = _this1.songs.random()) === null || _this_songs_random === void 0 ? void 0 : _this_songs_random.key : _this1.loopMode === "SONG" ? song.key : (_this_songs_sortByIndex_filter_first_key = (_this_songs_sortByIndex_filter_first = _this1.songs.sortByIndex().filter(function(x) {
                                return x.index > song.index;
                            }).first()) === null || _this_songs_sortByIndex_filter_first === void 0 ? void 0 : _this_songs_sortByIndex_filter_first.key) !== null && _this_songs_sortByIndex_filter_first_key !== void 0 ? _this_songs_sortByIndex_filter_first_key : _this1.loopMode === "QUEUE" ? (_this_songs_sortByIndex_first_key = (_this_songs_sortByIndex_first = _this1.songs.sortByIndex().first()) === null || _this_songs_sortByIndex_first === void 0 ? void 0 : _this_songs_sortByIndex_first.key) !== null && _this_songs_sortByIndex_first_key !== void 0 ? _this_songs_sortByIndex_first_key : "" : "";
                            return [
                                4,
                                _this1.textChannel.send({
                                    embeds: [
                                        createEmbed("info", "⏹ **|** ".concat(i18n.__mf("utils.generalHandler.stopPlaying", {
                                            song: "[".concat(song.song.title, "](").concat(song.song.url, ")")
                                        }))).setThumbnail(song.song.thumbnail)
                                    ]
                                }).then(function(ms) {
                                    return _this1.lastMusicMsg = ms.id;
                                }).catch(function(error) {
                                    return _this1.client.logger.error("PLAY_ERR:", error);
                                }).finally(/*#__PURE__*/ _async_to_generator(function() {
                                    return _ts_generator(this, function(_state) {
                                        return [
                                            2,
                                            play(_this1.textChannel.guild, nextS).catch(function() {
                                                var _ref = _async_to_generator(function(error) {
                                                    var _this_connection;
                                                    return _ts_generator(this, function(_state) {
                                                        switch(_state.label){
                                                            case 0:
                                                                return [
                                                                    4,
                                                                    _this1.textChannel.send({
                                                                        embeds: [
                                                                            createEmbed("error", i18n.__mf("utils.generalHandler.errorPlaying", {
                                                                                message: "`".concat(error, "`")
                                                                            }), true)
                                                                        ]
                                                                    })// eslint-disable-next-line promise/no-nesting, typescript/naming-convention
                                                                    .catch(function(error_) {
                                                                        return _this1.client.logger.error("PLAY_ERR:", error_);
                                                                    })
                                                                ];
                                                            case 1:
                                                                _state.sent();
                                                                (_this_connection = _this1.connection) === null || _this_connection === void 0 ? void 0 : _this_connection.disconnect();
                                                                _this1.client.logger.error("PLAY_ERR:", error);
                                                                return [
                                                                    2
                                                                ];
                                                        }
                                                    });
                                                });
                                                return function(error) {
                                                    return _ref.apply(this, arguments);
                                                };
                                            }())
                                        ];
                                    });
                                }))
                            ];
                        case 2:
                            _state.sent();
                            _state.label = 3;
                        case 3:
                            return [
                                2
                            ];
                    }
                });
            });
            return function(oldState, newState) {
                return _ref.apply(this, arguments);
            };
        }()).on("error", function(err) {
            var _this1 = _this;
            _async_to_generator(function() {
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            // eslint-disable-next-line promise/no-promise-in-callback
                            return [
                                4,
                                _this1.textChannel.send({
                                    embeds: [
                                        createEmbed("error", i18n.__mf("utils.generalHandler.errorPlaying", {
                                            message: "`".concat(err.message, "`")
                                        }), true)
                                    ]
                                }).catch(function(error) {
                                    return _this1.client.logger.error("PLAY_CMD_ERR:", error);
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
            _this.destroy();
            _this.client.logger.error("PLAY_ERR:", err);
        }).on("debug", function(message) {
            _this.client.logger.debug(message);
        });
    }
    _create_class(ServerQueue, [
        {
            key: "setFilter",
            value: function setFilter(filter, state) {
                var before = this.filters[filter];
                this.filters[filter] = state;
                if (before !== state && this.player.state.status === AudioPlayerStatus.Playing) {
                    this.playing = false;
                    void play(this.textChannel.guild, this.player.state.resource.metadata.key, true);
                }
            }
        },
        {
            key: "stop",
            value: function stop() {
                this.songs.clear();
                this.player.stop(true);
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                var _this_connection;
                this.stop();
                (_this_connection = this.connection) === null || _this_connection === void 0 ? void 0 : _this_connection.disconnect();
                var _this_timeout;
                clearTimeout((_this_timeout = this.timeout) !== null && _this_timeout !== void 0 ? _this_timeout : undefined);
                var _this_dcTimeout;
                clearTimeout((_this_dcTimeout = this.dcTimeout) !== null && _this_dcTimeout !== void 0 ? _this_dcTimeout : undefined);
                delete this.textChannel.guild.queue;
            }
        },
        {
            key: "volume",
            get: function get() {
                return this._volume;
            },
            set: function set(newVol) {
                var _this_player_state_resource_volume;
                this._volume = newVol;
                (_this_player_state_resource_volume = this.player.state.resource.volume) === null || _this_player_state_resource_volume === void 0 ? void 0 : _this_player_state_resource_volume.setVolumeLogarithmic(this._volume / 100);
            }
        },
        {
            key: "skipVoters",
            get: function get() {
                return this._skipVoters;
            },
            set: function set(value) {
                this._skipVoters = value;
            }
        },
        {
            key: "lastMusicMsg",
            get: function get() {
                return this._lastMusicMsg;
            },
            set: function set(value) {
                if (this._lastMusicMsg !== null) {
                    var _this = this;
                    _async_to_generator(function() {
                        var _this__lastMusicMsg;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.textChannel.messages.fetch((_this__lastMusicMsg = _this._lastMusicMsg) !== null && _this__lastMusicMsg !== void 0 ? _this__lastMusicMsg : "").then(function(msg) {
                                            void msg.delete();
                                            return 0;
                                        }).catch(function(error) {
                                            return _this.textChannel.client.logger.error("DELETE_LAST_MUSIC_MESSAGE_ERR:", error);
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
                }
                this._lastMusicMsg = value;
            }
        },
        {
            key: "lastVSUpdateMsg",
            get: function get() {
                return this._lastVSUpdateMsg;
            },
            set: function set(value) {
                if (this._lastVSUpdateMsg !== null) {
                    var _this = this;
                    _async_to_generator(function() {
                        var _this__lastVSUpdateMsg;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.textChannel.messages.fetch((_this__lastVSUpdateMsg = _this._lastVSUpdateMsg) !== null && _this__lastVSUpdateMsg !== void 0 ? _this__lastVSUpdateMsg : "").then(function(msg) {
                                            void msg.delete();
                                            return 0;
                                        }).catch(function(error) {
                                            return _this.textChannel.client.logger.error("DELETE_LAST_VS_UPDATE_MESSAGE_ERR:", error);
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
                }
                this._lastVSUpdateMsg = value;
            }
        },
        {
            key: "playing",
            get: function get() {
                return this.player.state.status === AudioPlayerStatus.Playing;
            },
            set: function set(value) {
                if (value) {
                    this.player.unpause();
                } else {
                    this.player.pause();
                }
            }
        },
        {
            key: "idle",
            get: function get() {
                return this.player.state.status === AudioPlayerStatus.Idle && this.songs.size === 0;
            }
        },
        {
            key: "client",
            get: function get() {
                return this.textChannel.client;
            }
        },
        {
            key: "sendStartPlayingMsg",
            value: function sendStartPlayingMsg(newSong) {
                this.client.logger.info("".concat(this.client.shard ? "[Shard #".concat(this.client.shard.ids[0], "]") : "", ' Track: "').concat(newSong.title, '" on ').concat(this.textChannel.guild.name, " has started."));
                var _this = this;
                _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.textChannel.send({
                                        embeds: [
                                            createEmbed("info", "▶ **|** ".concat(i18n.__mf("utils.generalHandler.startPlaying", {
                                                song: "[".concat(newSong.title, "](").concat(newSong.url, ")")
                                            }))).setThumbnail(newSong.thumbnail)
                                        ]
                                    }).then(function(ms) {
                                        return _this.lastMusicMsg = ms.id;
                                    }).catch(function(error) {
                                        return _this.client.logger.error("PLAY_ERR:", error);
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
            }
        }
    ]);
    return ServerQueue;
}();
