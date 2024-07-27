function tS(num) {
    var st = num.toString();
    return st.length > 1 ? st : "0".concat(st);
}
export function normalizeTime(second) {
    var hour = Math.floor(second / 3600);
    var min = Math.floor(second % 3600 / 60);
    var sec = Math.floor(second % 60);
    return "".concat(hour > 0 ? "".concat(tS(hour), ":") : "").concat(tS(min), ":").concat(tS(sec));
}
