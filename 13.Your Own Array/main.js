//Question # 13
//Think of your favorite mode of transportation, such as a motorcycle or a car,
// and make a list that stores several examples.
// Use your list to print a series of statements about these items, such as 
//“I would like to own a Honda motorcycle.”
//1st method of for loop
var my_transportation = ["Car", "Aeroplane", "Train", "Boat", "yacht", "ship"];
for (var i = 0; i < my_transportation.length; i++) {
    console.log("I would like to own a ".concat(my_transportation[i], "."));
}
//second method (.map)
my_transportation.map(function (i) {
    console.log("I would like to own a ".concat(i, "."));
});
