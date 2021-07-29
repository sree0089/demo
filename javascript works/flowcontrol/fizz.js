// Program to print 'fizz' if a number is divisible by 3,
// 'buzz' if a number is divisible by 5 , 'fizzbuzz' if it is divisible by 15

//var num=17;
// if(num%3==0)
// {
//     console.log("FIZZ");
// }
// else if(num%5==0)
// {
//     console.log("BUZZ");

// }
// else if(num%15==0)
// {
//     console.log("FIZZBUZZ");

// }
// else{
//     console.log("end");

// }

var num=15;
// var res="";
// if(num%3==0){

// res+="fizz";}
// if(num%5==0)
// {
// res+="buzz"
// }
// console.log(res);
var res=""
var res=num%15==0? "fizzbuzz":num%3==0?"Fizz":num%5==0?"buzz":""
console.log(res);

