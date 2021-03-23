"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpDeleteMiddleware = exports.Deleted = void 0;
var HttpDelete = /** @class */ (function () {
    function HttpDelete(message) {
        this.status = 200;
        this.message = message;
    }
    return HttpDelete;
}());
var Deleted = /** @class */ (function (_super) {
    __extends(Deleted, _super);
    function Deleted(message) {
        var _this = _super.call(this, message) || this;
        _this.status = 204;
        _this.name = 'Deleted';
        return _this;
    }
    return Deleted;
}(HttpDelete));
exports.Deleted = Deleted;
exports.httpDeleteMiddleware = function (err, req, res, next) {
    console.log(err.status);
    console.log(err.message);
    res.status(err.status).json(err.message);
};
