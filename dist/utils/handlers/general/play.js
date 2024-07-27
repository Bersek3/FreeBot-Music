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
import { clearTimeout, setTimeout } from "node:timers";
import { AudioPlayerError, createAudioResource, entersState, StreamType, VoiceConnectionStatus } from "@discordjs/voice";
import { ChannelType } from "discord.js";
import prism from "prism-media";
import i18n from "../../../config/index.js";
import { createEmbed } from "../../functions/createEmbed.js";
import { ffmpegArgs } from "../../functions/ffmpegArgs.js";
import { getStream } from "../YTDLUtil.js";
export function play(guild, nextSong, wasIdle) {
    return _play.apply(this, arguments);
}
function _play() {
    _play = _async_to_generator(function(guild, nextSong, wasIdle) {
        var _queue_connection, queue, _nextSong_length, song, _queue_dcTimeout, stream, resource;
        function playResource() {
            return _playResource.apply(this, arguments);
        }
        function _playResource() {
            _playResource = _async_to_generator(function() {
                var _guild_channels_cache_get, _queue_connection, _queue_connection_joinConfig_channelId, _guild_members_me_voice_channel, _guild_members_me, _guild_members_me_voice_channel1, _guild_members_me1, _guild_members_me2, _guild_members_me_voice_channel_name, _guild_members_me_voice_channel_id, suppressed, _guild_members_me_voice_channel2, _guild_members_me3, _guild_members_me_voice_channel3, _guild_members_me4, _guild_members_me_voice_channel_name1, _guild_members_me_voice_channel_id1;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            if (!(((_guild_channels_cache_get = guild.channels.cache.get((_queue_connection_joinConfig_channelId = queue === null || queue === void 0 ? void 0 : (_queue_connection = queue.connection) === null || _queue_connection === void 0 ? void 0 : _queue_connection.joinConfig.channelId) !== null && _queue_connection_joinConfig_channelId !== void 0 ? _queue_connection_joinConfig_channelId : "")) === null || _guild_channels_cache_get === void 0 ? void 0 : _guild_channels_cache_get.type) === ChannelType.GuildStageVoice)) return [
                                3,
                                2
                            ];
                            queue === null || queue === void 0 ? void 0 : queue.client.debugLog.logData("info", "PLAY_HANDLER", "Trying to be a speaker in ".concat((_guild_members_me_voice_channel_name = (_guild_members_me = guild.members.me) === null || _guild_members_me === void 0 ? void 0 : (_guild_members_me_voice_channel = _guild_members_me.voice.channel) === null || _guild_members_me_voice_channel === void 0 ? void 0 : _guild_members_me_voice_channel.name) !== null && _guild_members_me_voice_channel_name !== void 0 ? _guild_members_me_voice_channel_name : "Unknown", "(").concat((_guild_members_me_voice_channel_id = (_guild_members_me1 = guild.members.me) === null || _guild_members_me1 === void 0 ? void 0 : (_guild_members_me_voice_channel1 = _guild_members_me1.voice.channel) === null || _guild_members_me_voice_channel1 === void 0 ? void 0 : _guild_members_me_voice_channel1.id) !== null && _guild_members_me_voice_channel_id !== void 0 ? _guild_members_me_voice_channel_id : "ID UNKNOWN", ") in guild ").concat(guild.name, "(").concat(guild.id, ")"));
                            return [
                                4,
                                (_guild_members_me2 = guild.members.me) === null || _guild_members_me2 === void 0 ? void 0 : _guild_members_me2.voice.setSuppressed(false).catch(function(error) {
                                    return {
                                        error: error
                                    };
                                })
                            ];
                        case 1:
                            suppressed = _state.sent();
                            if (suppressed && "error" in suppressed) {
                                ;
                                ;
                                queue === null || queue === void 0 ? void 0 : queue.client.debugLog.logData("error", "PLAY_HANDLER", "Failed to be a speaker in ".concat((_guild_members_me_voice_channel_name1 = (_guild_members_me3 = guild.members.me) === null || _guild_members_me3 === void 0 ? void 0 : (_guild_members_me_voice_channel2 = _guild_members_me3.voice.channel) === null || _guild_members_me_voice_channel2 === void 0 ? void 0 : _guild_members_me_voice_channel2.name) !== null && _guild_members_me_voice_channel_name1 !== void 0 ? _guild_members_me_voice_channel_name1 : "Unknown", "(").concat((_guild_members_me_voice_channel_id1 = (_guild_members_me4 = guild.members.me) === null || _guild_members_me4 === void 0 ? void 0 : (_guild_members_me_voice_channel3 = _guild_members_me4.voice.channel) === null || _guild_members_me_voice_channel3 === void 0 ? void 0 : _guild_members_me_voice_channel3.id) !== null && _guild_members_me_voice_channel_id1 !== void 0 ? _guild_members_me_voice_channel_id1 : "ID UNKNOWN", ") in guild ").concat(guild.name, "(").concat(guild.id, "). Reason: ").concat(suppressed.error.message));
                                (queue === null || queue === void 0 ? void 0 : queue.player).emit("error", new AudioPlayerError(suppressed.error, resource));
                                return [
                                    2
                                ];
                            }
                            _state.label = 2;
                        case 2:
                            queue === null || queue === void 0 ? void 0 : queue.player.play(resource);
                            return [
                                2
                            ];
                    }
                });
            });
            return _playResource.apply(this, arguments);
        }
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    queue = guild.queue;
                    if (!queue) return [
                        2
                    ];
                    song = ((_nextSong_length = nextSong === null || nextSong === void 0 ? void 0 : nextSong.length) !== null && _nextSong_length !== void 0 ? _nextSong_length : 0) > 0 ? queue.songs.get(nextSong) : queue.songs.first();
                    clearTimeout((_queue_dcTimeout = queue.dcTimeout) !== null && _queue_dcTimeout !== void 0 ? _queue_dcTimeout : undefined);
                    if (!song) {
                        queue.lastMusicMsg = null;
                        queue.lastVSUpdateMsg = null;
                        void queue.textChannel.send({
                            embeds: [
                                createEmbed("info", "⏹ **|** ".concat(i18n.__mf("utils.generalHandler.queueEnded", {
                                    usage: "`".concat(guild.client.config.mainPrefix, "play`")
                                })))
                            ]
                        });
                        queue.dcTimeout = queue.stayInVC ? null : setTimeout(/*#__PURE__*/ _async_to_generator(function() {
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        queue.destroy();
                                        return [
                                            4,
                                            queue.textChannel.send({
                                                embeds: [
                                                    createEmbed("info", "\uD83D\uDC4B **|** ".concat(i18n.__("utils.generalHandler.leftVC")))
                                                ]
                                            }).then(function(msg) {
                                                setTimeout(function() {
                                                    void msg.delete();
                                                }, 3500);
                                                return 0;
                                            })
                                        ];
                                    case 1:
                                        _state.sent();
                                        return [
                                            2
                                        ];
                                }
                            });
                        }), 60000);
                        queue.client.debugLog.logData("info", "PLAY_HANDLER", "Queue ended for ".concat(guild.name, "(").concat(guild.id, ")"));
                        return [
                            2
                        ];
                    }
                    stream = new prism.FFmpeg({
                        args: ffmpegArgs(queue.filters)
                    });
                    return [
                        4,
                        getStream(queue.client, song.song.url).then(function(x) {
                            return x.pipe(stream);
                        })
                    ];
                case 1:
                    _state.sent();
                    resource = createAudioResource(stream, {
                        inlineVolume: true,
                        inputType: StreamType.OggOpus,
                        metadata: song
                    });
                    queue.client.debugLog.logData("info", "PLAY_HANDLER", "Created audio resource for ".concat(guild.name, "(").concat(guild.id, ")"));
                    (_queue_connection = queue.connection) === null || _queue_connection === void 0 ? void 0 : _queue_connection.subscribe(queue.player);
                    if (!(wasIdle === true)) return [
                        3,
                        2
                    ];
                    void playResource();
                    return [
                        3,
                        4
                    ];
                case 2:
                    queue.client.debugLog.logData("info", "PLAY_HANDLER", "Trying to enter Ready state in guild ".concat(guild.name, "(").concat(guild.id, ") voice connection"));
                    return [
                        4,
                        entersState(queue.connection, VoiceConnectionStatus.Ready, 15000).then(/*#__PURE__*/ _async_to_generator(function() {
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        return [
                                            4,
                                            playResource()
                                        ];
                                    case 1:
                                        _state.sent();
                                        return [
                                            2,
                                            0
                                        ];
                                }
                            });
                        })).catch(function(error) {
                            if (error.message === "The operation was aborted.") error.message = "Cannot establish a voice connection within 15 seconds.";
                            queue.client.debugLog.logData("error", "PLAY_HANDLER", "Failed to enter Ready state in guild ".concat(guild.name, "(").concat(guild.id, ") voice connection. Reason: ").concat(error.message));
                            queue.player.emit("error", new AudioPlayerError(error, resource));
                        })
                    ];
                case 3:
                    _state.sent();
                    _state.label = 4;
                case 4:
                    return [
                        2
                    ];
            }
        });
    });
    return _play.apply(this, arguments);
}
