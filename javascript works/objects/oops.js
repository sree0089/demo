// class Person
//  {
//     setPerson(age,name)
//     {
//         this.age=age;
//         this.name=name;
//     }
//     printPerson()
//     {
//         console.log(this.age,this.name);
//     }
// }
// var obj=new Person();
// obj.setPerson(26,"ram")
// obj.printPerson()


class Person
 {
     setPerson(age,name)
     {
         this.age=age;
        this.name=name;
     }
     getAge()
     {
         return this.age;
     }
     getName()
     {
         return this.name;
     }
}

var obj1=new Person()
var obj2=new Person()
obj1.setPerson(25,"ravi")
console.log(obj1.getName());
