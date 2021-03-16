"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var employee_service_1 = __importDefault(require("./employee-service"));
var employee_1 = __importDefault(require("./employee"));
var class_validator_1 = require("class-validator");
var error_middelware_1 = require("./error-middelware/error-middelware");
var EmployeeController = /** @class */ (function () {
    function EmployeeController() {
    }
    EmployeeController.getAll = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var data, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, employee_service_1.default.getAll()];
                    case 1:
                        data = _b.sent();
                        res.json(data);
                        return [3 /*break*/, 3];
                    case 2:
                        _a = _b.sent();
                        next(new error_middelware_1.BadRequest("server not found"));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EmployeeController.getOneEmployee = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var employee, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, employee_service_1.default.getEmployee(+req.params.id)];
                    case 1:
                        employee = _b.sent();
                        res.json(employee);
                        return [3 /*break*/, 3];
                    case 2:
                        _a = _b.sent();
                        next(new error_middelware_1.BadRequest("server not found"));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EmployeeController.addEmployee = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, id, firstName, lastName, birthDate, title, country, city, employee, errors, result, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = req.body, id = _a.id, firstName = _a.firstName, lastName = _a.lastName, birthDate = _a.birthDate, title = _a.title, country = _a.country, city = _a.city;
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 4, , 5]);
                        employee = new employee_1.default(firstName, lastName, title, country, city, birthDate, id);
                        return [4 /*yield*/, class_validator_1.validate(employee)];
                    case 2:
                        errors = _c.sent();
                        if (errors.length) {
                            res.status(400).json(errors);
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, employee_service_1.default.addEmployee(req.body)];
                    case 3:
                        result = _c.sent();
                        res.json(result);
                        return [3 /*break*/, 5];
                    case 4:
                        _b = _c.sent();
                        next(new error_middelware_1.BadRequest("server not found"));
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    EmployeeController.updateEmployee = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, firstName, lastName, birthDate, title, country, city, employee, errors, result, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 3, , 4]);
                        _a = req.body, firstName = _a.firstName, lastName = _a.lastName, birthDate = _a.birthDate, title = _a.title, country = _a.country, city = _a.city;
                        employee = new employee_1.default(firstName, lastName, title, country, city, birthDate, +req.params.id);
                        return [4 /*yield*/, class_validator_1.validate(employee)];
                    case 1:
                        errors = _c.sent();
                        if (errors.length) {
                            res.status(400).json(errors);
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, employee_service_1.default.updateEmployee(employee)];
                    case 2:
                        result = _c.sent();
                        res.json(result);
                        return [3 /*break*/, 4];
                    case 3:
                        _b = _c.sent();
                        next(new error_middelware_1.BadRequest("server not found"));
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    EmployeeController.updateSomeEmployeeProp = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var employeePartProp, result, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        employeePartProp = __assign(__assign({}, req.body), { id: +req.params.id });
                        return [4 /*yield*/, employee_service_1.default.updateEmployeeSomeProp(employeePartProp)];
                    case 1:
                        result = _b.sent();
                        res.json(result);
                        return [3 /*break*/, 3];
                    case 2:
                        _a = _b.sent();
                        next(new error_middelware_1.BadRequest("server not found"));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EmployeeController.deleteEmployee = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var result, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, employee_service_1.default.deleteEmployee(+req.params.id)];
                    case 1:
                        result = _b.sent();
                        res.json(result);
                        return [3 /*break*/, 3];
                    case 2:
                        _a = _b.sent();
                        next(new error_middelware_1.BadRequest("server not found"));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return EmployeeController;
}());
exports.default = EmployeeController;
