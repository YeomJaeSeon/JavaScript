"use strict";

//Javascript is synchronous
// 동기:코드가 순서대로 실행이된다. (hoisting 후)
//hoisting은 선언을 가장 코드상 가장위로 올리는 것

console.log("1");
setTimeout(() => console.log("2"), 1000);
//settimeout 인자론 콜백함수, 시간 (콜백함수는 함수의
//인자로 오는 함수)
console.log("3");

// 비동기적 실행

//callback 항상 비동기를위한건 아님
//동기 콜백, 비동기 콜백
//synchronous callback

function printImmediately(print) {
  //function hoisting
  print();
}
//함수의 선언은 hoisting
printImmediately(() => console.log("hello"));

//Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000);

//결론
//callback함수는 무조건 비동기가아니라
//동기 비동기 모두 된다(callback은 함수의 인자로 함수를
//전달하는 형태)

//콜백지옥 경험하자
class UserStorage {
  //클래스 안에서 메소드는 function안붙여
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && pasword === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}
const user = new UserStorage();
const id = prompt("id를 입력하세요");
const password = prompt("password 입력하세요");

user.loginUser(
  id,
  password,
  (user1) => {
    user.getRoles(
      user1,
      (userWithRole) => {
        alert(`Hello ${userWithRole.name}, you have ${userWithRole.role} role`);
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
//읽기가 너무 거북해. 가독성 떨어져
//디버깅 할 경우에도 굉장히 힘듬
