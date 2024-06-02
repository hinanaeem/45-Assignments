/* Question # 37
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message 
that reads I love TypeScript. Make a large shirt and a medium shirt with the default message,
 and a shirt of any size with a different message.*/

 function makeShirt1(size:string = 'large', text:string ='I Love Typescript'): void {
    console.log(`\n You Have Order A ${size}, Shirt That Says ${text}`)
}

makeShirt1();
makeShirt1('medium')

/// different messages

makeShirt1('small', 'I Need A Big Shirt To Wear')


