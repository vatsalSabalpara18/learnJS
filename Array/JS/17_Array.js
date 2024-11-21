document.write("Finding the index of the first occurrence of an element in an array.<br>");

const arr = [23,56,745,32,52,5,2,356,47,85,32];
const findElement = 32;
let indexofEle;

// using findIndex method
// const indexofEle = arr.findIndex((ele) => ele === 23);

// using different method

for (let i = 0; i < arr.length; i++) {
    if(findElement === arr[i]){
        indexofEle = i;
        break;
    }
}

document.write("The array is " + arr);
document.write("<br>The first occurence of " + findElement + " 's index is " + indexofEle); 