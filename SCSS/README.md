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
