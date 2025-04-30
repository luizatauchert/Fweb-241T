let input = document.querySelector("#inputText");
let textValue = '';

function addNumber(number){
    textValue += number;
    updateText();
}

function addOperator(operator){
    textValue += operator;
    updateText();
}

function addDecimal(){
    textValue += '.';
    updateText();
}

function clearText(){
    textValue = '';
    updateText();
}

function updateText(){
    input.value = textValue;
}

function calculate(){
    try {
        textValue = eval(textValue).toString();  // Ensure the result is a string
        updateText();
    } catch (e) {
        textValue = 'Error';
        updateText();
    }
}