const button = document.querySelector('button');
// ! as HTMLInputElement ちゃんとこの要素があることを確認しましたということ
const input1 = document.getElementById('num1')! as HTMLInputElement;
const input2 = document.getElementById('num2')! as HTMLInputElement;

// この関数には「数値」のみしか渡せないようにする　: number 型の指定
function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener('click', function() {
  console.log(add(+input1.value, +input2.value)); // valueは文字列
});
