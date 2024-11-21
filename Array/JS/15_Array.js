document.write("Finding the median of an array.<br>");

const arr = [13,53,45,2,6234,552,4645,2,32,3,156,34,53];
const arr1 = arr.toSorted((a , b) => a - b);
console.log(arr1);
document.write("The given array is " + arr);
document.write("<br>");
if(arr1.length % 2 === 0){
    document.write("The give array median is " + arr1[(arr1.length / 2) - 1] + " or "+ arr1[arr1.length / 2]);
} else {
    document.write("The give array median is " + arr1[((arr1.length  + 1 )/ 2) - 1]);
}