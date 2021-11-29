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
    