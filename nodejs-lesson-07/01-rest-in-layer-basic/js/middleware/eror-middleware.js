"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpErorMiddeleware = exports.Forbidden = exports.NotFound = void 0;
var HttpEror = /** @class */ (function () {
    function HttpEror(message) {
        this.status = 400;
        this.message = message;
    }
    return HttpEror;
}());
var NotFound = /** @class */ (function (_super) {
    __extends(NotFound, _super);
    function NotFound(message) {
        var _this = _super.call(this, message) || this;
        _this.status = 404;
        return _this;
    }
    ;
    return NotFound;
}(HttpEror));
exports.NotFound = NotFound;
var Forbidden = /** @class */ (function (_super) {
    __extends(Forbidden, _super);
    function Forbidden(message) {
        var _this = _super.call(this, message) || this;
        _this.status = 403;
        return _this;
    }
    return Forbidden;
}(HttpEror));
exports.Forbidden = Forbidden;
var httpErorMiddeleware = function (err, req, res, next) {
    if (err instanceof HttpEror) {
        var status_1 = err.status || 400;
        var message = err.message || 'Ooooopsi...';
        res.status(status_1).json({ message: message });
    }
    else {
        next(err);
    }
};
exports.httpErorMiddeleware = httpErorMiddeleware;
