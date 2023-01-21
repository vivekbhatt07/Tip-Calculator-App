const customTip = document.querySelector(".custom-tip");
const inputList = [...document.querySelectorAll(".input")];
const btnInputList = [...document.querySelectorAll(".btn-input")];
const tipAmountOutput = document.querySelector(".tip-amount");
const billAmountOutput = document.querySelector(".net-bill");
const resetBtn = document.querySelector(".reset-btn");
const contributerQuantityInput = document.querySelector(
  "#contributer-quantity-input"
);
const grossBillInput = document.querySelector("#gross-bill-input");

const customTipInput = document.querySelector("#custom-tip");
console.log(customTipInput);

const billInfo = { grossBill: "", contributer: "", customTip: "" };

for (let i = 0; i < inputList.length; i++) {
  inputList[i].addEventListener("input", (event) => {
    if (event.target.id == "gross-bill-input") {
      billInfo.grossBill = event.target.value;
    } else if (event.target.id == "contributer-quantity-input") {
      billInfo.contributer = event.target.value;
    } else {
      billInfo.customTip = event.target.value;
    }

    tipHandler(billInfo);
  });
}

for (let i = 0; i < btnInputList.length; i++) {
  btnInputList[i].addEventListener("click", (event) => {
    billInfo.customTip = event.target.value;
  });
}

function outputHandler(tip, bill) {
  if (!(tip == Infinity && bill == Infinity)) {
    tipAmountOutput.textContent = `${tip.toFixed(2)}`;
    billAmountOutput.textContent = `${(bill + tip).toFixed(2)}`;
  }
}

function tipHandler(billInfo) {
  let { grossBill, contributer, customTip } = billInfo;

  if (grossBill > 0 && contributer > 0 && customTip >= 0) {
    const tipAmount = (grossBill * customTip) / 100;
    const individualTip = tipAmount / contributer;
    const individualBill = grossBill / contributer;
    outputHandler(individualTip, individualBill);
  }
}

resetBtn.addEventListener("click", () => {
  contributerQuantityInput.value = "";
  grossBillInput.value = "";
  customTipInput.value = "";
  tipAmountOutput.textContent = "----";
  billAmountOutput.textContent = "----";
});
