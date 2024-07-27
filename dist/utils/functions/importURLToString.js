/* eslint-disable unicorn/filename-case */ import { platform } from "node:os";
import { URL } from "node:url";
export function importURLToString(url) {
    var pathArray = new URL(url).pathname.split(RegExp("\\/|\\\\", "gu")).filter(Boolean);
    var path = pathArray.slice(0, -1).join("/");
    return decodeURIComponent("".concat(platform() === "win32" ? "" : "/").concat(path));
}
