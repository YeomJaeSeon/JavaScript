//Objects
//one of the JavaScript's data types.
//a collection of related data and/or functionality.
//Nearly all objects in Javascript are instances
//of Object
//Object는 key와 value의 집합체+간단하게 데이터관리가능
//object = { key: value };
//key는 우리가 접근할수있는 key, value는 key에 할당된 값
//key는 항상 string type으로 전달해야한다.
//key는 string type

//1.Literals, properties
//object 만드는 방법
const obj1 = {}; // 객체 리터럴 표기법
const obj2 = new Object(); // 객체 생성자 표기법

//javascript에서는 클래스가 없어도 obj1이나 jaeseon
//처럼 class가 없어도 객체리터럴 표기법을 이용해서 바로 object
//생성가능
const jaeseon = { name: "jaeseon", age: 25 };
//간편하게 데이터 관리할수 있다.

function print(person) {
  console.log(person.name);
  console.log(person.age);
}
print(jaeseon);

const yousung = { name: "yousung", age: 24 };
function print(person) {
  console.log(person.name);
  console.log(person.age);
}
print(yousung);

//javascript 는 dynamic type language
//이므로 runtime에 타입 결정된다.
//그래서 이런 미친짓을 할수가 있따.
//뒤늦게 하나의 프로퍼티를 추가할수있다.
// 뒤늦게 하나의 프로퍼티를 삭제할수도있다.
//그치만 유지보수에는 좋지않다.

jaeseon.hasJob = true;
console.log(jaeseon.hasJob);

delete jaeseon.hasJob;
console.log(jaeseon.hasJob);

//2. computed properties : 어떤 key가 필요한지 모를때
//쓴다. 사용자에게 입력받은 key에 대해서 처리하거나 할
//때(runtime에서 key값을 알 때)
//key는 항상 string type으로 받아와야한다.
console.log(jaeseon.name);
console.log(jaeseon["name"]); //key name을 string
jaeseon["hasJob"] = true;
console.log(jaeseon.hasJob);

//computed properties 사용하는 예시
function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(jaeseon, "name"); // key값은 string type으로
//전달되어야한다.
printValue(jaeseon, "age");

//3. Property value shorthand
const person1 = { name: "david", age: 5 };
const person2 = { name: "tom", age: 7 };
const person3 = { name: "jaeseon", age: 8 };
//너무 귀찮고 중복된다.
const person4 = makePerson("yerin", 24);
const person5 = new Person("yousung", 26);

console.log(person4);
function makePerson(name, age) {
  return {
    // object를 반환
    name: name,
    age: age, // property value shorthand로
    //name, age,이렇게할수있다.
  };
}
//property value shorthand:return할때
//key value같으면 하나 생략가능
function madePerson(name, age) {
  return {
    name,
    age,
  };
}

//5. Contructor Function
//makePerson함수는 클래스와같은 template함수이다.
//위함수와 같이 다른계산은하지않고 순수하게 object만
//생성하는 함수는 이렇게 클래스에서의 생성자같이
//함수이름을 대문자로시작하게하고 생성자같이한다.
function Person(name, age) {
  this.name = name;
  this.age = age;
}
console.log(person5);

//6. in operator:obj안에 key가 있는지없는지
//간단하게 확인할수있는 키워드이다.
console.log("name" in jaeseon);
console.log("age" in jaeseon);
console.log("random" in jaeseon);
console.log(jaeseon.random);

//7 for..in vs for..of :굉장히 유용하다.
//for (key in obj) : object안에서 key값 모두접근
for (key in jaeseon) {
  console.log(key);
}

//for (value of iterable)
const array = [1, 2, 3, 4, 5];
for (value of array) {
  console.log(value);
}

//8. 아주아주재밌는 cloning
const user = { name: "jaeseon", age: 25 };
const user2 = user;
console.log(user2);
user2.name = "suho";
console.log(user2);
// 다른메모리에 갍은 ref값을 가지고있으므로
//이렇게 되는건 당연한거다

//복사 old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.log(user3);

//최신방법 Object객체의 assign함수사용
const user4 = {};
Object.assign(user4, user);
console.log(user4);

const user5 = Object.assign({}, user);
console.log(user5);

//another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
//mixed object는 겹치는 key가있으면
//뒤에있는 object가 앞에있는 object를 덮어버린다.
console.log(mixed);

const city1 = { name: "seoul", price: 100 };
const city2 = { name: "gwangju", price: 50 };
const city3 = Object.assign({}, city1, city2);
console.log(city3);
