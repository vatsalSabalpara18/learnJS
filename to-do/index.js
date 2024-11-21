const todo = document.getElementById('todo');
const tablebody = document.getElementById('tablebody');
const submit = document.getElementById('submit');
// const table = document.getElementById('table');
const disTodo = document.getElementById('disTodo');
const todoErr = document.getElementById("todoErr");
const todoArr = [];
let index = 0;

function handleSubmit() {
    event.preventDefault();
    // let isValid = ;
    if (!handleVaildation()) return;
    if (index == 0 && submit.value === "Add todo") {
        todoArr.push(todo.value);
    } else {
        todoArr.splice(index, 1, todo.value);
    }
    todo.value = '';
    submit.value = "Add todo";
    getTable();
    console.log(todoArr);
}
// console.log(todoArr);
{/* <tr>
    <td>${idx + 1}</td>
    <td>${ele}</td>
    <td>
        <input type="button" value="Edit" onclick="handleEdit(${idx})">
            <input type="button" value="Delete" onclick="handleDelete(${idx})">
            </td>
        </tr> */ }
// 
function getTable() {
    let point = '';
    todoArr.forEach((ele, idx) => {
        point += `
        <div class="disTodo">
        <span>${idx + 1} ${ele} 
        <div class="buttongp">
            <input type="button" id="edit" value="Edit" onclick="handleEdit(${idx})">
            <input type="button" id="delete" value="Delete" onclick="handleDelete(${idx})">
        </div>
        </span>
        </div>`
    })
    disTodo.innerHTML = point;
}

function handleEdit(idx) {
    index = idx;
    todo.value = todoArr[idx];
    submit.value = "update todo";
}

function handleDelete(idx) {
    todoArr.splice(idx, 1);
    getTable();
}

function handleVaildation(){
    let specialCharacterFormat = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    let isVaild = true
    if(todo.value === ''){
        todoErr.innerHTML = "<br>*Please Enter Your To-Do*";
        isVaild = false
        todoErr.style.display = "inline"
    } else if(specialCharacterFormat.test(todo.value)){
        todoErr.innerHTML += "<br>*Please Not enter any special Charecater*"
        isVaild = false;
        todoErr.style.display = "inline"
    } else {
        todoErr.style.display = "none"
        todoErr.innerHTML = '';
    }
    return isVaild;
}