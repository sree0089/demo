var num=15,flag=0;
for (let i=2;i<num;i++)
{
    if(num%i==0)
    {
        flag+=1;
        break;
    }
}
console.log(flag==0?"Prime":"Not Prime");