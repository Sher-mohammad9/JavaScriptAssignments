"use strict"

// Q1
let num = 85;
if(num % 2 != 0 && num % 7 === 0){
           num += 15
		if(num == 120){
			let date = new Date()
			let mintus = date.getMinutes()+num
			console.log(mintus)
		}
}else{
       console.log(Date.UTC(num))
}

// Q2
let num1 = 30;
let num2 = 100
if(num1 % 2 === 0){
	console.log(num2)
}else{
	console.log(num1)
}

num1 % 2 === 0 ? console.log(num2) : console.log(num);

num1 % 2 != 0 || hunderd(num1)

function hunderd(num1){
	if(num1 % 2 === 0){
	console.log(num2)
}else{
	console.log(num1)
}
}


//Q3 

let population = 1.3;
if(population > 1.3){
	console.log("China")
}else if(population < 1.3 && population > 1){
	console.log("India")
}else{
	console.log("Pakistan")
}

let desigain = true;
switch(desigain){
	case population < 1.3:
	 console.log("China");
	break;
	case population < 1.3 && population > 1:
	 console.log("India");
	break;
	default:
	 console.log("Pakistan");
	break; 
}

// Q4

let str = "my mame is sajid ali khan. zahid bhai jyada bolte hain. Inko chup krana pdega"
let arr = str.split(" ")
let arr1 = []; 

for(let i=0; i < arr.length; i++){
	if(arr[i].toLowerCase() == "sajid"){
        arr.splice(i,1,"Zahid")
	}else if(arr[i].toLowerCase() == "zahid"){
		arr.splice(i,1,"Sajid")
	}else if(arr[i].toLowerCase() == "chup"){
		arr.splice(i,1,"silent")
	}
}

for(let val of arr){
	arr1.push(val.substring(0,1).toUpperCase().concat(val.slice(1)))
}
console.log(arr1.join(" "))

// Q5 

let moNum = "9881894461";
let sub = moNum.substring(3,6)
let pad = sub.padStart(6,"*")
let padE = pad.padEnd(pad.length + moNum.slice(6).length, "x")
console.log(padE)


// Q6 
for(let i=1; i<=5; i++){
	for(let j=i; j<=5; j++){
		document.write("*")
	}
	document.write("<br>")
}
for(let i=2; i<=5; i++){
	for(let j=1; j<=i; j++){
		document.write("*")
	}
		document.write("<br>")
	}

// Q7 

let arr2 = [1,2,3,4,5,6,7];
let sum = 0;
let ave = 0;
let arr3 = arr2.forEach(function(val){
	let arr =  val * 10;
	if(50 < arr){
       ave += arr;
	}else{
		sum += arr
	}
})
console.log(sum)
console.log(ave/2)

// Q8 

let second = document.getElementById("seconds")
let sec = 10;
let In = setInterval(function(){
	second.textContent = sec;
	sec -= 1;
},1000)

// Automatice Interval off
setTimeout(function(){
	clearInterval(In)
},11000)

// Click button Interval off
function stop(){
setTimeout(function(){
	clearInterval(In)
},0)}

// Click button Start Interval
let desi = true;
function start(){
    setInterval(function(){
    if(desi){
	second.textContent = sec;
	if(sec == 0){
		alert("Game over")
		desi = false;
	}
	sec -= 1;
}
},1000)
}

// Q9 

let person1 = {
	myName : "Hassan",
	mobile : 9610604098,
	address : {
		city : "jaipur",
		pincode : 302012,
	}
}

// Object deep copy
let person2 = JSON.parse(JSON.stringify(person1));

// Object to string
let stri = JSON.stringify(person2)

// String to Object
let person3 = JSON.parse(stri)

// Comparison obj
if(person1 === person2){
	console.log("Yes")
}else{
	console.log("No")
}

// Object destructring
let {myName,mobile,address:{pincode}} = person2;
console.log(myName,mobile,pincode)

// Q10

let arr4 = [1,2,3,4,1,2,3,1,2,3,1,5,6,7,4];
let map = new Map();
let m = new Map();
let rep;
let mm = 0;
let max = 0;
for(let val of arr4){
	rep = map.get(val);
	if(rep){
		map.set(val,rep+1)
	}else{
		map.set(val,1)
	}
}
console.log(map)
let k = 0;
map.forEach(function(val,key){
	if(val > max){
	   max = val
	   k = key
	}
})
console.log(`Number ${k} total ${max} bar repeat hoa hai`)






