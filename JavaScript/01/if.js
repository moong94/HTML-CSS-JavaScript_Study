if (true) {
    console.log("항상 실행");
}

if(false) {
    console.log("항상 실행되지 않음");
}

if (true) console.log("항상 실행");

if (false) console.log("항상 실행되지 않음");


// Falsy
if (false) console.log(false);
if (0) console.log(0);
if ('') console.log('');
if (null) console.log(null);
if (undefined) console.log(undefined);
if (NaN) console.log(NaN);

// Truthy
if (true) console.log(true);
if (37) console.log(37);
if ('Mark') console.log("Mark");
if ({}) console.log({});
if ([]) console.log([]);

// if () {} else {}
const n = 37;

if (n > 0) {
    console.log('n이 0보다 큰 경우');
} else {
    console.log('n이 0보다 크지 않은 경우');
}

// if () {} else if () {} else {}
const n = 15;

if (n % 3 === 0) {
    console.log('n 은 3 의 배수 입니다.');
} else if (n % 5 === 0) {
    console.log('n 은 5의 배수입니다.');
} else {
    console.log('n은 3의 배수도 아니고, 5의 배수도 아닙니다.');
}
