"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
var express = require("express");
var prducts_service_1 = require("./prducts-service");
var ProductsController = /** @class */ (function () {
    function ProductsController() {
        this._router = express.Router();
        this.activateProductsControllerRoutes();
    }
    ;
    ProductsController.prototype.activateProductsControllerRoutes = function () {
        this.router.get("/products", this.all);
        this.router.get("/products/:id", this.getOne);
        this.router.post("/products", this.post);
        this.router.put("/products/:id", this.put);
        this.router.patch("/products/:id", this.patch);
    };
    ProductsController.prototype.patch = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, product, result, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = +req.params.id;
                        product = req.body;
                        product.id = id;
                        return [4 /*yield*/, prducts_service_1.default.patch(product)];
                    case 1:
                        result = _a.sent();
                        res.json(result);
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        throw err_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProductsController.prototype.put = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, product, result, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = +req.params.id;
                        product = req.body;
                        product.id = id;
                        return [4 /*yield*/, prducts_service_1.default.put(product)];
                    case 1:
                        result = _a.sent();
                        res.json(result);
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _a.sent();
                        throw err_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProductsController.prototype.post = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var product, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, prducts_service_1.default.post(req.body)];
                    case 1:
                        product = _a.sent();
                        res.status(201).json(product);
                        return [3 /*break*/, 3];
                    case 2:
                        err_3 = _a.sent();
                        throw err_3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProductsController.prototype.getOne = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, currentProduct, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = +req.params.id;
                        return [4 /*yield*/, prducts_service_1.default.getOne(id)];
                    case 1:
                        currentProduct = _a.sent();
                        if (!currentProduct) {
                            res.status(404);
                        }
                        res.json(currentProduct);
                        return [3 /*break*/, 3];
                    case 2:
                        err_4 = _a.sent();
                        console.log(err_4);
                        res.status(400).send(err_4.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProductsController.prototype.all = function (request, response, next) {
        return __awaiter(this, void 0, void 0, function () {
            var products, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, prducts_service_1.default.all()];
                    case 1:
                        products = _a.sent();
                        if (!products) {
                            response.status(404);
                        }
                        response.json(products);
                        return [3 /*break*/, 3];
                    case 2:
                        err_5 = _a.sent();
                        console.log(err_5);
                        response.status(400).send(err_5.message);
                        return [3 /*break*/, 3];
                    case 3:
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    Object.defineProperty(ProductsController.prototype, "router", {
        get: function () {
            return this._router;
        },
        enumerable: false,
        configurable: true
    });
    ;
    return ProductsController;
}());
exports.ProductsController = ProductsController;
;
