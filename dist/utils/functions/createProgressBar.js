export function createProgressBar(current, total) {
    var pos = Math.ceil(current / total * 10) || 1;
    return "".concat("━".repeat(pos - 1), "⬤").concat("─".repeat(10 - pos));
}
