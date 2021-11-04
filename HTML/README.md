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

#

### 블록 요소 & 인라인 요소

- 블록요소
    - div, h1, p
    - 사용 가능한 최대 가로 너비를 사용
    - 가로, 세로 사이즈 지정할 수 있다.
    - 수직으로 쌓인다.
    - margin, padding 위, 아래, 좌, 우 사용 가능
- 인라인요소
    - span, img
    - 필요한 만큼의 너비를 사용
    - 가로, 세로 사이즈를 지정할 수 없다.
    - 수평으로 쌓인다.
    - margin, padding 위, 아래는 사용할 수 없다.

display속성을 사용해서 블록, 인라인 요소를 바꿀 수 있다.

# 

### 메타데이터
문서의 정보를 지칭하는 요소들
- charset : 페이지의 문자 인코딩 선언
    - UTF-8 (조합형)
- content : http-equiv나 name의 속성으로 사용
- http-equiv : 서버나 사용자의 작동방식을 변경할 수 있는 지시를 정의할 수 있음
- name : 문서레벨의 메타데이터 이름 정의
    - ex) author, description, generator,...

[Meta mdn](https://developer.mozilla.org/ko/docs/Web/HTML/Element/meta "메타데이터 mdn")

# 컨텐츠 구분 태그

### Base Tag
- 상대경로를 입력할 때 공통된 부분의 주요한 경로를 미리 지정할 수 있음.
- html 문서 하나당 하나의 base태그만 사용 가능


type을 사용할 경우 참고 [MINE Type mdn](https://developer.mozilla.org/ko/docs/Web/HTTP/Basics_of_HTTP/MIME_types "MIME type mdn")

#

### Header & Footer Tag
- 전역 속성만 포함
- 후손으로 사용될 수 없다.
- Header : 소개나 탐색을 돕는 것을 그룹으로 나타냄 [header mdn](https://developer.mozilla.org/ko/docs/Web/HTML/Element/header "Header mdn")
- Footer : 일반적으로 작성자, 저작권, 관련 문서의 링크에 대한 정보를 나타냄 [footer mdn](https://developer.mozilla.org/ko/docs/Web/HTML/Element/header "Footer mdn")

#

### h1 - h6 Tag
- 6단계의 문서 제목 구현
- 전역 속성만 포함
- 문서의 목차를 만드는 것처럼 사용가능
- 제목 크기의 크기를 줄이기 위해 낮은 단계를 사용하지말고 css의 font-size 속성을 사용해야한다.
    - 구조를 나타내는 용도로 사용되는 것이므로 글자 크기는 따로 지정해서 사용하는 것이 좋다.
- h1부터 중간단계를 건너뛰지 말고 순차적으로 기입해야함.
- h1은 한 문서에 하나만 사용할 것을 권장함.
- [h1-h6 mdn](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Heading_Elements "h1-h6 mdn")
#

### main Tag
페이지의 핵심적인 내용이 담겨져 있는 부분을 나타냄
- 문서에 하나만 존재
- 전역 속성만 포함
- [main mdn](https://developer.mozilla.org/ko/docs/Web/HTML/Element/main "Main mdn")

#

### article Tag
독립적으로 구분되거나, 재사용 가능한 영역 설정
- 독립성 유지하면서 재사용도 가능
- \<h1>-\<h6>를 포함하여 식별
- \<time>을 datetime 속성으로 작성
- section을 감쌀 수 있다.
- [article mdn](https://developer.mozilla.org/ko/docs/Web/HTML/Element/article "Article mdn")

# 

### section Tag
문서의 일반적인 영역을 설정
- \<h1>-\<h6>를 포함하여 식별
- 영역을 나누는 용도로 사용되어 \<article>보다 유연하게 사용
- \<div>는 별 다른 의미 없이 영역을 나눈다면, \<section>은 제목을 포함해서 의미를 갖는 영역을 나눈다. 
- article을 감쌀 수 있다.
- [section mdn](https://developer.mozilla.org/ko/docs/Web/HTML/Element/section "Section mdn")

#

### aside Tag
문서의 별도 콘텐츠를 설정
- 사이드바
- 콜아웃 박스
- [aside mdn](https://developer.mozilla.org/ko/docs/Web/HTML/Element/aside "Aside mdn")

#

### nav Tag
다른 페이지 링크를 제공하는 영역을 설정
- 메뉴, 목차, 색인
- a, ol, ul, li 태그와 함께 많이 사용 됨.
- [nav mdn](https://developer.mozilla.org/ko/docs/Web/HTML/Element/nav "Nav mdn")

#

### address Tag
body, article, footer에서 연락처 정보를 제공하기 위해 포함하여 사용
- 이메일, 전화번호, 주소 등
- [adress mdn](https://developer.mozilla.org/ko/docs/Web/HTML/Element/address "Address mdn")

#

### div Tag
본질적으로 아무것도 나타내지 않는 콘텐츠 영역을 설정
- css나 js를 삽입해서 특정 영역을 스타일링, 제어를 하기 위해 많이 사용
- 꾸미는 목적으로 사용
- [div mdn](https://developer.mozilla.org/ko/docs/Web/HTML/Element/div "Div mdn")

#

# 문자 콘텐츠

### ol, ul, li Tag
- ol : 정렬된 목록, block 요소
    - type : a,A,i,I,1로 원하는 타입으로 리스트 값을 나타낼 수 있음.
    - reversed : 거꾸로된 속성
    - start : 시작하는 숫자 지정
- ul : 정렬되지 않은 목록, block 요소
- li : 각 항목, 단독으로 사용 할 수 없으며, ol이나 ul의 자식으로 포함되어야 함, list-item 요소이지만 ol,ul과 함께 쓰이므로 block요소 처럼 사용 됨.
    - value : 이하 리스트 순서가 해당 숫자로 다시 지정.
- ol + li, ul + li
- [ol](https://developer.mozilla.org/ko/docs/Web/HTML/Element/ol "ol mdn") / [ul](https://developer.mozilla.org/ko/docs/Web/HTML/Element/ul "ul mdn") / [li](https://developer.mozilla.org/ko/docs/Web/HTML/Element/li "li mdn") mdn

#

### dt, dd, dl Tag
- dt : 용어 (key)
- dd : 정의 (value)
- dl : 용어와 정의의 집합을 dl로 묶어줌
    - dl안에 dd와 dt가 포함되어 있어야 함.
```html
<dl>
    <dt>용어1</dt>
    <dd>설명1</dd>
    <dt>용어2</dt>
    <dd>설명2</dd>
</dl>
```
- [dt](https://developer.mozilla.org/ko/docs/Web/HTML/Element/dl "dt mdn") / [dd](https://developer.mozilla.org/ko/docs/Web/HTML/Element/li "dd mdn") / [dl](https://developer.mozilla.org/ko/docs/Web/HTML/Element/dl "dl mdn") mdn

#

### p Tag
하나의 문단을 설정
- 문단, 문장, 단락의 구분을 위해 사용
- [p mdn](https://developer.mozilla.org/ko/docs/Web/HTML/Element/p "p mdn")

#

### hr Tag
문단의 분리를 위해 사용
- 시각적으로 수평선 표시가 되지만 의미적 관점으로 사용해야 함.
- 빈 태그 \<hr />
- 줄바꿈을 할 시 코드에서 줄바꿈을 하는 것이 아니라 블록 요소들을 사용해 줄바꿈을 해야함.
- hr 태그도 사각형 요소이므로 border-top, border-bottm, border-left, border-right로 부분적으로 선을 지정할 수 있다.
- [hr mdn](https://developer.mozilla.org/ko/docs/Web/HTML/Element/hr "hr mdn")

#

### pre Tag
서식이 미리 지정된 텍스트 설정
- 텍스트 공백과 줄바꿈을 유지하여 표시할 수 있음
- 기본적으로 Monospace 글꼴로 표시됨.
- 코드에 작성된 양식 그대로 표시된다는 뜻.
- 시작하는 부분과 끝나는 부분을 정확히 표현해야함.
- [pre mdn](https://developer.mozilla.org/ko/docs/Web/HTML/Element/pre "pre mdn")

#

### blockquote Tag
일반적인 인용문을 설정
- 외부에서 인용된 정보라는 것을 표시
- cite 속성 : 인용된 정보의 URL입력
- [blockquote mdn](https://developer.mozilla.org/ko/docs/Web/HTML/Element/blockquote "blockquote")

#

#### 일반적으로 영역을 설정하는 요소들은 block요소

#

# 인라인 텍스트

### a Tag
현제 문서를 제외한 다른 문서의 URL로 연결할 수 있는 하이퍼링크를 설정
- download : 해당 요소가 파일을 다운로드 받는 용도로 사용됨을 의미
    - 해당 URL을 파일 형태로 download
- href : 링크 URL 속성, 필수처럼 사용해야하지만 생략 가능
    - #id를 통해 현재 문서의 해당 id가 위치한 곳으로 이동할 수 있다.
- hreflang : 연결된 페이지의 언어를 설정
    - ko, en ...
- rel : 현재 문서와 링크 URL과의 관계
    - license, prev, next ...
- target : 링크 URL의 표시 위치
    - _self : 현재 탭에서 연결
    - _blank : 새 탭에서 연결
- type : 링크 URL의 MIME 타입
- [a mdn](https://developer.mozilla.org/ko/docs/Web/HTML/Element/a "a mdn")

# 

#### inline 요소의 모양을 바꾸기 위해서 display 속성을 block으로 바꾸어 사용할 수 있다.

#### class는 고유하지 않아도 되지만 id는 고유해야한다.