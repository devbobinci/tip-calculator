const billInput = document.getElementById("bill");
const tipAmount = document.querySelector(".tip-amount");
const billTotal = document.querySelector(".total-amount");
const peopleNumber = document.getElementById("people-number");
const resetBtn = document.querySelector(".reset-btn");

const customTip = document.querySelector(".custom");

const tipSelect = document.querySelectorAll(".percent");

tipSelect.forEach((tip) => {
  tip.addEventListener("click", (e) => {
    if (e.target.value <= "0.1") {
      tipAmount.innerText = "$" + (billInput.value * e.target.value).toFixed(2);
    } else {
      tipAmount.innerText = "$" + (billInput.value * e.target.value).toFixed(2);
    }
  });
});

customTip.addEventListener("input", (e) => {
  if (customTip.value == "") {
    return;
  } else {
    tipAmount.innerText =
      "$" + ((billInput.value * customTip.value) / 100).toFixed(2);
  }
});

peopleNumber.addEventListener("input", () => {
  if (peopleNumber.value === "") {
    billTotal.innerText = "$" + billInput.value;
  } else {
    billTotal.innerText =
      "$" + (billInput.value / peopleNumber.value).toFixed(2);
  }
});

// Reset Button

resetBtn.addEventListener("click", () => {
  billInput.value = "";
  customTip.value = "";
  peopleNumber.value = "";
  tipAmount.textContent = "$0.00";
  billTotal.textContent = "$0.00";
  // tipCalc();
});

// (tipAmount.innerText = "$" + (billInput.value * e.target.value) / 10);
