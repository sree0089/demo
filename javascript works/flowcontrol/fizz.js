// Program to print 'fizz' if a number is divisible by 3,
// 'buzz' if a number is divisible by 5 , 'fizzbuzz' if it is divisible by 15

var num=17;
if(num%3==0)
{
    console.log("FIZZ");
}
else if(num%5==0)
{
    console.log("BUZZ");

}
else if(num%15==0)
{
    console.log("FIZZBUZZ");

}
else{
    console.log("end");

}