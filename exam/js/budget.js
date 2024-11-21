class Budget {
    constructor() {
        this.budget = document.getElementById("budgetAmt");
    }
    handleBudget() {
        event.preventDefault();
        if (this.budget.value) {
            if (isNaN(this.budget.value)) {
                document.getElementById("budgetErr").innerHTML = "Please Enter Vaild Budget!"
            } else {
                if (parseInt(this.budget.value) > 0) {
                    document.getElementById("budgetErr").innerHTML = ""
                    localStorage.setItem("budget", this.budget.value);
                    this.handleData();
                    this.budget.value = ''
                } else {
                    document.getElementById("budgetErr").innerHTML = "Please Enter Positive Number!"
                }
            }
        } else {
            document.getElementById("budgetErr").innerHTML = "Please Enter Your Budget!"
        }
    }
    handleData() {
        const localExp = JSON.parse(localStorage.getItem("expense"))
        let budget = 0, expense = 0, balance = 0
        budget = parseInt(localStorage.getItem("budget")) || 0
        
        if(localExp){
            expense = localExp.reduce((acc, v) => acc + v.amount ,0)
        } else {
            expense = 0
        }

        if(budget && expense){
            balance = budget - expense
        } else {
            balance = 0
        }

        document.getElementById("budgetAMT").innerHTML = budget
        document.getElementById("ExpenseAMT").innerHTML = expense
        document.getElementById("BalanceAMT").innerHTML = balance
    }
}

class Expense extends Budget {
    constructor() {
        super()
        this.expenseName = document.getElementById("expenseName")
        this.expenseAmt = document.getElementById("expenseAmt")
        this.expenseBtn = document.getElementById("expense-submit")
        this.update = null
    }
    handleExpense() {
        event.preventDefault()
        let expesne_flag = true;
        if (this.expenseName.value) {
            document.getElementById("expenseNameErr").innerHTML = ""
        } else {
            document.getElementById("expenseNameErr").innerHTML = "Please Enter Your Expense Name!"
            expesne_flag = false
        }
        if (this.expenseAmt.value) {
            if (isNaN(this.expenseAmt.value)) {
                document.getElementById("expenseAmtErr").innerHTML = "Please Enter Vaild Expense Amount!"
                expesne_flag = false
            } else {
                if (parseInt(this.expenseAmt.value) > 0) {
                    document.getElementById("expenseAmtErr").innerHTML = ""
                } else {
                    document.getElementById("expenseAmtErr").innerHTML = "Please Enter Positive Number!"
                    expesne_flag = false
                }
            }
        } else {
            document.getElementById("expenseAmtErr").innerHTML = "Please Enter Your Expense Amount!"
            expesne_flag = false
        }

        if(expesne_flag){
            const expense_obj = {
                id: Math.floor(Math.random()*10000),
                name: this.expenseName.value,
                amount: parseInt(this.expenseAmt.value)
            }
            const localExp = JSON.parse(localStorage.getItem("expense"))

            if(this.update && this.expenseBtn.value === "Update Expense"){
                const index = localExp?.findIndex((v) => v.id === this.update)
                localExp[index] = expense_obj
                localStorage.setItem("expense", JSON.stringify(localExp))
                const parent_tr = document.getElementById("expense-" + this.update)
                parent_tr.childNodes[0].textContent = this.expenseName.value
                parent_tr.childNodes[1].textContent = this.expenseAmt.value
                this.update = null
            } else {
                if (localExp) {
                    localExp.push(expense_obj);
                    localStorage.setItem("expense", JSON.stringify(localExp))
                } else {
                    localStorage.setItem("expense", JSON.stringify([expense_obj]))
                }
                this.handleDisplayExp(expense_obj);
            }
            
            this.handleData()
            this.expenseName.value = ''
            this.expenseAmt.value = ''
            this.expenseBtn.value = "Add Expense"
        }
    }

    handleDisplayExp(expense_obj){
        const ExpenseTableBody = document.getElementById("ExpenseTableBody")

        const trEle = document.createElement("tr")
        trEle.setAttribute("id", "expense-" + expense_obj.id)

        const expenseName_tdEle = document.createElement("td")
        expenseName_tdEle.textContent = expense_obj.name
        trEle.appendChild(expenseName_tdEle)

        const expenseAmt_tdEle = document.createElement("td")
        expenseAmt_tdEle.textContent = expense_obj.amount
        trEle.appendChild(expenseAmt_tdEle)

        const edit_btn = document.createElement("button");
        edit_btn.textContent = "Edit"
        edit_btn.addEventListener("click", () => {
            this.handleEdit(expense_obj.id)
        })
        trEle.appendChild(edit_btn)

        const delete_btn = document.createElement("button");
        delete_btn.textContent = "Delete"
        delete_btn.addEventListener("click", () => {
            this.handleDelete(expense_obj.id)
        }) 
        trEle.appendChild(delete_btn)

        ExpenseTableBody.appendChild(trEle)

    }

    handleEdit(id){
        const localExp = JSON.parse(localStorage.getItem("expense"))
        const updateData = localExp?.find((v) => v.id === id)
        this.expenseName.value = updateData?.name
        this.expenseAmt.value = updateData?.amount
        this.update = id
        this.expenseBtn.value = "Update Expense"
    }

    handleDelete(id){
        const localExp = JSON.parse(localStorage.getItem("expense"))
        const index = localExp?.findIndex((v) => v.id === id)
        localExp?.splice(index, 1)
        localStorage.setItem("expense",JSON.stringify(localExp))
        const parent_tr = document.getElementById("expense-"+id)
        parent_tr.remove()
        this.handleData()
    }
}

const b = new Budget();
const e = new Expense();

const budget_form = document.getElementById("budget-form");
budget_form.addEventListener("submit", function () {
    b.handleBudget()
})

const expense_form = document.getElementById("expense-form")
expense_form.addEventListener("submit", function(){
    e.handleExpense();
})

window.onload = function (){
    const localExp = JSON.parse(localStorage.getItem("expense"))
    localExp?.forEach((v) => {
        e.handleDisplayExp(v)
    })
    b.handleData()
}