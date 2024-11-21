class Budget {
    constructor() {
        this.budget = document.getElementById("budgetAmt")
    }
    handleBudget() {
        event.preventDefault()
        if (this.budget.value) {
            if (isNaN(this.budget.value)) {
                document.getElementById("budgetErr").innerHTML = "Please Enter Vaild Budget"
            } else {
                if (parseInt(this.budget.value) > 0) {
                    document.getElementById("budgetErr").innerHTML = ""
                    localStorage.setItem('budget', this.budget.value)
                    this.handleData()
                    this.budget.value = ''
                } else {
                    document.getElementById("budgetErr").innerHTML = "Please Enter Vaild Budget"
                }
            }
        } else {
            document.getElementById("budgetErr").innerHTML = "Please Enter Your Budget."
        }
    }
    handleData() {
        let expense;
        let balance;
        let localExp = JSON.parse(localStorage.getItem('expense'))
        let budget = JSON.parse(localStorage.getItem('budget'))
        if (!budget) {
            budget = 0;
        }
        if (localExp) {
            expense = localExp.reduce((acc, ele) => acc + parseInt(ele.amount), 0)
        } else {
            expense = 0;
        }
        if (budget || expense) {
            balance = parseInt(budget) - expense
        } else {
            balance = 0
        }
        document.getElementById("budgetAMT").innerHTML = budget || 0
        document.getElementById("ExpenseAMT").innerHTML = expense || 0
        document.getElementById("BalanceAMT").innerHTML = balance || 0
    }
}

class Expense extends Budget {
    constructor() {
        super()
        this.expenseName = document.getElementById("expenseName")
        this.expenseAmt = document.getElementById("expenseAmt")
        this.expenseBtn = document.getElementById("expense-submit")
        this.updateIndex = null
    }

    handleDisplayExp(expense_obj) {
        // debugger
        const expenseTableBody = document.getElementById("ExpenseTableBody");
        const trEle = document.createElement("tr")
        trEle.setAttribute("id", "expense-" + expense_obj.id);

        const tdExp_title = document.createElement("td")
        tdExp_title.textContent = expense_obj.name; //v.name
        trEle.appendChild(tdExp_title)

        const tdExp_amt = document.createElement("td")
        tdExp_amt.textContent = expense_obj.amount; //v.amount 
        trEle.appendChild(tdExp_amt)

        const tdExp_action = document.createElement("td")

        const btnEdit = document.createElement("button")

        btnEdit.addEventListener("click", () => {
            this.handleEdit(expense_obj.id)
        })
        btnEdit.textContent = 'Edit'
        tdExp_action.appendChild(btnEdit)

        const btnDelete = document.createElement("button")
        btnDelete.textContent = 'Delete'
        btnDelete.addEventListener("click", () => {
            this.handleDelete(expense_obj.id)
        })
        tdExp_action.appendChild(btnDelete)

        trEle.appendChild(tdExp_action)

        expenseTableBody.appendChild(trEle)

    }

    handleDelete(id) {
        const localExp = JSON.parse(localStorage.getItem("expense"))
        const deleteIndex = localExp.findIndex((v) => v.id === id)
        localExp.splice(deleteIndex, 1);
        localStorage.setItem("expense", JSON.stringify(localExp));
        const expense_row = document.getElementById("expense-" + id)
        expense_row.remove();
        this.handleData()
    }
    handleEdit(id) {
        const localExp = JSON.parse(localStorage.getItem("expense"))
        const updateData = localExp.find((v) => v.id === id)
        this.expenseName.value = updateData?.name
        this.expenseAmt.value = updateData?.amount
        this.updateIndex = id
        this.expenseBtn.value = "Update Expense"

    }

    handleShowAllExp() {
        const localExp = JSON.parse(localStorage.getItem("expense"))
        localExp?.forEach((v) => {
            this.handleDisplayExp(v)
        })
    }
    handleExpense() {
        event.preventDefault()
        let flag = true;
        // debugger
        if (this.expenseName.value) {
            document.getElementById("expenseNameErr").innerHTML = ''
        } else {
            document.getElementById("expenseNameErr").innerHTML = "Please Enter Expense Name."
            flag = false
        }
        if (this.expenseAmt.value) {
            if (isNaN(this.expenseAmt.value)) {
                document.getElementById("expenseAmtErr").innerHTML = "Please Enter Vaild Expense Amount"
                flag = false
            } else {
                if (parseInt(this.expenseAmt.value) > 0) {
                    document.getElementById("expenseAmtErr").innerHTML = ""
                } else {
                    document.getElementById("expenseAmtErr").innerHTML = "Please Enter Vaild Expense Amount"
                    flag = false
                }
            }
        } else {
            document.getElementById("expenseAmtErr").innerHTML = "Please Enter Your Expense Amount."
            flag = false
        }
        let expArr = []
        if (flag) {
            const obj = {
                id: Math.floor(Math.random() * 100000),
                name: this.expenseName.value,
                amount: parseInt(this.expenseAmt.value)
            }
            let localExp = JSON.parse(localStorage.getItem("expense"));
            if (this.updateIndex && this.expenseBtn.value === "Update Expense") {
                // debugger
                const updateIndex = localExp.findIndex((v) => v.id === this.updateIndex)
                localExp[updateIndex] = obj
                localStorage.setItem("expense", JSON.stringify(localExp))
                const parent_tr_ele = document.getElementById("expense-" + this.updateIndex)
                parent_tr_ele.childNodes[0].textContent = this.expenseName.value
                parent_tr_ele.childNodes[1].textContent = this.expenseAmt.value
            } else {
                if (localExp) {
                    localExp.push(obj)
                    localStorage.setItem("expense", JSON.stringify(localExp))
                } else {
                    localStorage.setItem("expense", JSON.stringify([obj]))
                }
                this.handleDisplayExp(obj)
            }

            expArr.push(obj)
            this.updateIndex = null
            this.handleData()
            this.expenseName.value = ''
            this.expenseAmt.value = ''
            this.expenseBtn.value = "Add Expense"
        }
    }
}

const b = new Budget()
const e = new Expense()

const budgetForm = document.getElementById("budget-form");
budgetForm.addEventListener("submit", function () {
    b.handleBudget()
})

const expenseForm = document.getElementById("expense-form");
expenseForm.addEventListener("submit", function () {
    e.handleExpense()
})

window.onload = () => {
    e.handleShowAllExp()
    e.handleData()
}