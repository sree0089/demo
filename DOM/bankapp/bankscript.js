// local storage
//localStorage.key(index)
//localStorage.removeItem(key)
//localStorage.clear
//localStorage.setItem("username","admin")
//localStorage.setItem("password","admin@123")
//let pwd=localStorage.getItem("password")
//let uname=localStorage.getItem("username")
//localStorage.setItem("token","abc@123")

// var person1={pname:"ram",account_number:1000,balace:2000,password:"userone"}
// var person2={pname:"ram",account_number:1001,balace:2000,password:"userone"}

// //localStorage.setItem(person1.account_number,JSON.stringify(person1))
// //localStorage.setItem(person2.account_number,JSON.stringify(person2))

// function getBalance(account_number)
// {
//     if(account_number in localStorage)
//     {
//        let user1=JSON.parse(localStorage.getItem(account_number))
//        console.log(user1.balace);
//     }
//     else
//     {
//     console.log("Invalid Acoount number");
//     }

// }
// function authenticate(account_number,password)
// {
//     if(account_number in localStorage)
//     {
//       let user=JSON.parse(localStorage.getItem(account_number))
//       if(user.password == password && user.account_number==account_number)
//       {
//           console.log("Login Success");
//       }
//       else{
//           console.log("Invalid Login Details");
//       }
//     }
//     else{
//         console.log("Invalid ACcount Number");
//     }
// }

//JSON.Stringyfy
//JSON.Parse
class Bank{

    createAccount()
    {
        let person_name=name.value
        let account_number=acno.value
        let balance=bal.value
        let password=pwd.value
        let user={
            person_name,account_number,password,balance

        }
        localStorage.setItem(account_number,JSON.stringify(user))
        alert("ACCOUNT HAS BEEN CREATED SUCCESSFULLY")
        location.href="bank.html"
    }

    authenticate()
    {
        let account_number=acno.value
        let password=pwd.value
        if((acno.value) in localStorage)
        {
          let user=JSON.parse(localStorage.getItem(acno.value))
          if(pwd.value==password && acno.value==account_number)
          {
              alert("Login Success")
              location.href="userhome.html"
          }
          else
          {
              alert("Invalid details")
          }
        }
        else
        {
              alert("Invalid Login Details")
        }
    }

}



var bank=new Bank;
