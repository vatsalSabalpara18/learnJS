const patientName = document.getElementById("patientName");
const patientPhoneNo = document.getElementById("patientPhoneNo");
const treatment = document.getElementById("treatment");
const appoDate = document.getElementById("appoDate");
const tableBody = document.getElementById("tableBody");
const submit = document.getElementById("submit");
const appoDateErr = document.getElementById("appoDateErr");
const treatmentErr = document.getElementById("treatmentErr");
const patientPhoneNoErr = document.getElementById("patientPhoneNoErr");
const patientNameErr = document.getElementById("patientNameErr");

const patientArr = [];
let updatePatientId;
let payment, seating;

function handleReset() {
    patientName.value = '';
    patientPhoneNo.value = '';
    treatment.value = '--select Treatment--';
    appoDate.value = '';
    submit.value = "Add Patient";
}

function assignId() {
    if (patientArr.length) {
        return patientArr[patientArr.length - 1]?.patientId + 1;
    } else {
        return 101;
    }
}

const handleSubmit = () => {
    event.preventDefault();
    let isValid = handleVaildation();
    if(!isValid) return
    // const modifiedDate = new Date(appoDate.value);
    if (treatment.value == 'Braces/Invisalign') {
        seating = 12; payment = 35000;
    } else if (treatment.value == 'RCT + Cover') {
        seating = 6; payment = 12000;
    } else if (treatment.value == 'Root Canal') {
        seating = 4; payment = 2500;
    } else if (treatment.value == 'Fillings') {
        seating = 2; payment = 1500;
    } else if (treatment.value == 'Teeth Cleanings') {
        seating = 1; payment = 500;
    } else {
        payment = 0, seating = 0;
    }
    const paitent = {
        patientId: assignId(),
        patientName: patientName.value,
        patientPhoneNo: patientPhoneNo.value,
        patientTreatment: treatment.value,
        appoDate: appoDate.value,
        costing: payment
    }
    // modifiedDate.toLocaleDateString('en-GB')
    if (updatePatientId !== undefined && submit.value === "Update Patient"){
        paitent.patientId = updatePatientId;
        const updatePatientIndex = patientArr.findIndex((v) => updatePatientId === v.patientId)
        patientArr.splice(updatePatientIndex, 1, paitent);  
    } else {
        patientArr.push(paitent);
    }
    getTable();
    handleReset();
}

const getTable = () => {
    const table = patientArr.map((v) => {
        const d = new Date(v.appoDate);
        let appoDates = `<div id="Dates"><div>${d.toLocaleDateString('en-GB')}</div>`;
        for (let i = 1; i < seating; i++) {
            let displayDate = d.getDate() + 7;
            d.setDate(displayDate);
            appoDates += `<div>${d.toLocaleDateString('en-GB')}</div>`;
        }
        appoDates += '</div>'
        return `<tr>
        <td>${v.patientId}</td>
        <td>${v.patientName}</td>
        <td>${v.patientPhoneNo}</td>
        <td>${v.patientTreatment}</td>
        <td>${appoDates}</td>
        <td>${v.costing}</td>
        <td>
            <input type="button" id="edit" onclick="handleEdit(${v.patientId})" value="Edit">
            <input type="button" id="delete" onclick="handleDelete(${v.patientId})" value="Delete">
        </td>
        </tr>`
    })
    tableBody.innerHTML = table.join('');
}

const handleEdit = (patientId) => {
    const updatePatient = patientArr.find((v) => v.patientId === patientId);
    const convertDatetoArr = updatePatient?.appoDate.split('/');
    convertDatetoArr.reverse();
    const modifiedDate = convertDatetoArr.join('-');
    patientName.value = updatePatient?.patientName;
    patientPhoneNo.value = updatePatient?.patientPhoneNo
    treatment.value = updatePatient?.patientTreatment
    appoDate.value = modifiedDate;
    submit.value = "Update Patient";
    updatePatientId = patientId;
}

const handleDelete = (patientId) => {
    const deletePatientIndex = patientArr.findIndex((v) => patientId === v.patientId);
    patientArr.splice(deletePatientIndex, 1);
    getTable();
    handleReset();
}

const handleVaildation = () => {
    const currentDate = new Date();
    const futureDate = new Date(appoDate.value);
    const patientFullNameRegex = /^[a-zA-Z]+\s+[a-zA-Z]+$/;
    const patientNameRegex = /^[a-zA-z]+$/;
    const paitentPhoneNoRegex = /^\+\d{2}[- ]\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    let isValid = true;
    if(patientName.value === ''){
        patientNameErr.innerHTML = "*Please Enter Patient Name*"
        patientNameErr.style.display = "inline"
        isValid = false
    } else if(!(patientFullNameRegex.test(patientName.value) || patientNameRegex.test(patientName.value))){
        patientNameErr.innerHTML = "*Please Enter only Alphabets*"
        patientNameErr.style.display = "inline"
        isValid = false
    } else {
        patientNameErr.style.display = "none";
        patientNameErr.innerHTML = '';
    }

    if (Number.isInteger(Number(patientPhoneNo.value)) && patientPhoneNo.value === '') {
        patientPhoneNoErr.innerHTML = "*Please Enter Patient Phone No.*"
        patientPhoneNoErr.style.display = "inline"
        isValid = false
    } else if (!paitentPhoneNoRegex.test(patientPhoneNo.value)) {
        debugger
        patientPhoneNoErr.innerHTML = "*Please Enter phone 10 digit no. with country code*"
        patientPhoneNoErr.style.display = "inline"
        isValid = false
    } else {
        patientPhoneNoErr.style.display = "none";
        patientPhoneNoErr.innerHTML = '';
    }

    if (treatment.value === "--select Treatment--"){
        treatmentErr.innerHTML = "*Please Select Treatment*";
        treatmentErr.style.display = "inline"
        isValid = false
    } else {
        treatmentErr.innerHTML = ''
        treatmentErr.style.display = "none"
    }

    if(appoDate.value === ''){
        appoDateErr.innerHTML = "*Please Enter the Date of Appoinment*"
        appoDateErr.style.display = "inline"
        isValid = false
    } else if(currentDate > futureDate){
        appoDateErr.innerHTML = "*Please Enter future Date only*"
        appoDateErr.style.display = "inline"
        isValid = false
    } else {
        appoDateErr.innerHTML = ""
        appoDateErr.style.display = "none"
        
    }
    return isValid;
}