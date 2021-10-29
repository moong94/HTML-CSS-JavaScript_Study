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

### 속성(Properties), 값(Value)
- 선택자에 적용 가능한 스타일(속성)을 특정 값으로 지정
- HTML의 속성은 Attribute, CSS의 속성은 Properties
- 속성에 따라 여러 값이 들어갈 수 있음

[CSS mdn](https://developer.mozilla.org/ko/docs/Web/CSS "CSS mdn")

# 

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

### HTML 외부에서 불러오기
```html
<head>
    <link rel="stylesheet" href="경로">
</head>
```
- 외부 .css 파일을 link태그로 절대/상대 경로를 통해 불러와 적용시키는 것

# 
