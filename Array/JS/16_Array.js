document.write("Checking if two arrays are equal or not.<br>");

const arr1 = [12, 34, 55, 56, 66, 443, 23];
const arr2 = [12, 34, 55, 56, 66, 443, 23];
let isEqual = true;

document.write("The first array is " + arr1)
document.write("<br>The second array is " + arr2)

if( arr1.length === arr2.length ){
    for (let i = 0; i < arr1.length; i++) {
        if(arr1[i] !== arr2[i])  {
            isEqual = false;
            break;
        }
    }
} else {
    isEqual = false;
}

document.write("<br>");
if(isEqual){
    document.write("two arrays are equal");
} else {
    document.write("two arrays are not equal");
}