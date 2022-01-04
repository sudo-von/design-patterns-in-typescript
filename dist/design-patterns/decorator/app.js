"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalize = exports.Whatever = exports.before = exports.disable = void 0;
function disable(target, methodName, descriptor) {
    descriptor.value = function () {
        console.log("Method is disabled");
    };
}
exports.disable = disable;
function before(hook) {
    return function (target, methodName, descriptor) {
        return {
            get: function () {
                var originalMethod = descriptor.value.bind(this);
                hook = hook.bind(this);
                return function () {
                    hook();
                    originalMethod();
                };
            }
        };
    };
}
exports.before = before;
var Whatever = /** @class */ (function () {
    function Whatever() {
        this._a = "a";
        this._b = "b";
    }
    Whatever.prototype.foo = function () {
        console.log("foo");
    };
    Whatever.prototype.bar = function () {
        console.log("bar");
    };
    Whatever.prototype.baz = function () {
        console.log(this._a, this._b);
    };
    __decorate([
        disable,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Whatever.prototype, "foo", null);
    __decorate([
        before(function () { console.log("Before hook"); }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Whatever.prototype, "bar", null);
    Whatever = __decorate([
        capitalize()
    ], Whatever);
    return Whatever;
}());
exports.Whatever = Whatever;
var whatever = new Whatever();
whatever.foo();
whatever.bar();
whatever.baz();
function capitalize() {
    return function (constructor) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this._a = "A";
                _this._b = "B";
                return _this;
            }
            return class_1;
        }(constructor));
    };
}
exports.capitalize = capitalize;
//# sourceMappingURL=app.js.map