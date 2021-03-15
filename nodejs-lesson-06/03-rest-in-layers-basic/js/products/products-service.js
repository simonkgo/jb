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
var products_repository_1 = require("./products-repository");
var ProductsService = /** @class */ (function () {
    function ProductsService() {
    }
    ProductsService.prototype.all = function () {
        return __awaiter(this, void 0, void 0, function () {
            var products;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, products_repository_1.default.getAll()];
                    case 1:
                        products = _a.sent();
                        return [2 /*return*/, products];
                }
            });
        });
    };
    ProductsService.prototype.one = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var products, product;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, products_repository_1.default.getAll()];
                    case 1:
                        products = _a.sent();
                        product = products.find(function (product) { return product.id === id; });
                        return [2 /*return*/, product];
                }
            });
        });
    };
    ProductsService.prototype.post = function (newProduct) {
        return __awaiter(this, void 0, void 0, function () {
            var newId, products, verifyId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newId = 1;
                        return [4 /*yield*/, products_repository_1.default.getAll()];
                    case 1:
                        products = _a.sent();
                        verifyId = function () {
                            var product = products.find(function (product) { return product.id === newId; });
                            if (!product) {
                                return;
                            }
                            newId++;
                            verifyId();
                        };
                        verifyId();
                        newProduct.id = newId;
                        products.push(newProduct);
                        return [4 /*yield*/, products_repository_1.default.saveAll(products)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, newProduct];
                }
            });
        });
    };
    ProductsService.prototype.put = function (product) {
        return __awaiter(this, void 0, void 0, function () {
            var products, index;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, products_repository_1.default.getAll()];
                    case 1:
                        products = _a.sent();
                        index = products.findIndex(function (p) { return p.id === product.id; });
                        products[index] = product;
                        return [4 /*yield*/, products_repository_1.default.saveAll(products)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, product];
                }
            });
        });
    };
    ProductsService.prototype.patch = function (product) {
        return __awaiter(this, void 0, void 0, function () {
            var products, oldProduct, key;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, products_repository_1.default.getAll()];
                    case 1:
                        products = _a.sent();
                        oldProduct = products.find(function (p) { return p.id === product.id; });
                        for (key in product) {
                            if (key in oldProduct) {
                                oldProduct[key] = product[key];
                            }
                            ;
                        }
                        ;
                        // product.name ? oldProduct.name = product.name : null;
                        // product.price ? oldProduct.price = product.price : null;
                        // product.stock ? oldProduct.stock = product.stock : null;
                        return [4 /*yield*/, products_repository_1.default.saveAll(products)];
                    case 2:
                        // product.name ? oldProduct.name = product.name : null;
                        // product.price ? oldProduct.price = product.price : null;
                        // product.stock ? oldProduct.stock = product.stock : null;
                        _a.sent();
                        return [2 /*return*/, oldProduct];
                }
            });
        });
    };
    ProductsService.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var products, index;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, products_repository_1.default.getAll()];
                    case 1:
                        products = _a.sent();
                        index = products.findIndex(function (p) { return p.id === id; });
                        products.splice(index, 1);
                        return [4 /*yield*/, products_repository_1.default.saveAll(products)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, products];
                }
            });
        });
    };
    return ProductsService;
}());
exports.default = new ProductsService();
