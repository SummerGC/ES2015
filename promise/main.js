"use strict";

// console.log(this);

// function aaa(){
// 	console.log(this);
// }
// aaa();

//实例化promise对象
let myPromise = new Promise((resolve,reject) =>{
	setTimeout(() =>{
		resolve("成功时 会显示这句话");
	},1000)

	// setTimeout(()=>{
	// 	reject("error :网络连接失败!");
	// },500)
});
// myPromise.then((data) =>{
// 	console.log(data);
// },(err)=>{
// 	console.log(err);
// });
// console.log(myPromise);

//Promise then()
//第一个回调函数在成功是触发,第二个回调函数在失败是触发
//catch主要负责捕捉异常错误信息
// myPromise.then((data) => {
// 	console.log(data);
// })
// .catch((err) =>{
// 	console.log(err);
// });

let myPromise2 = new Promise((resolve,reject) =>{
	setTimeout(() =>{
		resolve("队列中的第二个成功时调用的数据");
	},1500)	
});
Promise.all([myPromise,myPromise2]).then((data)=>{
	console.log(data);
})
.catch((err) => {
	console.log(err);
})

fetch("http://localhost:3000/users").then((res) =>{
	//解析
	res.json().then((data) => {
		console.log(data);
	})
})
.catch((err) =>{
	console.log("error:请求失败!");
})












