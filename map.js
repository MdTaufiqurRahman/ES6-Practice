const numbers = [2, 5, 8, 9, 14];
//Normal system
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
    
// }

//using map
const square = numbers.map(x => x * x);
console.log(square);