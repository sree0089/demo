var low=3,upper=18;


for(i=low;i<=upper;i++)
{
    let flag=0
   for(let j=2;j<i;j++)
   {
        if(i%j==0)
        {
            flag++;
            break;
        }

   }
   console.log(flag==0?i:"");
}