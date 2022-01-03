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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandlerWithLogging = exports.ErrorLoger = exports.ErrorHandler = void 0;
/* Add a logger
* Inject an HttpClient.
* Log error to our server.
*/
var ErrorHandler = /** @class */ (function () {
    //private httpClient; BAD
    function ErrorHandler(messageBox, httpClient) {
        this.messageBox = messageBox;
        //this.httpClient = httpClient; BAD
    }
    ErrorHandler.prototype.wrapError = function (err, publicResponse, severity) {
        var error = {
            originalError: err,
            publicResponse: publicResponse,
            severity: severity
        };
        // this.httpClient.post("api/log", error); BAD
        if (severity < 5) {
            this.handleWarning("Warning", publicResponse);
        }
        else {
            this.handleError("Critical error", publicResponse);
        }
    };
    ErrorHandler.prototype.handleWarning = function (header, content) {
        this.messageBox.show(header, content);
    };
    ErrorHandler.prototype.handleError = function (header, content) {
        this.messageBox.show(header, content);
    };
    return ErrorHandler;
}());
exports.ErrorHandler = ErrorHandler;
var ErrorLoger = /** @class */ (function () {
    function ErrorLoger(_httpClient) {
        this._httpClient = _httpClient;
        this._endpoint = "api/log";
    }
    ErrorLoger.prototype.logError = function (errorObject) {
        return this._httpClient.post(this._endpoint, errorObject);
    };
    return ErrorLoger;
}());
exports.ErrorLoger = ErrorLoger;
var ErrorHandlerWithLogging = /** @class */ (function (_super) {
    __extends(ErrorHandlerWithLogging, _super);
    function ErrorHandlerWithLogging(messageBox, httpClient, logger) {
        var _this = _super.call(this, messageBox, httpClient) || this;
        _this._logger = logger;
        return _this;
    }
    ErrorHandlerWithLogging.prototype.wrapError = function (err, publicResponse, severity) {
        var _this = this;
        return this._logger.logError(err).then(function () {
            _super.prototype.wrapError.call(_this, err, publicResponse, severity);
        });
    };
    return ErrorHandlerWithLogging;
}(ErrorHandler));
exports.ErrorHandlerWithLogging = ErrorHandlerWithLogging;
//# sourceMappingURL=refactored-version.js.map