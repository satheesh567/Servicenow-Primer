let arr=[1,2,3,4,"satheesh"];

for(let num of arr){
   console.log(num);
}

for(let num1 in arr){
    console.log(num1);
}
arr.forEach(function(element,index,arr){
    console.log(`${element},${index},${arr}`);   
});
 

function fun(...num){
   for(let n1 of num){
       console.log(n1);
   }
}
fun(10,20,30);
function fun1(a,b,c){
    console.log(a,b,c);
}
fun1(...arr);

let sl=['amngo','dbhb','dhbhd','chbv'];
s1=sl.slice(0,0);
console.log(s1)
