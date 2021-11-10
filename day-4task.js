//compareing two JSON have the same properties without order
var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

console.log( _.isEqual(obj1,obj2) );


// Displaying country flags ,name, region, sub region and population form  rest countries API.

var day4 = new XMLHttpRequest();
day4.onload = function () {
     if(day4.status>=200 && day4.status < 300 ){
     var t = JSON.parse(this.response);
     for(var j in t){
        console.log(
            `Name:${t[j].name} \nregion:${t[j].region} \nsub-region:${t[j].subregion} \npopulation:${t[j].population} \nFlag:${t[j].flag}` ); 
      }
    }
    else{
        console.log("Data is not available");
    }
  
};
day4.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
day4.send();



