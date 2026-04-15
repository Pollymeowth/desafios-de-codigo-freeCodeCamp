const textArea = document.getElementById("text-input");
const counter = document.getElementById("char-count");

function updateCounter() {
  let textInput = textArea.value;
  const maxValue = 50;

  if(textInput.length > maxValue){
    textInput = textInput.slice(0,maxValue)
    textArea.value = textInput;
  }

  let textLength = textInput.length;

  counter.textContent = `Character Count: ${textLength}/50`

  if(textLength >= maxValue){
    counter.style.color = 'red'
  }else{
    counter.style.color = 'black'

  }
  
}

textArea.addEventListener("input", updateCounter);