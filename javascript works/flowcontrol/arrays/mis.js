var arr=[1,2,3,4,5,6,7,8,10,11,12];
for(let i=0;i<arr.length;i++)
{
    if(arr[i]-arr[i+1] != -1)
    {
        var num1=arr[i];
        var num2=arr[i+1];
        var num3=(num1+num2)/2;
        console.log("missing number is " +num3);
        break;
    
        
    }
}