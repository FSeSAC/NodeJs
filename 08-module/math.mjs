// es6 module 형식으로 확장자 mjs, import 사용
// 실행시 확장자 적어야 한다
// 프로젝트로 es6를 작성시
//  package.json에 `"type":"module"` 적어야한다

const add = (a, b) => {
    return a+b;
}

export default add;