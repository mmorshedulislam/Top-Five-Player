// get input value
function getInputValueById(inputId) {
  const inputField = document.getElementById(inputId).value;
  const inputValue = parseInt(inputField);
  return inputValue;
}

// get innerText with number
function getInnerTextById(elementId) {
  const element = document.getElementById(elementId).innerText;
  const elementValue = parseInt(element);
  return elementValue;
}

// get innerText
function getInnerText(elementId) {
  const element = document.getElementById(elementId).innerText;
  return element;
}

// set input value
function setInputValueById(inputId, result) {
  const inputField = (document.getElementById(inputId).value = result);
}

// set innerText
function setInnerTextById(elementId, result) {
  const element = (document.getElementById(elementId).innerText = result);
}
