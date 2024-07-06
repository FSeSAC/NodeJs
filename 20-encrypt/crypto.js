/*  crypto
    - Node.js 내장 모듈
    - 암호화 기능 제공
    - bcrypt 모듈 보다 범용성 큼
*/

// crypto 내장 모듈 선언
const crypto = require('crypto');

// createHash()
// - 지정한 해시 알고리즘으로 해시 객체 생성하는 암호화 함수
const createHashedPw = (pw) => {
    // 매개변수로 받은 pw를 암호화 하는 함수

    // createHash(알고리즘).update(암호화할 값).digest('base64')

    return crypto.createHash('sha512').update(pw).digest('base64');
}

/* 해시 함수의 한계: 같은 Input에 대해 같은 암호화된 output이 출력
    -> 평문/input으로 돌아가기 x, output이 동일하다면 input의 동일함을 유추 가능
    (레인보우 테이블에서도 암호화된 output을 역추적해 찾기 가능)
*/
console.log(createHashedPw('1234'));
console.log(createHashedPw('1234'));


// --------------------------------------------
// pbkdf2
//  - 비밀번호 기반 키 도출 함수로 주로 비밀번호 저장할 때 사용

// 단방향 암호화 생성 함수
// saltAndHashPw: 임의의 salt값 생성 후, pbkdf2Sync함수를 사용해 해당 솔트와 비밀번호를 기반으로 해시 생성
const saltAndHashPw = (pw) => {
    const salt = crypto.randomBytes(16).toString('base64'); // salt 생성
    const iterations = 100000; // 반복 횟수
    const keylen = 64; // 생성할 키의 길이
    const digest = 'sha512';    // 해시 알고리즘

    const hash = crypto
        .pbkdf2Sync(pw, salt, iterations, keylen, digest) // pw 값을 암호화
        .toString('base64');    // 암호화된 Buffer 형식의 데이터를 base64 문자열로 변환 후 저장, 전송 간편

    return {
        salt, hash
    }
}

// ----------------------------------------
// 비밀번호 비교 함수

const comparePw = (inputPw, savedSalt, savedHash) => {
    const iterations = 100000; // 반복 횟수
    const keylen = 64; // 생성할 키의 길이
    const digest = 'sha512';    // 해시 알고리즘

    const hash = crypto // pw 값을 암호화
        .pbkdf2Sync(inputPw, savedSalt, iterations, keylen, digest)
        .toString('base64');

        // hash : 사용자가 주장하는 pw를 savedSalt와 조합해 암호화한 해시값
        // savedHash: 정답 비밀번호에 대한 해시 값

    return hash === savedHash;
}

// ----------------------------------------
// 암호 비교 예제

const password = '1234!';   // 정답 비밀번호

// 비밀번호 암호화
const { salt, hash } = saltAndHashPw(password);
console.log(`Salt: ${salt}, Hash: ${hash}`);
  
const inputPassword = '1234!#'; // 주장하는 비밀번호
const isMatch = comparePw(inputPassword, salt, hash); 
console.log(`비밀번호가 ${isMatch ? '일치합니다.' : '일치하지 않습니다.'}`);