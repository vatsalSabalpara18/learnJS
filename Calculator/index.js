const field = document.getElementById("field");
const buttons = document.querySelectorAll("button");
let operatorFlag = true;
let decimalFlag = false;
function handleValidation(){
    
}

function handleClear(){
    field.value = '';
}

function handleBackSpace(){
    let fieldVal = field.value;
    field.value = fieldVal.slice(0, -1);
}

function handlePositiveNagative(){
    let fieldVal = parseFloat(field.value);
    field.value = -fieldVal;
}

function handleOperation(){
    let fieldVal = field.value;
    let lastChar = fieldVal.charAt(fieldVal.length - 1);
    // if (lastChar === "+") {
    //     operatorFlag = false
    // } else if(lastChar === "-"){
    //     operatorFlag = false
    // } else if(lastChar === "/"){
    //     operatorFlag = false
    // } else if(lastChar === "X"){
    //     operatorFlag = false
    // } else {
    //     operatorFlag = true
    // }

    if(lastChar === '+' || lastChar === '-' || lastChar === 'X' || lastChar === '/'){
        field.value = fieldVal.slice(0, -1);
    }
    if (fieldVal === '') {
        operatorFlag =false 
    }else if(lastChar === event.target.innerHTML){
        operatorFlag =false 
    } else {
        operatorFlag = true
    }
    if(operatorFlag){
        field.value += event.target.innerHTML;
    }
    decimalFlag = true;
}

function handleNumber(){
    field.value += event.target.innerHTML;
}

function handleDecimal(){
    let fieldVal = field.value;
    let index;
    if (fieldVal.includes('+')) {
        index = fieldVal.indexOf('+') 
    } else if (fieldVal.includes('-')){
        index = fieldVal.indexOf('-') 
    } else if (fieldVal.includes('/')){
        index = fieldVal.indexOf('/') 
    } else if (fieldVal.includes('X')){
        index = fieldVal.indexOf('X') 
    } else {
       index = -1; 
    }
    if(fieldVal === ''){
        // field.value = fieldVal.concat('0.');
        decimalFlag = true;
    } else if(!fieldVal.includes('.') || !fieldVal.includes('.', index)){
        decimalFlag = true;
    } else {
        decimalFlag = false;
    }
    decimalFlag ? field.value = fieldVal.concat('.') : '';
}

function handleEqual(){
    let fieldVal = field.value;
    // let index = fieldVal.indexOf('X')
    // console.log(index);
    let evaluation = fieldVal.replace("X", "*")
    field.value = eval(evaluation);
}