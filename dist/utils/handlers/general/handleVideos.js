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
import { joinVoiceChannel } from "@discordjs/voice";
import { escapeMarkdown } from "discord.js";
import i18n from "../../../config/index.js";
import { ServerQueue } from "../../../structures/ServerQueue.js";
import { chunk } from "../../functions/chunk.js";
import { createEmbed } from "../../functions/createEmbed.js";
import { parseHTMLElements } from "../../functions/parseHTMLElements.js";
import { ButtonPagination } from "../../structures/ButtonPagination.js";
import { play } from "./play.js";
export function handleVideos(client, ctx, toQueue, voiceChannel) {
    return _handleVideos.apply(this, arguments);
}
function _handleVideos() {
    _handleVideos = _async_to_generator(function(client, ctx, toQueue, voiceChannel) {
        var _ctx_guild_queue, _ctx_guild, _ctx_guild1, _ctx_guild2, _ctx_guild3, wasIdle, _ctx_guild4, _ctx_guild5, _ctx_guild6, _ctx_guild7, _ctx_guild8, _ctx_guild_id, connection, error, _ctx_guild_queue1, _ctx_guild9, _ctx_guild10, _ctx_guild11, _ctx_guild12, _ctx_channel;
        function sendPagination() {
            return _sendPagination.apply(this, arguments);
        }
        function _sendPagination() {
            _sendPagination = _async_to_generator(function() {
                var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, song, _ctx_guild_queue, _ctx_guild, opening, pages, embed, msg;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                            try {
                                for(_iterator = toQueue[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                    song = _step.value;
                                    ;
                                    (_ctx_guild = ctx.guild) === null || _ctx_guild === void 0 ? void 0 : (_ctx_guild_queue = _ctx_guild.queue) === null || _ctx_guild_queue === void 0 ? void 0 : _ctx_guild_queue.songs.addSong(song, ctx.member);
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
                            opening = i18n.__mf("utils.generalHandler.handleVideoInitial", {
                                length: toQueue.length
                            });
                            return [
                                4,
                                Promise.all(chunk(toQueue, 10).map(function() {
                                    var _ref = _async_to_generator(function(vals, i) {
                                        var texts;
                                        return _ts_generator(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    return [
                                                        4,
                                                        Promise.all(vals.map(function(song, index) {
                                                            return "".concat(i * 10 + (index + 1), ".) ").concat(escapeMarkdown(parseHTMLElements(song.title)));
                                                        }))
                                                    ];
                                                case 1:
                                                    texts = _state.sent();
                                                    return [
                                                        2,
                                                        texts.join("\n")
                                                    ];
                                            }
                                        });
                                    });
                                    return function(vals, i) {
                                        return _ref.apply(this, arguments);
                                    };
                                }()))
                            ];
                        case 1:
                            pages = _state.sent();
                            embed = createEmbed("info", opening);
                            return [
                                4,
                                ctx.reply({
                                    embeds: [
                                        embed
                                    ]
                                }, true)
                            ];
                        case 2:
                            msg = _state.sent();
                            return [
                                2,
                                new ButtonPagination(msg, {
                                    author: ctx.author.id,
                                    edit: function(i, emb, page) {
                                        emb.setDescription("```\n".concat(page, "```")).setAuthor({
                                            name: opening
                                        }).setFooter({
                                            text: "• ".concat(i18n.__mf("reusable.pageFooter", {
                                                actual: i + 1,
                                                total: pages.length
                                            }))
                                        });
                                    },
                                    embed: embed,
                                    pages: pages
                                }).start()
                            ];
                    }
                });
            });
            return _sendPagination.apply(this, arguments);
        }
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    wasIdle = (_ctx_guild = ctx.guild) === null || _ctx_guild === void 0 ? void 0 : (_ctx_guild_queue = _ctx_guild.queue) === null || _ctx_guild_queue === void 0 ? void 0 : _ctx_guild_queue.idle;
                    if (!((_ctx_guild1 = ctx.guild) === null || _ctx_guild1 === void 0 ? void 0 : _ctx_guild1.queue)) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        sendPagination()
                    ];
                case 1:
                    _state.sent();
                    if (wasIdle === true) {
                        void play(ctx.guild, undefined, wasIdle);
                    }
                    return [
                        2
                    ];
                case 2:
                    ctx.guild.queue = new ServerQueue(ctx.channel);
                    return [
                        4,
                        sendPagination()
                    ];
                case 3:
                    _state.sent();
                    client.debugLog.logData("info", "HANDLE_VIDEOS", "Created a server queue for ".concat((_ctx_guild2 = ctx.guild) === null || _ctx_guild2 === void 0 ? void 0 : _ctx_guild2.name, "(").concat((_ctx_guild3 = ctx.guild) === null || _ctx_guild3 === void 0 ? void 0 : _ctx_guild3.id, ")"));
                    _state.label = 4;
                case 4:
                    _state.trys.push([
                        4,
                        5,
                        ,
                        7
                    ]);
                    connection = joinVoiceChannel({
                        adapterCreator: (_ctx_guild4 = ctx.guild) === null || _ctx_guild4 === void 0 ? void 0 : _ctx_guild4.voiceAdapterCreator,
                        channelId: voiceChannel.id,
                        guildId: (_ctx_guild_id = (_ctx_guild5 = ctx.guild) === null || _ctx_guild5 === void 0 ? void 0 : _ctx_guild5.id) !== null && _ctx_guild_id !== void 0 ? _ctx_guild_id : "",
                        selfDeaf: true
                    }).on("debug", function(message) {
                        client.logger.debug(message);
                    });
                    ((_ctx_guild6 = ctx.guild) === null || _ctx_guild6 === void 0 ? void 0 : _ctx_guild6.queue).connection = connection;
                    client.debugLog.logData("info", "HANDLE_VIDEOS", "Connected to ".concat(voiceChannel.name, "(").concat(voiceChannel.id, ") in guild ").concat((_ctx_guild7 = ctx.guild) === null || _ctx_guild7 === void 0 ? void 0 : _ctx_guild7.name, "(").concat((_ctx_guild8 = ctx.guild) === null || _ctx_guild8 === void 0 ? void 0 : _ctx_guild8.id, ")"));
                    return [
                        3,
                        7
                    ];
                case 5:
                    error = _state.sent();
                    (_ctx_guild9 = ctx.guild) === null || _ctx_guild9 === void 0 ? void 0 : (_ctx_guild_queue1 = _ctx_guild9.queue) === null || _ctx_guild_queue1 === void 0 ? void 0 : _ctx_guild_queue1.songs.clear();
                    (_ctx_guild10 = ctx.guild) === null || _ctx_guild10 === void 0 ? true : delete _ctx_guild10.queue;
                    client.debugLog.logData("error", "HANDLE_VIDEOS", "Error occured while connecting to ".concat((_ctx_guild11 = ctx.guild) === null || _ctx_guild11 === void 0 ? void 0 : _ctx_guild11.name, "(").concat((_ctx_guild12 = ctx.guild) === null || _ctx_guild12 === void 0 ? void 0 : _ctx_guild12.id, "). Reason: ").concat(error.message));
                    client.logger.error("PLAY_CMD_ERR:", error);
                    return [
                        4,
                        (_ctx_channel = ctx.channel) === null || _ctx_channel === void 0 ? void 0 : _ctx_channel.send({
                            embeds: [
                                createEmbed("error", i18n.__mf("utils.generalHandler.errorJoining", {
                                    message: "`".concat(error.message, "`")
                                }), true)
                            ]
                        })// eslint-disable-next-line typescript/naming-convention
                        .catch(function(error_) {
                            client.logger.error("PLAY_CMD_ERR:", error_);
                        })
                    ];
                case 6:
                    _state.sent();
                    return [
                        2
                    ];
                case 7:
                    void play(ctx.guild);
                    return [
                        2
                    ];
            }
        });
    });
    return _handleVideos.apply(this, arguments);
}
