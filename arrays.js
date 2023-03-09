// Сума чисел

const numbers = [13, 0, 1, -1, 9, -9, 3, 2, 6, 100];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  if (Number(numbers[i]) === numbers[i]) {
    sum += numbers[i];
  }
}
console.log('Sum is ' + sum);

// Найменше та найбільше число масиву

let min = 0;
let max = 0;
for (let i = 0; i < numbers.length; i++) {
  if (Number(numbers[i]) === numbers[i]) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
}

console.log('Min number is ' + min);
console.log('Max number is ' + max);

//Ялинка

let firTree = '';

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        firTree += '#';
    }
    firTree += '\n';
  }
  
  console.log(firTree);

