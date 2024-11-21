const food = document.getElementsByName('food');
const fries = document.getElementsByName('Fries');
const coldDrinks = document.getElementsByName('coldDrinks');
const selColdDrinks = document.getElementById('selColdDrinks');
const selCountity = document.getElementById('selCountity');
const selectedFries = document.getElementById('selFries');
const displayFood = document.getElementById('displayFood');
const displayFries = document.getElementById('displayFries');
const displayColdDrinks = document.getElementById('displayColdDrinks');
const coupon = document.getElementById('coupon');
const totalDiscount = document.getElementById('totalDiscount');
const finalPrice = document.getElementById('finalPrice');
const totaPrice = document.getElementById("totaPrice");
const coupCode = document.getElementById('coupCode');
const foodItem = document.getElementById('foodItem');
const coldrinksItem = document.getElementById('coldrinksItem');
const friesItem = document.getElementById('friesItem');
const finalBill = document.getElementById('finalBill');

function orderFood(){
    event.preventDefault();
    if (!handleVaildation()) return ;
    let foodPrice, foodName, totalPrice = 0;
    let selectedFriesQan = parseInt(selectedFries.value);
    let selectedColdDrinkQan = parseInt(selCountity.value);
    
    for (let i = 0; i < food.length; i++) {
        if(food[i].checked){
            foodPrice = parseInt(food[i].value);
            foodName = food[i]?.id;
            // displayFood.innerHTML = foodName + ": "+ foodPrice + ' X ' + '1 ' + "=" +(foodPrice) + " ₹" + '<br>';
            foodItem.innerHTML = `<td>${foodName}</td>`;
            foodItem.innerHTML +=`<td>${foodPrice}</td>`
            foodItem.innerHTML += `<td>1</td>`
            foodItem.innerHTML += `<td>${foodPrice}</td>`
            totalPrice += foodPrice;
        }
    }
    if (fries[0]?.checked && (selectedFries.value != "--Select Countity--")){
        let friesPrice = parseInt(fries[0]?.value);
        // displayFries.innerHTML = 'Fries: ' + friesPrice + ' X ' + selectedFriesQan + " = "+ (friesPrice * selectedFriesQan) + " ₹" + "<br>";
        totalPrice += (friesPrice * selectedFriesQan);
        friesItem.innerHTML = `<td>Fries</td>`
        friesItem.innerHTML += `<td>${friesPrice}</td>`
        friesItem.innerHTML += `<td>${selectedFriesQan}</td>`;
        friesItem.innerHTML += `<td>${friesPrice * selectedFriesQan}</td>`;
    } else {
        friesItem ? friesItem.remove() : '';
        // displayFries.innerHTML = '';
    }
    if (coldDrinks[0]?.checked && selColdDrinks.value != "--Select ColdDrinks--" && selCountity.value != "--Select Countity--"){
        let price;
        if (selColdDrinks.value == 'Coca Cola') {
            price = 50;
        } else if (selColdDrinks.value == 'Pepsi'){
            price = 45;
        } else if(selColdDrinks.value == 'Sosyo'){
            price = 35;
        }
        // displayColdDrinks.innerHTML = 'Cold Drinks: ' + selColdDrinks.value + " " + price + ' X ' + selectedColdDrinkQan + ' = ' + (price * selectedColdDrinkQan) + " ₹" + "<br>";
        coldrinksItem.innerHTML = `<td>${selColdDrinks.value}</td>`
        coldrinksItem.innerHTML += `<td>${price}</td>`
        coldrinksItem.innerHTML += `<td>${selectedColdDrinkQan}</td>`
        coldrinksItem.innerHTML += `<td>${price * selectedColdDrinkQan}</td>`
        totalPrice += (price * selectedColdDrinkQan);
        totaPrice.innerHTML = `<td colspan="3" >total Price</td>`
        totaPrice.innerHTML += `<td>${totalPrice}</td>`
    } else {
        coldDrinks ? coldDrinks.remove() : '';
        // displayColdDrinks.innerHTML = '';
    }
    if (coupon.value == '') {
        totaPrice ? totaPrice.remove() : '';
        // totalDiscount.innerHTML = 'You did not enter any coupon codes. <br>';
    } else {
        if (coupon.value == "Flat40") {
            // totalDiscount.innerHTML = 'Copoun Code: Flat40 Gives ' + '40% of ' + totalPrice + ' is' + (totalPrice * 0.04) + ' ₹' + "<br>";
            totalPrice = totalPrice - totalPrice * 0.4;
            coupCode.innerHTML = `<td colspan = "3">Applied discount is 40% of your total Price</td>`;
            coupCode.innerHTML += `<td>${totalPrice * 0.04}</td>`
        } else if (coupon.value == 'Flat20') {
            // totalDiscount.innerHTML = 'Copoun Code: Flat20 Gives ' + '20% of ' + totalPrice + ' is' + (totalPrice * 0.02) + ' ₹' + "<br>";
            totalPrice = totalPrice - totalPrice * 0.2;
            coupCode.innerHTML = `<td colspan = "3">Applied discount is 20% of your total Price</td>`;
            coupCode.innerHTML += `<td>${totalPrice * 0.02}</td>`;
        } else {
            // totalDiscount.innerHTML = ' Entered coupon code is wrong. <br>';
            coupCode ? coupCode.remove() : '';
            totaPrice ? totaPrice.remove() : ''; 
        }
    }
    finalBill.innerHTML = `<td colspan = "3">Pay Ammount</td>`;
    finalBill.innerHTML += `<td>${totalPrice}</td>`;
    // finalPrice.innerHTML = 'Total Price of your food is ' + totalPrice + " ₹";
}

function handleVaildation(){
    const friesError = document.getElementById("friesError");
    const coldDrinksError = document.getElementById("coldDrinksError");
    const couponCodeError = document.getElementById("couponCodeError");

    let isVaild = true;

    if (fries[0]?.checked && (selectedFries.value === "--Select Countity--")){
        friesError.innerHTML = "Please select fries quantity";
        isVaild = false;
    } else {
        isVaild = true;
        friesError ? friesError.remove() : '';
    }
    if (coldDrinks[0]?.checked){
        if (selColdDrinks.value == "--Select ColdDrinks--"){
            coldDrinksError.innerHTML = "Please select cold Drinks. <br>"
            isVaild = false;
        } else {
            isVaild = true;
            coldDrinksError.innerHTML = '';
        }
        if (selCountity.value == "--Select Countity--"){
            coldDrinksError.innerHTML += "Please select cold drinks quantity."
            isVaild = false;
        } else {
            isVaild = true;
            // coldDrinksError ? coldDrinksError.remove() : '';
        }
    } else {
        isVaild = true;
        coldDrinksError ? coldDrinksError.remove() : '';
    }
    if (coupon.value == "Flat20" || coupon.value == "Flat40"){
        isVaild = true;
        couponCodeError ? couponCodeError.remove() : '';
    } else {
        couponCodeError.innerHTML = "Please enter right code."
        isVaild = false;
    }

    return isVaild;
}