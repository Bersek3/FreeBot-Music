export function parseEnvValue(str) {
    var _str_match;
    var _str_match_filter_map;
    return (_str_match_filter_map = (_str_match = str.match(RegExp("(?<=(?:\\s+|^))(?<str>[\"'])?.*?\\k<str>(?=(?:[,;]|(?:(?:\\s+)?$)))", "gu"))) === null || _str_match === void 0 ? void 0 : _str_match.filter(function(x) {
        return Boolean(x.trim());
    }).map(function(x) {
        return x.startsWith("'") && x.endsWith("'") || x.startsWith('"') && x.endsWith('"') ? x.slice(1, -1) : x;
    })) !== null && _str_match_filter_map !== void 0 ? _str_match_filter_map : [];
}
