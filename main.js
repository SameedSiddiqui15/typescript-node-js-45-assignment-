// // Assignment Solution
// Task 1
// All installation Completed
// // Task 2
// let personName:string="Eric";
// console.log(`hello ${personName} ,would you like to learn some phthon today?`);
// // Task 3
// let personName:string='Muhammad sameed';
// console.log("lowercase :", personName.toLowerCase());
// console.log("uppercase :", personName.toUpperCase());
// console.log("titlecase :", personName.replace(/\b\w/g,c=> c.toUpperCase()));
// // Task 4
// let quote:string="A person who never made a mistake never tried anything new.";
// let author:string="Albert Einstein";
// console.log(`${author} once said , "${quote}"`);
// // Task 5
// let famous_person:string="Albert Einstein";
// let quote:string="A person who never made a mistake never tried anything new.";
// let message:string=`${famous_person} once said,"${quote}"`;
// console.log(message);
// // Task 6
// let personName:string="\t\n Sameed \n\t";
// console.log("Orignal :", personName);
// console.log("Stripped :", personName.trim());
// // Task 7 & 8
// console.log(4+4);
// console.log(16-8);
// console.log(4*2);
// console.log(32/4);
// // Task 9 & 10
// // author= Sameed
// // date=21/02/2024
// let favourite:number=7;
// // printing my favourite number
// console.log(`My favourite Number is ${favourite}`);
// // Task 11
// let names:string[]=["Sameed","Hamza","Ali","Asad","Mustafa"];
// for (let i = 0; i < names.length; i++) {
//        console.log(names[i]);
// }
// // Task 12
// let names:string[]=["Sameed","Hamza","Ali","Asad","Mustafa"];
// let message:string="Do you like to play games on computer?";
// console.log(names[0]+" "+message);
// console.log(names[1]+" "+message);
// console.log(names[2]+" "+message);
// console.log(names[3]+" "+message);
// console.log(names[5]+" "+message);
// // Task 13
// let vehicle:string[]=["honda motorcycle","bike","bus","car","train"];
// vehicle.map((items) => console.log(`I would like to own a ${items}`));
// // Task 14
// let guest_Arr:string[]=["Sameed","Hamza","Ali"];
// guest_Arr.map((items) => console.log(`Dear ${items}, you are invited to dinner`));
// // Task 15
// let guest_Arr:string[]=["Sameed","Hamza","Ali"];
// let can_not_attand:string="Sameed";
// // console.log(can_not_attand+" "+"can`t attend the dinner.");
// let new_guest:string="Mustafa";
// guest_Arr[guest_Arr.indexOf(can_not_attand)]=new_guest;
// // console.log(guest_Arr);
// guest_Arr.map((items) => console.log(`Dear ${items}, you are invited to dinner`));
// // Task 16
// let guest_Arr:string[]=["Sameed","Hamza","Ali"];
// let can_not_attand:string="Sameed";
// let new_guest:string="Mustafa";
// guest_Arr[guest_Arr.indexOf(can_not_attand)]=new_guest;
// console.log(guest_Arr);
// guest_Arr.map((items) => console.log(`Dear ${items},I found a bigger dinner table so I am invited more peoples. `));
// //  part 2
// let guest_begin:string="Moiz";
// guest_Arr.unshift(guest_begin);
// console.log(guest_Arr);
// // part 3
// let guest_middle:string="Salman";
// let middle_index=guest_Arr.length/3;
// guest_Arr.splice(middle_index,0,guest_middle);
// console.log(guest_Arr);
// // part 4
// guest_Arr.push("Zeeshan");
// console.log(guest_Arr);
// // part 5
// guest_Arr.map((items) => console.log(`Dear ${items},I found a bigger dinner table so I am invited more peoples. `));
// // Task 17
// let guests: string[] = ['Sameed', 'Taha', 'Ali', 'Rafay', 'Bilal2'];
// console.log("Sorry, the dinner table won't arrive in time, so I can only invite two people for dinner.");
// while (guests.length > 2) {
//     const removedGuest = guests.pop();
//     console.log(`Sorry ${removedGuest}, I can't invite you to dinner.`);
// }
// for (const guest of guests) {
//     console.log(`${guest}, you're still invited to dinner.`);
// }
// guests = [];
// console.log("Final Guest List:", guests);
// // Task 18
// let placesToVisit: string[] = ["Russia", "Pakistan", "New Zealand", "Syria", "America"];
// console.log("Original Order:", placesToVisit);
// console.log("Alphabetical Order:", [...placesToVisit].sort());
// console.log("Original Order (Again):", placesToVisit);
// console.log("Reverse Alphabetical Order:", [...placesToVisit].sort().reverse());
// console.log("Original Order (Again):", placesToVisit);
// placesToVisit.reverse();
// console.log("Reversed Order:", placesToVisit);
// placesToVisit.reverse();
// console.log("Original Order (Again):", placesToVisit);
// placesToVisit.sort();
// console.log("Alphabetical Order:", placesToVisit);
// placesToVisit.sort((a, b) => b.localeCompare(a));
// console.log("Reverse Alphabetical Order:", placesToVisit);
// // Task 19
// let invitation: string[] = ['Sameed', 'Taha'];
// let count_invitation:number=invitation.length;
// console.log(`${count_invitation} peoples are invited to the dinner`);
// // Task 20
// let landmarks: string[] = [
//     "Eiffel Tower",
//     "Great Wall of China",
//     "Statue of Liberty",
//     "Taj Mahal",
//     "Machu Picchu",
//     "Sydney Opera House",
//     "Colosseum",
//     "Pyramids of Giza",
//     "Petra",
//     "Christ the Redeemer"
// ];
// console.log("List of Famous Landmarks:");
// for (const landmark of landmarks) {
//     console.log("~ " + landmark);
// }
// // Task 21
// let cars: { make: string, model: string, year: number, color: string }[] = [
//     { make: "Honda", model: "Civic", year: 2018, color: "Red" },
//     { make: "Ford", model: "Mustang", year: 2019, color: "Yellow" },
//     { make: "Tesla", model: "Model S", year: 2021, color: "White" }
// ];
// console.log("Information about Cars:");
// for (const car of cars) {
//     console.log(`Make: ${car.make}, Model: ${car.model}, Year: ${car.year}, Color: ${car.color}`);
// }
// // Task 22
// let days:string[]=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// for (let i = 0; i < days.length; i++){
//    console.log(days{i});
// }
// // for (let i = 0; i < days.length; i++){
// //    console.log(days[i]);
// // }
// // Task 23
// let x: number = 5;
// let y: number = 10;
// // Test 1
// console.log("Is x != 5? I predict False.");
// console.log(x != 5);
// // Test 2
// console.log("Is x != y? I predict True.");
// console.log(x != y);
// // Test 3
// console.log("Is x > y? I predict False.");
// console.log(x > y);
// // Test 4
// console.log("Is x < y? I predict True.");
// console.log(x < y);
// // Test 5
// console.log("Is x + y == 15? I predict True.");
// console.log(x + y == 15);
// // Test 6
// console.log("Is x - y > 0? I predict False.");
// console.log(x - y > 0);
// // Test 7
// console.log("Is y / x > 1? I predict True.");
// console.log(y / x > 1);
// // Test 8
// console.log("Is x * y == 100? I predict False.");
// console.log(x * y == 100);
// // Test 9
// let str1: string = "hello";
// let str2: string = "world";
// console.log("Is str1 + str2 == 'helloworld'? I predict True.");
// console.log(str1 + str2 == "helloworld");
// // Test 10
// let a: number[] = [1, 2, 3];
// let b: number[] = [1, 2, 3];
// console.log("Is a == b? I predict False.");
// console.log(a == b);
// // Task 24
// let string1: string = "sameed";
// let string2: string = "riaz";
// console.log("Is string1 == string2? I predict False.");
// console.log(string1 == string2);
// console.log("Is string1 != string2? I predict True.");
// console.log(string1 != string2);
// let upperCaseString: string = "SAMEED";
// console.log("Is upperCaseString.toLowerCase() == 'sameed'? I predict True.");
// console.log(upperCaseString.toLowerCase() == "sameed");
// let num1: number = 10;
// let num2: number = 20;
// console.log("Is num1 == num2? I predict False.");
// console.log(num1 == num2);
// console.log("Is num1 != num2? I predict True.");
// console.log(num1 != num2);
// console.log("Is num1 > num2? I predict False.");
// console.log(num1 > num2);
// console.log("Is num1 < num2? I predict True.");
// console.log(num1 < num2);
// console.log("Is num1 >= num2? I predict False.");
// console.log(num1 >= num2);
// console.log("Is num1 <= num2? I predict True.");
// console.log(num1 <= num2);
// let condition1: boolean = true;
// let condition2: boolean = false;
// console.log("Is condition1 && condition2? I predict False.");
// console.log(condition1 && condition2);
// console.log("Is condition1 || condition2? I predict True.");
// console.log(condition1 || condition2);
// let array: number[] = [1, 2, 3, 4, 5];
// console.log("Is 3 in the array? I predict True.");
// console.log(array.includes(5));
// console.log("Is 6 not in the array? I predict True.");
// console.log(array.includes(6));
// //  Task 25
// let alien_color: string = 'green';
// if (alien_color == 'green') {
//     console.log("Congratulations! You earned 5 points.");
// }
// if (alien_color != 'red') {
//     console.log("No Output");
// }
// // Task 26
// // Part 1
// let alien_color1: string = 'green';
// if (alien_color1 === 'green') {
//     console.log("Congratulations! You just earned 5 points for shooting the green alien.");
// } else {
//     console.log("Congratulations! You just earned 10 points for shooting the non-green alien.");
// }
// // Part 2
// let alien_color2: string = 'red';
// if (alien_color2 === 'green') {
//     console.log("Congratulations! You just earned 5 points for shooting the green alien.");
// } else {
//     console.log("Congratulations! You just earned 10 points for shooting the non-green alien.");
// }
// // Task 27
// // part 1
// let alien_color1: string = 'green';
// if (alien_color1 === 'green') {
//     console.log("Congratulations! You just earned 5 points.");
// }
// else if (alien_color1 === 'yellow') {
//     console.log("Congratulations! You just earned 10 points.");
// } else if (alien_color1 === 'red') {
//     console.log("Congratulations! You just earned 15 points.");
// }
// // part 2
// let alien_color2: string = 'yellow';
// if (alien_color2 === 'green') {
//     console.log("Congratulations! You just earned 5 points.");
// } else if (alien_color2 === 'yellow') {
//     console.log("Congratulations! You just earned 10 points.");
// } else if (alien_color2 === 'red') {
//     console.log("Congratulations! You just earned 15 points.");
// }
// // part 3
// let alien_color3: string = 'red';
// if (alien_color3 === 'green') {
//     console.log("Congratulations! You just earned 5 points.");
// } else if (alien_color3 === 'yellow') {
//     console.log("Congratulations! You just earned 10 points.");
// } else if (alien_color3 === 'red') {
//     console.log("Congratulations! You just earned 15 points.");
// }
// // Task 28
// let age: number = 24;
// if (age < 2) {
//     console.log("The person is a baby.");
// } else if (age >= 2 && age < 4) {
//     console.log("The person is a toddler.");
// } else if (age >= 4 && age < 13) {
//     console.log("The person is a kid.");
// } else if (age >= 13 && age < 20) {
//     console.log("The person is a teenager.");
// } else if (age >= 20 && age < 65) {
//     console.log("The person is an adult.");
// } else {
//     console.log("The person is an elder.");
// }
// // Task 29
// let favorite_fruits: string[] = ["apple", "banana", "mango"];
// if (favorite_fruits.includes("apple")) {
//     console.log("You really like apples!");
// }
// if (favorite_fruits.includes("banana")) {
//     console.log("You really like bananas!");
// }
// if (favorite_fruits.includes("mango")) {
//     console.log("You really like mangoes!");
// }
// if (favorite_fruits.includes("strawberry")) {
//     console.log("You really like strawberries!");
// }
// if (favorite_fruits.includes("orange")) {
//     console.log("You really like oranges!");
// }
// // Task 30
// let usernames: string[] = ["Admin", "Ali", "Bilal", "Daniyal", "salman"];
// for (let username of usernames) {
//     if (username === "Admin") {
//         console.log("Hello Admin, would you like to see a status report?");
//     } else {
//         console.log(`Hello ${username}, thank you for logging in again.`);
//     }
// }
// // Task 31
// let usernames: string[] = ["Admin", "Ali", "Bilal", "Daniyal", "Salman"];
// if (usernames.length === 0) {
//     console.log("We need to find some users!");
// } else {
//     for (let username of usernames) {
//         if (username === "Admin") {
//             console.log("Hello Admin, would you like to see a status report?");
//         } else {
//             console.log(`Hello ${username}, thank you for logging in again.`);
//         }
//     }
// }
// usernames = [];
// if (usernames.length === 0) {
//     console.log("We need to find some users!");
// }
// // Task 32
// let current_users: string[] = ["Yahya", "Ali", "Bilal", "Daniyal", "Salman"];
// let new_users: string[] = ["Abbas","Ali","adeel","adnan","Ahmed"];
// for (let new_username of new_users) {
//     let lowercased_new_username = new_username.toLowerCase();
//     if (current_users.map(username => username.toLowerCase()).includes(lowercased_new_username)) {
//         console.log(`Sorry, the username "${new_username}" is already taken. Please enter a new username.`);
//     } else {
//         console.log(`Congratulations! The username "${new_username}" is available.`);
//     }
// }
// // Task 33
// let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let num of numbers) {
//     if (num === 1) {
//         console.log("1st");
//     }
//     else if (num === 2) {
//         console.log("2nd");
//     }
//     else if (num === 3) {
//         console.log("3rd");
//     }
//     else {
//         console.log(`${num}th`);
//     }
// }
// // Task 34
// let favorite_Pizzas: string[] = ["Pepperoni", "Cheese", "BBQ Chicken"];
// for (let pizza of favorite_Pizzas) {
//   console.log(`I like ${pizza} pizza.`);
// }
// console.log("I really love pizza!");
// // Task 35
// let animals: string[] = ["Dog", "Cat", "Rabbit"];
// for (let animal of animals) {
//   console.log(`A ${animal.toLowerCase()} would make a great pet.`);
// }
// console.log("Any of these animals would make a great pet!");
// // Task 36
// function makeShirt(size: string, message: string): void {
//   console.log(
//     `You've ordered a ${size} shirt with the following message: ${message}`
//   );
// }
// makeShirt("Large", "I need a big shirt");
// // Task 37
// function makeShirt(size: string = "Large", message: string = "I love TypeScript"): void {
//     console.log(`You've ordered a ${size} shirt with the following message: ${message}`);
// }
// makeShirt();
// makeShirt("Medium");
// makeShirt("Small", "I need a big shirt to wear");
// // Task 38
// function describeCity(city: string, country: string = "Pakistan"): void {
//   console.log(`${city} is in ${country}.`);
// }
// describeCity("Karachi");
// describeCity("New York","USA");
// describeCity("London", "United Kingdom");
// // Task 39
// function cityCountry(city: string, country: string): string {
//   return `${city}, ${country}`;
// }
// let c1 = cityCountry("Lahore", "Pakistan");
// let c2 = cityCountry("Tokyo", "Japan");
// let c3 = cityCountry("Paris", "France");
// console.log(c1);
// console.log(c2);
// console.log(c3);
// // Task 40
// function makeAlbum (artist: string, title: string): {artist:string,title:string} {
//     const dictionaries={
//         artist:artist.charAt(0).toUpperCase()+ artist.slice(1),
//         title:title.charAt(0).toUpperCase()+ title.slice(1)
//     };
//     return dictionaries;
// }
// let album=makeAlbum("ali","light");
// console.log(album);
// album=makeAlbum("bilal","red wave");
// console.log(album);
// album=makeAlbum("hamza","seenbreez");
// console.log(album);
// // Task 41
// function show_magicians1(magicians: string[]): void {
//   for (const magician of magicians) {
//     console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
//   }
// }
// const magician: string[] = ["ali", "daniyal", "farooq", "babar"];
// show_magicians1(magician);
// // Task 42
// function show_magicians2(magicians: string[]): void {
//   for (const magician of magicians) {
//     console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
//   }
// }
// function make_great(magicians: string[]): void {
//   for (let i = 0; i < magicians.length; i++) {
//     magicians[i] = "The Great " + magicians[i];
//   }
// }
// const magicians2: string[] = ["sameed", "Daniyal", "ali"];
// make_great(magicians2);
// show_magicians2(magicians2);
// // // Task 43
// function show_magicians3(magicians: string[]): void {
//   for (const magician of magicians) {
//     console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
//   }
// }
// function make_great2(magicians: string[]): string[] {
//   const great_Magicians: string[] = [];
//   for (let i = 0; i < magicians.length; i++) {
//     great_Magicians.push((magicians[i] + " the great"));
//   }
//   return great_Magicians;
// }
// const magician3: string[] = ["Usman", "Haseeb", "Wajahat"];
// const great_Magicians2: string[] = make_great2(magician3);
// show_magicians3(magician3);
// show_magicians3(great_Magicians2);
// // Task 44
// function sandwich(...items: string[]): void {
//   console.log("Making a sandwich with the following items:");
//   for (const item of items) {
//     console.log("- " + item);
//   }
//   console.log("Enjoy your sandwich with Sameed");
// }
// sandwich("Ham", "Cheese", "Lettuce");
// sandwich("beef", "cheese");
// sandwich("Peanut Butter", "Jelly");
// // Task 45
// type Car= {
//     manufacture: string;
//     model: string;
//     [key: string]: any;
// }
// function createCar(manufacture: string, model: string,optional: Record<string, any>): Car {
//     return{
//         manufacture,
//         model,
//         ...optional
//     }
// }
// const myCar = createCar('Toyota', 'Camry', {color: 'blue',year: 2024});
// console.log(myCar);
