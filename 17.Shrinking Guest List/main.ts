//Question # 17
/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that 
you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list.
 Each time you pop a name from your list, print a message to that person letting them know 
 you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list.
 Print your list to make sure you actually have an empty list at the end of your program.*/

 let guest: string[] = ["Ali","Sana","Zainah","Mannat","Salar"];
 //console.log(`Due to some reason ${guest[2]} will not come on my dinner.`);
 guest[2] = "Hira";
 for (let i=0;i<guest.length;i++){
    // console.log(`Drea ${guest1[i]}! Iwould like to invite you for dinner on Sunday.`);
 }
 
 //console.log(`\nGood News! We have arranged a big dinner table so we invite 3 more guest.\nThank you`)
 
 guest.unshift("Ayza");
 guest.splice(2,0,"Hamza");
 guest.push("Zayan");
 
 for (let i=0;i<guest.length;i++){
    // console.log(`Dear ${guest[i]}, you are invited for dinner.\n`)
 }
console.log("\nSorry we can't arrange big table, only two person will be invited.\n")
while (guest.length>2){
   let removeGuest = guest.pop()
   console.log(`Sorry ${removeGuest}, you are not invited for dinner.\n`);
}

for (let i=0;i<guest.length;i++){
    console.log(`Dear ${guest[i]}, you are still invited for dinner.\n`);
}

guest.splice(0,2);
console.log(guest);

