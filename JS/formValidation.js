const name = document.contactForm.name
const email= document.contactForm.email
const mobile = document.contactForm.mobile
const country = document.contactForm.country
const gender = document.contactForm.gender
const hobbies = document.contactForm.hobbies

const nameErr = document.getElementById("nameErr")
const emailErr = document.getElementById("emailErr")
const mobileErr = document.getElementById("mobileErr")
const countryErr = document.getElementById("countryErr")
const genderErr = document.getElementById("genderErr")
const hobbyErr = document.getElementById("hobbyErr")
const validateForm = () =>{
    let isValid = true;
    let hobbyCounter = 0;
    if(name.value){
        const nameRegex = /^[a-zA-Z ]{2,30}$/
        if(nameRegex.test(name.value)){
            nameErr.innerHTML = ""
        } else {
            nameErr.innerHTML = "Please Enter Vaild Name"
            isValid = false
        }
        
    } else {
        nameErr.innerHTML = "Please Enter Your Name"
        isValid = false
    }
    if(email.value){
        const emailRegex = /^\S+@\S+\.\S+$/
        if(emailRegex.test(email.value)){
            emailErr.innerHTML = ""
        } else {
            emailErr.innerHTML = "Please Enter Vaild Email"
            isValid = false
        }

    } else {
        emailErr.innerHTML = "Please Enter Your Email"
        isValid = false
    }
    if(mobile.value){
        if(isNaN(mobile.value)){
            mobileErr.innerHTML = "Please Enter Valid Mobile Number"
            isValid = false
        } else {
            if (parseInt(mobile.value) > 0){
                if (mobile.value.length === 10) {
                    mobileErr.innerHTML = ""
                } else {
                    mobileErr.innerHTML = "Mobile Number Must Be 10 Digit"
                    isValid = false
                }
            } else {
                mobileErr.innerHTML = "Mobile Number Must Be Positive"
                isValid = false
            }
        }
    } else {
        mobileErr.innerHTML = "Please Enter Your Mobile No."
        isValid = false
    }

    if(country.value !== "0"){
        countryErr.innerHTML = ""
    } else {
        countryErr.innerHTML = "Please Select Your Country"
        isValid = false
    }
    if(gender.value){
        genderErr.innerHTML = ""
    } else {
        genderErr.innerHTML = "Please Select Your Gender"
        isValid = false
    }
    for (let i = 0; i < hobbies.length; i++) {
        if (hobbies[i].checked) hobbyCounter++
    }
    if(hobbyCounter >= 2){
        hobbyErr.innerHTML = ""
    } else {
        hobbyErr.innerHTML = "Please Select hobby atleast 2"
        isValid = false
    }

    return isValid;
}