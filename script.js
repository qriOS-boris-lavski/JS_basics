const firstNum = +prompt("Put the first number");
const secondNum = +prompt("Put the second number");
// const colors = {};
const results = [];

function calculation() {
    if (firstNum === '' || secondNum === '') {
        alert('Error, you need to put something to run');
    } else if (Number(firstNum) == firstNum && Number(secondNum) == secondNum){
        sum(firstNum, secondNum);
        subtraction(firstNum, secondNum);
        multiplication(firstNum, secondNum);
        division(firstNum, secondNum);
    } else {
        alert('You need to put number, nothing else')
    }
}

calculation()

function sum(a, b) {
    let result = Number(a) + Number(b);
    results.push(result);
    showResult('Sum', result);
}

function subtraction(a, b) {
    let result = Number(a) - Number(b);
    if (a < b) {
        if (confirm('Are you sure you want to run this operation?')){
            results.push(result);
            showResult('Subtraction', result);
        } else {
            return
        }
    } else {
        results.push(result);
        showResult('Subtraction', result);
    }
}

function multiplication(a, b) {
    let result = Number(a) * Number(b);
    results.push(result);
    showResult('Multiplication', result);
}

function division(a, b) {
    let result;
    if (b === 0) {
        result = `Error, you can't devide on 0`;
    } else {
        result = Number(a) / Number(b);
    }
    results.push(result);
    showResult('Division', result);
}
console.log(results)
function showResult(operation, result) {
    let resultBlock = document.createElement("h2");
    if (result === "Error, you can't devide on 0") {
        resultBlock.style.color = "#9a560e";
    } else if (result < 0) {
        resultBlock.style.color = "#cc0000";
    } else {
        resultBlock.style.color = "#1e6400";
    }
    const phrase = `${operation}: ${result}`;
    resultBlock.innerHTML = phrase;
    document.body.appendChild(resultBlock);
}