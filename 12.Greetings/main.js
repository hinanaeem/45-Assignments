//Question # 12
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
// print a message to them. The text of each message should be the same,
// but each message should be personalized with the person’s name.
var friendArr1 = ["Zimal", "Shahvaiz", "Hayyat", "Miral", "Zarnab"];
var message = " is a generous person.";
for (var h = 0; h < friendArr1.length; h++) {
    console.log(friendArr1[h] + message);
}
