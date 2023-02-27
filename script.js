const firstNum = prompt("Put the first number");
const secondNum = prompt("Put the second number");

if (firstNum === '' || secondNum === '') {
    alert('Error, you need to put a number');
} else {
    alert("Sum: " + (Number(firstNum) + Number(secondNum)));
    if (firstNum < secondNum) {
        if (confirm('Are you sure you want to run this operation?')){
            alert("Subtraction: " + (Number(firstNum) - Number(secondNum)));
            alert("Multiplication: " + (Number(firstNum) * Number(secondNum)));
            alert("Division: " + (Number(firstNum) / Number(secondNum)));
        } else {
            alert("Multiplication: " + (Number(firstNum) * Number(secondNum)));
            alert("Division: " + (Number(firstNum) / Number(secondNum)));
        }
    } else {
        alert("Subtraction: " + (Number(firstNum) - Number(secondNum)));
        alert("Multiplication: " + (Number(firstNum) * Number(secondNum)));
        if (Number(secondNum) === 0) {
            alert(`Error, you can't devide on 0`);
        } else {
            alert("Division: " + (Number(firstNum) / Number(secondNum)));
        }  
    }
}