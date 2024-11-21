document.writeln("Checking if an array contains a specific element<br>");

const array = [1, 2, 3, 4, 5];
const checkPresenence = 3;
let isPresent = false;

document.writeln("The array is ", array);
// another method is using includes() method
// if(array.includes(checkPresenence)){
//     document.writeln("<br> the element " + checkPresenence + " is presenct in the array <br>");
// } else {
//     document.writeln("<br> the element " + checkPresenence + " is not presenct in the array <br>");
// }

for (let i = 0; i < array.length; i++) {
    if(checkPresenence === array[i]){
        isPresent = true;
        break;
    }
}

if (isPresent) {
    document.writeln("<br> the element " + checkPresenence + " is present in the array <br>");
} else {
    document.writeln("<br> the element " + checkPresenence + " is not present in the array <br>");
}
// document.write("<br><br>");
// document.write("The array is order reversed ", arr);