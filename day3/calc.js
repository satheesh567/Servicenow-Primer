let oper=prompt('which operation you want perform , ("sum","minus","mul","div")');
let a=parseInt(prompt("Enter first  number "));
let b=parseInt(prompt("Enter second  number "));

function operation(oper,a,b){

    if(oper=="sum"){
      return  sum(a,b);
    }
    else if(oper=="minus"){
       
     return minus(a,b);
    }
     else if(oper=="mul"){
        return multi(a,b);
     }
    else if(oper=="div"){
        return div(a,b);
    }

    else{
        return "enter valid operation";
    }
}
let sum=(a,b)=>a+b;
let minus=(a,b)=>a-b;
let multi=(a,b)=>a * b;
let div=(a,b)=>a/b;

console.log(operation(oper,a,b));
console.log(a*b);