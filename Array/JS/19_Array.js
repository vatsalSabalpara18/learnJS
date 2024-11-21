document.write("Finding the index of the last occurrence of an element in an array.<br>");

const arr = [23, 56, 745, 32, 52, 5, 2, 356, 47, 85, 32];
const findElement = 32;
const resArray = [];

// using filter method
// const resArray = arr.filter((ele) => ele !== findElement);

// using different method

for (let i = 0; i < arr.length; i++) {
    if (findElement !== arr[i]) {
        resArray.push(arr[i])
    }
}

document.write("The array is " + arr);
document.write("<br>The array removed "+ findElement + " after the removeing element " + resArray);

