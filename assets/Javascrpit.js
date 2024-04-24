const result = document.getElementById("number");

function appendToDisplay(input) {
  result.value += input;
}

function clearDisplay() {
  result.value = "";
}

function calculate() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = "Error";
  }
}

function change(){
  var element = document.body;
  element.classList.toggle("dark-mode")
}
