let n = 5;

switch (n % 5) {
    case 0: {
        console.log('5의 배수입니다.');
        break;
    }
    case 1:
    case 2:
    case 3:
    case 4:
        console.log('5의 배수가 아닙니다.');
    default: {
        console.log(n);
    }
}