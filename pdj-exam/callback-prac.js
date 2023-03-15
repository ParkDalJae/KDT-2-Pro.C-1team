function exampleOneInnerFunc(message){
  console.log(message)
}
function exampleOne(message){
  exampleOneInnerFunc(message)
}

exampleOne("첫번째 함수 예제입니다.")
/*
  * * 첫번째 함수인 exampleOne은 임의의 함수를 호출하는 기능을 합니다.
  * * 호출할 함수의 기능이 무엇인지는 '호출 될' 함수에게 맡기는 형태입니다.
  * * 따라서 exampleOne()이라는 함수의 입장에서는 console.log()를 실행하는 것인지 모릅니다.
  * * 호출 '당한'. exampleOneInnerFunc() 함수가 어떤 기능을 하는지는 exampleOne()함수가 알 필요가 없습니다.
  * * 이러한 형태를 '콜백'이라고 합니다.
  * * 두개의 함수로 역할을 분리하는 점에서 작성 의도에 따라 매우 편리하게
  * * 분리하여 관리 할 수 있는 큰 장점이 있습니다.
  * 
*/
function exampleTwo(message, callback){
  callback(message)
}
exampleTwo("두번째 함수 예제입니다.", function(message){
  console.log(message)
})
/*
* * exampleTwo() 함수는 exampleOne() 함수와 다르게
* * 호출될 함수의 기능을 직접 작성하는 형태입니다.
* * 이러한 형태도 '콜백'이라고 합니다.
* * 해당 방식을 더욱 많이 사용하는 경향이 있습니다/
* * 기능을 분리하여 작성하는 것이 아닌, 호출될 함수의 기능을
* * 직접 작성하는 것이기 때문에, 호출될 함수의 기능을
* * '호출함과 동시에' 작성, 파악 할 수 있습니다.
* * 예제의 함수는 함수이긴 하나 '이름없는' 익명 함수입니다.
* 
* * 함수는 exampleTwo() 라는 함수 하나이며, 콜백함수 한개를 가지고있습니다.
* * exampleTwo() 첫번째 매개변수 message는 익명 함수 (콜백함수)의 매개변수로 전달됩니다.)
* * "인자가 전달되었다."라고 개발자들이 표현합니다.
*
*/