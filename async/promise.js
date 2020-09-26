"use strict";

//Promise 는 비동기사용할 때 유용하게 사용
//Promise공부할때 집중할거 두개
//1. State
//2. Producing, consumer의 차이점 알기

//1. State : Pending -> fulfilled or rejected
//2. Producer vs Consumer

//1. Producer
//새로운 Promise가 만들어질때는 executor라는 콜백함수(
//resolve, reject)바로 실행이 된다. (자동적으로)
const promise = new Promise((resolve, reject) => {
  //무언가 heavy한 일을 할 때(network, file읽어오기..)
  console.log("doing something...");
  //promise만드는 순간 promise객체의 인자인 콜백함수를
  //바로실행한다
  setTimeout(() => {
    //서버통신 가정
    //resolve("ellie");
    reject(new Error("no network"));
    //에러났을 때 이유를 잘 설명해야해
  }, 2000);
});

//2. Consumer : then, catch, finally (최신추가)로 값
//받아올 수가 있다
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    // 성공하든 실패하든 무조건 실행
    console.log("finally");
  });

//3. promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => {
    //서버통신 가정
    resolve(1);
  }, 2000);
});

fetchNumber
  .then((value) => (value *= 2))
  .then((value) => (value *= 3))
  .then((value) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(value - 1);
      }, 2000);
    });
  })
  .then((value) => console.log(value));

//4. error handling
//producer
const getHen = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`닭`), 1000);
  });
};
const getEgg = (hen) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 달걀`)), 1000);
  });
};
const cook = (egg) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 달걀후라이`), 1000);
  });
};

//이 부분 가지고 놀아보자
//consumer
getHen()
  .then((hen) => getEgg(hen))
  .catch((err) => {
    // 달걀받아오는데 실패했지만
    //빵을 대신받아와 요리를 성공해보자 - 오류처리
    return "빵";
  })
  .then((egg) => cook(egg))
  .then((meal) => console.log(meal))
  .catch((err) => console.log(err));
