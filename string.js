// Strings
// let text = "John Doe";

// let carName1 = "Spark";
// let carName2 = 'Nexia 3'

// let answer1 = "It's alright";
// let answer2 = "He is called 'Johnny'";
// let answer3 = 'He is called "Johnny"';

// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let length = text.length;
// console.log(length);

// let answer1 = 'It\'s alright';
// let answer2 = "He is called \"Johnny\"";
// let answer3 = 'He is called "Johnny"';

// \b - Backspace
// \f - Form Feed
// \n - New Line
// \r - Carriage Return
// \t - Horizontal Tabulator
// \v - Vertical Tabulator

// let text = "Assalomu alaykum,\b Mening ismim JavaScript"
// let text = "Assalomu alaykum,\n Mening ismim JavaScript"
// let text = "Assalomu alaykum,\t Mening ismim JavaScript"
// console.log(text);

// let name = "Umidjon";
// let greeting = `Assalomu alaykum!. Mening ismim ${name}`;
// console.log(greeting);

// String Methods

// slice(start, end)
// let str = "Apple, Banana, Kiwi";
// let part = str.slice(0, 5) // Apple
// let part = str.slice(7) // Banana, Kiwi
// console.log(part);

// substring(start, end)
// let str = "Apple, Banana, Kiwi";
// let part = str.substring(7, 13);
// console.log(part);

// substr(start, length)
// let str = "Apple, Banana, Kiwi";
// let part = str.substr(7, 6);
// console.log(part);

// replace(eski_suz, yangi_suz)
// let text = "Please visit Microsoft! asdasd Microsoft";
// let newText = text.replace("Microsoft", "W3Schools");
// newText = newText.replace("Microsoft", "W3Schools");
// console.log(newText);

// str.toUpperCase()
// let text1 = "Hello World!";
// let text2 = text1.toUpperCase();
// console.log(text2);

// str.toLowerCase()
// let text1 = "Hello World!";
// let text2 = text1.toLowerCase();
// console.log(text2);

// concat()
// let text1 = "Hello";
// let text2 = "World";
// let text3 = text1.concat(" ", text2);
// console.log(text3);

// trim()
// let text1 = "      Hellow World!      ";
// let text2 = text1.trim();
// console.log(text1);
// console.log(text2);

// charAy(position)
// let text = "HELLO WORLD";
// let char = text.charAt(0);
// console.log(char);

// charCodeAt(position)
// let text = "HELLO WORLD";
// let char = text.charCodeAt(0);
// console.log(char);

// split()
// let text = "Hello World";
// let newArr = text.split("");
// console.log(newArr);

// String Search Methods
// indexOf()
// let str = "Assalomu alaykum xurmatli dasturchi";
// let result = str.indexOf("a");
// console.log(result);

// lastIndexOf()
// let str = "Please locate where 'locate' occurs!";
// let result = str.lastIndexOf("locate");
// console.log(result);

// search()
// let str = "ABCDEFGH";
// let result = str.search("E");
// console.log(result);

// match()
// let str = "ABCDEFGH";
// let result = str.match("A");
// console.log(result);

// includes()
// let text = "ABCDEFGH";
// let result = text.includes("B");
// console.log(result);

// startsWith()
// let text = "ABCDEFGH";
// let result = text.startsWith("A");
// console.log(result);

// endsWith()
// let text = "ABCDEFGH";
// let result = text.endsWith("G");
// console.log(result);

// String Templates

// back-tics
// let text = `Hello World!`;
// let text = `He's often called "Johnny"`;
// let text =
// `The quick
// brown fox
// jumps over
// the lazy dog`;

// Interpolation
// let firstName = "John";
// let lastName = "Doe";
// let text = `Welcome ${firstName}, ${lastName}!`;
// console.log(text);
