/* eslint-disable typescript/strict-boolean-expressions */ import { URL } from "node:url";
export function checkQuery(string) {
    var url;
    try {
        url = new URL(string);
    } catch (e) {
        return {
            isURL: false,
            sourceType: "query"
        };
    }
    var result = {
        isURL: true
    };
    if (RegExp("soundcloud|snd", "gu").test(url.hostname)) {
        result.sourceType = "soundcloud";
        result.type = url.pathname.includes("/sets/") ? "playlist" : "track";
    } else if (RegExp("youtube|youtu\\.be", "gu").test(url.hostname)) {
        result.sourceType = "youtube";
        var _ref;
        if (!RegExp("youtu\\.be", "gu").test(url.hostname) && url.pathname.startsWith("/playlist") || url.searchParams.has("list")) {
            result.type = "playlist";
        } else if ((_ref = RegExp("youtube", "gu").exec(url.hostname) && url.pathname.startsWith("/watch")) !== null && _ref !== void 0 ? _ref : RegExp("youtu\\.be", "gu").exec(url.hostname) && url.pathname !== "") {
            result.type = "track";
        } else {
            result.type = "unknown";
        }
    } else if (RegExp("spotify", "gu").test(url.hostname)) {
        result.sourceType = "spotify";
        if ([
            "/playlist",
            "/album"
        ].some(function(path) {
            return url.pathname.startsWith(path);
        })) {
            result.type = "playlist";
        } else if (url.pathname.startsWith("/track")) {
            result.type = "track";
        } else {
            result.type = "unknown";
        }
    } else {
        result.sourceType = "unknown";
        result.type = "unknown";
    }
    return result;
}
