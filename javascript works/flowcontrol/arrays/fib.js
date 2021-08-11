
var num1=0,num2=1,next,i,num;
 console.log(num1);
 console.log(num2);

 function fibonacci(num)
 {
     if (num==0 | num ==1)
     {
         return num
     } 
     else
     {
         return fibonacci(num-1) + fibonacci(num-2)
     }
 }
 console.log(fibonacci(5));

// function fib(num)
// {
// for(i=1;i<=num;i++)
// {
// next=num1+num2;
// num1=num2;
// num2=next;
// return num2;
// }
// console.log(fib(4));
// }
