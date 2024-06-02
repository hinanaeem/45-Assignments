//Question # 29
// Favorite Fruit: Make a array of your favorite fruits, and then write
// a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. 
//If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favorate_fruits : string [] = ["grapes","apple","orange","berry","peach"]

if (favorate_fruits.includes("apple")) {
    console.log("apple")
}
if (favorate_fruits.includes("peach")) {
    console.log("You really like Bananas")
}
if (favorate_fruits.includes("orange")) {
    console.log("orange")
}
if (favorate_fruits.includes("berry")) {
    console.log("You really like Bananas")
}
if (favorate_fruits.includes("grapes")) {
    console.log("grapes")
}