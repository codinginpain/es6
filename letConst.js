// let & const

//var 과 let의 차이가 무어냐
//es6 - hoisting
//let은 hoisting이 되지않고 var는 hoisting이 가능함
console.log(myId); // 이것마저도 에러가 아니라 undefined이 출력됨. 이것또한 가독성이 떨어지는 이유가 됨
if(true) {
    var myId = 'codinginpain';
}
console.log(myId); //scope가 다르기때문에 출력되면 안되지만 hoisting 해서 출력이 가능해짐

//const
//일반적으로 한번 선언하면 바꿀 수 없다고 알고있지만 object등에선 변경을 허용함
const fruits = {};
fruits.first = 'apple';
console.log(fruits);

//array
const apples = [1, 2];
apples[0] = 5;
console.log(apples); // [5,2]로 변경됨







