var employees=[
    [1000,"ram",2,25000,"developer"],
    [1001,"ravi",1,22000,"developer"],
    [1002,"raju",3,27000,"qa"],
    [1003,"nikil",1,22000,"qa"]
]

//for (let employee of employees)
//{
    // console.log(employee[1]);
    // console.log(employee[4]);
    //    if(employee[3]>23000)
    //    {
    //     console.log(employee[1]);
    //    }
    // if(employee[4]=="developer")
    // {
    //     console.log(employee[1]);
    // }
    // if(employee[4]=="qa")
    // {
    //     console.log(employee[1]);
    // }
    // for(let employee of employees)
    // {
        
    // }

// } 

var max_sal=0;
 for(let emp of employees)
 {
     if (emp[3]>max_sal)
     {
         max_sal=emp[3]
     }
 }
 console.log(max_sal);

 for(let emp of employees)
 {
     if(emp[3]==max_sal)
     {
         console.log(emp);
     }
 }

var min_sal=0;
for(let emp of employees)
{
    if (emp[3]<max_sal)
    {
        min_sal=emp[3]
    }
    
}
 console.log(min_sal);

 for(let emp of employees)
 {
     if(emp[3]==min_sal)
     {
         console.log(emp);
     }
 }

