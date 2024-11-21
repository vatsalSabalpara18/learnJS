document.write("Creating a new array with the elements of the original array in reverse order, without modifying the original array.<br>");

const originalArr = ["bvks","ddf","ddfea","egsgs", "sgsds"];
const newArr = [];

for (let i = 0; i < originalArr.length; i++) {
    newArr.push(originalArr[originalArr.length - i - 1]);
}

document.write("The original Array: ", originalArr);
document.write("<br>The reversed Array: ", newArr);
