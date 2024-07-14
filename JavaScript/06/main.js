// HTML 요소(Element) 1개 검색/찾기
// 가장 먼저 찾은 요소 하나만 반환
let boxEl = document.querySelector('.box');

console.log(boxEl);

// HTML 요소에 적용할 수 있는 메소드
// boxEl.addEventListener(Event,Handler);

boxEl.addEventListener('click',function() {
    console.log('Click');
    boxEl.classList.add('active');
    console.log(
        boxEl.classList.contains('active')
    );
    boxEl.classList.remove('active');
    console.log(boxEl.classList.contains('active'));
});


let boxEl2 = document.querySelector('.box');

boxEl2.classList.add('active');
let isContains = boxEl2.classList.contains('active');
console.log(isContains);

boxEl.classList.remove('active');
isContains = boxEl.classList.contains('active');
console.log(isContains);

const boxEls = document.querySelectorAll('.box');
console.log(boxEls);

boxEls.forEach(function (boxEl, index){
    boxEl.classList.add(`order-${index + 1}`);
    console.log(index, boxEl);
})