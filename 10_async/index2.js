/**
 *  Promise 객체
 *      - 비동기처리하기 위한 첫번째 방법이 콜백함수, 그러나 콜백 지옥이라는 치명적 단점 존재
 *          => 이 단점을 해결하기 위한 es6(ECMAScipt6)부터 등장한 문법 (2015년)
 *      - 미래에 성공/실패에 대한 결과 값을 '약속'한다는 의미
 *      - 어떤 작업에 대해 성공/실패를 분리해 반환
 *          -> 성공은 then/ 실패는 catch 메서드로 반환
 *          - 성공이든 실패든 무언가의 결과
 *          - resolved: 성공
 *          - rejected: 실패
 */

// #1. promise를 생성하는 코드 `제작 코드(producing code)`
function promise1(flag) {
    // 프로미스 객체를 반환
    // - new 연산자를 이용해 프로미스 객체를 만들고 바로 반환

    // 실행함수(excutor)가 두개의 콜백함수(resolve reject)를 받음
    return new Promise(function (resolve, reject) {
        if (flag) {
            resolve(`프로미스 이행(fulfilled)! 성공! ${flag}`)
        } else {
            reject(`프로미스 거절(rejected) 상태.. 실패 ${flag}`)
        }
    })
}

// promise1();

// #2. promise를 소비하는 코드 `소비 코드(consuming code)`

// 1번 구현
// promise1(5>3)
//     .then(function(result) {
//         console.log(result);
//     })
//     .catch(function(err){
//         console.log(err);
//     });

// 2번구현
// promise1(5>3)
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err));


// ******************************
// index.js에서 콜백함수를 사용해 작성한 코드를 promise를 이용해 바꿔보자!
// let product;
// let price;

// function goMart() {
//     console.log('마트에 가서 어떤 음료를 살지 고민한다..');
// }

// function pickDrink() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             console.log('고민 끝');
//             product = '제로 콜라';
//             price = 4000;
//             // resolve();
//             if (price <= 3000) {
//                 resolve();
//             } else {
//                 reject();
//             }

//         }, 3000);
//     });
// }

// function pay() {
//     console.log(`상품명: ${product} // 가격: ${price}`);
// }

// function nopay() {
//     console.log('금액  부족 ㅜㅜ');
// }

// goMart();
// pickDrink().then(pay) .catch(nopay);
// pickDrink().then(function () {
//     pay();
// });


// ******************************
/**  프로미스 체이닝(Promise Chaining)
 * 목표: 함수를 이용해  (4+3) * 2 - 1 연산
 * -> sub(mul(add(4, 3), 2), 1)  => add -> mul -> sub
*/

// function add (n1, n2, callback) {
//     setTimeout(function() {
//         const result = n1 + n2;
//         callback(result);
//     }, 1000);
// }

// function mul (n, callback) {
//     setTimeout(function() {
//         const result = n * 2;
//         callback(result);
//     }, 700);
// }

// function sub (n, callback) {
//     setTimeout(function() {
//         const result = n - 1;
//         callback(result);
//     }, 500)
//     ;
// }

// add(4,3, function(x) {
//     console.log(x);

//     mul(x, function(y) {
//         console.log(y);

//         sub(y, function(z) {
//             console.log(z);
//         })
//     })
// })




// 프로미스 체이닝 이용한경우
function add (n1, n2) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            const result = n1 + n2;
            resolve(result);
        }, 1000);
    })  
}

function mul (n) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            const result = n * 2;
            resolve(result);
            // reject(new Error('의도적으로 발생시킨 에러입니다!'))
        }, 700);
    })
}

function sub (n) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            const result = n - 1;
            // resolve(result);
            reject(new Error('의도적으로 발생시킨 에러입니다!'))
        }, 500);
    })
}

add (4, 3)
    .then (function(result) {
        console.log(result);

        return mul(result);
    })
    .then (function(result) {
        console.log(result);

        return sub(result);
    })
    .then (function(result) {
        console.log(result);
    })