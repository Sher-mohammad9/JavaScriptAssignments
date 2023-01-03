"use strict"

function function_name(argument) {
	console.log(argument)
	setTimeout(function(){
	console.log("hello2")
},5000)
}
function_name("hello1");


setTimeout(function(){
	console.log("hello3")
},5000)

async function hello(fn){ // await only valid in async faunction
	let s = await fn;
	console.log(s)
}
hello("hello4")

console.log("hello5")
let i=1
while(i<=1000){
	console.log("wferr")
	i++;
}
console.log(i)
if(i == 1001){
	console.log("hello6")
setTimeout(function(){
	console.log("if hello7")
},5000)
}
async function prom(){

return new Promise((sucesse,failure)=>{
 
 if(true){
 	sucesse();
 }else{
 	failure();
 }  
})
}

prom().then(()=>{
	console.log("hello sucesse")
},()=>{
	console.log("error reject")
})
