"use strict";
//Q1
const fruits = ["apple", "banana", "orange"];
const result = fruits.join();
console.log(result);

//Q2
const fruits1 = "사과,키위,바나나,딸기";
const result1 = fruits1.split(",");
console.log(result1);

//Q3
const array = [1, 2, 3, 4, 5];
const result3 = array.reverse();
console.log(result3);
console.log(array); // 배열자체도 바뀌었다.

//console.clear();
//Q4
const array1 = [1, 2, 3, 4, 5];
const result4 = array1.slice(2, 5);
console.log(result4);

//splice는 배열 자체를 수정한다.
//slice는 배열에서 원하는 부분만 잘라서 리턴
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

//Q5

//true리턴하면 콜백함수 진행 멈추고 그 value 리턴
const result5 = students.find((student) => student.score === 90);
console.log(result5);

//Q6
const result6 = students.filter((student) => student.enrolled);
console.log(result6);

//Q7
//mapping: 사상(ex.주소사상)
//함수에 의해 변환.~ a배열이 b배열로 mapping
const result7 = students.map((student) => student.score);
//콜백함수 인자는 의미있게 이름짓자. value보다는 student
console.log(result7);

//Q8
//하나의 원소가 조건에 맞는게 잇는지
//console.clear();
const result8 = students.some((student) => student.score < 50);
console.log(result8);

//모든배열이 조건에 맞는지
const result81 = students.every((student) => student.score < 50);
console.log(result81);

//Q9
//배열을 돌면서 어떤 값을 누적할 때 사용한다.
const result9 = students.reduce((prev, curr) => {
  console.log("*******");
  console.log(prev);
  console.log(curr);
  return prev + curr.score;
}, 0);
console.log(result9 / students.length);
//reduceRight: 배열을 거꾸로 도는것
//console.clear();
const result10 = students
  .map((students) => students.score)
  .filter((score) => score >= 50)
  .join();
console.log(result10);
//배열 apis들 섞어서 사용가능
//함수형 프로그래밍

//bonus 문제
const bonus = students
  .map((student) => student.score)
  .sort((a, b) => a - b)
  .join();
console.log(bonus);
