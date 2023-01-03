"use strict"

let studentName = ["sher mohammad","rafik","khalil","ashraf","irfan","sohil","tahir","farman","sammer","nadim"]

let map = new Map();
map.set(studentName[0], ["January","February","March"]).set(studentName[1], ["January","February","March"])
.set(studentName[2], ["January","February","March"]).set(studentName[3], ["January","February","March"])
.set(studentName[4], ["January","February","March"]).set(studentName[5], ["January","February","March"]).
set(studentName[6], ["January","February","March"]).set(studentName[7], ["January","February","March"]).
set(studentName[8], ["January","February","March"]).set(studentName[9], ["January","February","March"])


let promis = new Promise(function(success, failure){
try{
	let random = Math.trunc(Math.random() * (studentName.length + 10));
    let le = map.get(studentName[random])

	 if(studentName[random] && le.length === 3){
	 	success("admission kardo");
	 }else{
	 	failure("not admission")
	 }
 }catch(e){
    console.log(e)
 }

})

promis.then(function(val){
	console.log(val)
	return val;
}, function(val1){
	console.log(val1)
}).then(function(ss){
	console.log(ss)
},function(ee){
	console.log(ee)
})


// Callback Function
function randomFn(fn1,fn2){
try{	
 let random = Math.trunc(Math.random() * (studentName.length + 10));
 let le = map.get(studentName[random])

	 if(studentName[random] && le.length === 3){
	 	fn1("admission kardo");
	 }else{
	 	fn2("not admission")
	 }
 }catch(e){
    console.log(e)
 }
}
randomFn(success,failure)

function success(resolve){
   console.log(resolve)
}

function failure(reject){
	console.log(reject)
}


//Same output with callback hell
setTimeout(function () {
  console.log("One");
  setTimeout(function () {
    console.log("Two");
    setTimeout(function () {
      console.log("Three");
      setTimeout(function () {
        console.log("Four");
        setTimeout(function () {
          console.log("Five");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);


//Same code with Promise
const timeout = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

timeout(1)
  .then(function () {
    console.log("After 1 seconds");
    return timeout(1);
  })
  .then(function () {
    console.log("After 2 seconds");
    return timeout(1);
  })
  .then(function () {
    console.log("After 3 seconds");
    return timeout(1);
  })
  .then(function () {
    console.log("After 4 seconds");
    return timeout(1);
  })
  .then(function () {
    console.log("After 5 seconds");
  });


  