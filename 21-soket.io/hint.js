// 빈 객체 생성
const nickObjs = {};
console.log(nickObjs);

// Id 속성을 가진 객체로 생성
const socket = {id: 'asdf'};
console.log('socket ->', socket);

// js 에서 obj에 key, value 추가한느 방법
// [1] `.`연산자를 사용한 속성 추가
nickObjs.hello = '안녕';
nickObjs.hi = '안녕2';

// [2] `[배열]` 을 사용한 속성 추가
nickObjs['apple'] = '사과';

// [3] 변수를 사용한 속성 추가
nickObjs[socket.id] = 'rani';

console.log('nickObjs ->', nickObjs);


// js에서 obj에 특정 key 존재하는지 검사
const nickObjs2 = {hello: '안녕', apple: '사과'};
const nick1 = '안녕';
const nick2 = '사과';
const nick3 = '라니';
console.log('nickObjs2 ->', nickObjs2) 

// Object.values(): obj에서 value만 뽑아서 배열로 만듬
// JS 내장 함수
console.log(Object.values(nickObjs2));
console.log(Object.values(nickObjs2.indexOf(nick1)));
console.log(Object.values(nickObjs2.indexOf(nick2)));
console.log(Object.values(nickObjs2.indexOf(nick3)));
// nick3는 존재하지 않아서 -1

console.log('----------------');

// for in 반복문
for (let key in nickObjs2) {
    console.log(key, nickObjs2[key]); // key, value 출력
}

// object 요소 삭제
console.log('삭제 전 >' , nickObjs2);
delete nickObjs2['hello'];
console.log('삭제 후 >' , nickObjs2);