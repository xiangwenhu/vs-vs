## 相同
都是用来获取对象的属性键， **不会返回原型链上的属性**。

## 不同
**Object.keys**：则返回的是所有可枚举属性键，也就是属性下的enumerable: true。但**不包括Symbol值**作为名称的属性键。

**Object.getOwnPropertyNames**：返回的是对象所有自己的属性键 ，包括**不可枚举属性**但**不包括Symbol值**作为名称的属性键。

**Object.getOwnPropertySymbols**: 方法返回一个给定对象自身的所有 Symbol 属性键的数组。

**Reflect.ownKeys**: 返回一个由目标对象自身的属性键组成的数组。等同于Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target))。


```js


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


```