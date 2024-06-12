// // spread 연산지 ...
// const a = [1, 2, 3]
// const b = [4, 5]

// const spread = [...a, ...b]
// console.log(spread)
// console.log(spread)

// const c = [...'Hello'];
// console.log(c)

// // 기존 방식
// const d = 'Hello'.split('');
// console.log(d)

// // spread 연사자를 obj
// const chip = {
//     base: 'chip',
//     company: 'Rani',
// };
// console.log(chip);

// const potatoChip = {
//     ...chip,
//     flavor: 'potato',
// }
// console.log(potatoChip);
// console.log('----------------')
// ----------------------------
// rest 파라미터
// 함수에서 사용시
// const values = [10, 20, 30, 40, 50, 60];
// function get(a, b, ...rest) {   // 순서대로 읽고 나머지는 rest에 할당
//     console.log(a, b);
//     console.log(rest);
// }
// get(...values);
// console.log('----------------')
// ----------------------------
// const icecream = {
//     company: 'lotte',
//     flavor: 'choco',
//     price: 1000,
//   };
// const {flavor, ...rest} = icecream;
// console.log(flavor);
// console.log(icecream)
console.log('----------------')
//  ---- 배열
const number = [1, 2, 3, 4, 5, 6 ,7, 8];
const [one1, two1, ... rest2] = number;
console.log(one1, two1);
console.log(rest2)