class Person {
  constructor() {
    this.name = document.getElementById("stdName");
    this.education = document.getElementById("stdEducation");
  }
}

class Student extends Person {
  // static stdName = ;
  // static stdCoures = ;
  // static stdFees = ;
  // static stdEducation = ;
  // static stdTableBody = ;
  // static reminderTableBody = ;
  // static studentData = new Array();
  constructor() {
    super();
    // this.roll_no = this.assignRoll_No();
    this.coures = document.getElementById("stdCoures");
    // this.couresFees = 
    // this.addmissionDate = 
    // this.feesReminderDate = reminderDate.toLocaleDateString("en-GB");
    this.isActive = true;
  }
  assignRoll_No() {
    if (studentData.length) {
      return studentData[studentData.length - 1]?.roll_no + 1;
    } else {
      return 101;
    }
  }

  handleChange() {
    if (document.getElementById("stdCoures").value === "Full Stack") {
      document.getElementById("stdFees").value = "75000";
      return "75000";
    } else if (document.getElementById("stdCoures").value === "UI/UX") {
      document.getElementById("stdFees").value = "25000";
      return "25000";
    } else if (document.getElementById("stdCoures").value === "React") {
      document.getElementById("stdFees").value = "50000";
      return "50000";
    } else if (document.getElementById("stdCoures").value === "Node") {
      document.getElementById("stdFees").value = "50000";
      return "50000";
    } else {
      document.getElementById("stdFees").value = "";
      return "";
    }
  }

  handleSubmit() {
    const randomDate = new Date();
    const randomNumber = Math.floor(Math.random() * 30);
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
      couresFees: parseInt(this.handleChange()),
      addmissionDate: randomDate.toLocaleDateString("en-GB"),
      feesReminderDate: reminderDate.toLocaleDateString("en-GB"),
      isActive: this.isActive
    }
    studentData.push(stdObj)
    localStorage.setItem('studentData', JSON.stringify(studentData))
    this.getTable();
    // this.handleReset();
  }

  getTable() {
    document.getElementById("stdTableBody").innerHTML = studentData
      .map((v) => {
        return `
            <tr id="${v.roll_no}" name="${v.roll_no}" style="background-color: ${v.isActive ? 'white' : 'red'} ;">
                <td>${v.roll_no}</td>
                <td>${v.name}</td>
                <td>${v.coures}</td>
                <td>${v.couresFees}</td>
                <td>${v.education}</td>
                <td>
                    <input type="button" name="disable" onclick="(new Student()).handleDisable(${v.roll_no})" value = "${v.isActive ? "Disable" : "Enable"}">
                </td>
            </tr>
        `;
      })
      .join("");
  }

  handleDisable(roll_no) {
    // let toggleColor
    // const roll_noEle = document.getElementById(`${roll_no}`);
    // const disable = document.getElementsByName('disable');
    const index = studentData.findIndex((v) => v.roll_no === roll_no);
    studentData[index].isActive = !studentData[index].isActive;
    // Student.studentData[index].isActive ? disable[index].value = "Disable" : disable[index].value = "Enable";
    // Student.studentData[index].isActive ? toggleColor = "white" : toggleColor = "red";
    // roll_noEle.style.backgroundColor = toggleColor;
    localStorage.setItem('studentData', JSON.stringify(Student.studentData));
    this.getTable()
  }

  handleReset() {
    document.getElementById("stdName").value = ''
    document.getElementById("stdCoures").value = '--Select Coures--'
    document.getElementById("stdFees").value = ''
    document.getElementById("stdEducation").value = ''
  }

  getFeesReminder() {
    document.getElementById("reminderTableBody").innerHTML = studentData.filter((v) => v.isActive).filter((v) => parseInt(v.addmissionDate.split('/')[1]) + 1 == v.feesReminderDate.split('/')[1]).map((v) => {
      return `
        <tr>
          <td>${v.roll_no}</td>
          <td>${v.name}</td>
          <td>${v.couresFees}</td>
          <td>${v.feesReminderDate}</td>
          <td>
            <form onsubmit = "(new Student()).handleReminderSubmit(${v.roll_no})">
              <input type="number" class="${v.roll_no}payFee" name="payFee"> 
              <input type="submit" value = "PayFees">
            </form>
          </td>
        </tr>
      `
    }).join('')
  }

  handleTableLoad() {
    if (!(studentData.length)) {
      const restoreData = JSON.parse(localStorage.getItem('studentData')) || [];
      restoreData.length ? studentData.push(...restoreData) : '';
      this.getTable()
    }
    this.getFeesReminder()
    setInterval(() => {
      this.getFeesReminder()
    }, 30000)
  }

  handleReminderSubmit(roll_no) {
    const payFee = document.getElementsByClassName(`${roll_no}payFee`);
    const index = studentData.findIndex((v) => v.roll_no === roll_no)
    const modifiedFeesReminderDate = studentData[index].feesReminderDate.split('/').reverse().join("-");
    const changeReminderDate = new Date(modifiedFeesReminderDate);
    if (payFee[0].value && parseInt(payFee[0].value) <= studentData[index].couresFees) {
      studentData[index].couresFees -= parseInt(payFee[0].value)
      if (changeReminderDate.getMonth() + 1 === 12) {
        changeReminderDate.setMonth(0)
        changeReminderDate.setFullYear(changeReminderDate.getFullYear() + 1)
      } else {
        changeReminderDate.setMonth(changeReminderDate.getMonth() + 1)
      }
      studentData[index].feesReminderDate = changeReminderDate.toLocaleDateString('en-GB');
      localStorage.setItem('studentData', JSON.stringify(studentData));
    }
    this.getTable();
    this.getFeesReminder()
  }

}
// const stdName = 
// const stdEducation = ; 
// const stdCoures = 
const studentData = [];

// console.log((new Student()).handleChange(), (new Student()).handleSubmit())

// function handleSubmit() {

// }
const student = new Student();

function handleSubmit() {
  event.preventDefault();
  console.log(student)
  student.handleSubmit()
}

const handleChange = () => {
  // const student = new Student();
  console.log(student)
  student.handleChange()
}

window.onload = () => {
  // const student = new Student();
  console.log(student)
  student.handleTableLoad()
}
