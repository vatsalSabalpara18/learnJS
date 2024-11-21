const percentage = document.getElementById("per");
const std = document.getElementById("std");
const rollno = document.getElementById("rollno");
const tableRow = document.getElementById("tableRow");
const rollnoval = document.getElementById("rollnoVal");
const grade = document.getElementById("grade");
const stdVal = document.getElementById("stdVal");
const perVal = document.getElementById("perVal");

function handlePer(){
    event.preventDefault();
    const percentageValue = parseFloat(percentage.value);
    const stdValue = std.value;
    const rollnoValue = rollno.value;

    rollnoval.innerHTML = rollnoValue;
    stdVal.innerHTML = stdValue;
    perVal.innerHTML = percentageValue + '%';

    if(percentageValue >= 91 && percentageValue <= 100){
        grade.innerHTML = 'A';
    } else if (percentageValue >= 81 && percentageValue < 91 ){
        grade.innerHTML = 'B';
    } else if (percentageValue >= 71 && percentageValue < 81){
        grade.innerHTML = 'C';
    } else if (percentageValue >= 61 && percentageValue < 71){
        grade.innerHTML = 'D';
    } else if (percentageValue >= 40 && percentageValue < 61){
        grade.innerHTML = 'E';
    } else {
        grade.innerHTML = 'Failed!';
    }

    percentage.value = '';
    std.value = '';
    rollno.value = '';

}