function Accumulator (num) {
    this.number = num,

    this.increment = function() {
        console.log(++this.number);
    },

    this.decrement = function() {
        console.log(--this.number);
    }
}

function CancelableAccumulator(num) {
    Accumulator.call(this, num);
    this.clear = function() {
        console.log (this.number = num)
    }
}

CancelableAccumulator.prototype = Object.create(Accumulator.prototype)
const acc = new Accumulator(5);
acc.decrement(); //4
acc.increment(); //5
acc.increment(); //6
acc.decrement(); //5

const acc2 = new CancelableAccumulator(8);
acc2.increment(); //9
acc2.increment(); //10
acc2.increment(); //11
acc2.decrement(); //10
acc2.clear(); //8