// let name = "Henry";
// console.log(name);
// let & var 的区别 let有域的概念
// sayname1();
// function sayname1(){
//   var name1 = "henry";
// }
// console.log(name1); //undefined
// //在js中,var的变量仅限于函数中

// sayname2();
// function sayname2() {
//   let name2 = "marry";
// }
// console.log(name2);

// if(true) {
//   var name = "henry";
// }
// console.log(name);

for(var i= 0 ; i<10; i++) {
  console.log(i);
}
console.log("循环外",i);

for(let i= 0 ; i<10; i++) {
  console.log(i);
}
console.log("循环外",i); //会报错
{
  let name = "123";
}
console.log(name);


//let的作用域仅限于花括号内








// var API_KEY = "sdfsdfdsfdf35";
// API_KEY ="DSDF6566666";
// console.log(API_KEY); //可以被覆盖

//常量是在程序运行过程中不可改变的量
// const API_KEY = "sdfsdfdsfdf35";
// API_KEY ="DSDF6566666";
// console.log(API_KEY); //报错

var first = "marry";
var last = "wu";
// console.log("我的全名是"+first+last);
console.log(`我的全名是${first}${last}`);


