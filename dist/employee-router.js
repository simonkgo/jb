"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var employee_controller_1 = __importDefault(require("./employee-controller"));
var employee_delete_1 = __importDefault(require("./middelware/employee-delete"));
var EmployeeRouter = /** @class */ (function () {
    function EmployeeRouter() {
    }
    EmployeeRouter.employeeRouting = function () {
        this.router.get("/employees", employee_controller_1.default.getAll);
        this.router.get("/employees/:id", employee_controller_1.default.getOneEmployee);
        this.router.post("/employees", employee_controller_1.default.addEmployee);
        this.router.put("/employees/:id", employee_controller_1.default.updateEmployee);
        this.router.patch("/employees/:id", employee_controller_1.default.updateSomeEmployeeProp);
        this.router.delete("/employees/:id", employee_delete_1.default, employee_controller_1.default.deleteEmployee);
        return this.router;
    };
    EmployeeRouter.router = express_1.default.Router();
    return EmployeeRouter;
}());
exports.default = EmployeeRouter;
