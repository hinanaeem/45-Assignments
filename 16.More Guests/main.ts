//Question #16
//More Guests: You just found a bigger dinner table, so now more space is available.
// Think of three more guests to invite to dinner.
/*• Start with your program from Exercise 15. 
Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
 • Print a new set of invitation messages, one for each person in your list.*/

 let guest: string[] = ["Ali","Sana","Zainah","Mannat","Salar"];
console.log(`Due to some reason ${guest[2]} will not come on my dinner.`);
guest[2] = "Hira";
for (let i=0;i<guest.length;i++){
   // console.log(`Drea ${guest1[i]}! Iwould like to invite you for dinner on Sunday.`);
}

console.log(`\nGood News! We have arranged a big dinner table so we invite 3 more guest.\nThank you`)

guest.unshift("Ayza");
guest.splice(2,0,"Hamza");
guest.push("Zayan");

for (let i=0;i<guest.length;i++){
    console.log(`Dear ${guest[i]}, you are invited for dinner.\n`)
}


