 //i         j
    //ROW==4 ||col+eow==5||col-row==3  print*
    
    var i,j;
    for(i=1;i<=4;i++)
     {
        let out=" ";
        if(i==4||j+i==5||j-i==3)
        {
            out=out+"* ";
        
        }
        for(j=4;j>i;j--)
        {
            out=out+" ";
        }
        console.log(out);
    }
