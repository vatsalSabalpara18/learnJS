const name = document.getElementById("name")
const age = document.getElementById("age")
const submit = document.getElementById("submit")
const tableBody = document.getElementById("tableBody")
const nameErr = document.getElementById("nameErr")
const ageErr = document.getElementById("ageErr")
const url = "http://localhost:3000/users"
// const userData = [];
let update = null;

const handleValidation = () => {
    let isVaild = true
    const nameRegex = /^[a-zA-Z ]{2,30}$/;
    if (name.value) {
        if (nameRegex.test(name.value)) {
            nameErr.innerHTML = ""
        } else {
            nameErr.innerHTML = "Please Enter Vaild Name!"
            isVaild = false
        }
    } else {
        nameErr.innerHTML = "Please Enter your Name!"
        isVaild = false
    }

    if (age.value) {
        if (isNaN(age.value)) {
            ageErr.innerHTML = "Please Enter Vaild Age!"
            isVaild = false
        } else {
            if (parseInt(age.value) > 100) {
                ageErr.innerHTML = "Please Enter Vaild Age!"
                isVaild = false
            } else {
                ageErr.innerHTML = ""
            }
        }
    } else {
        ageErr.innerHTML = "Please Enter Your Age!"
        isVaild = false
    }

    return isVaild
}

const getTable = async () => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Erro in getting user data: ", response.statusText)
        }
        const data = await response.json()
        // if (!userData.length) {
        //     userData.push(...data)
        // }

        tableBody.innerHTML = data.map((v) => {
            return `
            <tr>
                <td>${v.name}</td>
                <td>${v.age}</td>
                <td>
                    <button onclick="handleEdit('${v.id}','${v.name}','${v.age}')">Edit</button>
                    <button onclick="handleDelete('${v.id}')">Delete</button>
                </td>
            </tr>
        `
        }).join("")

    } catch (error) {
        console.log(error)
    }

}

const handleSubmit = async () => {
    try {
        let isVaild = handleValidation()
        if (!isVaild) return
        const dataObj = {
            name: name.value,
            age: parseInt(age.value)
        }
        if (update || submit.value === "Update") {
            const response = await fetch(`${url}/${update}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataObj)
            })
            if (!response.ok) {
                throw new Error("Erron in update user data: ", response.statusText)
            }
            const data = await response.json()
            console.log(data)
            update = null
        } else {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataObj)
            })
            if (!response.ok) {
                throw new Error("Erron in add user data: ", response.statusText)
            }
            console.log(data)
        }

    } catch (error) {
        console.log(error.message)
    }
}

const handleDelete = async (id) => {
    try {
        const response = await fetch(`${url}/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(null)
        })
        if (!response.ok) {
            throw new Error("Erron in delete use data: ", response.statusText);
        }
    } catch (error) {
        console.log(error)
    }
}

const handleEdit = (id, nameEdit, ageEdit) => {
    name.value = nameEdit
    age.value = ageEdit
    submit.value = "Update"
    update = id
}
window.onload = function () {
    getTable()
}

