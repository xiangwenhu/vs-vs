
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


