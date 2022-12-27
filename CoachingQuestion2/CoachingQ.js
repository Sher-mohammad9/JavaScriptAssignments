"use strict"

// Q1. Count print krna hai from 1 to 100 using closure function

// function add() {
//   let counter = 1;
//   function plus() {
//   	console.log(counter)
//   	counter++
//   }
//   for(let i=1; i<=100; i++){
//   	     plus();
//   }
// }
// add();

/* 

Q2.  TO-DO List bnani hai HTML Me
isme kya krna hai ki ek input box hoga aur submit button hoga 
input box me kuch b likh ke submit button pr click krna hia 

items aise list me dhikenge :

Bank Deposit
Fee Transfer
School Homework

In items ke sath ek cross button b hona chahiye. jaise hi cross button pr 
click kroge to vo item list se remove ho jana chahiye.

*/

 
let tr;
let desi = true;
  let get1 = document.getElementById("getvalue1").value="345453453";
function subForm(){   
  // let get1 = document.getElementById("getvalue1").value;
  console.log(get1)
  if(!get1){
    document.getElementById("validation1").innerHTML = "This field is mandatory";
    desi = false;
    return false;
  }
   document.getElementById("validation1").innerHTML = " ";

  let get2 = document.getElementById("getvalue2").value;
  if(!get2){
    document.getElementById("validation2").innerHTML = "This field is mandatory";
    desi = false;
    return false;
  }
    document.getElementById("validation2").innerHTML = " ";

  let get3 = document.getElementById("getvalue3").value;
  if(!get3){
     document.getElementById("validation3").innerHTML = "This field is mandatory";
     desi = false;
     return false;
  }
  desi = true;
     document.getElementById("validation3").innerHTML = " ";

function reForm(){
 if(desi){
  let table = document.getElementById('List');
  tr = document.createElement("tr");
  tr.id = "trr";
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  table.appendChild(tr);
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);

  td1.innerHTML = get2;
  td2.innerHTML = get1;
  td4.innerHTML = get3;
  td3.innerHTML = "0.0";
  }
  }
  // reForm();
   return true;
}

function clearFn(){
    document.getElementById("trr").remove();
}


/* 

Q3. Ek game bnana hai 

Page load hote hi sbse phle players ke name puchne hain 
like Sajid, Ashraf, Sohil is trh se 

fir ek random number generate krna hai jitne members hai game me max
random number 0 se max-1 hona chahiye 

random number ki help se ek player pick kroge 
fir usse 3 questions puchoge randomly. Yadi 3 me se 3 questions vo bta pata hai 
to vo pass ho jayega and game firse restart ho jayega. aur firse ek player randomly 
select krke firse 3 questions puchenge. jis b playe ne 1 b question galat answer kr dia vo fir party dega. 

Ab party me vo players ko kya khilayega ye b randomly select hoga list me se.


Is program ko krne ke lie tume Players ka array, questions ka map jisme key me 
question hoga and value me answer hoga, and ek party kiski deni hai uska array 
like Samosa, Chai, Cold Drink etc.

*/

//     let playerName=[];
//     let howMochPlayer = Number(prompt("How moch play the macth?"))
// for(let i=1; i<=howMochPlayer; i++){
//     playerName.push(prompt("Enter player name " + i))
// }
//     let arr = ["2 / 2","2 + 2","2 * 2"]
//     let map = new Map();
//     map.set(arr[0], 1).set(arr[1], 4).set(arr[2], 4);
//     let party = ["Samosa","Chai","Cold Drink"]
//     let desi = true;
// while(desi){
//     let random = Math.trunc(Math.random()*playerName.length);
//     for(let i=1; i<=3; i++){
//     let quesRnd = Math.trunc(Math.random()* arr.length);   
//     let play = Number(prompt(`${playerName[random]} how much is ${arr[quesRnd]} ?`));
//     let ans = map.get(arr[quesRnd])
//     if(play === ans){
//        if(i == 3){
//           console.log(`Congratulation you have pass`)
//        } 
//         continue; 
//     }else{
//         console.log(`${playerName[random]} you have failed now party ${party[random]}`)
//         desi = false;
//         break;
//     }
//     }
// }
    
   
//Q9 

let d1 = new Date("2002-1-1")
let d2 = new Date("2003-1-1")
let d3 = new Date("2004-1-1")

function date(dt1,dt2,dt3){
let date1 = Date.UTC(dt1.getDay(),dt1.getMonth(),dt1.getFullYear())
let date2 = Date.UTC(dt2.getDay(),dt2.getMonth(),dt2.getFullYear())
let date3 = Date.UTC(dt3.getDay(),dt3.getMonth(),dt3.getFullYear())
if(date1 < date2 && date2 < date3){
    console.log("True")
}else{
    console.log("false")
}
}
date(d1,d2,d3)





