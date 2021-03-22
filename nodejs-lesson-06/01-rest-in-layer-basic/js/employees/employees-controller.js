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
exports.EmployeeController = void 0;
var express = require("express");
var employeesServics_1 = require("./employeesServics");
var employee_1 = require("./employee");
var class_validator_1 = require("class-validator");
var eror_middleware_1 = require("../middelware/eror-middleware");
var EmployeeController = /** @class */ (function () {
    function EmployeeController() {
        this.router = express.Router();
        this.activateRouter();
    }
    ;
    EmployeeController.prototype.activateRouter = function () {
        this.router.get('/employee', this.all);
        this.router.get('/employee/:id', this.oneId);
        this.router.post('/employee', this.post);
        this.router.put('/employee/:id', this.put);
        this.router.patch('/employee/:id', this.patch);
        this.router.delete('/employee/:id', this.delete);
    };
    ;
    EmployeeController.prototype.all = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var allEmployees, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, employeesServics_1.default.getAllEmployee()];
                    case 1:
                        allEmployees = _a.sent();
                        res.json(allEmployees);
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        next(new eror_middleware_1.NotFound(err_1.massage));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ;
    EmployeeController.prototype.oneId = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var getOne, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, employeesServics_1.default.getOneEmployee(parseInt(req.params.id))];
                    case 1:
                        getOne = _a.sent();
                        if (!getOne) {
                            next(new eror_middleware_1.NotFound("No Employee With This Id"));
                            return [2 /*return*/];
                        }
                        res.json(getOne);
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _a.sent();
                        next(new eror_middleware_1.NotFound(err_2.massage));
                        return [3 /*break*/, 3];
                    case 3:
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    EmployeeController.prototype.post = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, firstName, lastName, title, city, country, birthDate, employee, errors, resulte, err_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        _a = req.body, firstName = _a.firstName, lastName = _a.lastName, title = _a.title, city = _a.city, country = _a.country, birthDate = _a.birthDate;
                        employee = new employee_1.Employee(firstName, lastName, title, city, country, birthDate);
                        return [4 /*yield*/, class_validator_1.validate(employee)];
                    case 1:
                        errors = _b.sent();
                        if (errors.length) {
                            res.status(400).json(errors);
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, employeesServics_1.default.addNewEmployee(employee)];
                    case 2:
                        resulte = _b.sent();
                        res.status(201).json(resulte);
                        return [3 /*break*/, 4];
                    case 3:
                        err_3 = _b.sent();
                        next(new eror_middleware_1.NotFound(err_3.massage));
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ;
    EmployeeController.prototype.put = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, firstName, lastName, title, city, country, birthDate, employee, errors, idOfEmployee, update, err_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        _a = req.body, firstName = _a.firstName, lastName = _a.lastName, title = _a.title, city = _a.city, country = _a.country, birthDate = _a.birthDate;
                        employee = new employee_1.Employee(firstName, lastName, title, city, country, birthDate);
                        return [4 /*yield*/, class_validator_1.validate(employee)];
                    case 1:
                        errors = _b.sent();
                        if (errors.length) {
                            res.status(400).json(errors);
                            return [2 /*return*/];
                        }
                        idOfEmployee = parseInt(req.params.id);
                        employee.id = idOfEmployee;
                        return [4 /*yield*/, employeesServics_1.default.putEmployee(employee)];
                    case 2:
                        update = _b.sent();
                        res.json(update);
                        return [3 /*break*/, 4];
                    case 3:
                        err_4 = _b.sent();
                        next(new eror_middleware_1.NotFound(err_4.massage));
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ;
    EmployeeController.prototype.patch = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, firstName, lastName, title, city, country, birthDate, employee, errors, idOfEmployee, update, err_5;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        _a = req.body, firstName = _a.firstName, lastName = _a.lastName, title = _a.title, city = _a.city, country = _a.country, birthDate = _a.birthDate;
                        employee = new employee_1.Employee(firstName, lastName, title, city, country, birthDate);
                        return [4 /*yield*/, class_validator_1.validate(employee)];
                    case 1:
                        errors = _b.sent();
                        if (errors.length) {
                            res.status(404).json(errors);
                            return [2 /*return*/];
                        }
                        idOfEmployee = parseInt(req.params.id);
                        employee.id = idOfEmployee;
                        return [4 /*yield*/, employeesServics_1.default.patchData(employee)];
                    case 2:
                        update = _b.sent();
                        res.json(update);
                        return [3 /*break*/, 4];
                    case 3:
                        err_5 = _b.sent();
                        next(new eror_middleware_1.NotFound(err_5.massage));
                        return [3 /*break*/, 4];
                    case 4:
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    EmployeeController.prototype.delete = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var deleteEmployee, err_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, employeesServics_1.default.deleteData(+req.params.id)];
                    case 1:
                        deleteEmployee = _a.sent();
                        res.json(deleteEmployee);
                        return [3 /*break*/, 3];
                    case 2:
                        err_6 = _a.sent();
                        next(new eror_middleware_1.NotFound(err_6.massage));
                        return [3 /*break*/, 3];
                    case 3:
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    return EmployeeController;
}());
exports.EmployeeController = EmployeeController;
;
