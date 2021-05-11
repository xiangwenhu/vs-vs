

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