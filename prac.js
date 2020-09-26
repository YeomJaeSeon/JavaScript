"use strict";

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

async function asyncFunc() {
  const promiseApple = getApple();
  const promiseBanana = getBanana();
  const apple = await promiseApple;
  const banana = await promiseBanana;
  //await가 병렬적으로 처리되려면 이렇게
  //프라미스를 만들어버린다 그러면 동시에 처리됨
  //총 5초기다릴 필요없이 3초면 2초 3초해서 모두 만들어진다
  return `${apple} + ${banana}`;
}

asyncFunc().then(console.log);

function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((value) => {
    value.join(" + ");
  });
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
