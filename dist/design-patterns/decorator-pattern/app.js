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
var Computer = /** @class */ (function () {
    function Computer() {
    }
    Computer.prototype.boot = function () {
        console.log("Computer is booting");
    };
    Computer.prototype.shutDown = function () {
        console.log("Computer is shutting down");
    };
    Computer.prototype.display = function () {
        console.log("Displaying content in one screen");
    };
    Computer.prototype.print = function () {
        console.log("No printer found");
    };
    Computer.prototype.renderVideo = function () {
        console.log("Cannot render video without a dedicated graphic card");
    };
    return Computer;
}());
var ComputerComponentDecorator = /** @class */ (function (_super) {
    __extends(ComputerComponentDecorator, _super);
    function ComputerComponentDecorator(_computer) {
        var _this = _super.call(this) || this;
        _this._computer = _computer;
        return _this;
    }
    ComputerComponentDecorator.prototype.boot = function () {
        return this._computer.boot();
    };
    ComputerComponentDecorator.prototype.shutDown = function () {
        return this._computer.shutDown();
    };
    ComputerComponentDecorator.prototype.display = function () {
        return this._computer.display();
    };
    ComputerComponentDecorator.prototype.print = function () {
        return this._computer.print();
    };
    ComputerComponentDecorator.prototype.renderVideo = function () {
        return this._computer.renderVideo();
    };
    return ComputerComponentDecorator;
}(Computer));
var ServerComputer = /** @class */ (function (_super) {
    __extends(ServerComputer, _super);
    function ServerComputer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ServerComputer.prototype.boot = function () {
        console.log("Botting server...");
    };
    ServerComputer.prototype.shutDown = function () {
        console.log("Server is shutting down");
    };
    return ServerComputer;
}(Computer));
var ComputerWithPrinterDecorator = /** @class */ (function (_super) {
    __extends(ComputerWithPrinterDecorator, _super);
    function ComputerWithPrinterDecorator(computer) {
        return _super.call(this, computer) || this;
    }
    ComputerWithPrinterDecorator.prototype.print = function () {
        console.log("Printing...");
    };
    return ComputerWithPrinterDecorator;
}(ComputerComponentDecorator));
var ComputerWithDedicatedGPU = /** @class */ (function (_super) {
    __extends(ComputerWithDedicatedGPU, _super);
    function ComputerWithDedicatedGPU(computer) {
        return _super.call(this, computer) || this;
    }
    ComputerWithDedicatedGPU.prototype.renderVideo = function () {
        console.log("Rendering video with dedicated GPU...");
    };
    return ComputerWithDedicatedGPU;
}(ComputerComponentDecorator));
var server = new ServerComputer();
var serverWithPrinter = new ComputerWithPrinterDecorator(server);
var serverWithPrinterDedicatedGPU = new ComputerWithDedicatedGPU(serverWithPrinter);
serverWithPrinterDedicatedGPU.print();
serverWithPrinterDedicatedGPU.renderVideo();
//# sourceMappingURL=app.js.map