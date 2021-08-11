    
// Multilevel
class Parent
{
    m1()
    {
        console.log("inside parent m1");
    }
}
class SubChild extends Parent
{
    m2()
    {
        console.log("inside parent m2");
    }
}
class Child extends Subchild
{
    m3()
    {
        console.log("inside parent m3");
    }
}

var child=new Child()
child.m3();
 child.m2();
 child.m1();
