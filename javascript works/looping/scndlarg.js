// Find the second largest among three numbers

var n1=60,n2=71,n3=10;
// if(n1>n2&n2>n3)
// {
//     console.log("n1 is larger")
// }
// else if(n2>n3&n3>n1)
// {
//     console.log("n2 is larger");
// }
// else if(n3>n2&n2>n1)
// {
//     console.log("n3 is larger");
// }
// else{
//     console.log("Numbers are Equal");
// }

console.log((n1>n2&n2>n3)?"n1 is larger":(n2>n3&n3>n1)?"n2 is larger":(n3>n2&n2>n1)?"n3 is larger":"Equal numbers");