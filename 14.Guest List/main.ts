//Question # 14
// If you could invite anyone, living or deceased, to dinner, who would you invite? 
//Make a list that includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.

//1st method of "for loop"

let guest: string[] = ["Ali","Sana","Zainah","Mannat","Salar"];
for (let i=0;i<guest.length;i++){
    console.log(`Dear ${guest[i]}! I would like to invite you for dinner on Saturday.`);
} 

// 2nd methoD OF .MAP

guest.map((i)=>{
    console.log(`Dear ${i}! I would like to invite you for dinner on Sunday.`);
})