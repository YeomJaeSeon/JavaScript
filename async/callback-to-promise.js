"use strict";

class UserStorage {
  //클래스 안에서 메소드는 function안붙여
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "ellie" && password === "dream") ||
          (id === "coder" && pasword === "academy")
        ) {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000);
    });
  }
  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "ellie") {
          resolve({ name: "ellie", role: "admin" });
        } else {
          reject(new Error("no access"));
        }
      }, 1000);
    });
  }
}
const user = new UserStorage();
const id = prompt("id를 입력하세요");
const pw = prompt("password 입력하세요");

user
  .loginUser(id, pw)
  .then((value) => {
    return user.getRoles(value);
  })
  .then((value) => alert(`Hello ${value.name} 님의 역할은 ${value.role}`))
  .catch((err) => console.log(err));
