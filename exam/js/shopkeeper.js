const product = document.discountForm.product
const discount = document.discountForm.discount
const tableBody = document.getElementById('tableBody')
const submit = document.getElementById('submit')
const productErr = document.getElementById('productErr')
const discountErr = document.getElementById('discountErr')

const productData = [];
let updateIndex = null;

function assignSerialNo() {
    if (productData.length) {
        return productData[productData.length - 1]?.sr_no + 1;
    } else {
        return 1
    }
}

const handleReset = () => {
    product.value = '0'
    discount.value = ''
    submit.value = 'Add Product'
    updateIndex = null
}

const handleSubmit = () => {
    event.preventDefault()
    let isVaild = handleVailidation();
    if (!isVaild) return
    const productObj = {
        sr_no: assignSerialNo(),
        product: product.value,
        discount: parseInt(discount.value)
    }
    if (updateIndex !== null && submit.value === "Update Product") {
        productObj.sr_no = productData[updateIndex]?.sr_no
        productData[updateIndex] = productObj;
    } else {
        productData.push(productObj)
    }
    getTable()
    handleReset()
}

const getTable = () => {
    const table = productData.map((v) => {
        return `
            <tr>
                <td>${v.sr_no}</td>
                <td>${v.product}</td>
                <td>${v.discount}</td>
                <td>
                    <input type="button" id="edit" value="Edit" onclick="handleEdit(${v.sr_no})">
                    <input type="button" id="delete" value="Delete" onclick="handleDelete(${v.sr_no})">
                </td>
            </tr>
        `
    })
    tableBody.innerHTML = table.join("")
}

const handleEdit = (sr_no) => {
    const updateProductIndex = productData.findIndex((v) => v.sr_no === sr_no);
    product.value = productData[updateProductIndex]?.product
    discount.value = productData[updateProductIndex]?.discount
    updateIndex = updateProductIndex;
    submit.value = "Update Product"
}

const handleDelete = (sr_no) => {
    const deleteProductIndex = productData.findIndex((v) => v.sr_no === sr_no)
    productData.splice(deleteProductIndex, 1);
    getTable()
    handleReset()
}

const handleVailidation = () => {
    let isAvailable = false
    productData.forEach((v) => {
        if (Object.values(v).includes(product.value)) {
            isAvailable = true
        }

        if (updateIndex !== null && productData[updateIndex].product === product.value) {
            console.log(productData[updateIndex].product, product.value)
            isAvailable = false
        }
    })
    let isVaild = true
    if (product.value === '0') {
        productErr.innerHTML = "Please Select Product"
        isVaild = false
    } else if (isAvailable) {
        console.log("Hello from is AVailabel")
        productErr.innerHTML = "This Product is already listed in discount table"
        isVaild = false
    } else {
        productErr.innerHTML = ''
    }
    if (!discount.value || parseInt(discount.value) <= 0) {
        discountErr.innerHTML = "Please give the discount greater Than 0"
        isVaild = false
    } else if (parseInt(discount.value) > 100) {
        discountErr.innerHTML = "Please give the discount under 100"
        isVaild = false
    } else {
        discountErr.innerHTML = ""
    }

    return isVaild;
}
