# HTML
구조를 만드는 역할

## 기본 형태
\<<span style="color:blue">TAG</span> <span style="color:skyblue">속성1</span>=<span style="color:orange">"값1"</span> <span style="color:skyblue">속성2</span>=<span style="color:orange">"값2"</span>>content\<<span style="color:blue">/TAG</span>> <- 전체를 요소(element)라고 칭함

[HTML mdn](https://developer.mozilla.org/ko/docs/Web/HTML/Element "HTML 요소 mdn")
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

### abbr Tag
약어를 지정
- 보통 title 속성을 사용 사용하여 전체 글자나 설명 제공
```html
<abbr title="HyperText Markup Language">HTML</abbr> study
```
- [abbr mdn](https://developer.mozilla.org/ko/docs/Web/HTML/Element/abbr "abbr mdn")

#

### b Tag
문체가 다른 글자의 범위를 <b>구분</b>하는데 설정
- 특별한 의미를 가지지 않는 부분에 사용
- 읽기 흐름에 도움을 주는 용도로 사용
- 기본적으로 글자가 두껍게 표시
- 글자를 두껍게 표시하려면 기본적으로 css로 사용할 것.
- [b mdn](https://developer.mozilla.org/ko/docs/Web/HTML/Element/b "b mdn")

### mark Tag
사용자의 <b>(시각적)관심을 끌기 위해</b> 하이라이팅 할 때 사용
- 기본적으로 형광펜을 사용할 때 처럼 글자 배경이 노란색으로 표시됨.
- 의미보다 시각적인 부분에 특화
- [mark mdn](https://developer.mozilla.org/ko/docs/Web/HTML/Element/mark "mark mdn")


### em Tag
단순한 <b>의미 강조</b>를 표시
- 중첩 가능
- 중첩될수록 강조의 의미가 강해짐
- 기본적으로 이탤릭체로 표시
- 정보통신보조기기 등에서 구두 강조로 발음됨
- [em mdn](https://developer.mozilla.org/ko/docs/Web/HTML/Element/em "em mdn")

### strong Tag
의미의 <b>중요성</b>을 나타내기 위해 사용.
- b Tag와 마찬가지로 글자가 두껍게 표시
- 의미의 중요성에 초점
- [strong mdn](https://developer.mozilla.org/ko/docs/Web/HTML/Element/strong "strong mdn")

### i Tag
문체가 다른 글자의 범위를 <b>구분</b>하는데 설정
- b Tag와 마찬가지로 글자의 범위를 구분하기 위해 사용
- b Tag가 평범한 글자에 사용된다면 i Tag는 아이콘이나 특수기호에 사용
- 기본적으로 이탤릭체로 표시
- [Font awesome 사이트](https://fontawesome.com/ "Font awesome site")를 link하여 사용하면 유용
- [i mdn](https://developer.mozilla.org/ko/docs/Web/HTML/Element/i "i mdn")

#

### dfn Tag
용어를 정의할 때 사용
- dl, dt, dd는 설명하려는 용어가 사전처럼 많을 때 유용하다면 dfn은 특정 하나의 용어를 설명할 때 유용
- [dfn mdn](https://developer.mozilla.org/ko/docs/Web/HTML/Element/dfn "dfn mdn")

#

### cite Tag
창작물에 대한 참조를 설정
- 책, 논문, 영화, TV 프로그램, 노래, 게임 등 창작물의 제목을 참조할 때 사용
- [cite mdn](https://developer.mozilla.org/ko/docs/Web/HTML/Element/cite "cite mdn")

#

### q Tag
짧은 인용문을 설정
- 긴 인용문일 경우 block요소인 blockquote 사용
- [q mdn](https://developer.mozilla.org/ko/docs/Web/HTML/Element/cite "q mdn")

#

### u Tag
밑줄이 있는 글자를 설정
- 의미가 없는 태그이므로 css로 커버 가능
- 순수하게 꾸미는 용도의 요소로 사용
- a tag와 헷갈릴 수 있는 위치에서 사용하지 않도록 주의
- css의 text-decoration : underline;을 사용할 것을 권장
- [u mdn](https://developer.mozilla.org/ko/docs/Web/HTML/Element/u "u mdn")

#

### code Tag
컴퓨터 코드 범위를 설정
- 특정 문장 안에 코드가 삽입되어 있는 경우 사용
- 기본적으로 Monospace 글꼴
- [code mdn](https://developer.mozilla.org/ko/docs/Web/HTML/Element/code "code mdn")

#

### kbd Tag
키보드에서 사용자 입력을 나타내는 텍스트 범위를 설정
- Ctrl, Alt처럼 키보드의 특정한 키를 표시할 때 유용
- 기본적으로 Monospace 글꼴
- [kbd mdn](https://developer.mozilla.org/ko/docs/Web/HTML/Element/kbd "kbd mdn")

#

### sup, sub Tag
문자를 첨자로 설정
- sup : 위 첨자
- sub : 아래 첨자
-[sup](https://developer.mozilla.org/ko/docs/Web/HTML/Element/sup "sup mdn") / [sub](https://developer.mozilla.org/ko/docs/Web/HTML/Element/sub "sub mdn") mdn

#

### time Tag
날짜나 시간을 나타내기 위한 목적으로 사용
- datetime 속성으로 유효한 정확한 날짜 문자를 사용하여 작성
- [유효한 datetime 값](https://developer.mozilla.org/ko/docs/Web/HTML/Element/time#%EC%9C%A0%ED%9A%A8%ED%95%9C_datetime_%EA%B0%92 "유효한 날짜 문자")
- [time mdn](https://developer.mozilla.org/ko/docs/Web/HTML/Element/time "time mdn")

#

### span Tag
아무런 의미가 없는 요소
- block 요소인 div와 마찬가지로 inline 요소에서 의미가 없이 사용
- 활용범위가 넓음
- [span mdn](https://developer.mozilla.org/ko/docs/Web/HTML/Element/span "span mdn")

#

### br Tag
줄 바꿈 요소
- 빈 태그 \<br />
- block요소의 hr 태그의 inline 버전
- br태그를 여러번 사용해서 간격을 나타내지 말고 나누어지는 요소의 line-height를 조정하여야 한다.
- [br mdn](https://developer.mozilla.org/ko/docs/Web/HTML/Element/br "br mdn")

#

### del, ins Tag
삭제된 텍스트의 범위(del)와 새로 추가된 텍스트의 범위(ins)를 지정
- cite, datetime 속성 사용가능
    - cite = URL : 제거나 추가된 이유나 변경사항을 설명하는 정보의 URL 적용가능
    - datetiem = [유효한 날짜 문자](https://developer.mozilla.org/ko/docs/Web/HTML/Element/time#%EC%9C%A0%ED%9A%A8%ED%95%9C_datetime_%EA%B0%92 "유효한 날짜 문자") : 변경이 언제 일어났는지 명시 가능
- [del](https://developer.mozilla.org/ko/docs/Web/HTML/Element/del "del mdn") / [ins](https://developer.mozilla.org/ko/docs/Web/HTML/Element/ins "ins mdn") mdn

#

#### inline 요소의 모양을 바꾸기 위해서 display 속성을 block으로 바꾸어 사용할 수 있다.

#

# 멀티미디어

### img Tag
이미지 삽입
- 빈 태그 \<img />
- 속성
    - src : 이미지 URL(필수)
    - alt : 이미지 대체 텍스트(필수)
    - width : 이미지 가로 너비
    - height : 이미지 세로 너비
        - width, height 둘 중 하나만 사용하면 나머지 속성은 비율에 맞게 조정됨.
    - srcset : 브라우저에게 제시할 이미지 URL과 원본 크기의 목록을 정의
        - 반응형으로 처리 할 때 주로 사용
        - 경로 너비를 여러개 작성하면 뷰 포트에 맞춰서 적합한 이미지를 골라낼 수 있음
        - srcset이 적용된 환경에서는 src가 적용되지 않는다.
        - 출력 될 이미지의 목록
        - w, x 단위로 작은 순서부터 입력해야함.
            - w : 이미지의 원본 크기 중 가로 너비를 의미 ex) 400 x 300px -> 400w
            - x : 이미지의 비율 의도를 의미 (몇 배인지)
        - 고정된 이미지 크기를 유지하기 위해 width 속성을 추가할 수 있다.

        ```html
        <img
            srcset="image1.png 400w,
                    image2.png 700w,
                    image3.png 1000w"
            src="image.png"
            alt="image">
        
        <img
            srcset="image1.png 1x,
                    image2.png 1.5x,
                    image3.png 2x"
            src="image.png"
            alt="image">
        ```
    - size : 미디어의 조건과 해당 조건일 때 이미지 최적화 크기의 목록을 정의
        - 반응형으로 처리 할 때 주로 사용
        - "(미디어 조건) 이미지 크기" 형태로 작성하여 최적화된 조건을 명시
        ```html
        <img
            srcset="image1.png 400w,
                    image2.png 700w,
                    image3.png 1000w"
            sizes="(min-width: 1000px) 700px"   <!--최소 너비가 1000px 이상일 때 최적화 출력 크기를 700px로 지정-->        
            src="image.png"
            alt="image">
        ```
- [img mdn](https://developer.mozilla.org/ko/docs/Web/HTML/Element/img "img mdn")

#

### audio Tag
소리 콘텐츠(mp3) 삽입
- 속성
    - autoplay : 사이트에 들어가자마자 바로 재생
    - controls : 재생버튼, 정지버튼, 음량 등 제어 메뉴 표시
    - loop : 소리 콘텐츠 재생이 끝나면 처음부터 다시 재생
    - preload : 페이지가 로드될 때 파일을 미리 어떻게 로드해 놓을 지 지정
        - none : 로드하지 않음,(플레이가 되면 로드 시작)
        - metadata : 기본값, 메타데이터만 로드해 놓음(기본적인 정보)
        - auto : 전체 파일 로드
    - src : 콘텐츠 URL
    - muted : 음소거 여부
- [audio mdn](https://developer.mozilla.org/ko/docs/Web/HTML/Element/audio "audio mdn")

#

### video Tag
동영상 콘텐츠(mp4) 삽입
- 속성
    - autoplay : 사이트에 들어가자마자 바로 재생
    - controls : 재생버튼, 정지버튼, 음량 등 제어 메뉴 표시
    - crossorigin : 외부 특정 사이트로부터 동영상을 가져올 때 동일한 출처인지 확인
    - loop : 소리 콘텐츠 재생이 끝나면 처음부터 다시 재생
    - muted : 음소거 여부
    - poster : 동영상 썸네일 이미지 URL
    - preload : 페이지가 로드될 때 파일을 미리 어떻게 로드해 놓을 지 지정
        - none : 로드하지 않음,(플레이가 되면 로드 시작)
        - metadata : 기본값, 메타데이터만 로드해 놓음(기본적인 정보)
        - auto : 전체 파일 로드
    - src : 콘텐츠 URL
    - width : 동영상 가로 너비
    - height : 동영상 세로 너비
- [video mdn](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Video "video mdn")

#

### figure, figcaption Tag
- figure : 이미지나 삽화 도표 등의 영역 설정
- figcaption : figure에 포함되어 이미지나 삽화 등의 설명을 표시
```html
    <figure>
        <img src="" alt=""/>
        <figcaption>이미지 설명</figcaption>
    </figure>
```
- [figure](https://developer.mozilla.org/ko/docs/Web/HTML/Element/figure "figure mdn") / [figcaption](https://developer.mozilla.org/ko/docs/Web/HTML/Element/figcaption "figcaption mdn") mdn

#

### iframe Tag
다른 HTML 페이지를 현재 페이지에 삽입
- 속성
    - name : 프레임의 이름
    - src : 포함할 문서의 URL
    - width : 프레임의 가로 너비
    - height : 프레임의 세로 너비
    - allowfullscreen : 전체 화면 모드 사용 여부
    - frameborder : 프레임 테두리 사용 여부 (0,1)
    - sandbox : 보안을 읽기 위한 읽기 전용으로 삽입
        - allow-form : 양식 제출 가능
        - allow-scriots : 스크립트 실행 가능
        - allow-same-origin : 같은 출처(도메인)의 리소스 사용 가능
- [iframe mdn](https://developer.mozilla.org/ko/docs/Web/HTML/Element/iframe "iframe mdn")

#

### canvas Tag
Canvas API 나 WebGL API를 사용하여 그래픽이나 애니메이션을 랜더링
- 기본적으로 JavaScript를 활용해서 그림을 그려나감.
- [canvas mdn](https://developer.mozilla.org/ko/docs/Web/API/Canvas_API "canvas mdn")

#

### script Tag
스크립트 코드를 문서에 포함하거나 참조
- 속성
    - async : 스크립트의 비동기적 실행 여부
        - 동기적 : 코드가 위에서부터 순차적으로 실행
        - 비동기적 : 필요한 코드가 어디 있더라도 불러와서 실행 가능
        - src 속성 필수
    - crossorigin : 별도의 도메인을 사용하는 사이트의 오류 로깅을 허용하기 위해 사용
    - defer : 문서 파싱 후 작동 여부
        - 실행 시점을 제어 가능
        - defer가 없을 경우 물리적인 순서를 강제한 것
    - src : 참조할 외부 스크립트 URL
        - 외부의 js파일을 가져왔다면 script 내부에 작성된 스크립트 내용은 무시됨.
    - type : MIME 타입
- [script mdn](https://developer.mozilla.org/ko/docs/Web/HTML/Element/script "script mdn")

#

### noscript Tag
스크립트를 지원하지 않는 경우 삽입할 HTML을 정의
- 스크립트를 지원하지 않는 일부 브라우저의 경우 (현재는 거의 없음)
- [noscript mdn](https://developer.mozilla.org/ko/docs/Web/HTML/Element/noscript "noscript mdn")

#

# 표 콘텐츠

### table, tr, th, td Tag
데이터 표 생성 \<table>, 행 \<tr>, 열 (\<th>, \<td>)
- table
    - 기본적으로 block요소처럼 동작
    - display : table
- tr
    - display : table-row
- th : 머리글 칸 지정
    - 속성
        - abbr : 열에 대한 간단한 설명
        - headers : 관련된 하나 이상의 다른 머리글 칸 id 속성 값(상위 th에 연결하는 것)
        - colspan : 확장하려는(병합) 열의 수
        - rowspan : 확장하려는(병합) 행의 수
        - scope : 자신이 누구의 머리글 칸인지 명시
            - col : 자신의 열
            - colgroup : 모든 열
            - row : 자신의 행
            - rowgroup : 모든 행
            - auto : 기본값
    - display : table-cell
- td : 일반 칸을 지정
    - 속성
        - headers : 관련된 하나 이상의 다른 머리글 칸 id 속성 값(th에 연결하는 것)
        - colspan : 확장하려는(병합) 열의 수
        - rowspan : 확장하려는(병합) 행의 수
    - display : table-cell
- [table](https://developer.mozilla.org/ko/docs/Web/HTML/Element/table "table mdn") / [tr](https://developer.mozilla.org/ko/docs/Web/HTML/Element/tr "tr mdn") / [th](https://developer.mozilla.org/ko/docs/Web/HTML/Element/th "th mdn") / [td](https://developer.mozilla.org/ko/docs/Web/HTML/Element/td "td mdn") mdn

#

### caption Tag
표의 제목을 설정
- table당 하나의 caption만 사용 가능
- 열리는 table tag 바로 다음에 작성해야 함.
- display : table-caption
- [caption mdn](https://developer.mozilla.org/ko/docs/Web/HTML/Element/caption "caption mdn")

#

### colgroup, col Tag
표의 열들을 공통적으로 정의하는 컬럼(\<col>)과 컬럼의 집합(\<colgroup>)
- 속성
    - span : 연속되는 열의 수
- colgroup : display : table-column-group
- col : display : table-column
    - 빈 태그 \<col />
- [colgroup](https://developer.mozilla.org/ko/docs/Web/HTML/Element/colgroup "colgroup mdn") / [col](https://developer.mozilla.org/ko/docs/Web/HTML/Element/col "col mdn") mdn

#

### thead, tbody, tfoot Tag
표의 머리글\<thead>, 본문\<tbody>, 바닥글\<tfoot> 지정
- 기본적으로 테이블의 레이아웃에 영향을 주지 않음
- thead : display : table-header-group
- tbody : display : table-row-group
- tfoot : display : table-footer-group
- [thead](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody "tbody mdn") / [tbody](https://developer.mozilla.org/ko/docs/Web/HTML/Element/tbody "tbody mdn") / [tfoot](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot "tfoot mdn") mdn

#

# 양식

### form Tag
웹서버에 정보를 제출하기 위한 양식 범위 지정
- 여러 입력 양식을 하나의 form으로 묶어서 특정 서버로 전송
- form이 다른 form을 자식 요소로 포함할 수 없다.
- 속성
    - action : 전송한 정보를 처리할 웹페이지의 URL
    - autocomplete : 사용자가 이전에 입력한 값으로 자동 완성 기능을 사용할 것인지 여부
    - method : 서버로 전송할 HTTP 방식
        - GET : 양식의 정보가 URL에 담겨져서 전송
        - POST : 양식의 정보가 URL에는 담겨져있지 않음, 의도하는 경우에는 정보를 파악할 수 있으므로 암호화 후 전송하는 방식을 주로 사용한다. 
    - name : 서버로 양식을 전송할 때 양식의 고유한 이름을 지정해서 구분 가능하게 전송
    - novalidate : 서버로 전송시 양식 데이터의 유효성을 검사하지 않도록 지정
        - 양식에 맞지 않으면 전송하지 않는 것이 기본값이지만 novalidate가 지정되면 양식을 무시해도 양식을 전송
    - target : 서버로 전송 후 응답받을 방식을 지정
        - _self, _blank
- display : block
- [form mdn](https://developer.mozilla.org/ko/docs/Web/HTML/Element/form "form mdn")

#

### input Tag
사용자에게 입력 받을 데이터 양식
- 빈 태그 \<input />
- HTML에서 가장 복잡하고 가장 강력한 요소 중 하나.
- 속성
    - autocomplete : 사용자가 이전에 입력한 값으로 자동 완성 기능을 사용할 것인지 여부
    - autofocus : 페이지가 로드될 때 자동으로 포커스(커서 위치)
        - 문서 내에 유일하게 존재해야 함.
    - checked : 양식이 선택되었음을 표시
        - type이 radio, checkbox일 경우에만 사용 가능
    - disabled : 양식을 비활성화
    - form : \<form>의 id 속성 값을 연결하면 form 안에 작성되어 있지 않더라도 연결해서 사용가능하게 함.
    - list : 참조할 \<datalist>의 id 속성 값
    - max, min : 지정 가능한 최대 값, 최소 값
        - type이 number일 경우에만 사용 가능
    - maxlenght : 입력 가능한 최대 문자 수
        - tpye이 text, email, password, tel, url일 경우에만
    - multiple : 둘 이상의 값을 입력 할 수 있는지 여부
        - type이 email, file일 경우에만, email일 경우 쉼표(,)로 구분
    - name : 양식이 가지고 있는 이름
        - 해당하는 데이터가 어떤 데이터를 가지고 있는지 이름 지정
    - placeholder : 사용자가 입력할 값의 힌트
    - readonly : 웹 상에서 수정 불가한 읽기 전용
    - step : 유효한 증감 숫자의 간격
        - type 속성 값이 number, range 일 경우에만
    - src : type이 image인 경우 이미지의 URL
    - alt : type이 image인 경우 이미지의 대체 텍스트
    - type : 입력 받을 데이터의 종류
        - [type 유형](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input#%3Cinput%3E_%EC%9C%A0%ED%98%95 "타입 유형")
    - value : 양식의 초기 값
- [input mdn](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input "input mdn")

#

### label Tag
라벨 가능 요소의 제목
- for 속성으로 라벨 가능 요소를 참조하거나 콘텐츠로 포함
- 라벨 가능 요소 : button, input, progress, select, textarea
- display : inline
- [label mdn](https://developer.mozilla.org/ko/docs/Web/HTML/Element/label "label mdn")

#

### button Tag
선택 가능한 버튼을 지정
- input type으로 만들 수 있지만 직관적으로 구별되는 button 생성
- 속성
    - autofocus : 페이지가 로드될 때 자동으로 포커스(커서 위치)
        - 문서 내에 유일하게 존재해야 함.
    - disabled : 양식을 비활성화
    - form : \<form>의 id 속성 값을 연결하면 form 안에 작성되어 있지 않더라도 연결해서 사용가능하게 함.
    - name : 양식이 가지고 있는 이름
        - 해당하는 데이터가 어떤 데이터를 가지고 있는지 이름 지정
    - type : 버튼의 타입
        - button, reset, submit
- display : inline-block
- [button mdn](https://developer.mozilla.org/ko/docs/Web/HTML/Element/button "button mdn")

#

### textarea Tag
여러 줄의 일반 텍스트 양식
- input의 text는 한 줄, textarea tag는 여러 줄
- 속성
    - autocomplete : 사용자가 이전에 입력한 값으로 자동 완성 기능을 사용할 것인지 여부
    - autofocus : 페이지가 로드될 때 자동으로 포커스(커서 위치)
        - 문서 내에 유일하게 존재해야 함.
    - disabled : 양식을 비활성화
    - form : \<form>의 id 속성 값을 연결하면 form 안에 작성되어 있지 않더라도 연결해서 사용가능하게 함.
    - maxlenght : 입력 가능한 최대 문자 수
    - name : 양식이 가지고 있는 이름
        - 해당하는 데이터가 어떤 데이터를 가지고 있는지 이름 지정
    - placeholder : 사용자가 입력할 값의 힌트
    - readonly : 웹 상에서 수정 불가한 읽기 전용
    - rows : 양식이 총 몇 줄을 보일지 지정
        - 기본 값 : 2
- [textarea mdn](https://developer.mozilla.org/ko/docs/Web/HTML/Element/textarea "textarea mdn")

#

### fieldset, legend Tag
같은 목적의 양식을 그룹화\<fieldset>하여 제목\<legend>을 지정
- fieldset : 같은 목적의 양식을 그룹화
    - 속성
        - disabled : 그룹 내 모든 양식 요소를 비활성화
        - form : 그룹이 속할 하나 이상의 \<form>의 id 속성 값
        - name : 그룹의 이름
- [fieldset](https://developer.mozilla.org/ko/docs/Web/HTML/Element/fieldset "fieldset mdn") / [legend](https://developer.mozilla.org/ko/docs/Web/HTML/Element/legend "legend mdn") mdn
    
#

### select, datalist, optgroup, option Tag
옵션의 선택 메뉴 제공
- 옵션(\<option>,\<optgroup>)의 선택메뉴\<select>나 자동완성\<datalist>을 제공
- \<select> : 옵션을 선택하는 메뉴
    - 속성
        - autocomplete : 사용자가 이전에 입력한 값으로 자동 완성 기능을 사용할 것인지 여부
        - disabled : 양식을 비활성화
        - form : \<form>의 id 속성 값을 연결하면 form 안에 작성되어 있지 않더라도 연결해서 사용가능하게 함.
        - multiple : 다중 선택 여부
        - name : 선택 메뉴의 이름
        - size : 한 번에 볼 수 있는 행의 개수
- \<datalist> : \<input>에 미리 정의된 옵션을 지정하여 자동완성 기능을 제공하는데 사용
    - \<input>의 list 속성 바인딩
    - \<option>을 포함하여 정의된 옵션을 지정
    - \<input>으로 양식을 미리 지정해놓고 \<input>의 list 속성과 \<datalist>의 id 속성을 연결하여 사용
```html
<input type="text" list="fruits">

<datalist id="fruits">
    <option>Apple</option>
    <option>Orange</option>
    <option>Banana</option>
    <option>Mango</option>
    <option>Fineapple</option>
</datalist>
```
- \<optgroup> : \<option>을 그룹화
    - 속성
        - label : (필수) 옵션 그룹의 이름
        - disabled : 옵션 그룹을 비활성화
- \<option> : \<select>나 \<datalist>에서 사용될 옵션
    - 선택적으로 빈 태그로 사용 가능
    - 속성
        - disabled : 옵션을 비활성화
        - label : 화면에 표시될 옵션의 제목
        - selected : 옵션이 선택되었음을 표시
        - value : 서버에 양식으로 제출될 값
        - label과 value의 경우 태그 안에 내용이 대신할 수 있음 

```html
<select>
  <optgroup label="Coffee">
    <option>Americano</option>
    <option>Caffe Mocha</option>
    <option label="Cappuccino" value="Cappuccino"></option>
  </optgroup>
  <optgroup label="Latte" disabled>
    <option>Caffe Latte</option>
    <option>Vanilla Latte</option>
  </optgroup>
  <optgroup label="Smoothie">
    <option>Plain</option>
    <option>Strawberry</option>
    <option>Banana</option>
    <option>Mango</option>
  </optgroup>
</select>
```
- [select] / [datalist] / [optgroup] / [option] mdn

#

### progress Tag
작업의 완료 진행률을 표시(로딩 바)
- 속성
    - max : 작업의 총 량
    - value : 작업의 진행량
        - 값이 가변하는 경우 JavaScript로 값을 조정함
        - max 속성이 생략된 경우 0~1 사이의 숫자를 적어야 함.
- [progress mdn](https://developer.mozilla.org/ko/docs/Web/HTML/Element/progress "progress mdn")

#

# 전역속성
모든 HTML 요소에서 공통적으로 사용 가능한 속성.

### class
공백으로 구분된 요소의 별칭을 지정
- css 혹은 JavaScript의 요소 선택기를 통해서 요소를 선택하거나 접근
- 중복으로 사용 가능
- .class
- [class mdn](https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/class "class mdn")

#

### id
문서에서 <b>고유한</b> 식별자를 정의
- css 혹은 JavaScript의 요소 선택기를 통해서 요소를 선택하거나 접근
- 문서내에서 고유한 id로 설정해야 한다.
- #id
- [id mdn](https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/id "id mdn")

#### class는 고유하지 않아도 되지만 id는 고유해야한다.

#

