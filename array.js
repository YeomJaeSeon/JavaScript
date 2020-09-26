"use strict";
//Array : 자료구조이다.
//자료구조와 Object type의 차이
//토끼들을 담는 바구니 : 자료구조,
//한마리 토끼의 연관된 특징들을 모아놓은것 (프로퍼티들, 메소드들): object type
//토끼와 당근이 너무 많다면 바구니로 비슷한종류끼리
//담는다.
//비슷한 종류들을 바구니에 한곳에 넣는것: 자료구조
//자료구조에는 어떤 방식으로 어떤형식으로 데이터를
//담냐에 따라서 굉장히 많은 타입들이있다.
//object는 토끼한마리, 당근 하나
//토끼의 귀두개 프로퍼티, 뛰고 먹는 메소드
//당근은 주황색이라는 프로퍼티, 비타민 C프로퍼티
//이러한 서로 연관된 특징과 행동들을 묶어놓는것 : object
//비슷한 타입의 object들을 묶어놓는것: 자료구조
//javascript : dynamically typed language이므로
//자료구조로 여러 종류의 데이터를 담을수 있는데
//이건 좋지가 않아서 유의하자
//자료구조와 알고리즘
//검색, 삽입, 정렬, 삭제
//새로운데이터를 자료구조에 삽입, 삭제 검색 정렬
//어떤 알고리즘에 의해서 해야 가장 최적인가 : 알고리즘
//자료구조와 알고리즘 중요

//배열은 칸칸이 있는 자료구조, 인덱스가 지정되어있음
//0부터 지정되있음

//1. Declaration
const arr1 = new Array(); //new키워드로
//Object만드는 것처럼
const arr2 = [1, 2];
//🍎🍌🍓🍏🥥🍉🍐🍋🍑🍒🥝
//2. Index position
const fruits = ["🍎", "🍌"]; //문자열 데이터
//같은 타입끼리 넣자구 .자바스크립트는
//dynamically typed이므로 여러데이터넣을수잇지만!
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); //object의 object['key'];랑
//비슷
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);

console.clear();
//3. Looping over an array
//print all fruits
//a. for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
//for (value of array)
for (const fruit of fruits) {
  console.log(fruit);
}

//c. forEach 정의된 곳으로가서(ctrl + 클릭) api확인하는 습관들이자
fruits.forEach((fruit) => console.log(fruit));

//4. Addition, deletion, copy
//뒤에서부터 삽입 삭제
// push: add an item to the end
fruits.push("🍓", "🍐");
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

//앞에서부터 삽입 삭제
//unshift: add an item to the beginning
fruits.unshift("🍓", "🍐");
console.log(fruits);

//shift: add an item to the beginning
fruits.shift();
console.log(fruits);
fruits.shift();
console.log(fruits);

//note! shift, unshift는 너무너무 느려 pop과 push보다
//당연하다~ 자료구조 리스트에서 맨앞에 삭제 삽입:O(n)
//push, pop: O(1);
//pop과 push를 사용하자
console.clear();
//remove an item by index position

//splice : 특정 인덱스 아이템 삭제나 삽입
fruits.push("🍑", "🍒", "🥝");
console.log(fruits);
fruits.splice(1, 1); //ctrl해서 직접 api확인하자
console.log(fruits);
fruits.splice(1, 0, "🥥", "🍉"); //특정 인덱스에
//지우지도 않고 원하는 인덱스에 아이템 삽입가능
//아이템 넣을수도있다.
console.log(fruits);

//combine two arrays
const fruits2 = ["🍋", "🍑"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//5. searching
//find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf("🍎"));
console.log(fruits.indexOf("🥝"));
console.log(fruits.indexOf("🍑"));

//includes
console.log(fruits.includes("🍎"));
console.log(fruits.includes("🍑"));

//lastIndexOf
console.clear();
fruits.push("🍎");
console.log(fruits);
console.log(fruits.indexOf("🍎"));
console.log(fruits.lastIndexOf("🍎"));

//array와 자바스크립트에서 아주중요한
//필수 apis들
//숙제: 직접 array의 api들있는곳가서 한번 읽어보자
//다음 영상의 퀴즈를 위해서 읽고와보자구~
