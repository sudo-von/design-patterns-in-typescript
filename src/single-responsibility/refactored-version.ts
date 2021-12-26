export const filterEmployees = (httpClient, filters): Promise<any> => {
    try {
        filters = removeDuplicateFilters(filters);
        return httpClient.get("/api/employees").then(employees => {
            let result = applyFilters(employees);
            return result;
        }).catch(err => {
            handleError(err, "Something went wrong while fetching the employees");
        });
    } catch (err) {
        handleError(err, "Application critical error");
    }
}

const handleError = (err, msg) => {
    console.error(err);
    let messageBox = new MessageBox();
    messageBox.show(msg);
}

function recordEmployee(result: any[], httpClient: any) {
    result.forEach(employee => {
        httpClient.post("/api/employees/record", employee);
    });
}

function displayEmployees(result: any[]) {
    let list = document.getElementById("employees-list");
    result.forEach(employee => {
        let employeeItem = document.createElement("li");
        employeeItem.innerHTML = `<strong>${employee.lastName}</strong> ${employee.firstName}`;
        list.appendChild(employeeItem);
    });
}

const removeDuplicateFilters = (filters) => {
    // Exists to avoid vscode errors.
}

const applyFilters = (filters): any[] => {
    // Exists to avoid vscode errors.
    return [];
}

export class HttpClient{
    // Exists to avoid vscode errors.
    show(msg){}
}

export class MessageBox{
    // Exists to avoid vscode errors.
    show(msg){}
}

var httpClient = new HttpClient();

filterEmployees(httpClient, []).then(employees => {
    displayEmployees(employees);
    recordEmployee(employees, httpClient);
});