export const filterEmployees = (httpClient, filters) => {
    try {
        filters = removeDuplicateFilters(filters);
        /************** Function responsibility. **********************/
        httpClient.get("/api/employees").then(employees => {
            let result = applyFilters(employees);
            return result;
        /**************************************************************/
        /*************** What the function does instead. **************/
        }).catch(err => {
            console.error("Something went wrong while fetching the employees");
            let messageBox = new MessageBox();
            messageBox.show("Something went wrong while fetching the employees");
        });
        /**************************************************************/
        /*************** What the function does instead. **************/
    } catch (error) {
        console.error("Application criticial error");
        let messageBox = new MessageBox();
        messageBox.show("Something went wrong while fetching the employees");
    }
    /******************************************************************/
}