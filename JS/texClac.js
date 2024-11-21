const salary = parseInt(prompt("Enter Your Salary: "));
let texCalc, s1 = s2 = s3 = s4 = s5 = s6 = 0;
const tempValue = 300000;

 s1 = 0;
 s2 = tempValue * 0.05;
 s3 = tempValue * 0.1;
 s4 = tempValue * 0.15;
 s5 = tempValue * 0.20;
 s6 = (salary - 1500000) * 0.30;

if (salary <= 300000) {
    texCalc = 0;
} else if (salary > 300000 && salary <= 600000) {
    s2 = (salary - 300000) * 0.05;
    s3 = 0; s4 = 0; s5 = 0; s6 = 0;
} else if ( salary > 600000 && salary <= 900000) {
    s3 = (salary - 600000)* 0.1;
    s4 = 0; s5 = 0; s6 = 0; 
} else if (salary > 900000 && salary <= 1200000) {
    s4 = (salary - 900000)* 0.15;
    s5 = 0; s6 = 0;
} else if (salary > 1200000 && salary <= 1500000) {
    s5 = (salary - 1200000) * 0.20;
    s6 = 0;
} else if (salary > 1500000) {
} else {
    console.log("Your Salary Is Incorrect.")
}
texCalc = s1 + s2 + s3 + s4 + s5 + s6;
console.log("Income Tex Slab                   Income Tax Rate     Income Tax on Salary");
if (s1 >= 0) console.log("UP to RS. 3 lakhs                     NIll                     "+ s1);
if (s2 > 0) console.log("Rs.3 lakhs - Rs.6 lakhs                5%                      "+ s2);
if (s3 > 0) console.log("Rs.6 lakhs - Rs.9 lakhs               10%                      "+ s3);
if (s4 > 0) console.log("Rs.9 lakhs - Rs.12 lakhs              15%                      "+ s4);
if (s5 > 0) console.log("Rs.12 lakhs - Rs.15 lakhs             20%                      "+ s5);
if (s6 > 0) console.log("Above Rs.15 lakhs                     30%                      "+ s6);

document.getElementById("s1").innerHTML = s1 + '₹';
document.getElementById("s2").innerHTML = s2 + '₹';
document.getElementById("s3").innerHTML = s3 + '₹'; 
document.getElementById("s4").innerHTML = s4 + '₹';
document.getElementById("s5").innerHTML = s5 + '₹';
document.getElementById("s6").innerHTML = s6 + '₹';

document.getElementById("taxCalc").innerHTML = texCalc + '₹';

console.log("Total income tax on a salary of " + salary + " is " + texCalc + "₹");
console.log("Total Income After Deducting Tax Is " + (salary - texCalc + "₹"));