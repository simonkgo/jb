"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var class_validator_1 = require("class-validator");
var Product = /** @class */ (function () {
    function Product(name, price, stock) {
        this.id = Math.floor(Math.random() * 1000);
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    ;
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.Length(2, 10),
        __metadata("design:type", String)
    ], Product.prototype, "name", void 0);
    __decorate([
        class_validator_1.IsInt(),
        class_validator_1.Min(50),
        class_validator_1.Max(150),
        __metadata("design:type", Number)
    ], Product.prototype, "price", void 0);
    __decorate([
        class_validator_1.IsInt(),
        __metadata("design:type", Number)
    ], Product.prototype, "stock", void 0);
    return Product;
}());
exports.Product = Product;
;
