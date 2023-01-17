  "use strict"

Create promise ()

let promise1 = new Promise(function(onefn,twofn){
	let num = 1;
	if(num == 1){
		onefn(num);
	}else{
		twofn(num)
	}
})

console.log(promise1.then)
promise1.then(function(val){
	// console.log(val)
	return 
}, 
function(val){
console.log(val)
})

// Create Fetch()
let promise2 = fetch("https://restcountries.com/v2/name/japan");

console.log(promise2)
let i = 20
promise2.then((response) => response.json(),(reject) =>{ console.log(reject, i)})
.then((secusse) => secusse,(failure) => console.log(failure + "helo"))
.then((complite) => complite,(error) => console.log(error))
.then((setteld) => console.log(setteld)).catch((e)=> console.log(e + " fdff"))


// Promise With XMLHttpRequest object
let prom = new Promise(function(secusse,reject){

	let xMLH = new XMLHttpRequest();
	xMLH.open("GET","https://restcountries.com/v2/name/japan",true)
	xMLH.send();
let btn = document.getElementById("btn");
	btn.addEventListener("click", function(){
		console.log(xMLH)
		if(xMLH.responseText){
		secusse(xMLH.responseText)
	}else{
		reject()
	}
	})
})

prom.then(function(resolve){
     console.log(resolve)
     return resolve;
}, function(reject){
	console.log(reject)
}).then(function(complite){
    console.log(complite)
}).catch(function(e){
	console.log(e)
})


// Fetch return promis
let res = fetch("https://restcountries.com/v2/name/japan");
console.log(res);
res
  .then(function (resolve) {
    setTimeout(function () {
      console.log(resolve);
    }, 1000);
      return resolve.json();
  })
  .then(function (secusse) {
  	// let t = 20;
  	// t.toLowerCase();
    setTimeout(function () {
      console.log(secusse);
    }, 1000);
    return secusse;
  })
  .then(function (complite) {
    setTimeout(function () {
      console.log(complite);
    }, 1000);
    return complite;
  }).catch(function(e){
  	console.log(e)
  })

let p = Promise.allSettled([fetch("https://restcountries.com/v2/name/japan"),
                 fetch("https://restcountries.com/v2/name/nepal"),
                 fetch("https://restcountries.com/v2/name/china"),
                 fetch("https://restcountries.com/v2/name/bhutan"),])

p.then((re)=>{
   console.log(re)
},(rej)=>{
   console.log(rej)
})
