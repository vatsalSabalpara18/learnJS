const cityForm = document.getElementById("cityForm");
const city = document.getElementById("city");
const disp = document.getElementById("disp");

const handleSubmit = () => {
    event.preventDefault();
    const randomNo = Math.floor(Math.random() * 1000);
    const buttonEle = document.createElement("button");
    buttonEle.setAttribute("onclick", `handleDelete(${randomNo})`)
    buttonEle.textContent = 'X';
    const spanELe = document.createElement("span");
    spanELe.textContent = city.value;
    const divEle = document.createElement("div");
    divEle.setAttribute('id', 'city-' + randomNo);
    divEle.appendChild(spanELe)
    divEle.appendChild(buttonEle)
    disp.appendChild(divEle);
}

const handleDelete = (randomNo) => {
    const divRef = document.getElementById("city-" + randomNo);
    divRef.remove();
}

cityForm.addEventListener("submit", function(){
    handleSubmit()
})