/* eslint-disable unicorn/filename-case */ /* eslint-disable typescript/naming-convention */ function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
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
import ytdl, { exec } from "../../../yt-dlp-utils/index.js";
import { streamStrategy } from "../../config/index.js";
import { checkQuery } from "./GeneralUtil.js";
var _ref = await import("../../../play-dl-importer/index.js").then(function(x) {
    return x.default;
}).catch(function() {
    return {
        stream: null,
        video_basic_info: null
    };
}), pldlStream = _ref.stream, video_basic_info = _ref.video_basic_info;
export function getStream(client, url) {
    return _getStream.apply(this, arguments);
}
function _getStream() {
    _getStream = _async_to_generator(function(client, url) {
        var isSoundcloudUrl, rawPlayDlStream;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!(streamStrategy === "play-dl")) return [
                        3,
                        2
                    ];
                    isSoundcloudUrl = checkQuery(url);
                    if (isSoundcloudUrl.sourceType === "soundcloud") {
                        return [
                            2,
                            client.soundcloud.util.streamTrack(url)
                        ];
                    }
                    return [
                        4,
                        pldlStream === null || pldlStream === void 0 ? void 0 : pldlStream(url, {
                            discordPlayerCompatibility: true
                        })
                    ];
                case 1:
                    rawPlayDlStream = _state.sent();
                    return [
                        2,
                        rawPlayDlStream === null || rawPlayDlStream === void 0 ? void 0 : rawPlayDlStream.stream
                    ];
                case 2:
                    return [
                        2,
                        new Promise(function(resolve, reject) {
                            var stream = exec(url, {
                                output: "-",
                                quiet: true,
                                format: "bestaudio",
                                limitRate: "100K"
                            }, {
                                stdio: [
                                    "ignore",
                                    "pipe",
                                    "ignore"
                                ]
                            });
                            if (!stream.stdout) {
                                reject(new Error("Unable to retrieve audio data from the URL."));
                            }
                            void stream.on("spawn", function() {
                                resolve(stream.stdout);
                            });
                        })
                    ];
            }
        });
    });
    return _getStream.apply(this, arguments);
}
export function getInfo(url) {
    return _getInfo.apply(this, arguments);
}
function _getInfo() {
    _getInfo = _async_to_generator(function(url) {
        var rawPlayDlVideoInfo, _rawPlayDlVideoInfo_video_details_id, _rawPlayDlVideoInfo_video_details_title;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!(streamStrategy === "play-dl")) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        video_basic_info === null || video_basic_info === void 0 ? void 0 : video_basic_info(url)
                    ];
                case 1:
                    rawPlayDlVideoInfo = _state.sent();
                    return [
                        2,
                        {
                            duration: rawPlayDlVideoInfo.video_details.durationInSec * 1000,
                            id: (_rawPlayDlVideoInfo_video_details_id = rawPlayDlVideoInfo.video_details.id) !== null && _rawPlayDlVideoInfo_video_details_id !== void 0 ? _rawPlayDlVideoInfo_video_details_id : "",
                            thumbnails: rawPlayDlVideoInfo.video_details.thumbnails,
                            title: (_rawPlayDlVideoInfo_video_details_title = rawPlayDlVideoInfo.video_details.title) !== null && _rawPlayDlVideoInfo_video_details_title !== void 0 ? _rawPlayDlVideoInfo_video_details_title : "",
                            url: rawPlayDlVideoInfo.video_details.url
                        }
                    ];
                case 2:
                    return [
                        2,
                        ytdl(url, {
                            dumpJson: true
                        })
                    ];
            }
        });
    });
    return _getInfo.apply(this, arguments);
}
