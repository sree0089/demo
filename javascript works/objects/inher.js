//inheritance

class Parent
{
  phone()
  {
      console.log("inside phone method");
  }
}

//single inheritance
class Child extends Parent
{

}


var child=new Child()
child.phone()