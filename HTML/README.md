# HTML
구조를 만드는 역할

## 기본 형태
\<<span style="color:blue">TAG</span> <span style="color:skyblue">속성1</span>=<span style="color:orange">"값1"</span> <span style="color:skyblue">속성2</span>=<span style="color:orange">"값2"</span>>content\<<span style="color:blue">/TAG</span>> <- 전체를 요소(element)라고 칭함

[HTML mds](https://developer.mozilla.org/ko/docs/Web/HTML/Element "HTML 요소 mdn")
# 
※ closed tag가 없는 빈 태그(empty tag)존재 

### 빈 태그(empty tag)
\<TAG <span style="color:skyblue">속성1</span>=<span style="color:orange">"값1"</span>/>

[Empty tag mdn](https://developer.mozilla.org/ko/docs/Glossary/Empty_element "빈 태그 종류")
#

### Parent Child
```html
<Parent>
    <Child>
    </Child>
</Parent>
```
- Selector를 통해 CSS와 JS로 HTML을 다룰 때 중요하게 사용

# 

## html 문서 구조
```html
<!DOCTYPE html>
<html>
    <head>
        문서의 정보
    </head>
    <body>
        문서의 구조
    </body>
</html>
```

### DOCTYPE
DOCTYPE(DTD, Document Type Definition) : 마크업 언어에서 문서 형식을 정의함. 어떤 HTML 버전으로 문서를 작성하는지 명시

[Document Type declaration](https://en.wikipedia.org/wiki/Document_type_declaration "DOCTYPE 정보")

### head

- \<title>\</title>
    - 웹 페이지의 제목 정의
- \<meta <span style="color:skyblue">charset</span>=<span style="color:orange">"URF-8"</span> >
- \<meta <span style="color:skyblue">name</span>=<span style="color:orange">"value" </span><span style="color:skyblue">content</span>=<span style="color:orange">"value"</span>>
    - 웹 페이지의 정보
    - 속성
        - charset = 문자인코딩방식
        - name = 정보의 종류
        - content = 정보의 종류에 대한 내용
- \<link <span style="color:skyblue">rel</span>=<span style="color:orange">"가져올 문서와의 관계"</span> <span style="color:skyblue">href</span>=<span style="color:orange">"경로"</span>>
    - 외부 문서를 연결할 때 사용
    - 특히 icon이나 CSS 문서를 불러와 연결
    - 속성
        - rel = (필수속성) 관계 지정, ex)stylesheet, icon, CSS
        - href = 경로 지정

### style
- \<style>\</style>
    - CSS 속성을 외부에서 가져오지 않고 HTML 문서 내부에서 작성하고 싶을 때 

### script
- \<script>\</script>
    - JavaScript를 HTML 내부에서 작성하고 싶을 때
- \<script <span style="color:skyblue">src</span>=<span style="color:orange">"경로"</span>>\</script>
    - 외부에서 작성된 JavaScript를 불러오고 싶을 때

### body
- 각종 태그들을 활용해 웹 페이지에 실질적으로 보여지는 내용에 해당하는 부분
- [HTML mds](https://developer.mozilla.org/ko/docs/Web/HTML/Element "HTML 요소 mdn")

### 작성한 HTML 문서는 [W3C validator](https://validator.w3.org "웹 표준 검사 사이트")에 접속하여 웹 표준에 부합한지 테스트 해볼 수 있다.