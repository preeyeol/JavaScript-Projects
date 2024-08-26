


let num1Input = document.querySelector("#input1");
let num2Input = document.querySelector("#input2");

const calculateBtn = document.querySelector("#calculate");

const resetButton = document.querySelector("#reset");

function calc() {
  let num1Value = parseInt(num1Input.value);
  let num2Value = parseInt(num2Input.value);
  let operator = document.getElementById("select").value;

  if (isNaN(num1Value) || isNaN(num2Value) || !operator) {
    console.log("invalid");
  } else {
    let calculate;
    if (operator == "add") {
      calculate = num1Value + num2Value;
    } else if (operator == "min") {
      calculate = num1Value - num2Value;
    } else if (operator == "mul") {
      calculate = num1Value * num2Value;
    } else if (operator == "div") {
      calculate = num1Value / num2Value;
    }
    document.getElementById("result").innerHTML = calculate;
  }
}

function resetBtn() {
  var r = (document.getElementById("result").innerHTML = "");

  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";

  document.getElementById("operator").value = "undefined";
}

calculateBtn.addEventListener("click", calc);

resetButton.addEventListener("click", resetBtn);