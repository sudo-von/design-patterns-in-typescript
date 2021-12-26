export const filterEmployees = (httpClient, filters) => {
    try {
        filters = removeDuplicateFilters(filters);
        /************************ Function responsibility. ********************************/
        httpClient.get("/api/employees").then(employees => {
            let result = applyFilters(employees);
            /******************************************************************************/
            /****************** Presentation logic. ***************************************/
            let list = document.getElementById("employees-list");
            result.forEach(employee => {
                let employeeItem = document.createElement("li");
                employeeItem.innerHTML = `<strong>${employee.lastName}</strong> ${employee.firstName}`;
                list.appendChild(employeeItem);
            });
            /******************************************************************************/
        }).catch(err => {
            console.error("Something went wrong while fetching the employees");
            let messageBox = new MessageBox();
            messageBox.show("Something went wrong while fetching the employees");
        });
    } catch (error) {
        console.error("Application criticial error");
        let messageBox = new MessageBox();
        messageBox.show("Something went wrong while fetching the employees");
    }
}