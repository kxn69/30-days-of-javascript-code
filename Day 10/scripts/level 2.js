// Exercise Level 2


const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const c = [...a, ...b]

// 1. Find a union b
const A = new Set(a)
const B = new Set(b);
const C = new Set(c)
console.log(C)


// 2. Find a intersection b
const D = a.filter(num => B.has(num))
console.log(D)


// 3. Find a with b
const E = a.filter(num => !B.has(num))
console.log(E)