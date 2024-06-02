//Question # 15
//You just heard that one of your guests can’t make the dinner,
// so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. 
//Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person
// you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
var guest1 = ["Ali", "Sana", "Zainah", "Mannat", "Salar"];
console.log("Due to some reason ".concat(guest1[2], " will not come on my dinner."));
guest1[2] = "Hira";
for (var i = 0; i < guest1.length; i++) {
    console.log("Drea ".concat(guest1[i], "! Iwould like to invite you for dinner on Sunday."));
}
