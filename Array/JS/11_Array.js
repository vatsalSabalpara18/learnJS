document.write("Splitting an array into two arrays based on a condition.<br>");

const arr = [100, 475, 85, 84, 94, 68 , "67", "bvsbd", "vbusb", 67, "vaysal", "vacddk", "bskbv", 46, 86];
const arr1 = [], arr2 = [];

document.write("The original array is " + arr);

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
        arr1.push(arr[i]);
    } else {
        arr2.push(arr[i]);
    }
} 

document.write("<br> The number array is "+ arr1);
document.write("<br> The string array is "+ arr2);
