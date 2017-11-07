//箭头函数

//函数表达式  箭头函数
let add = (a,b)=>{
  return a+b;
}
console.log(add(2,3));


let numbers = [2,3,4,5];
//将数组中的值进行翻倍
// for(i=0;i<numbers.length;i++)
//   {
//     numbers[i]=numbers[i]*2;
//   }
// console.log(numbers); //for循环写法

let doubles = numbers.map(n=> {  //回调函数
  return  n*2;
})
console.log(doubles);