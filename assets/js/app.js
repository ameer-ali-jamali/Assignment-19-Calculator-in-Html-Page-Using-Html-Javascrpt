function appendOperator(operator) {
    document.getElementById('label').value += operator;
}

function clearEntry() {
    let currentLabel = document.getElementById('label').value;
    document.getElementById('label').value = currentLabel.slice(0, -1);
}

function clearAll() {
    document.getElementById('label').value = '';
}

function appendNumber(number) {
    document.getElementById('label').value += number;
}

function appendDecimal() {
    document.getElementById('label').value += '.';
}

function calculate() {
    let expression = document.getElementById('label').value;
    try {
        let result = eval(expression);
        document.getElementById('label').value = result;
    } catch (error) {
        document.getElementById('label').value = 'Error';
    }
}
