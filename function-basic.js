"use strict";
// never give up

//함수의 기본적인개념 -> 자바스크립트에서 어떻게 함수가 실행되는지

// 함수 선언
function doSomething(v) {
  console.log(v);
}

function add(a, b) {
  const sum = a + b;
  return sum;
}

// 함수 호출
doSomething(add()); // 이건 함수를 호출하고 호출한 결과를
//doSomething함수로 전달한것이다
doSomething(add); // 함수 자체를 전달할때는 이렇게 함수의
//이름만으로 전달해야한다.***

// 위 두코드의 차이점을 확실히 알아야해
