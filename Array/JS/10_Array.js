document.writeln("Merging two arrays into a new array.<br>");

const arr1 = [100, 89, 0, -9, 5, 3, 67, 34];
const arr2 = [253,23, 56, 36, 89, 0 ,354, 78];
let arr = []

document.writeln("The first array is ", arr1);
document.writeln("<br>The second array is ", arr2);

// another method is using spraad op method
// arr = [...arr1, ...arr2];

for (let i = 0; i < (arr1.length + arr2.length); i++) {
    if(i < arr1.length){
        arr[i] = arr1[i];  
    } else {
        arr[i] = arr2[i - arr1.length]
    }

}
document.write("<br><br>");
document.write("The merging two arrays into a new array is ", arr);