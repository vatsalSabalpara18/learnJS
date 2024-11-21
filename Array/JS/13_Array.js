document.write("Finding the second largest element in an array.<br>");

const arr = [12, 34, 56, 467, 6234, 574, 234, 45, 32];

document.write("The original array is " + arr);
const arr1 = arr.toSorted((a, b) => a - b);

document.write("<br> The second largest element array is " + arr1[arr1.length - 2]); 
