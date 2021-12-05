# SCSS
CSS를 SCSS라는 CSS Preprocessor의 쉬운 문법으로 작성하고, 이를 CSS로 컴파일하여 적용

#

## CSS Preprocessor
CSS 전(예비)처리기
- LESS, SASS(SCSS), Stylus
- 웹에 CSS를 적용하기 이전에 간단 문법으로 CSS를 작성할 수 있는 것.

#

# SASS vs. SCSS
SASS의 모든 기능을 지원하는 CSS의 상위 집합이 SCSS
- SCSS는 CSS와 거의 같은 문법으로 SASS 기능을 지원
- 중괄호({})와 세미콜론(;)의 유무 차이

#

## 컴파일
SASS(SCSS)는 웹에서 직접 동작할 수 없으므로 어디까지나 표준 CSS로 동작해야 하며, 전처리기로 작성 후 CSS로 컴파일 하여 사용해야 한다.
- [SassMeister](https://www.sassmeister.com/ "SassMeister)에서 작성후 CSS로 컴파일

#

# 문법

### 주석
- // 컴파일되지 않는 주석
    - SCSS에서만 사용하는 방식으로 CSS로 컴파일 할 때 변환되지 않음
- /* 컴파일되는 주석 */

#

### Data Types
- Numbers : 숫자
    - 숫자에 단위가 포함될 수 있음
- Strings : 문자
    - 문자에 따옴표가 포함될 수 있음
- Colors : 색상 표현
- Booleans : 논리형
- Nulls : null
- Lists : 공백이나 쉼표(,)로 구분된 값의 목록
    - ()를 붙이거나 붙이지 않는다.
- Maps : 딕셔너리 / Key: Value 형태
    - ()를 꼭 붙여야 함.

#

### 중첩(Nesting)
상위 선택자의 반복을 피하고 좀 더 편리하게 복잡한 구조를 작성할 수 있음

#### SCSS
```scss
.section {
    width: 100px;
    .list {
        padding: 20px;
        li {
            float: left;
        }
    }
}
```

#### CSS
```css
.section {
    width: 100px;
}
.section .list {
    padding: 20px;
}
.section .list .li {
    float: left;
}
```

- 상위 선택자 참조 (&)
    - 자기 자신을 포함해서 참조하는 경우 유용하게 사용 가능
    #### SCSS
    ```scss
    .btn {
        position: absolute;
        &:active {
            color: red;
        }
    }
    ```
    #### CSS
    ```css
    .btn {
        position: absolute;
    }
    .btn:active {
        color:red;
    }
    ```
- 중첩 벗어나기 (@at-root)
    - 중첩 안에서 생성하되 중첩 밖에서 상용해야하는 경우에 유용
    - 중첩 된 부분 안에서 필요한 부분을 사용하고 밖에서 중첩되지 않고 새로 생성
    #### SCSS
    ```scss
    .list {
        $w: 100px;
        $h: 50px;
        li {
            width: $w;
            height: $h;
        }
        @at-root .box {
            width: $w;
            height: $h;
        }
    }
    ```
    #### CSS
    ```css
    .list li {
        width: 100px;
        height: 50px;
    }
    .box {
        width: 100px;
        height: 50px;
    }
    ```
- 중첩된 속성
    - font-, margin- 처럼 동일한 네임스페이스를 가지는 속성들을 중첩된 형태로 유용하게 사용 가능
    #### SCSS
    ```scss
    .box {
        font: {
            weight: bold;
            size: 10px;
            family: sans-serif;
        };
        margin: {
            top: 10px;
            bottom: 20px;
        };
        padding: {
            left : 20px;
            right: 40px;
        };
    }
    ```
    #### CSS
    ```css
    .box {
        font-weight: bold;
        font-size: 10px;
        font-family: sans-serif;
        margin-top: 10px;
        margin-bottom: 20px;
        padding-left: 20px;
        padding-right: 40px;
    }
    ```

#

# 변수(Variables)
- 반복적으로 사용되는 값을 변수로 지정할 수 있다.
- 변수 이름 앞에는 항상 $를 붙임
```scss
$변수이름: 속성값;
```
- 변수 유효 범위
    - 전역 변수가 아니면 선언된 블록({})내에서만 유효한 범위를 가짐
- 변수 재 할당
    - 다른 변수의 값을 받은 새로운 변수를 활용 가능
- 전역설정 (!global)
    - !global 플래그를 사용하면 변수의 유효범위를 전역으로 설정 가능
    #### SCSS
    ```scss
    .box1 {
        $color: #111 !global;
        background: $color;
    }
    .box2 {
        background: $color
    }
    ```
    #### CSS
    ```css
    .box1 {
        background: #111;
        }

        .box2 {
        background: #111;
    }
    ```
- 초기값 설정(!default)
    - 할당되어있는 변수가 있다면 변수가 기존 할당 값을 사용
    - 변수의 값을 설정하겠지만, 혹시 기존 변수가 있을 경우 현재 설정하는 변수의 값은 사용하지 않겠다는 의미
    #### SCSS
    ```scss
    $color-primary: red;
    .box {
        $color-primary: blue !default;
        background: $color-primary;
    }
    ```
    #### CSS
    ```css
    .box {
        background: red;
    }
    ```
- 문자 보간(#{})
    - 코드의 어디든지 변수 값을 넣을 수 있음
    #### SCSS
    ```scss
    $family: unquote("Droid+Sans");
    @import url("http://fonts.googleapis.com/css?family=#{$family}")
    ```
    #### CSS
    ```css
    @import url("http://fonts.googleapis.com/css?family=Droid+Sans");
    ```
    - unquote()는 SASS의 내장 함수로 문자에서 따옴표를 제거 함.

#

# 가져오기(Import)
@import로 외부에서 가져온 Sass 파일은 모두 단일 CSS 출력 파일로 병합됨.
- 원래 CSS 규칙으로 컴파일되는 예외의 경우
    - 파일 확장자가 .css일 때
    - 파일이름이 http://로 시작하는 경우
    - url()이 붙어있을 경우
    - 미디어 쿼리가 있는 경우
- 쉼표(,)로 구분하여 여러 파일음 import 가능
    - @import "header", "footer";

### 파일 분할(Partials)
유지보수가 쉽도록 관리하기 위함.
- 모든 파일이 컴파일시 각각의 ~.css 파일로 나눠서 저장되면 관리나 성능 차원에서 문제 발생 가능.
- 파일 이름 앞에 _ 를 붙여 @import로 가져오면 컴파일 시 ~.css 파일로 컴파일하지 않는다.

#

# 연산(Operations)
- 산술 연산자 (+, -, *, /, %)
    - 곱하기(*)의 경우 하나 이상의 값이 반드시 단위가 없는 숫자여야 함.
    - 나누기(/)의 경우 오른쪽 값이 반드시 단위가 없는 숫자여야 함.
- 비교 연산자 (==, !=, <, >, <=, >=)
- 논리 연산자 (and, aor, not)

#

### 숫자 연산
- 일반적으로 절대값을 나타내는 px 단위로 연산
- 상대적 단위(%, em, vm 등)의 연산의 경우 CSS의 calc()로 연산해야 함.
- 나누기(/)의 경우 속성을 구분하는 문자로 사용될 수 있으므로 다음과 같은 조건을 충족해야 나누기 연산이 실행 됨.
    - 값 또는 그 일부가 변수에 저장되어 사용되거나 함수에 의해 반환되는 경우
    - 값이 ()로 묶여있는 경우
    - 값이 다른 산술 표현식의 일부로 사용되는 경우
#

### 문자 연사
기본적으로 + 연산자가 사용됨.
- 문자 연산의 결과는 첫 번째 피연산자를 기준
- 첫 번째 피연산자에 따옴표가 붙어있다면 연산 결과를 따옴표로 묶지만 따옴표가 없을 경우 연산 결과도 따옴표 처리를 하지 않음

#

### 색상 연산
색상에 포함되는 색상 값도 연산 가능
- rgba 나 hsla의 경우 a에 해당하는 alpha 값이 동일해야 연산 가능
    - alpha 값은 연산되지 않음
    - alpha 값은 opacify(), transparentize() 함수로 변환 가능
    #### SCSS
    ```scss
    $color: rgba(10, 20, 30, .5);
    div {
        background: rgba(50, 100, 150, .5) + rgba(10, 20, 30, .5);
        color: opacify($color, .3);                     // 30% 더 불투명하게 (+)
        background-color: transparentize($color, .2);   // 20% 더 투명하게 (-)
    }

    ```
    #### CSS
    ```css
    div {
        background: rgba(60, 120, 180, 0.5);
        color: rgba(10, 20, 30, 0.8);
        background-color: rgba(10, 20, 30, 0.3);
    }
    ```
#

### 논리 연산
기본적으로 @if 조건문에서 사용되는 개념

#

# 재활용(Mixins)
재사용 할 CSS 선언 그룹을 정의
- 만들어서(선언 : @mixin) 사용하기(포함 : @include)
    #### SCSS
    ```scss
    @mixin size($w : 100px, $h : 100px) {
        width : $w;
        height: $h
    }

    .box1 {
        @include size;
    }

    .box2 {
        @include size(200px, 300px);
    }
    ```
    #### CSS
    ```css
    .box1 {
    width: 100px;
    height: 100px;
    }

    .box2 {
    width: 200px;
    height: 300px;
    }
    ```
#

### 인수(Arguments)
```scss
@mixin 믹스인이름($매개변수){};
@include 믹스인이름(인수);
```
- 매개변수(Parameter)란 변수의 한 종류로 여러 데이터 중 하나를 가리키기 위해 사용된다.
- 제공되는 여러 데이터들을 전달인수(Arguments) 라고 부른다.
- 인수의 기본값 설정
    - 매개변수에 기본값을 미리 설정해두면 별도의 인수가 전달되지 않았을 때 기본값이 사용된다.
- 키워드 인수
    - 중간부분의 특정한 매개변수에 정확한 값을 전달할 수 있도록 하는 방법
    ```scss
    @mixin 믹스인이름($매개변수A: 기본값, $매개변수B: 기본값) {
        스타일;
    }

    @include 믹스인이름($매개변수B: 인수);
    ```
- 가변 인수
    - 입력할 인수의 개수가 불확실한 경우 사용.
    - 가변 인수(...)로 선언된 매개변수가 나머지 인수들도 받는다.
    ```scss
    @mixin 믹스인이름($매개변수...) {
        스타일;
    }

    @include 믹스인이름(인수A, 인수B, 인수C);
    ```

#

### @content
Mixin에 @content가 포함되어 있다면 해당 부분에 원하는 스타일 블록을 전달할 수 있음
- 새롭게 정의한 스타일을 @content에 전달
```scss
@mixin 믹스인이름() {
  스타일;
  @content;
}

@include 믹스인이름() {
  // 스타일 블록
  스타일;
}
```

#

### 확장(Extend)
특정 선택자가 다른 선택자의 모든 스타일을 가져야하는 경우 확장 기능 사용.
```scss
@extend 선택자;
```
- 결과는 다중 선택자가 만들어진다.
    - 한 번의 확장으로 훨씬 용량이 큰 css가 만들어질 수 있고, 원치 않은 부작용을 초래할 수 있으므로 추천하지는 않는 기능.

#

# 함수(Functions)
Mixin이 특정 스타일을 반환하는 것이라면 Function은 특정 값을 반환한다.
- 인수가 없더라도 괄호()가 필요함
```scss
@function 함수이름($매개변수) {
  @return 값
}
```
- 함수는 별도의 지시어 없이 사용하기 때문에 별도의 접두어를 붙여 함수의 이름을 정하는 것이 좋은 방법

#

# IF (조건문)
조건의 값(true, false에 따라 두 개의 표현식 중 하나만 반환)
- 조건부 삼항 연산자와 비슷
    - if(조건, 참일 경우 리턴 값, 거짓일 경우 리턴 값)

### @if (지시어)
if 문과 유사하지만 추가 지시어를 사용하여 더 복잡한 조건문을 작성할 수 있음.
```scss
@if (조건1) {
    /* 조건1이 참일 때 구문 */
} @else if (조건2) {
    /* 조건2가 참일 때 구문 */
} @else {
    /* 모두 거짓일 때 구문 */
}
```
- 조건에 () 는 생략 가능

#

# For (반복문)
스타일을 반복적으로 출력
```scss
// through
// 종료 만큼 반복
@for $변수 from 시작 through 종료 {     // 시작부터 종료 까지 반복
    // 반복 내용
}

@for $변수 from 시작 to 종료 {          // 시작부터 종료 직전까지 반복
    // 반복 내용
}
```
#

# Each (반복문)
List와 Map 데이터를 반복할 때 사용
```scss
@each $변수 in List {
    // 반복내용
}

@each $key, $value in Map {
    // 반복내용
}
```

#

# While (반복문)
조건이 false로 평가될 때까지 내용을 반복
- 무한루프에 빠질 수 있으므로 루프를 탈출할 수 있도록 설계해야 함
```scss
@while 조건 {
    // 반복 내용
}
```

#

# 내장 함수
SCSS에서 기본적으로 제공하는 내장 함수들
- [Sass Built-in Functions](https://sass-lang.com/documentation/modules "Sass Built-in Functions")
- [] 는 선택 가능한 인수
- Zero-based numbering(0부터 순서를 세는 것)을 사용하지 않음

### 색상 함수
- mix($color1, $color2) : 두 개의 색을 섞습니다.
- lighten($color, $amount) : 더 밝은색을 만듭니다.
- darken($color, $amount) : 더 어두운색을 만듭니다.
- saturate($color, $amount) : 색상의 채도를 올립니다.
- desaturate($color, $amount) : 색상의 채도를 낮춥니다.
- grayscale($color) : 색상을 회색으로 변환합니다.
- invert($color) : 색상을 반전시킵니다.
- rgba($color, $alpha) : 색상의 투명도를 변경합니다.
- opacify($color, $amount) / fade-in($color, $amount) : 색상을 더 불투명하게 만듭니다.
- transparentize($color, $amount) / fade-out($color, $amount) : 색상을 더 투명하게 만듭니다.

#

### 문자 함수
- unquote($string) : 문자에서 따옴표를 제거합니다.
- quote($string) : 문자에 따옴표를 추가합니다.
- str-insert($string, $insert, $index) : 문자의 index번째에 특정 문자를 삽입합니다.
- str-index($string, $substring) : 문자에서 특정 문자의 첫 index를 반환합니다.
- str-slice($string, $start-at, [$end-at]) : 문자에서 특정 문자(몇 번째 글자부터 몇 번째 글자까지)를 추출합니다.
- to-upper-case($string) : 문자를 대문자를 변환합니다.
- to-lower-case($string) : 문자를 소문자로 변환합니다.

#

### 숫자 함수
- percentage($number) : 숫자(단위 무시)를 백분율로 변환합니다.
- round($number) : 정수로 반올림합니다.
- ceil($number) : 정수로 올림합니다.
- floor($number) : 정수로 내림(버림)합니다.
- abs($number) : 숫자의 절대 값을 반환합니다.
- min($numbers…) : 숫자 중 최소 값을 찾습니다.
- max($numbers…) : 숫자 중 최대 값을 찾습니다.
- random() : 0 부터 1 사이의 난수를 반환합니다.

#

### List 함수
- length($list) : List의 개수를 반환합니다.
- nth($list, $n) : List에서 n번째 값을 반환합니다.
- set-nth($list, $n, $value) : List에서 n번째 값을 다른 값으로 변경합니다.
- join($list1, $list2, [$separator]) : 두 개의 List를 하나로 결합합니다.
- zip($lists…) : 여러 List들을 하나의 다차원 List로 결합합니다.
- index($list, $value) : List에서 특정 값의 index를 반환합니다.
- 모든 List 함수는 Map 데이터에도 사용 가능.

#

### Map 함수
- map-get($map, $key) : Map에서 특정 key의 value를 반환합니다.
- map-merge($map1, $map2) : 두 개의 Map을 병합하여 새로운 Map를 만듭니다.
- map-keys($map) : Map에서 모든 key를 List로 반환합니다.
- map-values($map) : Map에서 모든 value를 List로 반환합니다.

#

### 관리 함수
- variable-exists(name) : 변수가 현재 범위에 존재하는지 여부를 반환합니다.(인수는 $없이 변수의 이름만 사용합니다.)
- unit($number) : 숫자의 단위를 반환합니다.
- unitless($number) : 숫자에 단위가 있는지 여부를 반환합니다.
- comparable($number1, $number2) : 두 개의 숫자가 연산 가능한지 여부를 반환합니다.

#

