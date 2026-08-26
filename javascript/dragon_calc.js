//code for dragon calculator
function calculate(operator, ...numbers) {
    let result;

    if (operator === '+') {
        result = numbers.reduce((a, b) => a + b, 0);
    } else if (operator === '-') {
        result = numbers.reduce((a, b) => a - b);
    } else if (operator === '*') {
        result = numbers.reduce((a, b) => a * b, 1);
    } else if (operator === '/') {
        result = numbers.reduce((a, b) => a / b);
    }

    return result;
}



