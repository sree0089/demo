var num=123,s=0;
while(num!=0)
{
    let digit =num%10;
    s=(s*10)+digit;
    num=Math.floor(num/10);
    
}
console.log(s);