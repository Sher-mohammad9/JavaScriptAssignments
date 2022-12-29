"use strict"

let promise = new Promise(function(onefn,twofn){
	let num = 1;
	if(num == 1){
		onefn(num);
	}else{
		twofn(num)
	}
})

console.log(promise.then)
promise.then(function(val){
	// console.log(val)
	return 
}, 
function(val){
console.log(val)
})


