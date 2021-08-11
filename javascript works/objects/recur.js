var pattern="ABABCC"
var rec={}
 for(let char of pattern)
  {
           if(! char in rec)
           {
               rec[char]=1
           }
       else{    
      console.log(char);
      break;
       }
  }
