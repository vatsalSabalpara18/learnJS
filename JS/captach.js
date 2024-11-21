const display = document.getElementById("display");
const num = document.getElementById("num");

const randomNumber1 = Math.floor(Math.random() * 10);
const randomNumber2 = Math.floor(Math.random() * 10);
display.innerHTML = randomNumber1 + '+' + randomNumber2 + ' =';

function handleCaptacha(){
    if(num.value == (randomNumber1 + randomNumber2)){
        alert("Correct Captcha!");
    } else {
        alert("Incorrect Captcha!");
    }
}

