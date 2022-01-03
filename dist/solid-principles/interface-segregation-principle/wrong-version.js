"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tablet = exports.SmartPhone = void 0;
var SmartPhone = /** @class */ (function () {
    function SmartPhone() {
    }
    SmartPhone.prototype.call = function (contact) {
        console.log("Calling ".concat(contact));
    };
    SmartPhone.prototype.sendSMS = function (contact, content) {
        console.log("Sending ".concat(content, " to ").concat(contact));
    };
    SmartPhone.prototype.openApp = function (path) {
        console.log("Opening app ".concat(path));
    };
    SmartPhone.prototype.connectToWIFI = function (ssid, password) {
        console.log("Connecting to wifi ".concat(ssid, " with password ").concat(password));
    };
    return SmartPhone;
}());
exports.SmartPhone = SmartPhone;
var Tablet = /** @class */ (function () {
    function Tablet() {
    }
    Tablet.prototype.call = function (contact) {
        console.log("This device cannot place a call");
    };
    Tablet.prototype.sendSMS = function (contact, content) {
        console.log("This device cannot connect to a cell phone network");
    };
    Tablet.prototype.openApp = function (path) {
        console.log("Opening app ".concat(path));
    };
    Tablet.prototype.connectToWIFI = function (ssid, password) {
        console.log("Connecting to wifi ".concat(ssid, " with password ").concat(password));
    };
    return Tablet;
}());
exports.Tablet = Tablet;
var smartPhone = new SmartPhone();
smartPhone.call("VoN");
smartPhone.sendSMS("VoN", "Hey, how are you?");
smartPhone.openApp("Facebook");
smartPhone.connectToWIFI("Wi-fi", "1234567890");
var tablet = new Tablet();
tablet.call("VoN");
tablet.sendSMS("VoN", "Hey, how are you?");
tablet.openApp("Facebook");
tablet.connectToWIFI("Wi-fi", "1234567890");
//# sourceMappingURL=wrong-version.js.map