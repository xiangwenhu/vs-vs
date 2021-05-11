## 相同
改变函数执行时的上下文
1. 调用对象必须是函数
2. 第一个参数都是执行上下文

## 不同
**call**: 
1. 第二个参数开始，可以接收任意个参数
   
**apply**:  
1. 第二个参数，必须是数组或者类数组
   
**bind**: 
1. 第二个参数开始，可以接收任意个参数
2. 返回的是一个新的函数


```js
function sum(...args) {
    const total = args.reduce((s, cur) => {
        return s + cur;
    }, 0);

    return (this.base || 0) + total;
}

const context = {
    base: 1000
};

const bindFun = sum.bind(context, 1, 2);

const callResult = sum.call(context, 1, 2, 3, 4);
const applyResult = sum.apply(context, [1, 2, 3, 4]);
const bindResult = bindFun(3, 4);


console.log("call:", callResult);  // 1010
console.log("apply:", applyResult); // 1010 
console.log("bind:", bindResult); // 1010
```