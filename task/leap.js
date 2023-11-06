let num=parseInt(prompt('enter the year '));
if(num%400==0||num%4==0&&num%100==0){
    console.log(`${num} is a leap year`);
}
else{
    console.log(`${num} is not a leap year`); 
}
