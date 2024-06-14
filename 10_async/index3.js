/** 비동기처리의 3번째 방법 : Async/Await
 * 
 * async 키워드: 함수 앞에 작성
 *  -> async를 붙이는 순간 해당 함수는 프로미스가 아닌 값을 반환하더라도 프로미스로 감싸서 반환
 */

// async function f1() {
//     return 1;
// }

// async function f2() {
//     return Promise.resolve(2);
// }

// const f3 = async () => {
//     return 3;
// }


// console.log('f1() >>', f1());
// console.log('f2() >>', f2());

// f1(). then(function(result) {
//     console.log(result);
// })

// f2(). then(function(result) {
//     console.log(result);
// })


// ******************************
/**  Async/Await
 * await: 기다리다
 *  - 성공/실패로 프로미스 객체의 실행이 완료되기를 기다림
 *  - await 뒤에는 프로미스가 오게 됨
 *  - **async 키워드를 사용한 함수안에서만 await 사용가능
*/

// async/await는 세트다!!!!!!!

// function fetchFruits() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             const fruits = ['apple', 'kiwi', 'mango'];
//             // resolve(fruits);
//             reject(new Error('알수 없는 에러 발생!'));
//         }, 100);
//     });
// }

// fetchFruits()
//     .then(function(f) {
//         console.log(f);
//     })
//     .catch(function(err){
//         console.log(err);
//     })

// // ii) async/await
// // async/awiat에서는 예외처리를 try-catch 구문으로 해결!

// async function printItems() {
//     const fruits = await fetchFruits();
//     console.log(fruits);
// }

// printItems();

// ******************************


function goMart() {
        console.log('마트에 가서 어떤 음료를 살지 고민한다..');
    }
    
function pickDrink() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('고민 끝');
            product = '제로 콜라';
            price = 4000;
            // resolve();
            if (price <= 3000) {
                resolve();
            } else {
                reject();
            }

        }, 3000);
    });
}

function pay() {
    console.log(`상품명: ${product} // 가격: ${price}`);
}

function nopay() {
    console.log('금액  부족 ㅜㅜ');
}
    
async function exec() {
    try {
        // 장점) 함수의 실행 순서가 명확히 보임!
        goMart();
        await pickDrink();  // 식나이 걸리는 pickDrink() 함수의 작업을 await 키워드로 기다려줌
        pay();
    } catch (err) {
        nopay();
    }
}
    
exec();
