const sal = parseInt(prompt("Please Enter the Salary"));
let gender = prompt("Enter your gender");
let bonus = 0;

if(sal < 10000 ){
    if(gender === 'M' || gender === 'Male'){
        bonus = sal * 0.02;
        gender = 'Male';
    } else if(gender === 'F' || gender === 'Female'){
        bonus = sal * 0.03;
        gender = 'Female';
    } else {
        alert("Enter Proper gender");
    }
    
}

document.getElementById("gender").innerHTML = gender;
document.getElementById("sal").innerHTML = sal;
document.getElementById("bonus").innerHTML = bonus;

console.log("Your bonus is:", bonus);