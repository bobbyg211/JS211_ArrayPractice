const cars = [
  "Ford",
  "Toyota",
  "Kia",
  "Honda"
]

console.log(cars.length);

const moreCars = [
  "Ram",
  "Dodge",
  "Mercedes",
  "Honda"
]

let totalCars = cars.concat(moreCars);

console.log(totalCars.indexOf("Honda"));
console.log(totalCars.lastIndexOf("Ford"));

const stringOfCars = totalCars.join();

totalCars = stringOfCars.split(",");

let carsInReverse = totalCars.reverse();

carsInReverse = carsInReverse.sort();

// alert(carsInReverse.indexOf('Dodge'));

const removedCars = carsInReverse.slice(1, 4);

carsInReverse = carsInReverse.splice(1, 2, "Ford", "Honda");

carsInReverse.push("Ford", "Honda");

console.log(carsInReverse.pop());

console.log(carsInReverse.shift());

carsInReverse.unshift("BMW");

const numbers = [25, 45, 0, 2];

numbers.forEach( (num,i) => {
  numbers[i] = numbers[i] + 2;
});

console.log(numbers);