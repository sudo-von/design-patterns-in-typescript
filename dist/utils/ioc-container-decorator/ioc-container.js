"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Register = exports.IoCContainer = void 0;
var IoCContainer = /** @class */ (function () {
    function IoCContainer() {
        this._dependencies = {};
        if (IoCContainer._instance) {
            throw new Error("Singleton class. Cannot instantiate using new.");
        }
        IoCContainer._instance = this;
    }
    Object.defineProperty(IoCContainer, "instance", {
        get: function () {
            return IoCContainer._instance;
        },
        enumerable: false,
        configurable: true
    });
    IoCContainer.prototype.register = function (name, dependencies, implementation) {
        if (this._dependencies[name]) {
            throw new Error("Dependency already registered.");
        }
        var dependenciesImplementations = this.getDependenciesImplementations(dependencies);
        this._dependencies[name] = new (implementation.bind.apply(implementation, __spreadArray([void 0], dependenciesImplementations, false)))();
    };
    IoCContainer.prototype.resolve = function (name) {
        if (!this._dependencies[name]) {
            throw new Error("Unresolved dependency ".concat(name, "."));
        }
        return this._dependencies[name];
    };
    IoCContainer.prototype.getDependenciesImplementations = function (names) {
        var _this = this;
        return names.map(function (name) { return _this.resolve(name); });
    };
    IoCContainer._instance = new IoCContainer();
    return IoCContainer;
}());
exports.IoCContainer = IoCContainer;
function Register(name, dependencies) {
    var container = IoCContainer.instance;
    return function (constructor) {
        container.register(name, dependencies, constructor);
    };
}
exports.Register = Register;
//# sourceMappingURL=ioc-container.js.map