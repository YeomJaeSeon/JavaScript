//Function
//굉장히 기본적인 빌딩블럭
// 재사용 가능
// 한가지 task나 값을 저장

//1.함수 선언
// function name(param1, param2) { body ... return;}
//한함수 : 한가지일
//함수이름은 무언가를 하는 동작하는 것이기때문에
//doSomething, command형태나 verb형태
//함수이름이 짓기 힘들다! -> 함수가 하나의일을 하는게
//아닌지의심해보자
//js에서 함수는 object이다. function을 변수에 할당할수도있꼬
//param으로 줄수도있고 리턴할수도있따.(first-class function)
"use strict";
function printHello() {
  console.log("hello");
}
printHello(); // 함수 호출

function log(mes) {
  console.log(mes);
}
log("hellog");
log(1111); // string으로 바뀌어서 출력이됨
//type이 중요한 언어에선 js는 좋지않다.
//->TypeScript로 js위에 type을 입힐수가 있다.

//2. parameter(인자)
//primitive type은 parameter로 값 자체가 전달
//object tyep은 param으로 ref가 전달
function changeName(obj) {
  obj.name = "hot";
}
const winter = { name: "cool" };
console.log(winter.name);
changeName(winter);
console.log(winter.name);
// object타입은 함수의 param으로 ref가 전달되므로
//ref가 가르키는 값이 바뀌는 것이다.(cool->hot)

//3. Default parameters (es6때 추가)
function showMessage(message, from = "idonknow") {
  console.log(`${message} by ${from}`);
}
showMessage("hello");

//4. Rest Parameters(ES6)
//인자로 배열형태를 받는 형태
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
  //배열 출력할땐 for of사용하는 간단한 출력
  for (const arg of args) {
    // args -> arg로 하나씩
    //지정되는 것
    console.log(arg);
  }

  //foreach써도됨 ->추후에 알자
}
printAll("jaeseon", "suho", "yongwoo", "yousung");

//5. Local scope - 지역변수
//밖에서는 안이 보이지않고 안에서는 밖을 볼수있다.

let globalMessage = "global";
function printMessage() {
  let message = "hello";
  console.log(globalMessage);
  console.log(message);
  function childMessage() {
    console.log(message);
    let child = "child hi";
  }
  childMessage();
  // console.log(child); error
  return undefined;
}
printMessage();
//console.log(message); : error
// childMessage(); : error
console.log(sum(10, 12)); // 함수 hoisting
//선언을 가장 위로 올려줌->함숨호출을 어디서나가능케함

//6. Return a value
//return이 없는 함수는 return undefined가 생략되어있다.
function sum(a, b) {
  return a + b;
}
console.log(`sum: ${sum(1, 2)}`);

//7. Early return, early exit - 현업에서 자주사용
//bad : ifblock안에 이것저것쓰고 else번갈아가면서
//logic쓰면 가독성이 떨어짐
function upgradeUser(user) {
  if (user.point > 10) {
    //long upgrade logic
  }
}

//good
//조건에 맞지않으면 바로 return해서 함수끝내주고
//조건 맞으면 아래 block없는 곳에 logic을씀
function upgradeUser(user) {
  if (user.poing >= 10) {
    return;
  }
  //long upgrade logic
}

//이제부턴 function expression에 대해서 알아보자
//first-class function
// 1. 함수는 다른 변수와 마찬가지로 변수에 할당이되고
//2. 함수의 인자로 전달가능하며
//3. return값으로도 함수는 return이 된다.

//1.function expression
//함수선언과 함수표현의 차이점은
//함수는 var hoisting처럼 함수도 hoisting이된다.
//=함수가 선언되기전에 호출해도된다.
//함수가 선언된거를 가장 위로 올려줌

const print = function () {
  // 함수에이름없는함수:
  //anonymous function
  //함수에 이름을 작성할 수도있는데
  //named function이라고함.
  console.log("print");
};
print(); //함수를 할당받은 변수는
// 변수를 함수처럼 쓸수있다.
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(`sumAgain: ${sumAgain(3, 5)}`);

//2. Callback function
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}
//anonymous function
const printYes = function () {
  console.log("yes! alright!");
};
//named function
// 재귀적 함수호출할때 유용
const printNo = function print() {
  console.log("No that's not");
};
randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

//Arrow function : fucntion사라져 {}사라져 return생략가능
//함수를 간결하게 만들어줌 : 항상 anonymous function
const simplePrint = function () {
  console.log("simplePrint");
};
const somplePrint = () => console.log("simplePrint");

somplePrint();
const add = function (a, b) {
  return a + b;
};
//arrow function
const addSimple = (a, b) => a + b;
console.log(addSimple(100, 200));

//{}필요하면 return해줘야한다.
const multiply = (a, b) => {
  //do something
  return a * b;
};

//IIFE : 선언함과 동시에 호출하는방법
(function hello() {
  console.log("IIFE");
})();

//function calculate(command, a, b)
//command : add, substract, divide, multiply, remainder

const calculater = (command, a, b) => {
  switch (command) {
    case "+":
      return a + b;
      break;
    case "-":
      return a - b;
      break;
    case "/":
      return a / b;
      break;
    case "*":
      return a * b;
      break;
    case "%":
      return a % b;
      break;
  }
};
console.log(calculater("%", 2, 5));
