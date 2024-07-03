/* bcrypt
    - 비밀번호 암호화 시 자주 사용하는 모듈
    - 외부 라이브러리, 설치 필요
*/

// bcrypt 모듈 선언
const bcrypt = require('bcrypt');

// 정답 비밀번호 정의
const originalPw = '1234';

// 솔트의 라운드 수 -> 2의 거듭 제곱 형태
// rounds: 해시 함수를 반복하는 횟수
const saltRounds = 10; // 2^10 회 = 1024회 반복 (10 ~ 12 사이 값을 보통 사용)
// 솔트 라운드의 숫자가 커짐 -> 해시 생성 느려짐, 보안성 향상

// 비밀번호 해싱 함수 정의
const hashPw = (pw) => {
    return bcrypt.hashSync(pw, saltRounds);
}

// 비밀번호 정답 검증 함수 정의
const comparePw = (inputPw, originalPw) => {
    return bcrypt.compareSync(inputPw, originalPw);
}

// ------------------------------------
const hashedPw =hashPw(originalPw);
console.log(`hashedPw: ${hashedPw}`);

const isMatch = comparePw(originalPw, hashedPw);
console.log(isMatch ? '비밀번호 일치' : '비밀번호 불일치');

const isMatch2 = compare('12344', hashedPw);
console.log(isMatch2 ? '비밀번호 일치' : '비밀번호 불일치');