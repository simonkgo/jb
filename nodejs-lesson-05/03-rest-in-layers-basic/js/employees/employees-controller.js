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
exports.EmployeesController = void 0;
var express = require("express");
var employee_1 = require("./employee");
var Employees_service_1 = require("./Employees-service");
var error_middleware_1 = require("../middleware/error-middleware");
var delete_middleware_1 = require("../middleware/delete-middleware");
var class_validator_1 = require("class-validator");
var EmployeesController = /** @class */ (function () {
    function EmployeesController() {
        this.router = express.Router();
        this.activeEmployeesControllerRoutes();
    }
    EmployeesController.prototype.activeEmployeesControllerRoutes = function () {
        this.router.use('/employees', this.date);
        this.router.get('/employees', this.all);
        this.router.get('/employees/:id', this.getOne);
        this.router.post('/employees', this.post);
        this.router.put('/employees/:id', this.put);
        this.router.patch('/employees/:id', this.patch);
        this.router.delete('/employees/:id', this.delete);
    };
    EmployeesController.prototype.date = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var details, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        details = {
                            date: new Date(),
                            method: req.method,
                            path: "/employees" + req.path
                        };
                        return [4 /*yield*/, Employees_service_1.default.writeLog(details)];
                    case 1:
                        _a.sent();
                        next();
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        next(new error_middleware_1.BadRequest('Bad Request Costumized'));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EmployeesController.prototype.all = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var employees, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Employees_service_1.default.all()];
                    case 1:
                        employees = _a.sent();
                        res.json(employees);
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _a.sent();
                        next(new error_middleware_1.BadRequest('Bad Request Costumized'));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EmployeesController.prototype.getOne = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var id, employee, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = +req.params.id;
                        return [4 /*yield*/, Employees_service_1.default.getOne(id)];
                    case 1:
                        employee = _a.sent();
                        if (!employee) {
                            next(new error_middleware_1.NotFound("id " + id + " not found"));
                        }
                        res.json(employee);
                        return [3 /*break*/, 3];
                    case 2:
                        err_3 = _a.sent();
                        next(new error_middleware_1.BadRequest('Bad Request Costumized'));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EmployeesController.prototype.post = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, id, firstName, lastName, title, country, city, birthDate, newEmployee, errors, employee, err_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        _a = req.body, id = _a.id, firstName = _a.firstName, lastName = _a.lastName, title = _a.title, country = _a.country, city = _a.city, birthDate = _a.birthDate;
                        newEmployee = new employee_1.Employee(id, firstName, lastName, title, country, city, birthDate);
                        return [4 /*yield*/, class_validator_1.validate(newEmployee)];
                    case 1:
                        errors = _b.sent();
                        if (errors.length) {
                            next(new error_middleware_1.BadRequest('Bad Request Costumized'));
                        }
                        return [4 /*yield*/, Employees_service_1.default.post(req.body)];
                    case 2:
                        employee = _b.sent();
                        res.status(201).json(employee);
                        return [3 /*break*/, 4];
                    case 3:
                        err_4 = _b.sent();
                        next(new error_middleware_1.BadRequest('Bad Request Costumized'));
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    EmployeesController.prototype.put = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, id, firstName, lastName, title, country, city, birthDate, newEmployee, errors, idParam, employee, result, err_5;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        _a = req.body, id = _a.id, firstName = _a.firstName, lastName = _a.lastName, title = _a.title, country = _a.country, city = _a.city, birthDate = _a.birthDate;
                        newEmployee = new employee_1.Employee(id, firstName, lastName, title, country, city, birthDate);
                        return [4 /*yield*/, class_validator_1.validate(newEmployee, { groups: ['patch', 'put'] })];
                    case 1:
                        errors = _b.sent();
                        if (errors.length) {
                            next(new error_middleware_1.BadRequest('Bad Request Costumized'));
                        }
                        idParam = +req.params.id;
                        employee = req.body;
                        employee.id = idParam;
                        return [4 /*yield*/, Employees_service_1.default.put(employee)];
                    case 2:
                        result = _b.sent();
                        if (!result) {
                            next(new error_middleware_1.NotFound("id " + idParam + " not found"));
                        }
                        res.json(result);
                        return [3 /*break*/, 4];
                    case 3:
                        err_5 = _b.sent();
                        next(new error_middleware_1.BadRequest('Bad Request Costumized'));
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    EmployeesController.prototype.patch = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, id, firstName, lastName, title, country, city, birthDate, newEmployee, errors, idp, employee, result, err_6;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        _a = req.body, id = _a.id, firstName = _a.firstName, lastName = _a.lastName, title = _a.title, country = _a.country, city = _a.city, birthDate = _a.birthDate;
                        newEmployee = new employee_1.Employee(id, firstName, lastName, title, country, city, birthDate);
                        return [4 /*yield*/, class_validator_1.validate(newEmployee, { groups: ['patch'] })];
                    case 1:
                        errors = _b.sent();
                        if (errors.length) {
                            next(new error_middleware_1.BadRequest('Bad Request Costumized'));
                        }
                        idp = +req.params.id;
                        employee = req.body;
                        employee.id = idp;
                        return [4 /*yield*/, Employees_service_1.default.patch(employee)];
                    case 2:
                        result = _b.sent();
                        if (!result) {
                            next(new error_middleware_1.NotFound("id " + id + " not found"));
                        }
                        else {
                            res.json(result);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_6 = _b.sent();
                        next(new error_middleware_1.BadRequest('Bad Request Costumized'));
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    EmployeesController.prototype.delete = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var id, employee, employeesUpdated, err_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        id = +req.params.id;
                        return [4 /*yield*/, Employees_service_1.default.getOne(id)];
                    case 1:
                        employee = _a.sent();
                        if (!employee) {
                            next(new error_middleware_1.NotFound("id " + id + " not found"));
                        }
                        return [4 /*yield*/, Employees_service_1.default.delete(id)
                            // res.json(employeesUpdated)
                        ];
                    case 2:
                        employeesUpdated = _a.sent();
                        // res.json(employeesUpdated)
                        next(new delete_middleware_1.Deleted("id " + id + " is deleted"));
                        return [3 /*break*/, 4];
                    case 3:
                        err_7 = _a.sent();
                        next(new error_middleware_1.BadRequest('Bad Request Costumized'));
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return EmployeesController;
}());
exports.EmployeesController = EmployeesController;
