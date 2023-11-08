/*
    index.html에서 사용하는 js 파일입니다.
*/
function add(n1, n2, n3=10) {
    if (n3 !== undefined) {
        return n1 + n2 + n3;
    }
    return n1 + n2;
}

function minus(n1, n2) {
    if (n1 > n2) {
        return n1 - n2;
    } else {
        return n2 - n1;
    }
}

function multiply(n1, n2) {
    return n1 * n2;
}