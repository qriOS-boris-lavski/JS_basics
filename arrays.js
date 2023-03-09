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

function minNum(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    }
    return min;
}

function maxNum(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(minNum(numbers));
console.log(maxNum(numbers));

//Ялинка

let firTree = '';

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        firTree += '#';
    }
    firTree += '\n';
  }
  
  console.log(firTree);

