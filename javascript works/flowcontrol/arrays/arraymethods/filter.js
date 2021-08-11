var arr=[10,11,12,13,14,15,16,17,18,20]
console.log(arr.filter(num=>num%2==0))

var names=["ram","ravi","arun"]
console.log(names.filter(name=>name[0]=="r"));

var employees=[
    [1000,"ram",2,25000,"developer"],
    [1001,"ravi",1,22000,"developer"],
    [1002,"raju",3,27000,"qa"],
    [1003,"nikil",1,21000,"qa"]
]

console.log(employees.map(emp=>emp[1]));
console.log(employees.map(emp=>emp[4]));
console.log(employees.filter(emp=>emp[4]=="developer"));
console.log(employees.filter(emp=>emp[3]>23000));

console.log(employees.filter(emp=>emp[3]>23000 & emp[4]=="developer").map(emp=>emp[1]));