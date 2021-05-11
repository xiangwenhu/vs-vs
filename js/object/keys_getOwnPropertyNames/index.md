## 相同
都是用来获取对象的属性， **不会返回原型链上的属性**。

## 不同
**Object.getOwnPropertyNames**：返回的是对象所有自己的属性 ，
包括**不可枚举属性**但**不包括Symbol值**作为名称的属性。

**Object.keys**：则返回的是所有可枚举属性，也就是属性下的enumerable: true。但**不包括Symbol值**作为名称的属性。

**Object.getOwnPropertySymbols**: 方法返回一个给定对象自身的所有 Symbol 属性的数组。


```js

const symbolSalary = Symbol.for("salary");

const obj = {
    age: 100,
    name: "程序员",
    sex: "男",
    [symbolSalary]: 6000
};

// sex 不可枚举
Object.defineProperty(obj, "sex", {
    enumerable: false
});

Object.defineProperty(obj, symbolSalary, {
    enumerable: false, // 无效的设置 
    value: 999
});

const keys = Object.keys(obj);

const names = Object.getOwnPropertyNames(obj);

const symbols = Object.getOwnPropertySymbols(obj);

console.log("keys", keys);  // [ 'age', 'name' ]
console.log("names", names); // [ 'age', 'name', 'sex' ]
console.log("symbols", symbolSalary); // [ Symbol(salary) ]

console.log(obj[symbolSalary]);  // 999

```