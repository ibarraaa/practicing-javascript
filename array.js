let fruits = ["apple", "banana", "cherry"];
let numbers = new Array(1,2,3,4);

console.log(fruits[0]);
fruits[1] = "mango";
console.log(fruits);

console.log(fruits.length);
fruits.push("orange");
fruits.pop();
fruits.unshift("kiwi");
fruits.shift();

let numbers01 = [1,2,3,4,5];

for( let i = 0; i < numbers01.length; i++){
    console.log(numbers[i]);
}

for(let num of numbers01){
    console.log(num);
}
numbers01.forEach(n => console.log(n));

let doubled = numbers.map(n => n *2 );
console.log(doubled); 
let even = numbers.filter(n => n % 2===0);
console.log(even);
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); 
console.log(numbers.includes(3));
console.log(numbers.indexOf(4));
console.log(numbers.find(n => n > 3));
let sortingNums = [4,6,8,10];
sortingNums.sort((a,b) =>  a - b);
console.log(sortingNums);
