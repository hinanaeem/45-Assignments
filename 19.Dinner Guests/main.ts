//Question #19
//Dinner Guests: Working with one of the programs from Exercises 14 through 18,
// print a message indicating the number of people you are inviting to dinner.



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



console.log(`total number og guest: ${guest.length}\n`):


















