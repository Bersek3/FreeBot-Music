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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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
import { Collection, SnowflakeUtil } from "discord.js";
export var SongManager = /*#__PURE__*/ function(Collection) {
    "use strict";
    _inherits(SongManager, Collection);
    var _super = _create_super(SongManager);
    function SongManager(client, guild) {
        _class_call_check(this, SongManager);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "client", void 0);
        _define_property(_assert_this_initialized(_this), "guild", void 0);
        _define_property(_assert_this_initialized(_this), "id", void 0);
        _this.client = client;
        _this.guild = guild;
        _this.id = 0;
        return _this;
    }
    _create_class(SongManager, [
        {
            key: "addSong",
            value: function addSong(song, requester) {
                var key = SnowflakeUtil.generate().toLocaleString();
                var data = {
                    index: this.id++,
                    key: key,
                    requester: requester,
                    song: song
                };
                this.set(key, data);
                return key;
            }
        },
        {
            key: "set",
            value: function set(key, data) {
                var _this_client;
                (_this_client = this.client) === null || _this_client === void 0 ? void 0 : _this_client.debugLog.logData("info", "SONG_MANAGER", "New value added to ".concat(this.guild.name, "(").concat(this.guild.id, ") song manager. Key: ").concat(key));
                return _get(_get_prototype_of(SongManager.prototype), "set", this).call(this, key, data);
            }
        },
        {
            key: "delete",
            value: function _delete(key) {
                var _this_client;
                (_this_client = this.client) === null || _this_client === void 0 ? void 0 : _this_client.debugLog.logData("info", "SONG_MANAGER", "Value ".concat(key, " deleted from ").concat(this.guild.name, "(").concat(this.guild.id, ") song manager."));
                return _get(_get_prototype_of(SongManager.prototype), "delete", this).call(this, key);
            }
        },
        {
            key: "sortByIndex",
            value: function sortByIndex() {
                return this.sort(function(a, b) {
                    return a.index - b.index;
                });
            }
        }
    ]);
    return SongManager;
}(Collection);
