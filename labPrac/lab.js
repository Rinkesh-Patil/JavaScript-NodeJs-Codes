// function go(){
    
//    // alert("you clicked button " );
//     var v = document.forms[0].elements.length;
//     alert(document.forms.length);
//     alert(v);
//    // document.write(document.forms[0].elements[1].value);
//     for(let i = 0; i < v; i++){
//     document.getElementById("n").innerHTML += (document.forms[0].elements[i].value)
//     }
// }
// //document.getElementById("pp").addEventListener("mouseover",);  
// document.getElementById("b1").onclick=go;
// function myFunction(event){
//     var x = event.target;
//    // document.getElementById("pp").innerHTML="hiiiii";
//     document.getElementById("myDiv").innerHTML="<h1>He loves KIRAN💝 🖤</h1><br>also kiran loves him 🤣<br>";
    
// }
function call(){
   let node={type:"rinkesh",name:"rudra"};
   ({type:localtype,name:localname,value="patil"}=node);
 //overwriting local variable
  // document.write(type+" "+name+" "+value);
   document.write("<hr />");
   document.write(localtype+" "+localname);
   let colors =["red","green","yellow"];
   let[,,color3]=colors;
   document.write("<hr />");
   document.write(color3);
   let a=1,b=2;
   document.write("<hr />");
   document.write(a+" "+b);
   document.write("<hr />");
    document.write("after swapping");
    [a,b]=[b,a];
    document.write("<hr />");
    document.write(a+" "+b);
    document.write("<hr />");
    let color=["pink","orange","purple"];
    let[clonedarray]=color;
    let[...clonedarray1]=color;
    let[col1,...allcol]=color;
   document.write(col1+" "+allcol[0]+" "+allcol[1]+" "+"--->by to string:"+allcol);
   document.write("<hr />");
   document.write(clonedarray);
   document.write("<hr />");
   document.write(clonedarray1);
}