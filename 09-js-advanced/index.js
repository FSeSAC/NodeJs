// // 구조분해 할당

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = ['a', 'b', 'c'];

// const [five, four, three, two, one]  = arr1;
// console.log(one, two, three, four, five);

// const [x, y, z, alpha] = arr2;
// console.log(x, y, z, alpha);

let lists= ['apple', 'grape'];
[f1, f2, f3 = 'orange'] = lists;
console.log(f1, f2, f3);
console.log('----------------')

// 객체, object : key와 value, {}

const obj = {
    title: '라니쿤',
    content: '바보라니',
    num: 1
}
//  . 표기법
console.log(obj)
console.log(obj.title)
console.log(obj.content)
console.log(obj.num)
console.log(obj['title'])
console.log(obj['content'])
console.log(obj['num'])
console.log('----------------')

// 객체 구조 분해, 디폴트 값을 줄 수도 있다(star)
const {num, title, content, star=1000} = obj;
console.log(num, title, content, star)

console.log('----------------')
const {a1, b1, c1} = obj;       // 같은 이름을 사용해야 함
console.log(a1, b1, c1);        // 결과는 undifined

// // undifined : 변수는 할당(초기화), 값 할당 x
// let a = 20;

const lectureInfo = {
    name: 'Coding on',
    part: 'web',
    leader: 'Park'
}

console.log(lectureInfo)

function getInfo(lecture) {
    const {name, part, leader} = lecture;
    const output = `${name} 강의는 ${part} 개발을 공부합니다. 수업의 리더는 ${leader} 입니다.`
    console.log(output);
}

getInfo(lectureInfo);