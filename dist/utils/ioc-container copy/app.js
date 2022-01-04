"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ioc_container_1 = require("./ioc-container");
var ConcreteA = /** @class */ (function () {
    function ConcreteA() {
    }
    ConcreteA.prototype.doA = function () {
        console.log("Doing A");
    };
    return ConcreteA;
}());
var ConcreteB = /** @class */ (function () {
    function ConcreteB() {
    }
    ConcreteB.prototype.doB = function () {
        console.log("Doing B");
    };
    return ConcreteB;
}());
var ConcreteC = /** @class */ (function () {
    function ConcreteC(_concreteA, _concreteB) {
        this._concreteA = _concreteA;
        this._concreteB = _concreteB;
    }
    ConcreteC.prototype.doC = function () {
        this._concreteA.doA();
        this._concreteB.doB();
        console.log("Doing C");
    };
    return ConcreteC;
}());
var container = ioc_container_1.IoCContainer.instance;
container.register("IDepA", [], ConcreteA);
container.register("IDepB", [], ConcreteB);
container.register("IDepC", ["IDepA", "IDepB"], ConcreteC);
console.log("***********************");
var a = container.resolve("IDepA");
a.doA();
console.log("***********************");
var b = container.resolve("IDepB");
b.doB();
console.log("***********************");
var c = container.resolve("IDepC");
c.doC();
console.log("***********************");
//# sourceMappingURL=app.js.map