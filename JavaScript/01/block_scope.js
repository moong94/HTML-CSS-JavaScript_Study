// 블록 스코프

var a = 0;
{
    a++;
    console.log(a);
}

{
    var b = 0;
    console.log(b);
}

console.log(b);

// let, const의 경우 마지막 문장은 error 일 것이지만 var의 경우 함수에서만 구분되는 keyword이기 때문에 문제 없이 출력 가능
