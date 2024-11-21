document.write("Finding the k-th smallest element in an array.<br>")

const arr = [45,78,325,8535,734,4673,74,774,4345,673,3452,73,754];
const arr1 = arr.toSorted((a , b) => a - b);
const k = 4;
document.write("The array is " + arr);
document.write("<br>The "+ k +"-th smallest element is " + arr1[k - 1]);


