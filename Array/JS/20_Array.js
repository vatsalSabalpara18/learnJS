document.write("Finding the index of the last occurrence of an element in an array.<br>");

const arr = [23, 56, 745, 32];
const findElement = 32;
const newElement = 45;
const resArray = [];

// using map method
// const resArray = arr.map((ele) => (ele !== findElement ? ele : newElement));

// using different method
for (let i = 0; i < arr.length; i++) {
    if (findElement !== arr[i]) {
        resArray.push(arr[i])
    } else {
        resArray.push(newElement);
    }
}

document.write("The array is " + arr);
document.write("<br>The array removed " + findElement + " after the removeing element " + resArray);

