//学习分布操作符, 解构 argument参数
// let sum = function () {
// 	console.log(arguments);   //可以拿到参数
// }
// sum(2,3,4,5);


//call /apply /bind
// var obj = {num:2};
// var addTothis = function(a) {
// 	return this.num+a;
// }
// console.log(addTothis.call(obj,3));
//call方法的作用 :1.为方法增加对象参数. 2.改变函数内this的指向


// var obj = {num:2};
// var addTothis = function(a,b,c) {
// 	return this.num+a+b+c;
// }
// var arr = [1,2,3];
// console.log(addTothis.apply(obj,arr));  //apply 的第二个参数必须是一个数组


//bind
var obj = {num:2};
var addTothis = function (a,b,c) {
	return this.num +a+b+c;
}
var arr = [1,2,3];
let method = addTothis.bind(obj);    //绑定一个对象
console.log(method(1,2,3));




//es6
let sum = function () {
	return Array.prototype.reduce.call(arguments, function(prev,curr) {
		return prev+curr;
	});
}

console.log(sum(2,3,4,5));




let sum = function(...args) {
	console.log(args)
}
console.log(sum(2,3,4,5));

let sum = function(...args) {
	return args.reduce((prev,curr) =>{
		return prev+ curr;
	});
}
console.log(sum(2,3,4,5));


let numbers = [4,6,3,8];
let array = [1,2,...numbers,5,7];
console.log(array);  //两个数组拼接起来


let max = Math.max(4,5,2,6,8)
console.log(max);


let numbers = [4,5,6,9];
let max = Math.max.apply(null,numbers); //取最大值
console.log(max);



//ES6
let numbers = [1,5,9,2];
let max = Math.max(...numbers);
console.log(max);


