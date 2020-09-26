"use strict";
//Q1 make a string out of an array : 배열을 string으로
const fruits = ["apple", "banana", "orange"];
const result = fruits.join(",");
console.log(result);

//Q2 make an array ouy of a string

const fruits2 = "🍎, 🥝, 🍌, 🍒";
console.log(fruits2.split(","));

//Q3 make this array look like this: [5, 4, 3, 2, 1]

const array3 = [1, 2, 3, 4, 5];
const array4 = array3.reverse();
console.log(array4);

//Q4. make new array without the first two elements
const array5 = [1, 2, 3, 4, 5];
array5.shift();
array5.shift();
console.log(array5);

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
//Q5 find a student with the score 90
console.log(students.length);
for (let i = 0; i < students.length; i++) {
  if (students[i].score === 90) {
    console.log(students[i].name);
  }
}

for (let value of students) {
  if (value.score === 90) {
    console.log(value.name);
  }
}

students.forEach((val) => {
  if (val.score === 90) {
    console.log(val.name);
  }
});

// Q6. make an array of enrolled students
const arrayEnrolled = [];
students.forEach((val) => {
  if (val.enrolled === true) {
    arrayEnrolled.push(val.name);
  }
});
console.log(arrayEnrolled);

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
const arrayScore = [];
students.forEach((val) => arrayScore.push(val.score));
console.log(arrayScore);

// Q8. check if there is a student with the score lower than 50
const checkArray = [];
students.forEach((val) => {
  if (val.score < 50) {
    checkArray.push(val.name);
  }
});
console.log(checkArray);

// Q9. compute students' average score
let sum = 0;
students.forEach((val) => {
  sum += val.score;
});
const avg = sum / students.length;
console.log(avg);

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
const stringResult = arrayScore.join(", ");
console.log(stringResult);

        const sortArray = arrayScore.sort();
console.log(sortArray);
