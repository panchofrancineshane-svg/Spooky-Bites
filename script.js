const restaurantName = "Spooky Bites";
let isOpen = true;


let customerName = "";
let mealPrice = 0;
let quantity = 0;
let total = 0;
let meal = "";

const price = {
    "Spider Pizza": 150,
    "Pumpkin Pasta": 180,
    "Ghost Burger": 120
};

const discount = 0.1;

const status = document.getElementById("status");
const result = document.getElementById("result");

function displayStatus() {
    status.textContent = isOpen
        ? "We are OPEN"
        : "We are CLOSED!";
}

function toggleStatus() {
    isOpen = !isOpen;
    displayStatus();
}

displayStatus();







function placeOrder() {
    customerName = document.getElementById("customer").value;
    meal = document.getElementById("meal").value;
    quantity = parseInt(document.getElementById("quantity").value);

    if (!customerName) {
        result.textContent = "Please enter your name.";
        return;
    }

    if (!Number.isInteger(quantity) || quantity < 1) {
        result.textContent = "Please enter a valid quantity (at least 1).";
        return;
    }

    if (!isOpen) {
        result.textContent = "Sorry! The restaurant is currently closed. Please try again later.";
        return;
    }

    mealPrice = price[meal];
    total = mealPrice * quantity;

    if (total > 300) {
        total -= total * discount;
    }

    confirmOrder();
}

function showMenuMessage() {
    alert("Welcome to " + restaurantName + "! Choose your spooky meal.");
}


function confirmOrder() {
    document.getElementById("confirmMessage").textContent = "Confirm your order of " + quantity + " " + meal + "(s) for a total of ₱" + total + "?";

    document.getElementById("confirmPopup").style.display = "flex";
}

function confirmBtn() {

    document.getElementById("confirmPopup").style.display = "none";

    if (total >= 300) {
        document.getElementById("result").textContent = "Thank you, " + customerName + "! Meal: " + meal + " | Quantity: " + quantity + " | Original Total: ₱" + (mealPrice * quantity) + " | Final Total: ₱" + total +  " | Recommendation: Try Our Halloween Combo Meal!";
    } else {
        document.getElementById("result").textContent = "Thank you, " + customerName + "! Meal: " + meal + " | Quantity: " + quantity + " | Original Total: ₱" + (mealPrice * quantity) + " | Final Total: ₱" + total + " | Recommendation: Add Another Spooky Treat!";
    }}   


function cancelBtn() {
    document.getElementById("confirmPopup").style.display = "none";
}





document.getElementById("orderBtn").addEventListener("click", placeOrder);
document.querySelector('a[href="#menu"]').addEventListener("click", showMenuMessage);



function showGreeting() {
    const customerName = document.getElementById("customer").value;
    document.getElementById("greetingMessage").textContent = "🦇 Hello, " + customerName + "🧛! Have a spooky evening at " + restaurantName + "! 👻👻";
    document.getElementById("halloweenGif").src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnB0bWE5NHN1cmp1ajVscTY5cGdybjRna2Q0M2k1ZGh3OXhmdjd3biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/14xzPQjU62JPbi/giphy.gif";
    document.getElementById("greetingPopup").style.display = "flex";

}

function closeGreeting() {
    document.getElementById("greetingPopup").style.display = "none";
}       


