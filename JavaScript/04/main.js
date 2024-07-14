function helloFunc1() {
    console.log(1234);
}

helloFunc2();



function helloFunc2() {
    return 123;
}

let x = returnFunc2();

console.log(x);



function sum(a,b) {     // a와 b는 매개변수(Parameters)
    return a + b;
}

// 재사용
let a = sum(1, 2);
let b = sum(7, 12);
let c = sum(2, 4);

console.log(a,b,c);



// 기명 함수
function hello() {
    console.log('hello');
}

let world = function () {
    console.log('world');
}

hello();
world();


// 메소드
const moong = {
    name : 'moong',
    age : '30',

    //메소드(Method)
    getName : function(){
        return this.name;
    }
}

const hisName = moong.getName();
console.log(hisName);