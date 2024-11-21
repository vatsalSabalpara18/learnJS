// create the string 

// let s = "Hello World!"
// console.log(s) //Hello World!
// console.log(typeof s) //string

// let s1 = new String("Hello")
// console.log(s1) // String {'Hello'}
// console.log(typeof s1) // object

// template literlas

// const name = "vatsal"
// const txt = `my Name is: ${name}`
// console.log(txt) //my Name is: vatsal

// string coerction

// console.log('3'+ 5 + 7) // 357



// String Methods...........

// concat() 

// const a = "Hello "
// const b = "World!"
// const c = a.concat(b," Vatsal");
// console.log(c) // Hello World! Vatsal

// includes()

// const txt = "My name is vatsal"
// console.log(txt.includes("My")) // true case sensitive

//startsWith()

// const txt = "we can do it"
// console.log(txt.startsWith("we")) // true 
// console.log(txt.startsWith("we",1))//false

//endsWith()

// const txt = "Hello World!"
// console.log(txt.endsWith("rld!")) // true

//slice()

// const txt = "Hello World!"
// const txt1 = txt.slice(0, 5);
// console.log(txt1) //Hello

//substring()

// const txt = "Hello World!"
// const txt1 = txt.substring(4, 1);
// console.log(txt1) // ell


// substr()

// const txt = "Hello World!"
// const txt1 = txt.substr(2);
// console.log(txt1) // llo World!
// const txt2 = txt.substr(-1);
// console.log(txt2) // !


//replace()
// let text = "Visit Microsoft!";
// let result = text.replace("Microsoft", "W3Schools");
// console.log(result) // Visit W3Schools!

// let text = "Mr Blue has a blue house and a blue car";
// let result = text.replace(/blue/g, "red");
// console.log(result) // Mr Blue has a red house and a red car

// replaceAll()
// const txt = "I love cats. Cats are very easy to love. Cats are very popular"
// const replace_all = txt.replaceAll(/Cats/g, 'Dogs');
// const replace_all1 = txt.replaceAll(/cats/g, 'dogs')
// console.log(replace_all) //I love cats. Dogs are very easy to love. Dogs are very popular
// console.log(replace_all1) //I love dogs. Cats are very easy to love. Cats are very popular

// trim()
// let text = "    Hello World!     ";
// console.log(text) //     Hello World!     
// let text1 = text.trim()
// console.log(text1) //Hello World!

//split()
// let text = "How are you doing today?";
// const myArray = text.split(" ");
// console.log(myArray) //['How', 'are', 'you', 'doing', 'today?']

//match()
// let text = "The rain in SPAIN stays mainly in the plain";
// console.log(text.match("ain")) // ['ain', index: 5, input: 'The rain in SPAIN stays mainly in the plain', groups: undefined]
// console.log(text.match(/ain/gi)) // ['ain', 'AIN', 'ain', 'ain']

// test()
// let text = "The best things in life are free"; 
// let pattern = /e/;
// let result = pattern.test(text);
// console.log(result) // true

// toLowerCase()
// let text = "Hello World!"
// console.log(text.toLowerCase()) // hello world!

// toUpperCase()
// let text = "Hello World!"
// console.log(text.toUpperCase()) //HELLO WORLD!
// The diffrence between slice(), substring() and substr()

// let str = "Hello, World!";

// // slice()
// console.log(str.slice(0, 5)); // Hello
// // slice allow negative index, negative index (-1) start at last character.
// console.log(str.slice(-6, -1)) // World

// // substring()
// console.log(str.substring(0, 5)) //Hello
// //it swaps start and end if start > end.
// // does not support negative indexing. negative values are itreated as 0
// console.log(str.substring(5, 0)) // Hello

// // substr()
// console.log(str.substr(0 ,5)) // Hello
// // uses a start position and a length
// console.log(str.substr(-6, 5))// World
