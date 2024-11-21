// mouse events

// onclick event Handler
function handleClick(){
    console.log("Hello");
}

// onmouseover event Handler
function handleOver(){
    console.log("Hello MouseOver!");
}

// onmouseout event Handler
function handleOut(){
    console.log("Hello MouseOut!");
}

// onmousedown event Handler
function handledown(){
    console.log("Hello MouseDown!");
}

// onmouseup event Handler
function handleUp(){
    console.log("Hello MousePUp!");
}

// onmousemove event Handler
function handleMove(){
    console.log("Hello MouseMove!");
}

// keyboard events

// onkeydown event Handler
function handleKeyDown(){
    console.log("Hello Keydown!");
    console.log(document.getElementById("name").value);
}

// onkeyup event Handler
function handleKeyUp(){
    console.log("Hello KeyUp!");
    console.log(document.getElementById("age").value);
}

// form events

//onfocus event Handler
function handleFocus(){
    console.log("handleFocus!");
    document.getElementById("name").style.backgroundColor = 'blue';
}

//onblur event Handler
function handleBlur(){
    console.log("handleBlur");
    document.getElementById("name").style.backgroundColor = 'white';
}

// onsubmit event Handler
function handleSubmit(){
    event.preventDefault();
    console.log('handleSumit!');
}

// onchange event Handler
function handleChange(){
    console.log("handleChange!");
    let country = document.getElementById("country").value;
    console.log(country);
}

// window events

//onload event handler
function onLoadEvent(){
    console.log("Load Event!");
}

//onunload event handler
function onUnLoadEvent(){
    console.log("UnLoad Event!");
}

//onresize event handler
function onResizeEvent(){
    console.log("resize Event!");
    console.log("hight, width",window.innerHeight, window.innerWidth);
}

window.onload = onLoadEvent;
window.onunload = onUnLoadEvent;
window.onresize = onResizeEvent;