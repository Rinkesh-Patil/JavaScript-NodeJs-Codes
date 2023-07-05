function callme() {
 
    let x = [1,2,3,4];
let y = [10,20,30,40];
let res = x.concat(y);   //concat
let res2 = x.join("-");  //join
let res3 = y.slice(1); //slice 
let res4 = x.slice(1,3); //slice 
let res5 = y.pop(); //pop top most element
document.write("array after concatenation : "+res);
document.write("<hr/>");
document.write("array after join(converts array to string) : "+res2);
document.write("<hr/>");
document.write("array after slice(with one parameter) : "+res3);
document.write("<hr/>");
document.write("array after slice(with two parameter) : "+res4);
document.write("<hr/>");
document.write("array after pop() : "+res5);



}