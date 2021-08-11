var datas=[
    {acno:1000,ac_type:"savings",balance:5000,transactions:[
        {to:1001,amount:500,note:"food"},
        {to:1003,amount:600,note:"travel"},
        {to:1001,amount:700,note:"ball"}

    ]},
    {acno:1001,ac_type:"savings",balance:6000,transactions:[
        {to:1000,amount:550,note:"bill"},
        {to:1002,amount:900,note:"emi"},
        {to:1002,amount:650,note:"bill"}

    ]},
    {acno:1002,ac_type:"savings",balance:8000,transactions:[
        {to:1001,amount:600,note:"clothing"},
        {to:1000,amount:800,note:"travel"},
        {to:1000,amount:6700,note:"cycle"}

    ]}

]

//check for 1005 account
//console.log(datas.some(account=>account.acno==1005));

//highest balance
//console.log(datas.reduce((acc1,acc2)=>acc1.balance<acc2.balance?acc2:acc1))

//descending order of balance
//datas.sort((acc1,acc2)=>acc2.balance-acc1.balance).forEach(acc=>console.log(acc))


//debit transaction of account 1000
//datas.filter(account=>account.acno==1000).forEach(account=>console.log(account.transactions))

//payment history of 1000



//credit transaction of 1000
var payment_history=[]
var credit_trans=datas.map(account=>account.transactions).forEach(transactions=>{
    transactions.forEach(trans=>{
        trans.to==1000?payment_history.push(trans):""
    })
})

datas.filter(account=>account.acno==1000).map(account=>payment_history.push(account.transactions))
console.log(payment_history);
