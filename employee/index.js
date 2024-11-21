const employeeName = document.getElementById("employeeName");
const employeeSalary = document.getElementById("employeeSalary");
const empJoiningDate = document.getElementById("empJoiningDate");
const tableBody = document.getElementById("tableBody");
const submit = document.getElementById("submit");
const joiningdateErr = document.getElementById("joiningdateErr");
const salaryErr = document.getElementById("salaryErr");
const empNameErr = document.getElementById("empNameErr");
const searchField = document.getElementById("search");
const sort = document.getElementById("sort");
const employeeData = [];
let editId;

function assignId() {
    if (employeeData.length) {
        return employeeData[employeeData.length - 1]?.empId + 1;
    } else {
        return 1;
    }
}

function resetForm() {
    employeeName.value = '';
    employeeSalary.value = '';
    empJoiningDate.value = '';
    submit.value = 'Add Employee';
}

function handleSubmit() {
    event.preventDefault();
    let isValid = handleValidation();
    if (!isValid) return;
    const date = new Date(empJoiningDate.value);
    let modifiedDate = date.toLocaleDateString('en-GB');
    const employee = {
        empId: assignId(),
        empName: employeeName.value,
        empSalary: parseInt(employeeSalary.value),
        empJoiningDate: modifiedDate
    }
    if (editId != undefined && submit.value === "Update Employee") {
        employee.empId = editId
        const editIdIndex = employeeData.findIndex((v) => v.empId === editId);
        employeeData.splice(editIdIndex, 1, employee);
    } else {
        employeeData.push(employee);
    }
    // console.log(employeeData)
    getTable();
    resetForm();
}

function getTable(data = []) {
    const finalData = data.length > 0 ? data : employeeData;
    const table = finalData.map((v, i) => {
        return `<tr>
        <td>${v.empId}</td>
        <td>${v.empName}</td>
        <td>${v.empSalary}</td>
        <td>${v.empJoiningDate}</td>
        <td>
            <input type="button" id="Edit" value= "Edit" onclick="handleEdit(${v.empId})">
            <input type="button" id="delete" value= "Delete" onclick="handleDelete(${v.empId})">
        </td>
        </tr>`
    })
    tableBody.innerHTML = table.join('');
}

function handleEdit(eleID) {
    const editIdIndex = employeeData.findIndex((v) => v.empId === eleID);
    const dateArray = employeeData[editIdIndex]?.empJoiningDate.split('/');
    dateArray.reverse();
    const modifiedDate = dateArray.join('-');
    // const originalDate = new Date(employeeData[editIdIndex]?.empJoiningDate);
    // console.log();

    employeeName.value = employeeData[editIdIndex]?.empName;
    employeeSalary.value = employeeData[editIdIndex]?.empSalary;
    empJoiningDate.value = modifiedDate;
    submit.value = "Update Employee";
    editId = eleID;
    // resetForm();
}

function handleDelete(eleID) {
    const deleteIdIndex = employeeData.findIndex((v) => v.empId === eleID);
    employeeData.splice(deleteIdIndex, 1);
    getTable();
    resetForm();
}

function handleValidation() {
    let isValid = true;
    const empFullNameRegex = /^[a-zA-Z]+\s+[a-zA-Z]+$/;
    const empNameRegex = /^[a-zA-z]+$/;
    const inputDate = new Date(empJoiningDate.value);
    const currentDate = new Date();
    empNameErr.innerHTML = '';
    salaryErr.innerHTML = '';
    joiningdateErr.innerHTML = '';
    if (!employeeName.value) {
        empNameErr.style.display = "inline"
        empNameErr.innerHTML = "<br>*Employee Name is Required.*"
        isValid = false
    } else if (!(empFullNameRegex.test(employeeName.value) || empNameRegex.test(employeeName.value))) {
        empNameErr.style.display = "inline"
        empNameErr.innerHTML = "<br>*Please Enter Only Alphabets.*"
        isValid = false
    } else {
        // isValid = true
        empNameErr.style.display = "none"
        empNameErr.innerHTML = "";
    }
    if (!employeeSalary.value) {
        salaryErr.style.display = "inline"
        salaryErr.innerHTML = "<br>*Employee Salary is Required*"
        isValid = false
    } else if (!(Number.isInteger(Number(employeeSalary.value)) && Number(employeeSalary.value) >= 0 && Number(employeeSalary.value) <= 100000)) {
        salaryErr.style.display = "inline"
        salaryErr.innerHTML = "<br>*Please Enter the vaild Salary.*"
        isValid = false
    } else {
        // isValid = true
        salaryErr.style.display = "none"
    }
    if (!empJoiningDate.value) {
        joiningdateErr.style.display = "inline"
        joiningdateErr.innerHTML = "<br>*Employee joining date is required*<br>"
        isValid = false
    } else if (inputDate > currentDate) {
        // isValid = true
        joiningdateErr.style.display = "inline"
        joiningdateErr.innerHTML += "<br>*don't enter future dates*"
        isValid = false
    } else {
        // isValid = true
        joiningdateErr.style.display = "none"
        joiningdateErr.innerHTML = '';
    }
    return isValid;
}

function handleNameChange() {
    empNameErr.style.display = "none"
}
function handleSalaryChange() {
    salaryErr.style.display = "none"
}
function handleDateChange() {
    joiningdateErr.style.display = "none"
}

const handleSearchSort = () => {
    // console.log("search..")
    const search = searchField.value;
    const searchData = employeeData.filter((v) => v.empName.toLowerCase().includes(search.toLowerCase()) ||
        v.empJoiningDate.includes(search) ||
        v.empSalary.toString().includes(search)
    )
    // console.log(searchData)
    getTable(searchData)
    const selectedSortValue = sort.value
    if (selectedSortValue !== '--Select Sort--'){
        let sortedArr;
        if (selectedSortValue === 'az') {
            sortedArr = searchData.toSorted((a, b) => a.empName.localeCompare(b.empName));
        } else if (selectedSortValue === 'za') {
            sortedArr = searchData.toSorted((a, b) => a.empName.localeCompare(b.empName)).toReversed();
        } else if (selectedSortValue === 'lh') {
            sortedArr = searchData.toSorted((a, b) => a.empSalary - b.empSalary)
        } else if (selectedSortValue === 'hl') {
            sortedArr = searchData.toSorted((a, b) => b.empSalary - a.empSalary)
        } else {
            sortedArr = new Array(...searchData);
        }
        getTable(sortedArr);
    }
    
}

const handleSortChange = () => {
    const selectedSortValue = sort.value
    let sortedArr;
    if(selectedSortValue === 'az'){
        sortedArr = employeeData.toSorted((a, b) => a.empName.localeCompare(b.empName));
    } else if(selectedSortValue === 'za'){
        sortedArr = employeeData.toSorted((a, b) => a.empName.localeCompare(b.empName)).toReversed();
    } else if(selectedSortValue === 'lh'){
        sortedArr = employeeData.toSorted((a, b) => a.empSalary - b.empSalary)
    } else if(selectedSortValue === 'hl'){
        sortedArr = employeeData.toSorted((a , b) => b.empSalary - a.empSalary)
    } else {
        sortedArr = new Array(...employeeData);
    }
    getTable(sortedArr);
}