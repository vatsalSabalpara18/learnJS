document.write("Checking if an array is sorted in ascending order.<br>");

const arr = [3,5,7,78,80,100];
let isInAssending = true;

document.write("The array is " + arr +"<br>");

for (let i = 0; i < arr.length; i++) {
    if(arr[i] - arr[i+1] > 0){
        isInAssending = false;
        break
    }    
}
if(isInAssending){
    document.write("The array is sorted in assending order.");
} else {
    document.write("The array is not sorted in assending order.");
}