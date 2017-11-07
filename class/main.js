// //ES5
// function Plane (){
// 	this.wings = 2;
// 	this.speed = 100;
// 	this.altitude =100000;
// }
// //实例化出的对象
// const myPlane = new Plane();
// //为plane这个类扩展方法
// Plane.prototype.fly = function(){
// 	this.altitude =3000;
// }
// myPlane.fly();
// console.log(myPlane.wings);
// console.log(myPlane.altitude);

// //创建另一个类
// function FighterPlane() {
// 	this.speed =1000;
// }
// FighterPlane.prototype = new Plane();
// var fighterPlane = new FighterPlane();
// console.log(fighterPlane.altitude);


//es6
class Person{
	constructor(name,age,weight){  //由外部传进去
		this.name =name;
		this.age = age;
		this.weight =weight;
	}	
	displayWeight(){
		console.log(this.weight);
	}
}
let person1 = new Person("chaomin",18,90);
person1.displayWeight();
console.log(person1.name);
console.log(person1.weight);

 class Programmer extends Person {
 	constructor(name,age,weight,language) {
 		super(name,age,weight);  //继承父级
 		this.language = language;
 	}
 	displayWeight(){
		console.log(this.weight+"kg");
	}
 }
let gaochao = new  Programmer("Chao",18,"70","go");
gaochao.displayWeight();
console.log(gaochao.language);
console.log(gaochao.age);











