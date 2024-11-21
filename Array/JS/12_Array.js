document.write("Rotating an array by a given number of positions.<br>");

const arr = [100, 475, 85, 84, 94, 68, "67", "bvsbd", "vbusb", 67, "vaysal", "vacddk", "bskbv", 46, 86];
const arr1 = [...arr];
const numberPosition = 15;

document.write("The original array is " + arr);

if (numberPosition != arr1.length) {
    for (let i = 0; i < numberPosition; i++) {
        arr1.push(arr1.shift());
    }
    console.log("Heloo");
}


document.write("<br> The Rotated an array is " + arr1);
