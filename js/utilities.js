function getInputValueById(inputId) {
  const inputField = document.getElementById(inputId).value;
  const inputValue = parseInt(inputField);
  return inputValue;
}

function getInnerTextById(elementId) {
  const element = document.getElementById(elementId).innerText;
  const elementValue = parseInt(element);
  return elementValue;
}

function setInputValueById(inputId, result) {
  const inputField = (document.getElementById(inputId).value = result);
}

function setInnerTextById(elementId, result) {
  const element = (document.getElementById(elementId).innerText = result);
}

