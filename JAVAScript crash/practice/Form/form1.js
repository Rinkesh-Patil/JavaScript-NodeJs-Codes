function readradio(){
   var data = "";
   let pobj = document.getElementById("pp");
   let t1 = document.getElementById("t1");
   let t2 = document.getElementById("t2");
   let t3 = document.getElementById("n3");
   if(document.frm.no1.checked)
   data = +t1.value + +t2.value;
   else
   data = +t1.value - +t2.value;
   alert(data);
   t3 = data;
}
