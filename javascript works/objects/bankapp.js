class Bank
{
    accountCreate(accno,acctype,bal)
    {
        this.accno=accno;
        this.acctype=acctype;
        this.bal=bal;
    }
    deposit(amount)
    {
        this.bal+=amount;
        console.log(`Your Account Number ${this.accno}has been credited with ${amount} avail bal${this.bal}`);
    }

    withdrawal(amount)
    {
        if(this.bal>amount){
            this.bal-=amount;
        }
        else{
            console.log("Insufficient Balance");
        }

    }
    balEnquiry()
    {
      console.log(`your available balance is ${this.bal}`);
    }
}
var bnk1=new Bank()
bnk1.accountCreate(1001,"savings",5000)
bnk1.withdrawal (20000)