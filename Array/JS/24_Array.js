document.write("Finding the first three maximum number's sum an array.<br>");

const arr = [3, 5, 7, 78, 80, 100, 345, 642, 526, 21, 14, 2145, 35, 14, 15, 123, 14];
let isInAssending = true;
let maxSum;

document.write("The array is " + arr + "<br>");

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i -1; j++) {
        
        if (arr[j] < arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
        
    }
}
maxSum = arr[0] + arr[1] + arr[2];
document.write("The array is " + arr + "<br>");
document.write("The first three maximum number's sum is " + maxSum +"<br>"); 

