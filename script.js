const customTip = document.querySelector(".custom-tip");
const inputList = [...document.querySelectorAll(".input")];
const btnInputList = [...document.querySelectorAll(".btn-input")];

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

function tipCalculator(grossBill, contributer, tip) {
  console.log(grossBill, contributer, tip);
}

function tipHandler(billData) {
  let { grossBill, contributer, customTip } = billData;

  if (customTip == "") {
    for (let i = 0; i < btnInputList.length; i++) {
      console.log("empty customTip");
      btnInputList[i].addEventListener("click", (event) => {
        customTip = event.target.value;
      });
      tipCalculator(grossBill, contributer, customTip);
    }
  } else {
    tipCalculator(grossBill, contributer, customTip);
  }
}
