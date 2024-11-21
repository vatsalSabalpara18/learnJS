const treatment = document.getElementById('treatment');
const Ttable = document.getElementById('Ttable');
const dentalAppoinmentForm = document.getElementById('dentalAppoinmentForm');
const distreatment = document.getElementById('distreatment');
const date = document.getElementById('date');
const apponmentTable = document.getElementById('disAppoTable');
const displayAppoinment = document.getElementById('disAppoinment');
let seating, payment;

function handleTreatment(){
    console.log(treatment.value)
    if (treatment.value != '--select Treatment--'){
        Ttable.style.display = 'table'
        dentalAppoinmentForm.style.display = 'inline' 

    }
    if (treatment.value == 'Braces/Invisalign'){
        distreatment.innerHTML = `<td>${treatment.value}</td><td>12</td><td>35000</td>`
        seating = 12; payment = 35000;
    } else if (treatment.value == 'RCT + Cover'){
        distreatment.innerHTML = `<td>${treatment.value}</td><td>6</td><td>12000</td>`
        seating = 6; payment = 12000;
    } else if (treatment.value == 'Root Canal') {
        distreatment.innerHTML = `<td>${treatment.value}</td><td>4</td><td>2500</td>`
        seating = 4; payment = 2500;
    } else if (treatment.value == 'Fillings') {
        distreatment.innerHTML = `<td>${treatment.value}</td><td>2</td><td>1500</td>`
        seating = 2; payment = 1500;
    } else if (treatment.value == 'Teeth Cleanings') {
        distreatment.innerHTML = `<td>${treatment.value}</td><td>1</td><td>500</td>`
        seating = 1; payment = 500;
    }
}

function handleSubmit(){
    event.preventDefault()
    const d = new Date(date.value);
    // console.log(d.getDate());
    // console.log(d);
    if (d != "Invalid Date"){
        apponmentTable.style.display = 'table';
        displayAppoinment.innerHTML = `<tr><td>${treatment.value}</td><td>${d.toLocaleDateString('en-GB')}</td><td>${payment / seating}</td></tr>`
    }
    // d.setDate()
    // console.log(d.toLocaleDateString());
    for (let i = 1; i < seating ; i++) {
        let displayDate = d.getDate() + 7;
        d.setDate(displayDate);
        displayAppoinment.innerHTML += `<tr><td>${treatment.value}</td><td>${d.toLocaleDateString('en-GB')}</td><td>${payment / seating}</td></tr>`
    }
}