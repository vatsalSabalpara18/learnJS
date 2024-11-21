function handleSubmit(){
    event.preventDefault();
    console.log("Hello Handle!");
    const processer = document.getElementById("Processor").value;
    const ram = document.getElementById("Ram").value;
    const memory = document.getElementById("Memory").value;
    const graphics = document.getElementById("GC").value;
    let tempTxt;
    let processerPrice, ramPrice, memoryPrice, graphicsPrice, totalPrice;

    if(processer == 'i3'){
        tempTxt = 'Student PC';
    } else if(processer == 'i5'){
        if(ram == '4 GB'){
            tempTxt = 'Student PC';
        } else {
            tempTxt = 'Professional PC';
        }
    } else if(processer == 'i7'){
        if(memory == '256 GB' || ram == '4 GB' || ram == '8 GB' || graphics == 'no'){
            tempTxt = 'Professional PC';
        } else {
            tempTxt = 'Gamming PC';
        }
    }

    if(processer == 'i3'){
        processerPrice = 5000;
    } else if(processer == 'i5'){
        processerPrice = 10000;
    } else if(processer == 'i7'){
        processerPrice = 15000;
    }

    if (ram == '4 GB') {
        ramPrice = 2000;
    } else if (ram == '8 GB') {
        ramPrice = 3000;
    } else if (ram == '12 GB') {
        ramPrice = 5000;
    }

    if (memory == '256 GB') {
        memoryPrice = 3000;
    } else if (memory == '512 GB') {
        memoryPrice = 6000;
    } else if (memory == '1 TB') {
        memoryPrice = 12000;
    }

    if (graphics == 'yes') {
        graphicsPrice = 15000;
    } else if (graphics == 'no') {
        graphicsPrice = 0;
    } 

    totalPrice = processerPrice + ramPrice + memoryPrice + graphicsPrice;
    document.getElementById("pcType").innerHTML = 'PC Type: ' + tempTxt;
    document.getElementById("pcPrice").innerHTML = 'PC Price: ' + totalPrice + " ₹";
}