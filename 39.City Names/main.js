"use strict";
/* Question # 39

City Names: Write a function called city_country() that takes in the name of a city and its country.
The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.*/
function cityCountry(city1, country1) {
    return `${city1} , ${country1}`;
}
let c1 = cityCountry('Lahore', 'Pakistan');
let c2 = cityCountry('Tokyo', 'Japan');
let c3 = cityCountry('Paris', 'France');
console.log(c1);
console.log(c2);
console.log(c3);
