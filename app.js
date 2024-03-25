// : number これは数値ですという意味
function add(n1, n2) {
    return n1 + n2;
}
var number1 = '5';
var number2 = 2.8;
var result = add(number1, number2);
console.log(result);
var test = 5; // 型推論されるので:numberは不要
test = 'hello'; // 文字列を入れるとエラーになる
