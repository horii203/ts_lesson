var button = document.querySelector('button');
// ! as HTMLInputElement ちゃんとこの要素があることを確認しましたということ
var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
// この関数には「数値」のみしか渡せないようにする　: number 型の指定
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener('click', function () {
    console.log(add(+input1.value, +input2.value)); // valueは文字列
});
