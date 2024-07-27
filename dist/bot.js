function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var _client_logger;
import process from "node:process";
import { clientOptions } from "./config/index.js";
import { Rawon } from "./structures/Rawon.js";
import { NoStackError } from "./utils/structures/NoStackError.js";
var client = new Rawon(clientOptions);
process.on("exit", function(code) {
    return client.logger.info("NodeJS process exited with code ".concat(code));
}).on("unhandledRejection", function(reason) {
    var _reason_stack;
    var _reason_stack_length;
    return client.logger.error("UNHANDLED_REJECTION:", ((_reason_stack_length = (_reason_stack = reason.stack) === null || _reason_stack === void 0 ? void 0 : _reason_stack.length) !== null && _reason_stack_length !== void 0 ? _reason_stack_length : 0) ? reason : new NoStackError(reason));
}).on("warning", function() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    return (_client_logger = client.logger).warn.apply(_client_logger, _to_consumable_array(args));
}).on("uncaughtException", function(err) {
    client.logger.error("UNCAUGHT_EXCEPTION:", err);
    client.logger.warn("Uncaught Exception detected, trying to restart...");
    process.exit(1);
});
await client.build().catch(function(error) {
    return client.logger.error("PROMISE_ERR:", error);
});
