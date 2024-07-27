function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
import { format } from "date-fns";
var ANSIColorOpening;
(function(ANSIColorOpening) {
    ANSIColorOpening["Red"] = "\x1b[31m";
    ANSIColorOpening["Yellow"] = "\x1b[33m";
    ANSIColorOpening["Green"] = "\x1b[32m";
    ANSIColorOpening["Blue"] = "\x1b[34m";
})(ANSIColorOpening || (ANSIColorOpening = {}));
var ansiColorClosing = "\u001B[39m";
var levelColors = {
    debug: "\x1b[34m",
    error: "\x1b[31m",
    info: "\x1b[32m",
    warn: "\x1b[33m"
};
export var BaseLogger = /*#__PURE__*/ function() {
    "use strict";
    function BaseLogger() {
        var color = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
        _class_call_check(this, BaseLogger);
        _define_property(this, "color", void 0);
        this.color = color;
    }
    _create_class(BaseLogger, [
        {
            key: "log",
            value: function log(messages) {
                var level = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "info";
                var opening = this.color ? "" : levelColors[level];
                var closing = this.color ? "" : ansiColorClosing;
                var formattedDate = format(Date.now(), "yyyy-MM-dd HH:mm:ss (x)");
                var message = messages.map(String).join(" ");
                console[level]("".concat(opening, "[").concat(formattedDate, "] [").concat(level, "]: ").concat(message, " ").concat(closing));
            }
        }
    ]);
    return BaseLogger;
}();
export var RawonLogger = /*#__PURE__*/ function(BaseLogger) {
    "use strict";
    _inherits(RawonLogger, BaseLogger);
    var _super = _create_super(RawonLogger);
    function RawonLogger(options) {
        _class_call_check(this, RawonLogger);
        var _this;
        _this = _super.call(this, options.prod);
        _define_property(_assert_this_initialized(_this), "options", void 0);
        _this.options = options;
        return _this;
    }
    _create_class(RawonLogger, [
        {
            key: "info",
            value: function info() {
                for(var _len = arguments.length, messages = new Array(_len), _key = 0; _key < _len; _key++){
                    messages[_key] = arguments[_key];
                }
                this.log(messages, "info");
            }
        },
        {
            key: "debug",
            value: function debug() {
                for(var _len = arguments.length, messages = new Array(_len), _key = 0; _key < _len; _key++){
                    messages[_key] = arguments[_key];
                }
                if (this.options.prod) return;
                this.log(messages, "debug");
            }
        },
        {
            key: "error",
            value: function error() {
                for(var _len = arguments.length, messages = new Array(_len), _key = 0; _key < _len; _key++){
                    messages[_key] = arguments[_key];
                }
                this.log(messages, "error");
            }
        },
        {
            key: "warn",
            value: function warn() {
                for(var _len = arguments.length, messages = new Array(_len), _key = 0; _key < _len; _key++){
                    messages[_key] = arguments[_key];
                }
                this.log(messages, "warn");
            }
        }
    ]);
    return RawonLogger;
}(BaseLogger);
