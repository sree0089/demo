// var add=(num1,num2)=>num1+num2;
// console.log(add(10,40));


// let sub=(num1,num2)=>num1-num2;
// console.log(sub(30,20));

// let mul=(num1,num2,num3)=>num1*num2*num3
// console.log(mul(5,7,8));

// let cube=num=>num**3
// console.log(cube(3));

// let subt=(num1,num2)=>num1<num2?num2-num1:num1-num2
// console.log(subt(10,20));

// //largest among two
// let largest=(num1,num2)=>num1>num2?num1:num2
// console.log(largest(20,78));


// //odd or even
// let numCheck=num1=>num1%2==0?"even":"odd"
// console.log(numCheck(6));

var arr=[10,11,12,13,14,15,16,17]
var sum=arr.reduce((num1,num2)=>num1+num2)
console.log(sum);

var min=arr.reduce((num1,num2)=>num1<num2?num1:num2)
console.log(min);

var max=arr.reduce((num1,num2)=>num1>num2?num1:num2)
console.log(max);