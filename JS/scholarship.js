let fees = parseInt(prompt("Please Enter Your fees:"));
let cgpa = parseFloat(prompt("Please Enter Your CGPA:"));
let caste = prompt("Please Enter Your Caste");

let grade = '', sch = 0;

if(cgpa >= 9 && cgpa <= 10){
    grade = 'A';
} else if(cgpa >= 8.5 && cgpa < 9) {
    grade = 'B';
} else if (cgpa >= 8 && cgpa < 8.5) {
    grade = 'C';
} else if (cgpa >= 7.5 && cgpa < 8) {
    grade = 'D';
} else {
    document.getElementById('sch').innerHTML = "Please Enter Correct CGPA";
}


if(grade == 'A' || grade == 'B') {
   if(caste == 'Open') {
     sch = 0
   } else if(caste == 'OBC') {
    sch = fees * 0.25;
   } else if (caste == 'SC') {
     sch = fees * 0.50;
   } else if (caste == 'ST') {
       sch = fees * 1;
   } else {
       document.getElementById('sch').innerHTML = "Please Enter Proper Caste Name";
   }
}

document.getElementById('sch').innerHTML = "You are getting " + sch + " ₹ Scholarship";