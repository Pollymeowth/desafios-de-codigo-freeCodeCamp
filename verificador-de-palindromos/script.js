let inputText = document.getElementById("text-input");
let checkBtn = document.getElementById("check-btn");
let result = document.getElementById("result");

function isPalidrome(input) {
  let string = input.toLowerCase();
  let regexInput = /[^a-z0-9]/g;
  let clearString = string.replace(regexInput, "")

  let newString = clearString.split("").reverse().join("");
  if (newString === clearString) {
    return `${input} is a palindrome`
  }
  else {
    return `${input} is not a palindrome`
  }

}

checkBtn.addEventListener("click", () => {
  if (inputText.value === "") {
    alert("Please input a value");
    return
  }
  result.textContent = isPalidrome(inputText.value)
})