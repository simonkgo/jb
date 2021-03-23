"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Employee = void 0;
var class_validator_1 = require("class-validator");
var Employee = /** @class */ (function () {
    function Employee(id, firstName, lastName, title, country, city, birthDate) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.title = title;
        this.country = country;
        this.city = city;
        this.birthDate = birthDate;
    }
    __decorate([
        class_validator_1.IsNotEmpty({
            groups: ['put,patch']
        }),
        class_validator_1.IsPositive({
            groups: ['patch']
        })
    ], Employee.prototype, "id");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.Length(2, 100)
    ], Employee.prototype, "firstName");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.Length(2, 100)
    ], Employee.prototype, "lastName");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.Length(2, 100)
    ], Employee.prototype, "title");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.Length(2, 100)
    ], Employee.prototype, "country");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.Length(2, 100)
    ], Employee.prototype, "city");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsDateString(),
        class_validator_1.Length(2, 100)
    ], Employee.prototype, "birthDate");
    return Employee;
}());
exports.Employee = Employee;
