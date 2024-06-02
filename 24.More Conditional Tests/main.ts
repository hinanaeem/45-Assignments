//Question # 24

// You don’t have to limit the number of tests you create to 10. If you want to try more comparisons,
//  write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, 
// and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array



// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, 
// and less than or equal to
let num1 = 71;
console.log(num1 > 60);
console.log(num1 < 70);
console.log(num1 == 71);
console.log(num1 !== 71);
console.log(num1 >= 60);
console.log(num1 <= 70);

// • Tests using "and" and "or" operators
let weather = "Rainy";
console.log(weather == "Rainy" && weather !== "Rainy");
console.log(weather == "Cloudy" || weather == "Sunny" || weather == "Drizzling" ||weather == "Snowing"
|| weather !== "Sunny");

// • Tests using the lower case function
let personName = 'Hani'
console.log(personName == 'Hani');
console.log(personName == 'hani');

//comparision
// • Test whether an item is not in a array
//true statement
let myArr = [1,2,3,4,5];
myArr.map((item =>
    {console.log(item==5);
    }))

    //false statement
    let myArr1 = [1,2,3,4,5];
myArr.map((item =>
    {console.log(item == 6);
    }))

//• Tests for equality and inequality with strings
let number = 89;
//ignore data type so statement is true
console.log(number == '89');
// consider data type so statement is false
console.log(number === '89');






