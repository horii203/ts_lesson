// : number これは数値ですという意味
function add(n1: number, n2: number){
    return n1 + n2;
}

const number1 = '5';
const number2 = 2.8;

const result =add(number1 , number2);
console.log(result);

let test = 5; // 型推論されるので:numberは不要
test = 'hello'; // 文字列を入れるとエラーになる