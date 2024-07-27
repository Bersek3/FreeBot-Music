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
import { URL } from "node:url";
import { Playlist } from "youtubei";
import { getInfo } from "../YTDLUtil.js";
import { youtube } from "../YouTubeUtil.js";
import { checkQuery } from "./checkQuery.js";
export function searchTrack(client, query) {
    return _searchTrack.apply(this, arguments);
}
function _searchTrack() {
    _searchTrack = _async_to_generator(function(client, query) {
        var source, result, queryData, url, _, scUrl, req, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, key, newQueryData, _1, track, playlist, tracks, _2, _url_searchParams_get, track1, _url_searchParams_get1, list, playlist1, songIndex, temp, tracks1, _songIndex_length, sortVideos, _3, _songData_external_ids, songData, _songData_external_ids_isrc, response, track2, _track__duration, songs, _info_thumbnails, info, _info_duration, _info_id, _info_thumbnails_sort__url, _info_title, _info_url, searchRes, tracks2, searchRes1, tracks3;
        var _arguments = arguments;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    source = _arguments.length > 2 && _arguments[2] !== void 0 ? _arguments[2] : "youtube";
                    result = {
                        items: []
                    };
                    queryData = checkQuery(query);
                    if (!queryData.isURL) return [
                        3,
                        34
                    ];
                    url = new URL(query);
                    result.type = "results";
                    _ = queryData.sourceType;
                    switch(_){
                        case "soundcloud":
                            return [
                                3,
                                1
                            ];
                        case "youtube":
                            return [
                                3,
                                11
                            ];
                        case "spotify":
                            return [
                                3,
                                20
                            ];
                    }
                    return [
                        3,
                        31
                    ];
                case 1:
                    scUrl = url;
                    if (![
                        "www.soundcloud.app.goo.gl",
                        "soundcloud.app.goo.gl"
                    ].includes(url.hostname)) return [
                        3,
                        3
                    ];
                    return [
                        4,
                        client.request.get(url.toString())
                    ];
                case 2:
                    req = _state.sent();
                    scUrl = new URL(req.url);
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = scUrl.searchParams.keys()[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            key = _step.value;
                            scUrl.searchParams.delete(key);
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
                    _state.label = 3;
                case 3:
                    newQueryData = checkQuery(scUrl.toString());
                    _1 = newQueryData.type;
                    switch(_1){
                        case "track":
                            return [
                                3,
                                4
                            ];
                        case "playlist":
                            return [
                                3,
                                6
                            ];
                    }
                    return [
                        3,
                        9
                    ];
                case 4:
                    return [
                        4,
                        client.soundcloud.tracks.getV2(scUrl.toString())
                    ];
                case 5:
                    track = _state.sent();
                    result.items = [
                        {
                            duration: track.full_duration,
                            id: track.id.toString(),
                            thumbnail: track.artwork_url,
                            title: track.title,
                            url: track.permalink_url
                        }
                    ];
                    return [
                        3,
                        10
                    ];
                case 6:
                    return [
                        4,
                        client.soundcloud.playlists.getV2(scUrl.toString())
                    ];
                case 7:
                    playlist = _state.sent();
                    return [
                        4,
                        Promise.all(playlist.tracks.map(function(track) {
                            return {
                                duration: track.full_duration,
                                id: track.id.toString(),
                                thumbnail: track.artwork_url,
                                title: track.title,
                                url: track.permalink_url
                            };
                        }))
                    ];
                case 8:
                    tracks = _state.sent();
                    result.items = tracks;
                    return [
                        3,
                        10
                    ];
                case 9:
                    return [
                        3,
                        10
                    ];
                case 10:
                    return [
                        3,
                        33
                    ];
                case 11:
                    _2 = queryData.type;
                    switch(_2){
                        case "track":
                            return [
                                3,
                                12
                            ];
                        case "playlist":
                            return [
                                3,
                                14
                            ];
                    }
                    return [
                        3,
                        18
                    ];
                case 12:
                    return [
                        4,
                        youtube.getVideo(RegExp("youtu\\.be", "gu").test(url.hostname) ? url.pathname.replace("/", "") : (_url_searchParams_get = url.searchParams.get("v")) !== null && _url_searchParams_get !== void 0 ? _url_searchParams_get : '')
                    ];
                case 13:
                    track1 = _state.sent();
                    if (track1) {
                        result.items = [
                            {
                                duration: track1.isLiveContent ? 0 : track1.duration,
                                id: track1.id,
                                thumbnail: track1.thumbnails.sort(function(a, b) {
                                    return b.height * b.width - a.height * a.width;
                                })[0].url,
                                title: track1.title,
                                url: "https://youtube.com/watch?v=".concat(track1.id)
                            }
                        ];
                    }
                    return [
                        3,
                        19
                    ];
                case 14:
                    list = (_url_searchParams_get1 = url.searchParams.get("list")) !== null && _url_searchParams_get1 !== void 0 ? _url_searchParams_get1 : "";
                    return [
                        4,
                        youtube.getPlaylist(list)
                    ];
                case 15:
                    playlist1 = _state.sent();
                    songIndex = url.searchParams.get("index");
                    temp = null;
                    if (!playlist1) return [
                        3,
                        17
                    ];
                    return [
                        4,
                        Promise.all((_instanceof(playlist1, Playlist) ? playlist1.videos.items : playlist1.videos).map(function(track) {
                            var _track_duration;
                            return {
                                duration: (_track_duration = track.duration) !== null && _track_duration !== void 0 ? _track_duration : 0,
                                id: track.id,
                                thumbnail: track.thumbnails.sort(function(a, b) {
                                    return b.height * b.width - a.height * a.width;
                                })[0].url,
                                title: track.title,
                                url: "https://youtube.com/watch?v=".concat(track.id)
                            };
                        }))
                    ];
                case 16:
                    tracks1 = _state.sent();
                    if (((_songIndex_length = songIndex === null || songIndex === void 0 ? void 0 : songIndex.length) !== null && _songIndex_length !== void 0 ? _songIndex_length : 0) > 0) temp = Number.parseInt(songIndex !== null && songIndex !== void 0 ? songIndex : "", 10) < 101 ? tracks1.splice(Number.parseInt(songIndex !== null && songIndex !== void 0 ? songIndex : "", 10) - 1, 1)[0] : null;
                    if (temp) tracks1.unshift(temp);
                    result.items = tracks1;
                    _state.label = 17;
                case 17:
                    return [
                        3,
                        19
                    ];
                case 18:
                    return [
                        3,
                        19
                    ];
                case 19:
                    return [
                        3,
                        33
                    ];
                case 20:
                    sortVideos = function sortVideos(track, videos) {
                        return videos.items.sort(function(a, b) {
                            var _a_channel, _b_channel;
                            var aValue = 0;
                            var bValue = 0;
                            var _a_duration, _a_duration1;
                            var aDurationDiff = ((_a_duration = a.duration) !== null && _a_duration !== void 0 ? _a_duration : 0) > 0 ? ((_a_duration1 = a.duration) !== null && _a_duration1 !== void 0 ? _a_duration1 : 0) - track.duration_ms : null;
                            var _b_duration, _b_duration1;
                            var bDurationDiff = ((_b_duration = b.duration) !== null && _b_duration !== void 0 ? _b_duration : 0) > 0 ? ((_b_duration1 = b.duration) !== null && _b_duration1 !== void 0 ? _b_duration1 : 0) - track.duration_ms : null;
                            if (a.title.toLowerCase().includes(track.name.toLowerCase())) aValue--;
                            if (track.artists.some(function(x) {
                                var _a_channel;
                                return (_a_channel = a.channel) === null || _a_channel === void 0 ? void 0 : _a_channel.name.toLowerCase().includes(x.name);
                            })) aValue--;
                            if (((_a_channel = a.channel) === null || _a_channel === void 0 ? void 0 : _a_channel.name.endsWith("- Topic")) === true) aValue -= 2;
                            if (aDurationDiff === null ? false : aDurationDiff <= 5000 && aDurationDiff >= -5000) aValue -= 2;
                            if (b.title.toLowerCase().includes(track.name.toLowerCase())) bValue++;
                            if (track.artists.some(function(x) {
                                var _b_channel;
                                return (_b_channel = b.channel) === null || _b_channel === void 0 ? void 0 : _b_channel.name.toLowerCase().includes(x.name);
                            })) bValue++;
                            if (((_b_channel = b.channel) === null || _b_channel === void 0 ? void 0 : _b_channel.name.endsWith(" - Topic")) === true) bValue += 2;
                            if (bDurationDiff === null ? false : bDurationDiff <= 5000 && bDurationDiff >= -5000) bValue += 2;
                            return aValue + bValue;
                        });
                    };
                    _3 = queryData.type;
                    switch(_3){
                        case "track":
                            return [
                                3,
                                21
                            ];
                        case "playlist":
                            return [
                                3,
                                26
                            ];
                    }
                    return [
                        3,
                        29
                    ];
                case 21:
                    return [
                        4,
                        client.spotify.resolveTracks(url.toString())
                    ];
                case 22:
                    songData = _state.sent();
                    return [
                        4,
                        youtube.search((_songData_external_ids_isrc = (_songData_external_ids = songData.external_ids) === null || _songData_external_ids === void 0 ? void 0 : _songData_external_ids.isrc) !== null && _songData_external_ids_isrc !== void 0 ? _songData_external_ids_isrc : "".concat(songData.artists[0].name, " - ").concat(songData.name), {
                            type: "video"
                        })
                    ];
                case 23:
                    response = _state.sent();
                    if (!(response.items.length === 0)) return [
                        3,
                        25
                    ];
                    return [
                        4,
                        youtube.search("".concat(songData.artists[0].name, " - ").concat(songData.name), {
                            type: "video"
                        })
                    ];
                case 24:
                    response = _state.sent();
                    _state.label = 25;
                case 25:
                    track2 = sortVideos(songData, response);
                    if (track2.length > 0) {
                        ;
                        result.items = [
                            {
                                duration: (_track__duration = track2[0].duration) !== null && _track__duration !== void 0 ? _track__duration : 0,
                                id: track2[0].id,
                                thumbnail: track2[0].thumbnails.sort(function(a, b) {
                                    return b.height * b.width - a.height * a.width;
                                })[0].url,
                                title: track2[0].title,
                                url: "https://youtube.com/watch?v=".concat(track2[0].id)
                            }
                        ];
                    }
                    return [
                        3,
                        30
                    ];
                case 26:
                    return [
                        4,
                        client.spotify.resolveTracks(url.toString())
                    ];
                case 27:
                    songs = _state.sent();
                    return [
                        4,
                        Promise.all(songs.map(function() {
                            var _ref = _async_to_generator(function(x) {
                                var _x_track_external_ids, _x_track_external_ids_isrc, response, track, _track__duration;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            return [
                                                4,
                                                youtube.search((_x_track_external_ids_isrc = (_x_track_external_ids = x.track.external_ids) === null || _x_track_external_ids === void 0 ? void 0 : _x_track_external_ids.isrc) !== null && _x_track_external_ids_isrc !== void 0 ? _x_track_external_ids_isrc : "".concat(x.track.artists.map(function(y) {
                                                    return y.name;
                                                }).join(", ")).concat(x.track.name), {
                                                    type: "video"
                                                })
                                            ];
                                        case 1:
                                            response = _state.sent();
                                            if (!(response.items.length === 0)) return [
                                                3,
                                                3
                                            ];
                                            return [
                                                4,
                                                youtube.search("".concat(x.track.artists.map(function(y) {
                                                    return y.name;
                                                }).join(", ")).concat(x.track.name), {
                                                    type: "video"
                                                })
                                            ];
                                        case 2:
                                            response = _state.sent();
                                            _state.label = 3;
                                        case 3:
                                            track = sortVideos(x.track, response);
                                            if (track.length > 0) {
                                                ;
                                                result.items.push({
                                                    duration: (_track__duration = track[0].duration) !== null && _track__duration !== void 0 ? _track__duration : 0,
                                                    id: track[0].id,
                                                    thumbnail: track[0].thumbnails.sort(function(a, b) {
                                                        return b.height * b.width - a.height * a.width;
                                                    })[0].url,
                                                    title: track[0].title,
                                                    url: "https://youtube.com/watch?v=".concat(track[0].id)
                                                });
                                            }
                                            return [
                                                2
                                            ];
                                    }
                                });
                            });
                            return function(x) {
                                return _ref.apply(this, arguments);
                            };
                        }()))
                    ];
                case 28:
                    _state.sent();
                    return [
                        3,
                        30
                    ];
                case 29:
                    return [
                        3,
                        30
                    ];
                case 30:
                    return [
                        3,
                        33
                    ];
                case 31:
                    return [
                        4,
                        getInfo(url.toString()).catch(function() {
                            return void 0;
                        })
                    ];
                case 32:
                    info = _state.sent();
                    result.items = [
                        {
                            duration: (_info_duration = info === null || info === void 0 ? void 0 : info.duration) !== null && _info_duration !== void 0 ? _info_duration : 0,
                            id: (_info_id = info === null || info === void 0 ? void 0 : info.id) !== null && _info_id !== void 0 ? _info_id : "",
                            thumbnail: (_info_thumbnails_sort__url = info === null || info === void 0 ? void 0 : (_info_thumbnails = info.thumbnails) === null || _info_thumbnails === void 0 ? void 0 : _info_thumbnails.sort(function(a, b) {
                                return b.height * b.width - a.height * a.width;
                            })[0].url) !== null && _info_thumbnails_sort__url !== void 0 ? _info_thumbnails_sort__url : "",
                            title: (_info_title = info === null || info === void 0 ? void 0 : info.title) !== null && _info_title !== void 0 ? _info_title : "Unknown Song",
                            url: (_info_url = info === null || info === void 0 ? void 0 : info.url) !== null && _info_url !== void 0 ? _info_url : url.toString()
                        }
                    ];
                    return [
                        3,
                        33
                    ];
                case 33:
                    return [
                        3,
                        40
                    ];
                case 34:
                    result.type = "selection";
                    if (!(source === "soundcloud")) return [
                        3,
                        37
                    ];
                    return [
                        4,
                        client.soundcloud.tracks.searchV2({
                            // eslint-disable-next-line id-length
                            q: query
                        })
                    ];
                case 35:
                    searchRes = _state.sent();
                    return [
                        4,
                        Promise.all(searchRes.collection.map(function(track) {
                            return {
                                duration: track.full_duration,
                                id: track.id.toString(),
                                thumbnail: track.artwork_url,
                                title: track.title,
                                url: track.permalink_url
                            };
                        }))
                    ];
                case 36:
                    tracks2 = _state.sent();
                    result.items = tracks2;
                    return [
                        3,
                        40
                    ];
                case 37:
                    return [
                        4,
                        youtube.search(query, {
                            type: "video"
                        })
                    ];
                case 38:
                    searchRes1 = _state.sent();
                    return [
                        4,
                        Promise.all(searchRes1.items.map(function(track) {
                            var _track_duration;
                            return {
                                duration: (_track_duration = track.duration) !== null && _track_duration !== void 0 ? _track_duration : 0,
                                id: track.id,
                                thumbnail: track.thumbnails.sort(function(a, b) {
                                    return b.height * b.width - a.height * a.width;
                                })[0].url,
                                title: track.title,
                                url: "https://youtube.com/watch?v=".concat(track.id)
                            };
                        }))
                    ];
                case 39:
                    tracks3 = _state.sent();
                    result.items = tracks3;
                    _state.label = 40;
                case 40:
                    return [
                        2,
                        result
                    ];
            }
        });
    });
    return _searchTrack.apply(this, arguments);
}
