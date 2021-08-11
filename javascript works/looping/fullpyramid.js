
for(let i=1;i<=4;i++)
{
    let out="";
    for(let j=4;j>i;j--)
    {
        out=out+" ";
    }
    for(let k=1;k<=i;k++)
    {
        out=out+"* ";
    
    }
    console.log(out);
}