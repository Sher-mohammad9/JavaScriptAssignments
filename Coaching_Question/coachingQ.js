"use strict"

// Q1 ek number lena hai. 
//     -> kya number odd hai ? 
//     -> agar odd hai to kya 7 ka multiple hai ?
//     -> Kya number me 15 add krne pr vah number 120 ke brabar hai 

// Yadi teeno condition true hai to ek date ka object lena hai vah us date object me jo number
// lia hai us number date ki minutes me add krke time print krvana hai 

// Else conditon false hai to tume aaj ki date ko milliseconds me console me print krvana hai


let num = 85;
if(num % 2 != 0 && num % 7 === 0 && num+15 == 120){
			let date = new Date()
			let mintus = date.setMinutes(d.getMinutes + num)
			console.log(mintus)
}else{
       console.log(Date.UTC(num))
}

// Q2 ek number lena hia yadi vah number even hai to 100 print krna hai 
// otherwise vhi number print krna hai 

// But is solution ko 3 tarike se krna hai 
//     if else 
//     ternary operator
//     || operator Short circuiting

let num1 = 30;
let num2 = 100
//Using if else
if(num1 % 2 === 0){
	console.log(num2)
}else{
	console.log(num1)
}

//Using ternary operator
num1 % 2 === 0 ? console.log(num2) : console.log(num);

//Using Short Circuting
let n = num1 % 2 === 0 || num1
if(n === num1){
	console.log(num2)
}else{
	console.log(num1)
}



//Q3 value leni hai country population

// agar vah population 1.3 crore se jyada hai to China print krna hia 
// agar 1.3 se kam and 1 crore se jyada to India print krna hai 
// else 
//     Pakistan

// is question ko switch case se krna hai 

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

// Q4 My Name is Sajid Ali Khan. Zahid bhai jyada bolte hain. Inko chup krana pdega

// Is string me Sajid ko Zahid se and Zahid ko Sajid se replace krna hai. aur chup ko silent 
// se replace krna hai. Iske alava jitne b words hai is string me vo sb words ka phle character 
// Capital hona chahiye. Finally tume converted String print krvani hai

// OUTPUT =  My Name Is Zahid Ali Khan. Sajid Bhai Jyada Bolte Hain. Inko Chup Krana Pdega

let str = "my mame is sajid ali khan. zahid bhai jyada bolte hain. Inko chup krana pdega"
let arr = str.split(" ")

for(let i=0; i < arr.length; i++){
	if(arr[i].toLowerCase() == "sajid"){
        arr.splice(i,1,"Zahid")
	}else if(arr[i].toLowerCase() == "zahid"){
		arr.splice(i,1,"Sajid")
	}else if(arr[i].toLowerCase() == "chup"){
		arr.splice(i,1,"silent")
	}
		arr.push(arr[i].substring(0,1).toUpperCase().concat(arr[i].slice(1)))
}
console.log(arr1.join(" "))

// Q5 9581894461

// is number ko convert krna hai 

// ***189xxxx

let moNum = "9881894461";
let sub = moNum.substring(3,6)
let pad = sub.padStart(6,"*")
let padE = pad.padEnd(pad.length + moNum.slice(6).length, "x")
console.log(padE)


// Q6 Ye pattern print krna hai.
// *****
// **** 
// ***
// **
// *
// **
// ***
// ****
// *****

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


// Q7 [1,2,3,4,5,6,7] answer 65
    // har number ko 10 se multiply krna hai 
    // check krna hia kaunsa number 50 se bda hai 
    // jo b numbers bachenge unka sum krna hia 
    // sare numbers ka sum krne ke bad un numbers ka average btana hai
    // answer =  65

let arr2 = [1,2,3,4,5,6,7];
let average=0;
let arr3 = arr2.map(function(val){
	return val * 10;
}).filter(function(val){
	return val > 50;
}).reduce(function(total, val){
	average++;
	return total + val;
})
console.log(arr3/average)


// Q8  DOM 

// HTML page tume counter chlana hai 
// 100
// 99
// 98
// 97

// 2 buttons honge Start and Stop jaise hi number 0 ho jaye ek alert dhikana hia Game Over


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
	sec -= 1;
	if(sec == 0){
		alert("Game over")
		desi = false;
	}
}
},1000)
}

// Q9  Ek object1 bnana hai person details ka and iski deep copy krni hai 

// String me convert krna hai. fir Dubara se Object bnana hai Object2

// if object1 === object2 
// Yes/No print krvana hai 

// Object2 se object destructring krke name, mobile and pincode print krvana hai 
 

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


// Q10 [1,2,3,4,1,2,3,1,2,3,1,5,6,7,4]

// Tume ye btana hai ki kaunsa number kitni bar repeat hua hai aur kaunsa number maximum bar repeat hua hia 
// 1:5
// 2:4

// OUTPUT = Number 1 total 10 times repeat hua hai

let arr4 = [1,2,3,4,1,2,3,1,2,3,1,5,6,7,4];
let map = new Map();
let num = 0;
let max = 1;
for(let key of arr4){
  let value = map.get(key);
	if(value){
		let newValue = value+1
		map.set(key,newValue)
	 if(newValue > max){
         max = newValue
         num = key
	 }	
	}else{
		map.set(value,1)
	}
}
console.log(`Number ${num} total ${max} bar repeat hoa hai`)







