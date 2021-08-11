var weather=[
    {dist_name:"tsr",temp:25},
    {dist_name:"tvm",temp:26},
    {dist_name:"ekm",temp:29},
    {dist_name:"pkd",temp:30},
    {dist_name:"idk",temp:15},
    {dist_name:"mpm",temp:29},
    {dist_name:"tsr",temp:27},
    {dist_name:"tvm",temp:23},
    {dist_name:"ekm",temp:31},
    {dist_name:"pkd",temp:27},
    {dist_name:"idk",temp:17},
    {dist_name:"mpm",temp:25},

]

var max_wthr={}
for(let data of weather)
{
    let district=data.dist_name;
    let cur_temp=data.temp;
    if(! (district in max_wthr))
{
        max_wthr[district]=cur_temp;
    }
    else{
        let old_temp=max_wthr[district];
        if(old_temp<cur_temp)
        {
            max_wthr[district]=cur_temp;
        }
    }
}

console.log(max_wthr);

Object.entries(max_wthr).sort((o1,o2)=>o2[1]-o1[1]).forEach(data => console.log(data))
    


