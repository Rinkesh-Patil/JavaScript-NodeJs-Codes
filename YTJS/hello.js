function myfun(a){
    a("rinkesh");
   // console.log(a);
}
function myfun2(name){
    console.log("this is function i m going to pass");
    console.log("inside fun2");
    console.log(`my name is ${name}`);
}
myfun(myfun2);