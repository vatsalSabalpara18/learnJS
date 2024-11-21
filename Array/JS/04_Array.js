document.writeln("Sorting an array in descending order.<br>");

const arr = [23, 45, 67, -100, 89, -7, 45, 67];
let max = 0;

document.writeln("The array order is ", arr);
// another method is using sort method
// arr.sort((a, b) => b - a);

for (let i = 0; i < arr.length ; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) {
     if(arr[j] < arr[j + 1]){
       let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
     }           
    }
}
document.write("<br><br>");
document.write("The sorting array in descending order ", arr);