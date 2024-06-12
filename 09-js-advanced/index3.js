//  &&  ||
// true && true
// true && false

const x = 5;
const result = x || 100;    // 
console.log(result);

const y = 7;
const result3  =  x < y && 'yy가 큼';   // &&연산자는  둘다 true면 -> 오른쪽이 default값
// const result3  =  x < y && '';
console.log(result3);
// false: undifined, null, 0, '', Na

console.log('------------------');

let userColor = 'red';
// let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;   // ||연산자는 둘다 true면 -> 왼쪽이 default값
console.log(currentColor);