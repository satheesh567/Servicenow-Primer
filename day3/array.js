const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
console.log(size);

fruits.pop();
fruits.push("lemon");
console.log(fruits);

let arr1=[1,2,3,4,5];
let arr2=arr1.map((element)=>element*3);
console.log(arr2);

let arr3=arr1.reduce((acc,e,i,a)=>{
   return acc*e;
})
console.log(arr3);
console.log(arr1);

