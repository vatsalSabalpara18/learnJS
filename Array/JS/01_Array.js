document.writeln(" Finding the maximum element in an array.<br>");

const arr = [-9, -3, 0 , 34 ,-39];
let max = 0;
// another method for find max numbe in array is 
 max = Math.max(...arr);
 
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] >= max) {
//         max = arr[i]
//     }   
// }
document.writeln("The array is ", arr);
document.write("<br>");
document.write("The maximum number in array is ",max);