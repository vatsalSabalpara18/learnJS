document.writeln("Reversing an array.<br>");

const arr = [100, 89, 0 , -9, 5, 3];

document.writeln("The array order is ", arr);
// another method is using sort method
// arr.reverse(); 

for (let i = 0; i < arr.length / 2 ; i++) {
    let j = arr.length - i - 1;
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
document.write("<br><br>");
document.write("The array is order reversed ", arr);