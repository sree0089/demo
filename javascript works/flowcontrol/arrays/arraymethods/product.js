var products=[
    ["001","complan",275,50],
    ["002","boost",255,20],
    ["003","horlicks",225,5],
    ["004","bournvita",230,0],
    ["005","pediasure",220,10],
]

// // print product names
// console.log(products.map(pdt=>pdt[1]));

// // print avaialable product name
// console.log(products.filter(pdt=>pdt[3]!=0).map(pdt=>pdt[1]));

// // print out of stock product details
// console.log(products.filter(pdt=>pdt[3]==0).map(pdt=>pdt[1]));

// // list all products whose price > 250
// console.log(products.filter(pdt=>pdt[2]>250).map(pdt=>pdt[1]));

// // low cost product
// // var max_cost=0;
// // for(let pdt of products)
// // {
// //     if(pdt[2]>max_cost)
// //     {
// //         max_cost=pdt[2]
// //     }
// // }
// // console.log("Maximum cost" +max_cost);

// // var low_cost=0;
// // for(let pdt of products)
// // {
// //     if(pdt[2]<max_cost)
// //     {
// //         low_cost=pdt[2]
// //     }
// // }
// // console.log("Low cost" +low_cost);

// // var low_cost=products.reduce((item1,item2)=>item1[2]<item2[2]?item1:item2)
// // console.log(low_cost);

// // var costly=products.reduce((item1,item2)=>item1[2]>item2[2]?item1:item2)
// // console.log(costly);

// // var hi_stock=products.reduce((item1,item2)=>item1[3]>item2[3]?item1:item2)
// // console.log(hi_stock);

// // // is there any item available under 200
// // console.log(products.filter(pdt=>pdt[2]<200));

//find()
//console.log(products.find(item=>item[1]=="complan"));

//some
//console.log(products.some(item=>item[2]>200));

//forEach()
//products.forEach(item=>console.log(item[1]))

//products.forEach(item=>console.log(item))

//console.log(products.some((item)=>item[2]>=200 &item[2]<=250))


products.sort((item1,item2)=>item1[2]-item2[2]).forEach(item=>console.log(item));
