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
exports.Employee = void 0;
var class_validator_1 = require("class-validator");
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, title, country, city, birthDate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.title = title;
        this.country = country;
        this.city = city;
        this.birthDate = birthDate;
    }
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        class_validator_1.IsOptional(),
        class_validator_1.Length(2, 100),
        __metadata("design:type", String)
    ], Employee.prototype, "firstName", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        class_validator_1.IsOptional(),
        class_validator_1.Length(2, 100),
        __metadata("design:type", String)
    ], Employee.prototype, "lastName", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        class_validator_1.IsOptional(),
        class_validator_1.Length(2, 100),
        __metadata("design:type", String)
    ], Employee.prototype, "title", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        class_validator_1.IsOptional(),
        class_validator_1.Length(2, 100),
        __metadata("design:type", String)
    ], Employee.prototype, "country", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        class_validator_1.IsOptional(),
        class_validator_1.Length(2, 100),
        __metadata("design:type", String)
    ], Employee.prototype, "city", void 0);
    __decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsDateString(),
        __metadata("design:type", Number)
    ], Employee.prototype, "birthDate", void 0);
    return Employee;
}());
exports.Employee = Employee;
