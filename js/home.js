"use strict";

/**
 * How to add money to the current balance?
 * Below is the algorithm of the problem
 * 1. Add an event handler function to the add money button
 * 2. Check if the pin match, if true, add the amount to the current balance
 * 3. Get the amount value
 * 4. Clear the Input field
 * 5. Update the textContent of the current Balance label
 *
 */

// Elements of add money
const currentBalanceField = document.querySelector("#current-balance");

const addMoneyAmount = document.querySelector("#add-money-amount");
const addMoneyPin = document.querySelector("#add-amount-pin");
const btnAddMoneyAction = document.querySelector("#add-money-btn");
const btnAddMoney = document.querySelector("#btn-add-money");
const addMoneyForm = document.querySelector("#add-money-form");

// Elements of cash out
const cashOutAmount = document.querySelector("#cashout-amount");
const cashOutPin = document.querySelector("#cashout-pin");
const btnCashOutAction = document.querySelector("#cashout-btn-action");
const btnCashOut = document.querySelector("#cashout-btn");
const cashOutForm = document.querySelector("#cashout-form");

// Current Balance
let currentBalance = 15000;
// User PIN
const pin = 2222;

// Update the current balance text content
currentBalanceField.textContent = currentBalance;

// Show the add money form after clicking to the add money button
btnAddMoney.addEventListener("click", function () {
  // Focus on add money input
  addMoneyForm.classList.remove("hidden");
  cashOutForm.classList.add("hidden");
  addMoneyAmount.focus();
});

// Show the cash out form after clicking to the cash out button
btnCashOut.addEventListener("click", function () {
  cashOutForm.classList.remove("hidden");
  addMoneyForm.classList.add("hidden");
  cashOutAmount.focus();
});

// console.log(currentBalanceField, addMoneyAmount, btnAddMoneyAction, addMoneyPin);

// step-1: Add an event handler function to the add money button
btnAddMoneyAction.addEventListener("click", handleAddMoney);

// Add Money Handler
function handleAddMoney(e) {
  // Prevent the default behavior
  e.preventDefault();

  // step-3: Get the amount value
  //   const amount = +addMoneyAmount.value;
  const amount = parseFloat(addMoneyAmount.value);

  //  step-2: Check if the pin match, if true, add the amount value to the current balance
  if (pin === +addMoneyPin.value) {
    // Update the current balance with input amount
    currentBalance += amount;

    // Step-5: Update the text content of the current balance
    currentBalanceField.textContent = currentBalance;
  } else {
    return alert("Wrong Pin");
  }
  //   step-4: Clear the Input field
  addMoneyAmount.value = "";
  addMoneyPin.value = "";
}

btnCashOutAction.addEventListener("click", function (e) {
  e.preventDefault();
  const cashOutAmountValue = parseFloat(cashOutAmount.value);

  if (pin === +cashOutPin.value) {
    currentBalance -= cashOutAmountValue;
    currentBalanceField.textContent = currentBalance;
  } else {
    return alert("Wrong Pin");
  }

  cashOutAmount.value = "";
  cashOutPin.value = "";
});
