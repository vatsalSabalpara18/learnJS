document.writeln("Finding the sum of all elements in an array.<br>");

const arr = [100, 89, 0, -9, 5, 3];
let sum = 0;

document.writeln("The array is ", arr);
// another method is using reduce method
// const summation = arr.reduce((acc, curr) => acc + curr,0);

for (let i = 0; i < arr.length ; i++) {
    sum += arr[i];
}
document.write("<br><br>");
document.write("The sum of all elements sum is ", sum);