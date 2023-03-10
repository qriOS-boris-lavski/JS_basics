// Перевірка на пустоту об'єкта

function checkEmpty(obj) {
    for (let key in obj) {
      return console.log('Current object is normal');
    }
    return console.log('Current object is empty');
  }

  const obj1 = {
    age: 25,
    name: 'Sara'
  }

  const obj2 = {}

  checkEmpty(obj2);
  checkEmpty(obj1);


  // sayHello

  let user = {
    name: "Василь",
    age: 30,
    sayHello() {
      console.log(`Привіт, я ${this.name}, мені ${this.age} років`);
    }
  };

  user.sayHello()


  // Калькулятор

  let calculator = {
    ask() {
      this.num1 = +prompt("Put a first number", 0);
      this.num2 = +prompt("Put a second number", 0);
    },
    sum() {
      return alert('Sum is ' + (this.num1 + this.num2));
    },
    mul() {
      return alert('Multiplication is ' + (this.num1 * this.num2));
    }
  };

  calculator.ask()
  calculator.sum()
  calculator.mul()