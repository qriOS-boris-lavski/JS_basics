const firstNum = +prompt("Put the first number");
const secondNum = +prompt("Put the second number");
// const colors = {};

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
    showResult(result);
}

function subtraction(a, b) {
    let result = Number(a) - Number(b);
    if (a < b) {
        if (confirm('Are you sure you want to run this operation?')){
            showResult(result);
        } else {
            return
        }
    } else {
        showResult(result);
    }
}

function multiplication(a, b) {
    let result = Number(a) * Number(b);
    showResult(result);
}

function division(a, b) {
    let result;
    if (b === 0) {
        result = `Error, you can't devide on 0`;
    } else {
        result = Number(a) / Number(b);
    }
    showResult(result);
}

function showResult(result) {
    let resultBlock = document.createElement("h2");
    if (result === "Error, you can't devide on 0") {
        resultBlock.style.color = "#9a560e";
    } else if (result < 0) {
        resultBlock.style.color = "#cc0000";
    } else {
        resultBlock.style.color = "#1e6400";
    }
    
    resultBlock.innerHTML = result;
    document.body.appendChild(resultBlock);
}

// function showPhrase (resultBlock) {
//     // let phrase = document.createAttribute("h3");

//     let functions = [sum, subtraction, multiplication, division];
//     for (let i = 0; i < functions.length; i++) {
//         if (functions[i].name === "sum") { 
//           resultBlock.innerHTML = "Sum: " + result;
//           document.body.appendChild(resultBlock);
//           break
//         }
//       }

// }