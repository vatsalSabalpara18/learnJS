document.write("Checking if an array is sorted in descending order.<br>");

const arr = [3, 5, 7, 78, 80, 100];
const arr1 = arr.toReversed();
let isInDescending = true;

document.write("The array is " + arr1 + "<br>");

for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] - arr1[i + 1] < 0) {
        isInDescending = false;
        break
    }
}
if (isInDescending) {
    document.write("The array is sorted in descending order.");
} else {
    document.write("The array is not sorted in descending order.");
}