function first() {
    second() 
    console.log('1');
    return
}

function second() {
    console.log('2');
    return
}

first();

// 콜백함수: 어떤 기능이 종료 후 실행되는 함수,
//          거의 모든 함수가 이런 콜백함수로 구성
