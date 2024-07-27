/* eslint-disable unicorn/filename-case */ import { URL } from "node:url";
export var pathStringToURLString = function(path) {
    return new URL("file://".concat(path)).toString();
};
