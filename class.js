"use strict";
//클래스: 틀
//object: 이 틀을 이용해서 실제로 데이터를 만드는것
//javascript는 class가 es6에서 만들어짐
//클래스 도입전에는 클래스 정의하지않고 바로 object
//만들 수 있었다.
//그래서 기존에 존재하던 자바스크립트위에 추가된 것이므로
// 기존에 존재하던 프로토타입을 베이스로 한것에
// 문법만 클래스가 추가된 것이다.

//1. class 선언
class Person {
  name;
  age;

  constructor(name, age) {
    // 생성자:나중에 (객체의 fields 정의)
    //object를 만들때 필요한 데이터를 전달한다.
    this.name = name;
    this.age = age;
    //this: 생성된 object
  }
  speak() {
    //메소드
    console.log(`${this.name}: hello!`);
    //this: 생성된 object
  }
}
//2. object생성(위 클래스를 이용하여)
const ellie = new Person("jaeseonzzzzzz", 25); //객체 생성은
console.log(ellie.name);
//new라는 키워드를 사용한다.
console.log(ellie.name); //필드접근
console.log(ellie.age);
ellie.speak(); // 메소드 접근

//3. getter setters
//사용자가 잘못 입력을했을때 방지해주는 역할을 한다.
//사용자가 멍청하게 잘못입력해도 우리는 바꿔주기위해
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  //getter 만들면 this.age는 메모리에 올라가있는
  //정보를 읽어오는게 아니라 getter함수를 호춡
  get age() {
    // 값 리턴
    return this._age;
  }
  //setter만들면 =age할때 메모리에 값을 할당하는게 아니라
  //setter함수를 호출
  set age(value) {
    // 값 설정
    this._age = value < 0 ? 0 : value;
    //여기도 또 =가있으므로
    //setter호출(무한정반복) 이걸방지하기위해선
    //getter, setter안에서 쓰여지는 변수이름을
    //_age로 변수이름을 설정한다.
  }
}
//User class fields는 firstName lastNAme age, _age
//근데 아래에서 .age를 이용할수 있는건
//클래스 내부적으로 this.age = age를 이용하기때문에
//_age를 클래스 내부적으로만 이용하기때문에
const user1 = new User("Steve", "Job", -1);
console.log(user1.age);

//4 public private fields(너무 최근에 추가되었다.)
//그냥알고만있자. 너무최근에 추가되어 사용이 되어지진
//않았다.
class Experiment {
  //생성자 안쓰고 field정의가능
  publicField = 2;
  #privateField = 0;
  #name = 2;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

//5. Static fields, methods =>class 이름으로 호출
//static은 그 클래스의 모든 객체공통이라생각하자.
//class의 필드와 메소드는 객체가 생성될때마다
//그대로 복제해서 주는데
//객체생성과 상관없이 class가 가지고 있는 고유한
// 값과 객체와 상관없이 동일하게 이용되는
//메소드가 있을수있따. -> 이런게 static
//객체와 상관업싱 클래스 자체와 연결되어있는 것.
class Article {
  static publisher = "Dream Coding";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }
  static printPublisher() {
    console.log(Article.publisher);
  }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); //객체입장에선
//staticd은 값이 지정되지 않았다고 생각한다.
//object마다 할당되는게아니다.
console.log(Article.publisher); // static 변수 호출
Article.printPublisher(); //static 메소드호출
//static은 클래스 이름을 실행시킨다

//6. 상속과 다형성
//공통적인 부분을 처음에 딱 만들고
//개개인 특성 추가한다.

class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw() {
    console.log(`drawing ${this.color} color!`);
  }
  getArea() {
    return this.width * this.height;
  }
}
class Rectangle extends Shape {}
class Triangle extends Shape {
  //필요한 함수만 재정의(overriding)
  //: 상속이 빛을 발할 때
  getArea() {
    return (this.width * this.height) / 2;
  }
}
//Rectangle 클래스는 Shape클래스 상속받는다.
const rec = new Rectangle(10, 20, "blue");
console.log(rec.getArea());
const tri = new Triangle(20, 30, "red");
console.log(tri.getArea());
rec.draw();
tri.draw();

class Pet {
  // 공통적인 부분 하나 딲쓰고
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  food() {
    console.log("생선주세요");
  }
}
class dog extends Pet {
  //개개인 특성 추가
  food() {
    //함수재정의 메소드 overriding.
    console.log("개사료 주세요");
  }
}
class cat extends Pet {}
const dog1 = new dog("바둑이", 5);
console.log(dog1.name);
console.log(dog1.age);
dog1.food();
const cat1 = new cat("나비", 3);
cat1.food();
