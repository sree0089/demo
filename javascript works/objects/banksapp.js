class Bank {
    session={}
    account_details = {
        1000: { acno: 1000, balance: 2000, username: "userone", password: "userone" },
        1001: { acno: 1001, balance: 3000, username: "usertwo", password: "usertwo" },
        1002: { acno: 1002, balance: 2002, username: "userthree", password: "userthree" },
        1003: { acno: 1003, balance: 20000, username: "userfour", password: "userfour" }
    }
    accountCreate(acno, balance, username, password) {
        if (acno in this.account_details) {
            console.log("Exixting Account");
        }
        else {
            this.account_details[acno] = { acno, balance, username: username, pasword: password }
            console.log("Account Created");
            console.log(this.account_details);
        }
    }
    authenticate(account_number, username, password) {
        if (account_number in this.account_details) {
            if (this.account_details[account_number].username == username) {
                if (this.account_details[account_number].password == password) {
                    console.log('Login Suucess');
                    this.session["user"]=account_number
                }
                else {
                    console.log("Login Failed : Invalid Password");
                }
            }
            else {
                console.log("Invalid Username");
            }
        }

        else {
            console.log("Invalid Account number");
        }
    }

    fundTransfer(from_acno,to_acno,amount)
    {
      if(from_acno == this.session["user"]){
          if(to_acno in this.account_details)
          {
               if(this.account_details[from_acno].balance>amount)
               {
                   this.account_details[to_acno].balance+=amount
                   this.account_details[from_acno].balance-=amount
                 //   console.log(`Your account ${from-acno.balance} is debted with amount ${amount} available balance ${this.[account_details].balance}`);
              console.log("Successful");
              }

               else{
                   console.log("insufficient balance");
               }
          }
          else{
              console.log("Invalid account number");
          }


      }
      else{
          console.log("Login REquired : invalid session");
      }
    
    }
     balanceEnquiry()
     {
         if("user" in this.session)
         {
         console.log(`Balance is ${this.account_details[this.session["user"]].balance}`);
     }
    }
}

var obj = new Bank()
//obj.accountCreate(1004, 2000, "userfive", "userfive")
//obj.authenticate(1090, "userone", "userone")
var obj1=new Bank()
obj1.authenticate(1001,"usertwo","usertwo")
//obj1.fundTransfer(1002,2000,3000)
obj1.fundTransfer(1001,1002,500)
obj1.balanceEnquiry()