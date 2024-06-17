const car = `
{
    "model": "IONIQ 5",
    "company": "HYUNDAI",
    "price": "50000",
    "year": 2023,
    "isElectricCar": true,
    "options": ["side mirror", "smart sensor", "built-in cam"]
}
`;

console.log(car);


// 역직렬화: JSON.parse() => 통신하여 받은 데이터를 객체로 변환
// json -> js obj
const obj = JSON.parse(car);
console.log(obj);

// obj 변수는 js object이므로, ./[] 연산잘를 이용해 키값에 접근 가능
console.log(obj.model)
console.log(obj.price)
console.log(obj.hello)

console.log('-----')

// 직렬화: JSON.stringify() -> 통신하기 쉬운 포맷(JSON)으로 변환
// js obj -> json
const json = JSON.stringify(obj);
console.log(json, typeof json);

// json 변수는 JSON형태에 문자열'string'이므로
// ./[] 연산자를 통해 키 값에 접근 불가능
console.log(json.model)
console.log(json.price)
console.log(json.hello)

// json 변수는 string 타입이므로
// string 타입에 쓸 수 있는 내장 메소드들은 쓸 수 있음!
console.log(json.split(""));
console.log(json.toUpperCase());