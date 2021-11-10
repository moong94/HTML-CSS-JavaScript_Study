# CSS
만들어진 구조에 원하는 레이아웃을 적용하는 것

# 

## 기본 형태
```css
선택자 {
    속성 : 값;
    속성 : 값;
    ...
}
```

### 선택자(Selector)
- 작성한 HTML에 CSS 스타일을 적용하기 위해 HTML의 특정 요소를 선택하는 Sign (어디에 적용할지 선택, 특정 태그, id, class)
```css
TAG {
    Properties : Value
}

.Class{
    Properties : Value
}
```

### 속성(Properties), 값(Value)
- 선택자에 적용 가능한 스타일(속성)을 특정 값으로 지정
- HTML의 속성은 Attribute, CSS의 속성은 Properties
- 속성에 따라 여러 값이 들어갈 수 있음
    - 단축속성 & 개별속성
        - ex
            - margin : 단축속성
            - margin-top, margin-left, margin-right, margin-bottom : 개별속성

[CSS mdn](https://developer.mozilla.org/ko/docs/Web/CSS "CSS mdn")

# 

# 선언 방식

### 태그에 직접 작성(인라인)하는 선언방식

\<<span style="color:blue">TAG</span> <span style="color:skyblue">style=</span><span style="color:orange">"속성: 값;"</span>>contents\<<span style="color:blue">/TAG</span>>
- 선택자 필요 없이 직접 선언 가능
- 반복된 요소에 적용할 때 인라인 선언 방식을 지양해야한다.
- JavaScript로 HTML에 CSS를 강제로 삽입할 때는 상관X

### HTML에 내장하여 표현
```html
<head>
    <style>
        TAG {
            Properties : Value;
        }
    </style>
</head>
```

- style태그를 통해 CSS코드가 HTML안에 포함되어있는 상황

### HTML 외부에서 불러오기(link)
```html
<head>
    <link rel="stylesheet" href="경로">
</head>
```
- 외부 .css 파일을 link태그로 절대/상대 경로를 통해 불러와 적용시키는 것

### @import 방식
@import를 이용하여 외부로부터 문서를 불러오는 방식
- css가 css를 가져오는 방식
- link로 여러 css를 불러오는 경우 병렬 호출로 불러오지만 @import로 불러오는 css는 직렬 호출로 불러오므로 시간이 더 걸릴 수 있다.
- 특정 css가 모두 호출 된 후 사용되어야하는 특별한 경우 @import로 호출 해야할 것.
```html
<!-- index.html -->
<head>
    <link rel="stylesheet" href = "./css/style1.css">
</head>
<body>
    <div>sample</div>
</body>
```
```css
/* style1.css */
@import url("./style2.css")
```
```css 
/* style2.css */
div {
    color: red;
    background-color: blue;
}
```

CSS 작성 시 HTML 구조의 순서와 동일하게 작성하는 것이 유지보수에 유리

#

# 선택자

## 기본 선택자(Basic Selectors)
- 전체 선택자(Universal Selector)
    - 요소 내부의 모든 요소를 선택
    - [Universal Selector mdn](https://developer.mozilla.org/ko/docs/Web/CSS/Universal_selectors "Universal Selector mdn")
```css
    * { };
```

- 태그 선택자(Type Selector)
    - 특정 태그 이름인 요소를 선택
    - [Type Selector mdn](https://developer.mozilla.org/ko/docs/Web/CSS/Type_selectors "Type Selector mdn")
```css
    Tag {};
```

- 클래스 선택자(Class Selector)
    - HTML class 속성의 값을 요소로 선택
    - [Class Selctor mdn](https://developer.mozilla.org/ko/docs/Web/CSS/Class_selectors "Class Selector mdn")
```css
    .class {};
```

- 아이디 선택자(ID Selector)
    - HTML id 속성의 값을 요소로 선택
    - HTML에서 id는 고유해야함.
    - [ID Selector mdn](https://developer.mozilla.org/ko/docs/Web/CSS/ID_selectors "ID Selector mdn")
```css
    #id {};
```

## 복합 선택자(Combinators)
기본 선택자들을 조합해서 사용
- 일치 선택자(Basic Combinator)
    - 붙여서 표현한 기본 선택자들의 조건이 모두 만족하는 경우 스타일 적용
```css
    tag.class#id {};
```
- 자식 선택자(Child Combinator)
    - 기본 선택자 Parent의 자식 기본 선택자 Child를 선택
    - 한 depth 차이인 경우 부모/자식 관계
    - [Child Combinator mdn](https://developer.mozilla.org/ko/docs/Web/CSS/Child_combinator "Child Combinator mdn")
```css
    Parent > Child {};      /* 조건 > 조건 > .. > 선택*/
```
- 후손(하위) 선택자(Descendant Combinator)
    - 기본 선택자 조상(상위) 요소의 후손(하위) 요소인 기본 선택자를 선택
    - depth 차이가 나도 조상(상위) 요소 내부에 포함되어 있다면 모두 후손(하위) 요소로 판단 가능
    - 띄어쓰기로 선택자 구분
    - [Descendant Combinator mdn](https://developer.mozilla.org/ko/docs/Web/CSS/Descendant_combinator "Descendant Combinator mdn")
```css
    Parent Child {};
```
- 인접 형제 선택자(Adjacent Sibling Combinator)
    - 같은 부모 요소를 공유하는 다른 요소(형제) 선택
    - 특정 요소의 바로 다음 지정 형제 요소 하나만을 선택
    - [Adjacent Sibling Combinator mdn](https://developer.mozilla.org/ko/docs/Web/CSS/Adjacent_sibling_combinator "Adjacent Sibling Combinator mdn")
```css
    A + B {};
```
```html
<P>
    <A></A>
    <B></B>     <!-- A의 다음 형제요소 B 하나만을 선택 -->
    <B></B>
</P>
```

- 일반 형제 선택자(General Sibling Combinator)
    - 같은 부모 요소를 공유하는 다른 요소(형제) 선택
    - 특정 요소의 인접한 다음 형제 요소 모두 선택
    - [General Sibling Combinator](https://developer.mozilla.org/ko/docs/Web/CSS/General_sibling_combinator "General Sibling Combinator mdn")
```css
    A ~ B {};
```
```html
<P>
    <B></B>     <!-- 이전 형제 요소는 선택X-->
    <A></A>
    <B></B>     <!-- 다음 B 모두 선택-->
    <B></B>     <!-- 다음 B 모두 선택-->
</P>
```

## 가상 클래스 선택자(Pseudo-Classes Selectors)
기본 선택자를 활용(:)

### :hover
기본 선택자에 마우스 포인터가 올라가 있는 동안에만 선택
- [:hover mdn](https://developer.mozilla.org/ko/docs/Web/CSS/:hover ":hover mdn")
```css
    E:hover {};
```

### :active
기본 선택자를 마우스로 클릭하고 있는 동안에만 선택
- [:active mdn](https://developer.mozilla.org/ko/docs/Web/CSS/:active ":active mdn")
```css
    E:active {};
```

### :focus
[대화형 콘텐츠](https://developer.mozilla.org/ko/docs/Web/Guide/HTML/Content_categories#%EB%8C%80%ED%99%94%ED%98%95_%EC%BD%98%ED%85%90%EC%B8%A0 "대화형 콘텐츠") 선택자가 포커스 된 동안에만 선택
- [:focus mdn](https://developer.mozilla.org/ko/docs/Web/CSS/:focus ":focus mdn")
```css
    E:focus {};
```

### :first-child
해당 기본 선택자의 형제 요소들 중 첫 번째 요소만 선택
- [:first-child mdn](https://developer.mozilla.org/ko/docs/Web/CSS/:first-child ":first-child mdn")
```css
    E:first-child {};
```

### :last-child
해당 기본 선택자의 형제 요소들 중 마지막 요소만 선택
- [:last-child mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/:last-child ":last-child mdn")
```css
    E:last-child {};
```

### :nth-child
해당 기본 선택자의 형제 요소들 중 n 번째 요소만 선택
- n에 해당하는 값이 (xn)일 때 x의 배수마다 선택
- n에 해당하는 값이 (n + x)일 때 x번째 요소부터 끝까지 선택
- [:nth-child mdn](https://developer.mozilla.org/ko/docs/Web/CSS/:nth-child ":nth-child mdn")
```css
    E:nth-child(n) {};
```

### :nth-of-type(n)
해당 기본 선택자의 타입(태그의 이름)과 동일한 타입인 형제 요소 중 해당 기본 선택자가 n번째 요소라면 선택
- 특정 선택자의 타입 중 n번째 선택
- 태그를 찾는 개념으로서만 사용할 것
- [:nth-of-type() mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-of-type ":nth-of-type() mdn")
```css
    E:nth-of-type(n) {};
```

### 부정 선택자(Negation Selector)
S가 아닌 요소 선택
- :not()
- [:not() mdn](https://developer.mozilla.org/ko/docs/Web/CSS/:not ":not() mdn")
```css
    E:not(S) {};
```
#### 가상클래스의 경우 역순으로 해석하는 것이 보다 정확함.
#### 콜론(:)앞에 특정 요소를 작성하지 않을 경우 특정 요소가 아닌 가능한 경우들이 모두 선택될 수 있다.

#

# 가상 요소 선택자(Pseudo-Elements Selectors)
콜론 두개(::)로 표현
- content 속성을 사용해야 가상 요소 선택자를 사용할 수 있다.

### ::before
특정 요소 내부에서 내용의 앞에 내용(content)을 삽입
- [::before mdn](https://developer.mozilla.org/ko/docs/Web/CSS/::before "::before mdn")
```css
    E::before {};
```

### ::after
특정 요소 내부에서 내용의 뒤에 내용(content)을 삽입
- [::after mdn](https://developer.mozilla.org/ko/docs/Web/CSS/::after "::after mdn")
```css
    E:after {};
```