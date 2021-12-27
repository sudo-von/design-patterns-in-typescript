"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageBox = exports.HttpClient = exports.filterEmployees = void 0;
var filterEmployees = function (httpClient, filters) {
    try {
        filters = removeDuplicateFilters(filters);
        return httpClient.get("/api/employees").then(function (employees) {
            var result = applyFilters(employees);
            return result;
        }).catch(function (err) {
            handleError(err, "Something went wrong while fetching the employees");
        });
    }
    catch (err) {
        handleError(err, "Application critical error");
    }
};
exports.filterEmployees = filterEmployees;
var handleError = function (err, msg) {
    console.error(err);
    var messageBox = new MessageBox();
    messageBox.show(msg);
};
function recordEmployee(result, httpClient) {
    result.forEach(function (employee) {
        httpClient.post("/api/employees/record", employee);
    });
}
function displayEmployees(result) {
    var list = document.getElementById("employees-list");
    result.forEach(function (employee) {
        var employeeItem = document.createElement("li");
        employeeItem.innerHTML = "<strong>".concat(employee.lastName, "</strong> ").concat(employee.firstName);
        list.appendChild(employeeItem);
    });
}
var removeDuplicateFilters = function (filters) {
    // Exists to avoid vscode errors.
};
var applyFilters = function (filters) {
    // Exists to avoid vscode errors.
    return [];
};
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    // Exists to avoid vscode errors.
    HttpClient.prototype.show = function (msg) { };
    return HttpClient;
}());
exports.HttpClient = HttpClient;
var MessageBox = /** @class */ (function () {
    function MessageBox() {
    }
    // Exists to avoid vscode errors.
    MessageBox.prototype.show = function (msg) { };
    return MessageBox;
}());
exports.MessageBox = MessageBox;
var httpClient = new HttpClient();
(0, exports.filterEmployees)(httpClient, []).then(function (employees) {
    displayEmployees(employees);
    recordEmployee(employees, httpClient);
});
//# sourceMappingURL=refactored-version.js.map