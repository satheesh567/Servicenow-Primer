let a=parseInt(prompt("Enter a  number "));

function fact(a){ 
    let prod=1;
    for(let i=1;i<=a;i++){
        prod*=i;
    }

    return prod;
}
console.log(fact(a));
