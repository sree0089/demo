function displayValue(num)
{
    inpt.value+=num;

}



function clearBox()
{
    inpt.value=""
}

function evalExp()
{
    let res=eval(inpt.value)
    inpt.value=res;
}

function removEle()
{
    let data=inpt.value.slice(0,-1)
    inpt.value=data;
}
