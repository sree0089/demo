class Parent
{
    phone()
    {
        console.log("Samsung galaxy f62");
    }
}
class Child extends Parent
{
phone()
{
    super.phone() // to invoke parents method( to refer base class)
    console.log("New iphone");
}
}

var child=new Child()
child.phone()