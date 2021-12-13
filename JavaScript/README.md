# JavaScript
- 스크립트 언어
- 인터프리터 언어

#

# Expression(표현식)
값을 만들어내는 간단한 코드
- 표현식은 값을 만들어내기 때문에 함수의 인자로 사용가능

#

# Statement(문장)
- 하나 혹은 여러개의 표현식이 모여 문장을 이룸.
- 모든 표현식은 문장이 될 수 있음.
- 문장의 끝에는 세미 코론을 붙임.
    - 한 줄에 문장이 하나인 경우에는 세미콜론을 붙이지 않아도 되지만 관례적으로 붙임.
    - 한 줄에 여러 문장을 적을 경우, 세미 콜론으로 문장을 구분해야 함.
    - 마지막 문장은 세미 콜론을 붙이지 않아도 문제가 없음.
    - 마지막 문자의 결과가 반환됨.

#

# Keywords
- 자바 스크립트에서 특정한 목적을 위해 사용하는 단어
- 키워드들은 예약어로 지정되어 있음.

#

# Reserved Words
프로그램을 작성할 때, 변수명, 함수명 등 이름으로 사용할 수 없는 단어

# Identifier(식별자)
코드 내의 변수, 함수, 혹은 속성을 식별하는 문자열
- 대소문자 구분
- 유니코드 문자, $, _, 숫자 를 사용할 수 있지만, 숫자로 시작할 수는 없다.
- 예약어, 공백 사용 불가

#

# Comments(주석)
- 소스 코드에서 프로그램에 영향을 주지 않고, 무시되는 부분
- 보통은 소스코드를 이해할 수 있도록 돕는 역할로 사용
- 한 줄 주석 (//)
- 여러 줄 주석 (/* */)

#

# Variable(변수)
변수를 선언하는 키워드 : let
- let으로 변수를 선언하면 그 후 값을 할당할 수 있고, 선언과 동시에 값을 할당할 수 있다.

#

# Constant(상수)
상수를 선언하는 키워드 : const
- 상수는 한 번 값이 정해지면 다른 값으로 변경이 불가능하기 때문에 선언과 동시에 값을 할당해야 함.

#

# scope of variables(변수의 유효범위)
- const, let의 유효범위 : 블록 스코프 ({})
```javascript
// 블럭
{
    // 블럭 안에서 선언한 변수는 블록 내부에서만 사용 가능
    const name= "Mark";
    console.log(name);
}

// 밖에서 안으로
let age = 37;
    // 블럭 밖에서 선언한 변수는 다른 블록 내에서 사용 가능
{
    age++;
    console.log(age);
}
console.log(age);

// 중첩
// 중첩된 블록에서도 사용 가능
{
    {
        {
            console.log(age);
        }
    }
}
```
- var의 유효범위 : 함수 스코프 (function() {})
```javascript
var a = 0;

(function() {
    a++;
    console.log(a);
})();

console.log(a);
```

#

# var & hoisting
- Hoisting : 함수의 선언보다 호출이 먼저 작성된 경우 아래에 작성되어 있는 함수 선언을 끌어올려 문제없이 작동되도록 하는 현상.
- var로 선언하는 변수 역시 hoisting 되어 호출가능.
[Hoisting mdn](https://developer.mozilla.org/ko/docs/Glossary/Hoisting "Hoisting mdn")

#

# Data Types(자료형)
변수가 가지고 있는 값의 유형에 따라 변수의 자료형이 정해짐.
- 변수가 가지는 고정 타입이 없다.
- 기본타입(Primitive values)
    - Boolean
        - True & False
    - Null
        - 존재하지 않는 값
    - Undefined
        - 할당되지 않은 변수
    - Number
        - 모든 숫자 타입, NaN
    - String
        - 문자열, 템플릿 스트링
    - Symbol
        - 같은 인자를 넣어서 할당이 되더라도 각각 개별적인 symbol이 생성 됨.
- 객체(Objects)
[JavaScript Data types mdn](https://developer.mozilla.org/ko/docs/Web/JavaScript/Data_structures "JavaScript Data types mdn")

#

# Conditional Statements(조건문)
표현식이 참으로 평가될 때, 실행되는 블럭
- 블록에 코드가 한 줄이면 중괄호({})를 생략 가능.
- 표현식이 거짓으로 평가될 때(Falsy)
    - false
    - ''
    - 0
    - null
    - undefined
    - NaN
- 표현식이 참으로 평가될 때(Truethy)
    - true
    - 0이 아닌 숫자
    - '문자열'
    - null, undefined, NaN이 아닌 모든 객체
- else {} : if에 해당하지 않을 때
- else if {} : 이전 if에 해당하지 않고 다음 조건문에 충족하는 경우
- 논리 연산자를 이용한 조건문 평가
    - 논리 연산자를 이용해 조건부 실행
    - && : AND
    - || : OR
    - ! : NOT
- 삼항 연산자를 이용한 조건부 실행
    - 조건 ? 참이면 실행되는 표현식 : 거짓이면 실행되는 표현식
    - 중괄호를 사용할 수 없는 문법이기 때문에 하나의 표현식만 가능.
    - 표현식의 결과를 변수에 할당할 수 있음.
- switch를 이용한 조건문
    - 특정 값들에 따라 분기되는 조건문
    - switch 뒤 괄호 안에 있는 값이 무엇인지 중괄호 안에 있는 코드들을 비교해서 실행.
    - default: 위에 있는 문장은 항상 참이어서 항상 실행되는 블럭
    - 조건에 해당하는 값이 case의 조건인 경우 해당 블록을 실행.

#

# Iteration Statements(반복문)
- for
    - 조건에 따라 블럭안의 코드가 특정 조건만큼 반복되어 실행
```javascript
for (초기화; 반복 조건; 반복이 된 후 실행되는 코드) {
    반복이 되는 코드 블럭
}
```
    - for(;;){} 처럼 아무 값이 없으면 블록안의 코드가 무한 반복된다.
- while
    - 조건이 거짓이 될 때까지 반복하여 실행
    - do while의 경우 무조건 최소 한 번은 실행됨.
```javascript
while (조건) {
    조건이 거짓이 될 때까지 반복 실행.
}
do {
    조건이 거짓이 될 때까지 반복 실행.
} while (조건)
```
