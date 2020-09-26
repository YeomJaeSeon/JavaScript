"use strict";
let global = "global scope";
{
  let name = "yeom";
  console.log(name);
  name = "jeong";
  console.log(name);
  console.log(global);

  var op = 1;
}
console.log(name);
console.log(global);

console.log(age);
age = 1;
console.log(age);
var age;
console.log(op);
{
  const count = 1;
  console.log(count);
  const little = 18.1;
  console.log(`value: ${count}, type: ${typeof count}`);
  console.log(`value: ${little}, type: ${typeof little}`);
}

const infinity = 1 / 0;
console.log(infinity);
const negativeInfinity = -1 / 0;
console.log(negativeInfinity);
const nAn = "not number" / 2;
console.log(nAn);
{
  const char = "c"; // string
  const snumber = "안녕하십니까요들";
  const greeting = char + " 인사하자";
  console.log(char, snumber, greeting);
  const hell = `hi ${snumber}`;
  console.log(hell);
}
{
  const truely = true;
  const truely1 = 3;
  console.log(truely, truely1);
  const test = 3 < 1;
  console.log(test);
  console.log(`value: ${truely}, type: ${typeof truely}`);
}
{
  let nothing = null;
  console.log(`value: ${nothing} type: ${typeof nothing}`);
  let x = undefined;
  console.log(`value: ${x} type: ${typeof x}`);
}
{
  const symbol1 = Symbol(12);
  const symbol2 = Symbol(12);

  console.log(symbol1 === symbol2);
  const symbol3 = Symbol.for(12);
  const symbol4 = Symbol.for(12);
  console.log(symbol3 === symbol4);
  console.log(`value: ${symbol1.description} type: ${typeof symbol1}`);
}
{
  const jaeseon = { firstName: "yeom", age: 25 };
  jaeseon.age = 21;
  jaeseon.firstName = "kim";
  console.log(`first name: ${jaeseon.firstName}
    age: ${jaeseon.age}`);
}
