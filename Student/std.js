class Coures {
    constructor() {
        this.coures = document.getElementById("stdCoures")
        this.couresFees = document.getElementById("stdFees")
    }

    handleChange() {
        if (this.coures.value === "Full Stack") {
            this.couresFees.value = "75000";
        } else if (this.coures.value === "UI/UX") {
            this.couresFees.value = "25000";
        } else if (this.coures.value === "React") {
            this.couresFees.value = "50000";
        } else if (this.coures.value === "Node") {
            this.couresFees.value = "50000";
        } else {
            this.couresFees.value = "";
        }
    }

    getFeesReminder(feesReminder_obj) {
        const reminderTableBody = document.getElementById("reminderTableBody")

        const trEle = document.createElement("tr")
        trEle.setAttribute("id", "reminder-" + feesReminder_obj.roll_no)

        const roll_no_td = document.createElement("td")
        roll_no_td.textContent = feesReminder_obj.roll_no
        trEle.appendChild(roll_no_td)

        const name_td = document.createElement("td")
        name_td.textContent = feesReminder_obj.name
        trEle.appendChild(name_td)

        const couresFees_td = document.createElement("td")
        couresFees_td.textContent = feesReminder_obj.couresFees
        trEle.appendChild(couresFees_td)

        const feesReminderDate_td = document.createElement("td")
        feesReminderDate_td.textContent = feesReminder_obj.feesReminderDate
        trEle.appendChild(feesReminderDate_td)

        const form_td = document.createElement("td")

        const formEle = document.createElement("form")
        formEle.addEventListener("submit", () => {
            console.log("fees Reminder!", feesReminder_obj.roll_no)
            this.handleReminderSubmit(feesReminder_obj?.roll_no)
        })

        const feesInputEle = document.createElement("input")
        feesInputEle.setAttribute("id", "payFee-" + feesReminder_obj.roll_no)
        feesInputEle.setAttribute("type", "number")
        feesInputEle.setAttribute("name", "payFee")
        formEle.appendChild(feesInputEle)

        const submit_btn = document.createElement("input")
        submit_btn.setAttribute("type", "submit")
        submit_btn.setAttribute("value", "Pay Fees")
        formEle.appendChild(submit_btn)

        form_td.appendChild(formEle)

        trEle.appendChild(form_td)

        reminderTableBody.appendChild(trEle)

    }

    handleReminderSubmit(roll_no) {
        event.preventDefault()
        const localStudent = JSON.parse(localStorage.getItem("studentData"))
        const payFee = document.getElementById("payFee-" + roll_no)
        const index = localStudent?.findIndex((v) => v.roll_no === roll_no)
        const modifiedFeesReminderDate = localStudent[index].feesReminderDate.split('/').reverse().join("-");
        const changeReminderDate = new Date(modifiedFeesReminderDate);
        if (payFee.value && parseInt(payFee.value) <= localStudent[index].couresFees) {
            localStudent[index].couresFees -= parseInt(payFee.value)
            if (changeReminderDate.getMonth() + 1 === 12) {
                changeReminderDate.setMonth(0)
                changeReminderDate.setFullYear(changeReminderDate.getFullYear() + 1)
            } else {
                changeReminderDate.setMonth(changeReminderDate.getMonth() + 1)
            }
            localStudent[index].feesReminderDate = changeReminderDate.toLocaleDateString('en-GB');
            localStorage.setItem('studentData', JSON.stringify(localStudent));
        }
        const parent_tr = document.getElementById("std-" + roll_no);
        const reminder_tr = document.getElementById("reminder-" + roll_no);
        parent_tr.childNodes[3].textContent = localStudent[index]?.couresFees
        reminder_tr.remove();
    }

    displayReminderTabel() {
        const localStudent = JSON.parse(localStorage.getItem("studentData"))
        localStudent.filter((v) => v.isActive)
            .filter((v) => {
                const currentDate = new Date();
                const currMonth = currentDate.getMonth() + 2;
                if (currMonth <= v.feesReminderDate.split('/')[1]) {
                    return true
                } else {
                    return false
                }
            })
        .forEach((v) => {
            // this.getFeesReminder(v)
            const trRef = document.getElementById("reminder-" + v.roll_no)
            if(trRef){
                trRef.childNodes[0].textContent = v.roll_no
                trRef.childNodes[1].textContent = v.name
                trRef.childNodes[2].textContent = v.couresFees
                trRef.childNodes[3].textContent = v.feesReminderDate
            }
        })
    }
}

class Student extends Coures {
    constructor() {
        super()
        this.name = document.getElementById("stdName")
        this.education = document.getElementById("stdEducation")
        this.isActive = true
    }
    assignRoll_No() {
        const localStudent = JSON.parse(localStorage.getItem("studentData"))
        if (localStudent?.length || localStudent) {
            return localStudent[localStudent.length - 1]?.roll_no + 1;
        } else {
            return 101;
        }
    }

    handleSubmit() {
        event.preventDefault()
        const randomDate = new Date();
        const randomNumber = Math.floor(Math.random() * 30);
        let localStudent = JSON.parse(localStorage.getItem("studentData"));
        randomDate.setDate(randomNumber)
        const reminderDate = new Date(randomDate);
        let reminderMonth = reminderDate.getMonth() + 1;
        if (reminderMonth === 12) {
            reminderMonth = 0
            reminderDate.setFullYear(reminderDate.getFullYear() + 1)
        }
        reminderDate.setMonth(reminderMonth);
        if (reminderDate.getDate() > 15) {
            reminderDate.setDate(16)
        } else {
            reminderDate.setDate(1)
        }
        const stdObj = {
            roll_no: this.assignRoll_No(),
            name: this.name.value,
            education: this.education.value,
            coures: this.coures.value,
            couresFees: parseInt(this.couresFees.value),
            addmissionDate: randomDate.toLocaleDateString("en-GB"),
            feesReminderDate: reminderDate.toLocaleDateString("en-GB"),
            isActive: this.isActive
        }

        if (localStudent) {
            localStudent.push(stdObj)
            localStorage.setItem("studentData", JSON.stringify(localStudent))
        } else {
            localStorage.setItem("studentData", JSON.stringify([stdObj]))
        }
        this.getTable(stdObj);
        this.handleReset();
    }

    getTable(std_obj) {
        const stdTableBody = document.getElementById("stdTableBody");

        const trEle = document.createElement("tr");
        trEle.setAttribute("id", "std-" + std_obj.roll_no)
        trEle.style.backgroundColor = std_obj.isActive ? 'white' : 'red'

        const roll_no_td = document.createElement("td");
        roll_no_td.textContent = std_obj.roll_no
        trEle.appendChild(roll_no_td)

        const name_td = document.createElement("td");
        name_td.textContent = std_obj.name
        trEle.appendChild(name_td)

        const coures_td = document.createElement("td");
        coures_td.textContent = std_obj.coures
        trEle.appendChild(coures_td)

        const couresFees_td = document.createElement("td");
        couresFees_td.textContent = std_obj.couresFees
        trEle.appendChild(couresFees_td)

        const education_td = document.createElement("td");
        education_td.textContent = std_obj.education
        trEle.appendChild(education_td)

        const disable_btn_td = document.createElement("td");
        const disable_btn = document.createElement("button")
        disable_btn.textContent = std_obj.isActive ? "Disable" : "Enable"
        disable_btn.addEventListener("click", () => {
            this.handleDisable(std_obj.roll_no)
        })
        disable_btn_td.appendChild(disable_btn)
        trEle.appendChild(disable_btn_td)
        stdTableBody.appendChild(trEle);
    }

    handleReset() {
        this.name.value = ''
        this.coures.value = '--Select Coures--'
        this.couresFees.value = ''
        this.education.value = ''
    }

    handleDisable(roll_no) {
        console.log(roll_no)
        const localStudent = JSON.parse(localStorage.getItem("studentData"));
        const index = localStudent?.findIndex((v) => v.roll_no === roll_no);
        localStudent[index].isActive = !localStudent[index].isActive;
        const parent_tr = document.getElementById("std-" + roll_no)
        parent_tr.style.backgroundColor = localStudent[index].isActive ? 'white' : 'red'
        parent_tr.childNodes[5].childNodes[0].textContent = localStudent[index].isActive ? "Disable" : "Enable"
        localStorage.setItem('studentData', JSON.stringify(localStudent));
    }
}

const coures = new Coures();
const student = new Student();

const stdForm = document.getElementById("stdForm")
stdForm.addEventListener("submit", function () {
    student.handleSubmit()
})

const stdCoures = document.getElementById("stdCoures");
stdCoures.addEventListener("change", function () {
    coures.handleChange()
})

window.onload = function () {
    const localStudent = JSON.parse(localStorage.getItem("studentData")) || []
    localStudent.forEach((v) => {
        student.getTable(v)
    });
    
    // coures.displayReminderTabel()
    localStudent?.filter((v) => v.isActive)
    .filter((v) => {
        const currentDate = new Date();
        const currMonth = currentDate.getMonth() + 2;
        if(currMonth == v.feesReminderDate.split('/')[1]){
            return true
        } else {
            return false
        }
    })
    .forEach((v) => {
       coures.getFeesReminder(v)
    })

    setInterval(() => {
       coures.displayReminderTabel()
    }, 3000)
}