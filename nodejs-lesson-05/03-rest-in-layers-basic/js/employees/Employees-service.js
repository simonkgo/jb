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
var employees_repository_1 = require("./employees-repository");
var employees_repository_2 = require("./employees-repository");
var EmployeesService = /** @class */ (function () {
    function EmployeesService() {
    }
    EmployeesService.prototype.writeLog = function (details) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, employees_repository_1.default.writeLog(details)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EmployeesService.prototype.all = function () {
        return __awaiter(this, void 0, void 0, function () {
            var employees;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, employees_repository_2.default.getAll()];
                    case 1:
                        employees = _a.sent();
                        return [2 /*return*/, employees];
                }
            });
        });
    };
    EmployeesService.prototype.getOne = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var employees, employee;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, employees_repository_2.default.getAll()];
                    case 1:
                        employees = _a.sent();
                        employee = employees.find(function (E) { return E.id === id; });
                        return [2 /*return*/, employee];
                }
            });
        });
    };
    EmployeesService.prototype.post = function (employee) {
        return __awaiter(this, void 0, void 0, function () {
            var employees;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, employees_repository_2.default.getAll()];
                    case 1:
                        employees = _a.sent();
                        employee.id = employees[employees.length - 1].id + 1;
                        employees.push(employee);
                        return [4 /*yield*/, employees_repository_2.default.saveAll(employees)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, employee];
                }
            });
        });
    };
    EmployeesService.prototype.put = function (employee) {
        return __awaiter(this, void 0, void 0, function () {
            var employees, employeesIndexValid, index;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, employees_repository_1.default.getAll()];
                    case 1:
                        employees = _a.sent();
                        employeesIndexValid = employees.find(function (E) { return E.id === employee.id; });
                        if (!!employeesIndexValid) return [3 /*break*/, 2];
                        return [2 /*return*/, employeesIndexValid];
                    case 2:
                        index = employees.findIndex(function (e) { return e.id === employee.id; });
                        employees[index] = employee;
                        return [4 /*yield*/, employees_repository_2.default.saveAll(employees)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, employee];
                }
            });
        });
    };
    EmployeesService.prototype.patch = function (employee) {
        return __awaiter(this, void 0, void 0, function () {
            var employees, employeeToFetch, key;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, employees_repository_1.default.getAll()];
                    case 1:
                        employees = _a.sent();
                        employeeToFetch = employees.find(function (e) { return e.id === employee.id; });
                        console.log(employeeToFetch);
                        if (!!employeeToFetch) return [3 /*break*/, 2];
                        return [2 /*return*/, employeeToFetch];
                    case 2:
                        for (key in employee) {
                            if (key in employeeToFetch) {
                                employeeToFetch[key] = employee[key];
                            }
                        }
                        return [4 /*yield*/, employees_repository_1.default.saveAll(employees)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, employee];
                }
            });
        });
    };
    EmployeesService.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var employees, index;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, employees_repository_2.default.getAll()];
                    case 1:
                        employees = _a.sent();
                        index = employees.findIndex(function (e) { return e.id === id; });
                        employees.splice(index, 1);
                        return [4 /*yield*/, employees_repository_1.default.saveAll(employees)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, employees];
                }
            });
        });
    };
    return EmployeesService;
}());
exports.default = new EmployeesService();
