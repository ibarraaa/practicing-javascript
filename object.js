let person = {
    name: 'Hiruki',
    age: 20,
    isStudent: true
};

// new Object();

let status = new Object();
status.active = true;
status.student = true;
console.log(status);

person.name = 'Single';
person.job = 'DevOps';
console.log(person);

console.log(person.name = 'Loyd');
console.log(person);
person.city = "Manila";
delete person.isStudent;
console.log(person);

let compute = {
    add: function(a, b){
        return a + b;
    }
};
console.log(compute.add(23, 54));

let compute1 = {
    substract(a, b) {
        return a -b;
    }
};


let car = {
    brand: "Ford",
    model: "V2",
    year: 2025
}
car.color = 'Black';
car.year = '2020';
car.start = function() {
   console.log("Car is starting...");
};

console.log(car);
console.log(car.start());

let student = {
    id:1, name:"nana", grade: "a"
};
for(let key in student) {
    console.log(key, student[key]);
}
console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));

console.log("name" in student);
console.log("age" in student);
console.log(student.hasOwnProperty("grade"));
console.log(student.hasOwnProperty("age"));

let obj1 = {a: 1, b:2};
let obj2 = {c: 3, d:4};

let merge = Object.assign({}, obj1, obj2);
console.log(merge);
let merged2 = {...obj1, ...obj2};
console.log(merged2);

let book = {title: "TourGuide", author: "Emily", year: 2045};
for(let key in book){
    console.log(Object.keys(book));
};
console.log(book.hasOwnProperty("publisher"));
let publisher = new Object();
publisher.publisher = "O'Reilly";
console.log(publisher);
let finishBook = {...book, ...publisher};
console.log(finishBook);

let user = {name: "alice", age:21, country: "PH"};
let {name, age} = user;
console.log(name);
console.log(age);
let {country: nation} = user;
console.log(nation);

let name1 = "mark";
let age1 = 19;
let student1 = {name1, age1};
console.log(student1);

let fruit = 'apple';
let basket = {
    [fruit]: 10,
    ['0ranger' + '_count']: 5
};
console.log(basket);
let obj3 = {a: 1};
let obj4 = obj3;
obj4.a = 99;
console.log(obj4.a);

let clone = {...obj3};
clone.a = 50;
console.log(clone.a);

let person1 = {
    name: "Lara",
    greet() {
        console.log(`Hello, I'm ${this.name}`);
    }
};
person1.greet();

let laptop = {brand: 'Dell', price:45000, stock:10};

let {brand, price, stock} = laptop;
console.log(brand);
console.log(stock);
console.log(price);
console.log(stock);

let jannaName = "janna";
let aceName = "ace";
let benName = "ben";


let students = {jannaName, aceName, benName};
console.log(students);



let user1 = {
    name: "mie",
    greet2(){
        console.log(`HI, Im ${this.name}`);
    }
};
user1.greet2();
let other = {name: "Jake"};
other.greet3 = user1.greet2; 
other.greet3(); 



function Car1(brand){
    this.brand = brand;
}

Car1.prototype.start = function(){
    console.log(`${this.brand} is staring`);
};
let c1 = new Car1("Toyota");
c1.start()

class Animal {
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} makes a sound.`);
    }
}

let dog = new Animal("Dog");
dog.speak()

class Math{
    static add(a,b){
        return a+b;
    }
}

console.log(Math.add(5,3));


    class book2{
        constructor(title, author){
            this.title = title;
            this.author = author;
        }
        info(){
            console.log(`Book: ${this.title} by ${this.author}`);
        }
    }
    let addinfo = new book2('The Kapampangan', 'Jassantie');
    
addinfo.info();

class Student2 {
    constructor(name, grade){
        this.name = name;
        this.name = grade;
    }

    information(){
        console.log(`${this.name} got grade ${this.grade}`);
    }
}
let annaInfo = new Student2("Anna", 89);
let edwinInfo = new Student2("Edwin", 98);
let romaneInfo = new Student2("Romane", 90);
annaInfo.information();
edwinInfo.information();
romaneInfo.information();