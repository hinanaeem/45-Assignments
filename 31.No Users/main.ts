//Question # 31
/* No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/

let users1 : string [] = ["Admin","Eric","Meerab","Neha"]

if (users1.length === 0) {
    console.log("We Need To Find Some Users")
} else{ 
    for(let user of users1) {
        if(user === "Admin"){
            console.log("Hello Admin Would You Like To See The Report")
        } else{
            console.log(`Hello ${user}, Thank You For Logging In Again`)
        }
    }
}

 users1 = []
if (users1.length ===0){
    console.log("We Need To Find Some Users")
}
