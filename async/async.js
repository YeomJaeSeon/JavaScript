"use strict";
//기존에 존재하던거 위에 기존에 존재하던거를 감싸서
//조금더 간단하게 사용할수있는 API제공하는 것 =
//Syntactic sugar
//(async await이 promise의 syntactic sugar라고한다.)

//promise사용의 깔끔한 스타일 : async await
//무조건적으로 async await지향하라는 말이아니라
//각자 자기만의 장점이있다

//1. async
async function fetchUser() {
  return "jaeseon_async";
}
//async를 붙이면 자동으로 Promise로 바뀐다
//Promise를 리턴하는 것으로 바뀐다
//return new Promise(~ ) 프라미스 객체 반환안해도

const user = fetchUser();
user.then((value) => console.log(value));
console.log(user);

//2. await
function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

async function getApple() {
  await delay(3000);
  return "apple";
}

async function getBanana() {
  await delay(2000);
  return "banana";
}

function pickFruits1() {
  return getApple().then((value1) => {
    return getBanana().then((value2) => {
      console.log(`${value1} + ${value2}`);
    });
  });
}
//promise chaining도 콜백지옥과 비슷해질수있다
//->async로
//pickFruits1();

async function pickFruits2() {
  const applePromise = getApple();
  const bananPromise = getBanana();
  //promise는 만들자마자 프라미스 코드가 실행된다
  //이걸 이용해서 await을 병렬적으로 처리가능하다
  const apple = await applePromise;
  const banana = await bananPromise;
  return `${apple}+${banana}`;
}

pickFruits2().then(console.log);

//3. 유용한 PRomise APIS
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  ); // 모든프라미스들을 병렬적으로
  //처리하는 api
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
//먼저 처리되는 애부터 처리하는 api

pickOnlyOne().then(console.log);
