document.writeln("Finding the average of all elements in an array.<br>");

const arr = [100, 89, 0, -9, 5, 3];
let sum = 0;

document.writeln("The array is ", arr);
// another method is using sort method
// const average = arr.reduce((acc, curr) => acc + curr, 0) / arr.length;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
}
document.write("<br><br>");
document.write("The array is order reversed ", (sum / arr.length).toFixed(2));