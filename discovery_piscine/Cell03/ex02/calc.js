
const leftInput = document.getElementById('left');
const rightInput = document.getElementById('right');
const operatorS = document.getElementById('operator');
const btn = document.getElementById('try-me');

btn.addEventListener('click', () => {
    const leftValue = leftInput.value;
    const rightValue = rightInput.value;
    const operator = operatorS.value;

    if (leftValue === '' || rightValue === '' || isNaN(leftValue) || isNaN(rightValue) || leftValue.includes('.') || rightValue.includes('.') || leftValue.includes('-') || rightValue.includes('-')) {
        alert('Error :(');
        return;
    }

    const left = parseInt(leftValue, 10);
    const right = parseInt(rightValue, 10);
    let result;

    if (operator === '+') {
        result = left + right;
    } else if (operator === '-') {
        result = left - right;
    } else if (operator === '*') {
        result = left * right;
    } else if (operator === '/') {
        if (right === 0) {
            alert("It's over 9000!");
            return;
        }
        result = left / right;
    } else if (operator === '%') {
        if (right === 0) {
            alert("It's over 9000!");
            return;
        }
        result = left % right;
    } else {
        alert('Error :(');
        return;
    }

    alert(result);
    console.log(result);
});

setInterval(() => {
    alert('Please, use me...');
}, 30000);
