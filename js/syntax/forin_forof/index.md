## 相同
遍历

## 不同
**for in**
1. 获取enumerable:true的属性键。
2. 可以遍历对象。
3. **可以获取原型上的属性键。**
4. 数字属性键被遍历出来是字符串。 比如索引值


**for of**：
1. 遍历属性**值**。不受到enumerable限制。
2. 可遍历数组。 一般不可以遍历对象，如果实现了Symbol.iterator，可以遍历。 如Array，Map，Set，String，TypedArray，arguments 对象等等
3. 不能获取原型上的值


## 总结
1. 不建议使用for in来遍历数组



```js

// 数组遍历

// 原型上增加方法
Array.prototype.gogo = function(){
    console.log("gogo");
}

var a = [1,2,3];


// key值2不可以枚举
Object.defineProperty(a, 2, {
    enumerable: false
});
Object.defineProperty(a, "2", {
    enumerable: false
});

for(let p in a){
    // 索引被遍历出来是字符串类型
    console.log(p, typeof p); // 0 string; 1 string; gogo string
}

console.log("---")

for(let v of a){
    console.log(v);  // 1 2 3
}



```

