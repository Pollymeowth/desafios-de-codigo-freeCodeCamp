const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");

const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

function getFlags() {
  let flags = "";
  if (caseInsensitiveFlag.checked) flags += "i";
  if (globalFlag.checked) flags += "g";
  return flags;
}

testButton.addEventListener("click", () => {
  const pattern = regexPattern.value;
  const flags = getFlags();
  const testString = stringToTest.textContent;

  const regex = new RegExp(pattern, flags);

  const matches = testString.match(regex);

  if (!matches) {
    testResult.textContent = "no match";
    stringToTest.innerHTML = testString;
    return;
  }

  testResult.textContent = matches.join(", ");

  const highlighted = testString.replace(regex, (match) => {
    return `<span class="highlight">${match}</span>`;
  });

  stringToTest.innerHTML = highlighted;
});