
const symbolSalary = Symbol.for("salary");
const symbolIsAnimal = Symbol.for("isAnimal");
const symbolSay = Symbol.for("say");

function Person(age, name){
    this.age = age;
    this.name = name;

    this.walk = function () {
        console.log("person:walk");
    }
}

// 原型方法
Person.prototype.say = function(words){
    console.log("say:", words);
}
Person.prototype[symbolSay] = function(words){
    console.log("symbolSay", words);
}

// 原型属性
Person.prototype[symbolIsAnimal] = true;
Person.prototype.isAnimal = true;

const person = new Person(100, "程序员");

person[symbolSalary] = 6000;
person["sex"] = "男";


// sex 不可枚举
Object.defineProperty(person, "sex", {
    enumerable: false
});

Object.defineProperty(person, symbolSalary, {
    enumerable: false, // 无效的设置 
    value: 999
});

const keys = Object.keys(person);

const names = Object.getOwnPropertyNames(person);

const symbols = Object.getOwnPropertySymbols(person);

const ownKeys = Reflect.ownKeys(person);

console.log("keys", keys);  // [ 'age', 'name', 'walk' ]
console.log("getOwnPropertyNames", names); // [ 'age', 'name', 'walk', 'sex' ]
console.log("getOwnPropertySymbols", symbolSalary); // [ Symbol(salary) ]
console.log("ownKeys", ownKeys); // [ 'age', 'name', 'walk', 'sex', Symbol(salary) ]


console.log("--------")
console.log(person.isAnimal);  // true
console.log(person[symbolIsAnimal]); // true
console.log(person[symbolSalary]);  // 999
person[symbolSay]("hello world"); // symbolSay hello world
person.say("hello world"); // say: hello world
person.walk(); // person:walk
