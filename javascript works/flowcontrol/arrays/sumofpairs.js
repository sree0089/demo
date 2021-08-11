
var arr=[2,3,4,6,8];
var sum=10;

for (let index = 0; index < arr.length; index++)
{
    for(let j=index+1;j<arr.length;j++)
    {
        let total=arr[index]+arr[j];
        if (total==sum)
        {
            console.log(arr[index],arr[j]);
            break;
        }
    }
}

    
    


    
// // }
// var arr=[2,3,4.6]
// var sum=7;
// var low=0,upp=arr.length-1;
// while(low<upp)
// {
//     let tot=arr[low]+arr[upp];
//     if(tot==sum)
//     {
//         console.log(arr[low],arr[upp]);
//         break;
//     }
//     else if(tot>sum)
//     {
//         upp--;
//     }
//     else
//     {
//         low++;
//     }
// }