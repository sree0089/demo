//more than MANY form
//method overloADING
//



class Calculation
{
    add()
    {
        console.log("inside no arg method");
    }
   add(num1)
   {
       console.log("inside single arg method");
   }
   add(num1,num2)
   {
       console.log("inside two arg method");
   }
}

var calc=new Calculation()
calc.add(10)
