document.writeln("Removing duplicates from an array.<br>");

const arr = [100, 89, 0, 0, 2, 3, 2 ,-9, 5, 3];
const object = {};
const resArr = [];

document.writeln("The array is ", arr);
// another method is using set method
// const uniqueArray = [...new Set(arr)];

for (let i = 0; i < arr.length; i++) {
     if(!object[arr[i]]){
        object[arr[i]] = true;
        resArr.push(arr[i])
     }
}
document.write("<br><br>");
document.write("The array without duplicate elements is ", resArr);