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
exports.httpMiddelwareError = exports.NotFound = exports.BadRequest = exports.HttpError = void 0;
var HttpError = /** @class */ (function () {
    function HttpError(message) {
        this.status = 500;
        this.message = "There is a problem with our website";
        this.message = message;
    }
    return HttpError;
}());
exports.HttpError = HttpError;
var BadRequest = /** @class */ (function (_super) {
    __extends(BadRequest, _super);
    function BadRequest(message) {
        var _this = _super.call(this, message) || this;
        _this.status = 400;
        _this.message = "There as a bed request";
        return _this;
    }
    return BadRequest;
}(HttpError));
exports.BadRequest = BadRequest;
var NotFound = /** @class */ (function (_super) {
    __extends(NotFound, _super);
    function NotFound(message) {
        var _this = _super.call(this, message) || this;
        _this.status = 404;
        _this.message = "page not found";
        return _this;
    }
    return NotFound;
}(HttpError));
exports.NotFound = NotFound;
var httpMiddelwareError = function (err, req, res, next) {
    if (err instanceof HttpError) {
        var status_1 = err.status, message = err.message;
        res.status(status_1).json(message);
    }
    else
        next(err);
};
exports.httpMiddelwareError = httpMiddelwareError;
