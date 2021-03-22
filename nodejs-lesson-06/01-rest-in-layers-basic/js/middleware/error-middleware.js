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
exports.ProgrammingErrorMiddleware = exports.HttpErrorMiddleware = exports.BadReq = exports.Forbidden = exports.NotFound = void 0;
var HttpError = /** @class */ (function () {
    function HttpError(message) {
        this.status = 400;
        this.message = message;
    }
    ;
    return HttpError;
}());
;
var NotFound = /** @class */ (function (_super) {
    __extends(NotFound, _super);
    function NotFound(message) {
        var _this = _super.call(this, message) || this;
        _this.status = 404;
        _this.name = "not found";
        return _this;
    }
    ;
    return NotFound;
}(HttpError));
exports.NotFound = NotFound;
;
var Forbidden = /** @class */ (function (_super) {
    __extends(Forbidden, _super);
    function Forbidden(message) {
        var _this = _super.call(this, message) || this;
        _this.status = 403;
        _this.name = "Forbidden";
        return _this;
    }
    ;
    return Forbidden;
}(HttpError));
exports.Forbidden = Forbidden;
;
var BadReq = /** @class */ (function (_super) {
    __extends(BadReq, _super);
    function BadReq(message) {
        var _this = _super.call(this, message) || this;
        _this.status = 400;
        _this.name = "Bad Reqest";
        return _this;
    }
    ;
    return BadReq;
}(HttpError));
exports.BadReq = BadReq;
;
var HttpErrorMiddleware = function (error, req, res, next) {
    if (error instanceof HttpError) {
        var status_1 = error.status || 400;
        var message = error.message || "oh no!";
        res.status(status_1).json({ message: message });
    }
    else {
        next(error);
    }
    ;
};
exports.HttpErrorMiddleware = HttpErrorMiddleware;
var ProgrammingErrorMiddleware = function (error, req, res, next) {
    res.json("programmer not doing well today");
    console.log(error);
    process.exit(1);
};
exports.ProgrammingErrorMiddleware = ProgrammingErrorMiddleware;
