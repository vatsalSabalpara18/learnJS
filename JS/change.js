
function handleChange(){
    const countryVal = document.getElementById("country").value;
    if(countryVal == 0){
        document.body.style.backgroundColor = 'white';
    } else if(countryVal == 'In'){
        document.body.style.backgroundColor = 'green';
    } else if(countryVal == 'Ca'){
        document.body.style.backgroundColor = 'red';
    } else if(countryVal == 'uk'){
        document.body.style.backgroundColor = 'blue';
    }
}