
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
