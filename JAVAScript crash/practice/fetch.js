console.log("hello");
function getdata()
{
fetch('https://localhost:7041/api/Employee')
.then(response=>response.json())
.then(data=> {
	let fd="";
 alert(data)
 	console.log(data)
	  for(let x of data)
	  {console.log(x)
	      for(let b in x)
		  {console.log(x[b])
		fd+=x[b]+"<br/>"
	  }
	  fd+="<hr/>"; 
	  }
document.getElementById('p').innerHTML=fd;
});
}
//getdata();
/*
function fetchData() {
     return new Promise(function(resolve,reject){
	reject();
     });
}
let promise=fetchData();
promise.then(function(){
      console.log("data fetched");
}).then(function(){

        console.log("data formatted");
}).catch(function(){
       console.log("Fetch Error");
}).then(function(){
        console.log("data");
});
//
var x =1+1 +"1";

    document.write(x);//21
*/