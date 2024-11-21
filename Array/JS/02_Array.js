document.writeln("Finding the minimum element in an array.<br><br>");

const arr = [20 , 2, -9, 2, 4, 5, -6, -7, 3, 5];
let min = 0;

// another method using min
// min = Math.min(...arr);

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}
document.writeln("The array is ", arr);
document.write("<br><br>");
document.write("The minimum number in array is ", min);