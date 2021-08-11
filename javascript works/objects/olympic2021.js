var olympics=[
    
    {country:"unitedstates",gold:30,silver:35,bronze:27,total:92},
    {country:"japan",gold:22,silver:10,bronze:15,total:47},
    {country:"aus",gold:17,silver:6,bronze:20,total:43},
    {country:"china",gold:34,silver:24,bronze:16,total:74},   
    {country:"india",gold:0,silver:2,bronze:3,total:5},
    {country:"germany",gold:9,silver:10,bronze:16,total:25},

]



// print countrynames partcipating 2021 olympics
// for(let country of olympics)
// {  

//     console.log(country.country);
// olympics.map(nation=>nation.country).forEach(c_name=>console.log(c_name))
// // }
// // which country got most goldmedals
// var max_gold= olympics.reduce((item1,item2)=>item1[1]>item2[1]?item1:item2)
// console.log(costly)
// // which contry got most medals
// console.log(olympics.total);

// sort countries based on gold medals

var sort_gold=olympics.sort((nation1,nation2)=>nation1.gold-nation2.gold);
console.log(sort_gold);

// sort countries based on total medals
var sort_medal=olympics.sort((nation1,nation2)=>nation1.total-nation2.total);
console.log(sort_medal);

// countries got silver > 10

console.log(olympics.filter((nation)=>nation.silver>10))

//list of countries whose goldmedal=0

// list the country names whose gold medal >20

// is pakisthan participating in 2021 olympics
var is_present=olympics.some((nation)=>nation.country=="pakisthan")
console.log(is_present);