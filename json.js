//HTTP Hypertext주고받는 Protocol(클라이언트와 서버간)
//request, response(요청과 그에 따른 응답)을 통해서 HTTP통신
//Hypertext : hyperlinks, resoure들(문서, 이미지파일)
//HTTP를 이용해서 서버에게 데이터를 요청해서 받아올수있는 방법: AJAX
//AJAX = Asynchronous javascript and XML
//AJAX : 웹페이지에서 동적으로 서버에게 데이터를 주고받을수 있는 기술

//데이터 주고받는 Object ->XHR, fetch api가 있
//대표적인 예 : (XHR)XMLHttpRequest라는 Object가 있다.
//XHR: 브라우저 api에서 제공하는 Object중에 하나.
//XHR OBject사용하면 간단하게 서버에게 데이터를 요청하고 받아올 수 있다.
//fetch() API이용하면 간편하게 데이터 주고받을 수 있다.
//fetch-> ie에서 지원 x
//AJAX XHR의 XML은 무엇이냐? XML은 html과 같은 markup 언어중 하나
//xml도 tag들로 데이터를 나타내는데 html과 마찬가지로 데이터를 표현할수 있는 한가지 방법이다.
//서버와 데이터 주고받을땐 XML만 가능한가?(AJAX의 xml, XHR의 xml)
//서버와 데이터 주고받을 땐 xml뿐만아니라 다양한 file format을 전달 받을수 있는데
//JSON을 요즘엔 많이 쓴다. 근데왜 xml이란 이름이냐? ajax랑 xHR이 활발히 만들어 질때
//XML팀이 참여해서 만들어서 xml사용해서 개발해서 그렇다.
//데이터 주고받을땐 xml뿐만아니라 다양한 타입의 데이터(file format)를 주고받을수 있다.
//그래서 xml이라고 이름을 붙인건 굉장히 큰 실수이다.
//그래서 우리도 외부로 노출되는 함수, api만들땐 이름을 잘 짓자구~

//브라우저에서 서버와 통신할땐 fetch사용할 수도있고 XMLHttpRequest를 사용해서 통신할 수도있다.
//XML사용하면 가독성안좋으니 사용하지말고 JSON사용하자구~
//Javascript Object Notation의 약자인 JSON Javascript와 관련된 파일이구만!
//JSON : data format
//Javascript보고 영감을받아 javascript의 object의 key:value와 같은 형태를 나타낸다.
//JSON도 똑같이 key:value로 이루어져있다.

//JSON사용하는 경우
//JSON은 브라우저에서 서버와 통신할때, 모바일에서 서버와 통신할때,
//또는 서버와 통신을 하지않아도 object를 파일 시스템에 저장할때 json 데이터 타입을 많이 이용

//JSON은 데이터 주고받을때 쓸수 있는 가장 간단한 file foramat
//텍스트를 기반으로한 가볍고
//String
//읽기 편하고
//key:value로 이루어져있고
//서버와 주고받을때 serialization(직렬화)을 위해서 사용한다, 데이터 전송할때 사용
//**프로그래밍 언어랑 그 언어를 사용하는flatform에 상관없이 사용한다. -c언어, c++ python, java php kotlim .. 모든
//언어들, 이 언어들이 쓰이는 flatform에 상관없이 JSON으로 serialization된 object를 다시 그 언어의
//object로 바꾸고 다시 그 object를 json으로 바꾸는게 가능.

//브라우저 토끼 object-> json으로 서버로 ->서버
//서버-> json으로 클라이언트로 -> client

//object-> serialize로 json으로 변환
//serialize된 json을 deserialize해서 object로 변환할거냐... 이 두가지 중점적으로 공부하자

"use stirct";
//JSON
//Javascript OBject Notation

//1.Object -> JSON
//stringify(obj)
//stringify는 overloading으로 정의되있음.(함수이름은 같지만 parameter가 달라)
//boolean을 json으로
let json = JSON.stringify(true); //object->JSON으로 변환
console.log(json);

//배열을 json으로
json = JSON.stringify(["apple", "banana"]);
console.log(json); //string으로 바뀌었네~ json으로바뀌었네
//어느정도 배열처럼보이게 표기된다.(string)으로(=JSON으로)

//object type을 json으로
const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${this.name} can jump!`);
  },
};
//jump라는 함수는 JSON에 포함되지않아. 함수는
//object에 있는 데이터가 아니기 때문에 함수는 제외되고
//javascript의 특별한 데이터인 symbol도 되지않아.

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name", "color"]);
//object type의 key에 접근하는 방버 ['key'] (string으로 접근해야함)
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "name" ? (value = "jaeseon") : value;
}); // 좀더 JSON 세밀하게 통제하고 싶을때 이렇게 콜백함수사용
console.log(json);

//2.JSON->Object
//parse(json)

console.clear();
json = JSON.stringify(rabbit);
console.log(json); // JSON인 string
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "birthDate" ? new Date(value) : value;
}); // JSON -> Object
console.log(obj); // object
rabbit.jump();
//obj.jump(); // json으로 바뀐 rabbit object는 애초에
//함수가 포함이 되지 않고 json으로 바뀌었다.
//그 JSON이 object로 바뀌니 당연히 함수도 포함이 되지않는다

console.log(rabbit.birthDate.getDate()); // rabbit객체
console.log(obj.birthDate.getDate());
//rabbit object의 birthdate는 date객체엿는데
//JSON으로 바뀌면서 string이 되었고 그걸 다시 object로
//바꾸니 string이다. parse하는 과정에서 그게 date객체인지 모른다(JSON은 string으로 되어있으니)
//이럴때 좀더 세밀하게 object로 변환하고싶을떈 콜백함수로

//결론 object->JSON : stringify
//JSON->object: parse
//뭔가 더 세밀하게 바꾸고싶다 ->> 콜백함수 이용
