"use strict";
/* Question # 43
Unchanged Magicians: Start with your work from Exercise 40.
 Call the function make_great() with a copy of the array of magicians’ names.
  Because the original array will be unchanged, return the new array and store it in a separate array.
   Call show_magicians() with each array to show that you have one array of the original names
   and one array with the Great added to each magician’s name.*/
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
const magician = ["Nadir", "Harry", "Mike", "Henry"];
show_magicians(magician);
// Question no 42
function make_great(magicians1) {
    for (let I = 0; I < magicians1.length; I++) {
        magicians1[I] = magicians1[I] + '   the great';
    }
}
const magicians2 = ["Nadir", "Harry", "Mike", "Henry"];
make_great(magicians2);
show_magicians(magicians2);
function make_great2(magicians3) {
    const greatMagicians = [];
    for (let I = 0; I < magicians3.length; I++) {
        greatMagicians.push(magicians3[I] + '  The Great');
    }
    return greatMagicians;
}
const magicians4 = ["Nadir", "Harry", "Mike", "Henry"];
const greatMagician2 = make_great2(magicians4);
show_magicians(magicians4);
show_magicians(greatMagician2);
