"use strict"

function countryFn(){
	let countryName = document.getElementById("countryName").value;	
	if(!countryName){
	        document.getElementById("error").innerHTML= "This field is mandotory"
	}else{	
	        getdata(countryName);
	        document.getElementById("error").innerHTML= " ";
	}        
}

function getdata(country1){
	let countryName1 = country1.substring(0,1).toUpperCase().concat(country1.slice(1))
 
const infoCountry = new XMLHttpRequest();

infoCountry.open("GET", `https://restcountries.com/v2/name/${country1}`);

infoCountry.send();

infoCountry.addEventListener("load",function(){
    let country = JSON.parse(this.responseText);
    
    if(country.status == 404){
    	  document.getElementById("error").innerHTML = "This  is a not country"	
}else{
        document.getElementById("cou").textContent = countryName1;
	    document.getElementById("capital").textContent = `Capital : ${country[0].capital}`;
	    document.getElementById("population").textContent = `Population : ${country[0].population}`;
	    document.getElementById("region").textContent = `Region : ${country[0].region}`;	
	    document.getElementById("location").textContent = `Lacation : ${country[0].location}`;	
    } 
})	

}