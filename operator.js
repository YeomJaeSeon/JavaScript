//1. String 합치기
console.log("my" + " cat");
console.log("1" + 2);
console.log(`my age is: 


'''${25}`); // 이 표현의 장점은 특수 문자열이 그냥 바로나온다

//2.Nuberic operators
console.log(1 + 1);
console.log(2 - 1);
const n1 = 5;
const n2 = 4;
const re = n1 / n2;
console.log(n1 * n2);
console.log(n1 / n2);
console.log(`${typeof re}`);
console.log(5 % 3);
console.log(2 ** 4); // 몇승~이걸나타내는 연산자

//3.Increment and decrement operators . 증감
let counter = 2;
const preIncrement = ++counter; // preincrement
//counter = counter + 1;
//preIncrement = counter;
console.log(`preIncrement: ${preIncrement} counter: ${counter}`);

const postIncrement = counter++;
//postIncrement = counter;
//counter = counter + 1;
console.log(`postIncrement: ${postIncrement} counter: ${counter}`);

//4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

//5. Comparison operators
console.log(10 < 6);
console.log(10 <= 11);
console.log(10 > 12);
console.log(10 >= 6);

//중요함****6. Logical operators : || (or) &&(and) ! (not)

const value1 = false;
const value2 = 4 < 2;

//||(or)
console.log(`or: ${value1 || value2 || check()}`);
//**or연산자(||) 진짜중요
//는 여러개중 하나만 true면 true로인식
//그러닌까 여기서 진짜 중요한건 앞에서 true가 하나라도 먼저 나오면
//거기서 멈춘다!(어짜피 true가 하나면 true닌까 뒤에 볼 필요가없지~)
//이걸통해서 알수있는건 heavy한 코드는 뒤에 작성한다
//왜냐면 앞에 heavy한코드가 있으면 heavy한게 fasle고
//뒤에 soft한게 true이면 heavy한코드 맨날 도닌까 안좋다
//그래서 heav한 코드는 뒤로보낸다. (or연산자 ||에서)

//&&는 전부다 true여야 true이다
//앞에 false가 하나라도 있으면 거기서 실행을 멈춘다
//이유는false가 하나이면 어짜피 false인데 뒤볼필요없다
//그래서 &&(and)연산도 heavy한 코드 뒤에있는게 좋다

//&&연산자에서 object가 null이면 false로 처리
//nullobject가 null이 아닐때만 nullobject.somthing
//if (nullableObject != null) {
//  nullableObject.something;
//}
function check() {
  for (let i = 0; i < 10; i++) {
    console.log("핑");
  }
  return true;
}

//!(not연산자)
console.log(!value1);

//7. equality
const stringFive = "5";
const numberFive = 5;

//== : loose equalit, with type conversion .저절로타입변환
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

//=== : strict equlity with no type conversion
//왠만하면 코딩할때 이거쓰는게 좋다. 타입다르면 다르다고하는
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//object타입에서의 equality
//primitive는 값을 메모리에 할당
//object type은 메모리에 ref를 할당 - ref이 items들을
//가르키는 것이다.
const js1 = { name: "yeom" };
const js2 = { name: "yeom" }; // js1 js2가 가지고있는
//ref 값이 다르다
const js3 = js1;

console.log(js1 == js2); // false: ref값이 다름
console.log(js1 === js2); // f : ref값이 다름
console.log(js1 === js3); //t: ref 값이 같음
console.log(js1 == js3); // t : ref값이 같음

//question == === loose equality vs strict equality
console.log(0 == false);
console.log(0 === false);
console.log("" == false);
console.log("" === false);
console.log(null == undefined);
console.log(null === undefined);

//8. if operator (Conditional operator)
//if else if else
const named = "js";
if (named === "jaeseon") {
  console.log("재선 안녕?");
} else if (named === "js1") {
  console.log("아 미안 너가 재선이구나!");
} else {
  console.log("아 미안미안 진짜 너가 재선이구나!");
}

//9. ternary operator : (? :) if간단
console.log(named === "js1" ? "yes" : "no");

//10. switch : if else반복되면 이거쓰는게 낫다
const operator = "+";
switch (operator) {
  case "+":
  case "-":
    console.log("더하기나 빼기");
    break;

  case "*":
    console.log("곱하기");
    break;
  case "/":
    console.log("나누기");
    break;
  default:
    console.log("내가 모르는 부호");
    break;
}

//11 while loop
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  --i;
}

//12 do while 일단 do실행
do {
  console.log(`do while: ${i}`);
  --i;
} while (i > 0);

//13 for loop
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}
for (let j = 3; j > 0; j--) {
  console.log(`for: ${j}`);
}
//14 nested - > O(n2)이므로 피하는게 좋다
for (let v = 3; v > 0; v--) {
  for (let k = 4; k > 2; k--) {
    console.log(`nested for: ${v}`);
    console.log(`nested for: ${k}`);
  }
}

//break continue; continue는 그다음으로 넘어감
//labe은 현업에서 잘안씀 배우지말자걍
for (i = 0; i <= 10; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(`continue: ${i}`);
}

for (i = 0; i <= 10; i++) {
  console.log(`break: ${i}`);
  if (i === 8) {
    break;
  }
}
