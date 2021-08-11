var arr1 = [1, 2, 3, 4, 5]
var arr2 = [4, 3, 5, 1, 2]
// var flag=0;
// function compare()
// {
//     
// }

arr1.sort((num1, num2) => num1 - num2)
arr2.sort((num1, num2) => num1 - num2)
console.log(arr1);
console.log(arr2);

var limit = arr2.length - 1;
var flag = 0;
if (arr1.length != arr2.length) {
    console.log("NOt Same");

}

else {
    for (let i = 0; i <= limit; i++) {
        if (arr1[i] == arr2[i]) {
            continue
        }
        else {
            flag++
            break
        }
    }
    console.log(flag == 0 ? "same" : "not same");

}

