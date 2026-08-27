// let num = [1, 2, 3, 4, 5];
// console.log(num.length);  // length is used to find out the length of an array

// num.push(6);
// console.log(num); //push method is used to add the element to last

// num.pop(5)
// console.log(num);  //pop is used to remove the last element from the array

// num.unshift(0);
// console.log(num);   // unshift method is used to add the elements to the begining of the array

// num.shift()
// console.log(num);         // it is used to remove the first element from the array



// console.log(num.slice(0, 3));  // slice is used to extract the elements from the partticular position of an array


// num.splice(2, 2);
// console.log(num);   splice.remove method is used to delete the array elements from the position

// num.splice(1, 0, 10)
// console.log(num);     splice.add method is used to add the elements into the given index position

// num.splice(2, 1, 35);
// console.log(num);     splice.replace method is used to remove and add the element fo a aparticular position


// console.log(num.indexOf(5));   indexof method is used to check for the particular index and returns it

// console.log(num.includes(1));  // it checks for the array elements if the elements are present then itb will return as true or else false

//console.log(num.join("--"));  // join elements is used to join a string

// num.reverse()
// console.log(num);   // num will reverse the order

// let res = num.concat(6);
// console.log(res);   concat method will not modifiy the existing array it will create the new array


// let res = [5, 4, 3, 2, 1];
// console.log(res.sort());  // it will sort in ascending order


// let num = [1, 2, 3, 4, 5];

// let result = num.map(function (n) {
//     return n * 2;
// });
// console.log(result);


// let prices = [100, 200, 300];

// let finalprices = prices.map(function (price) {
//     return price + 10;
// });
// console.log(finalprices);  map function is used to perform operations in the new array



// let num = [1, 2, 3, 4, 5];

// let result = num.filter(function (n) {
//     return n > 3;
// })
// console.log(result);   // filter is used to select the elements from the array based on the condition


// let num = [1, 2, 3, 4, 5];


// let res = num.find(function (n) {
//     return n > 3;
// })
// console.log(res);   // find function is actually used to find the next element if the array element has been found



// let num = [1, 2, 3, 4, 5];

// let res = num.findIndex(function (n) {
//     return n > 3;
// })                                 //findindex() is used to find the index of the first element that satatifis the condition
// console.log(res);


// let num = [5, 10, 15, 20];
// let res = num.reduce(function (total, n) {
//     return total + n;
// });
// console.log(res);    //reduces the array into single value



// let num = [5, 10, 15, 20];
// num.forEach(function (fun) {
//     console.log(fun);

// })
// Arithmetic Operators
// let a = 10;
// let b = 20;
// console.log(a + b);  //30
// console.log(b / a);  //0.5
// console.log(a * b);   //200
// console.log(b - a);   //10
// console.log(a % b);   //10


//assignment operators

// let a = 10;  //10
// console.log(a);

// let b = 20;
// b = b + 5;
// console.log(b);  //25
// let c = 10;
// c = c - 5;
// console.log(c);  //5

// let d = 10;
// d = d * 5;
// console.log(d);  //50

// let e = 50;
// e = e / 5;
// console.log(e); //10

//Comparison Operators.

// let a = 10;
// let b = 5;
// console.log(a > b); // true
// console.log(a < b); //false
// console.log(a >= b); //true
// console.log(a <= b); // false
// console.log(a == b);// false
// console.log(a === b); //false
// console.log(a != b); //true
// console.log(a !== b);//false


// Logical Operators.

// console.log(true && true);  //true
// console.log(true && false); //false
// console.log(!true); //false
// console.log(true || true);  //true
// console.log(true || false); //true


// let age = 10;
// if (age > 16 && age < 20) {
//     console.log("they can drive");

// } else {
//     console.log("they cannot drive");

// }


// let age = 20
// if (age < 18 || age > 25) {
//     console.log("DRIVE");

// } else {
//     console.log("NOT ALLOWED TO DRIVE");

// }


// let a = 10;
// a--;
// console.log(a);


// let b = 10;
// b++;
// console.log(b);


// let a = 10;
// let result = a++;
// console.log(result);
// console.log(a);

// let arr = [1, 2, 3, 4, 5]
// for (let i = 0; i < 5; i++) {
//     console.log(arr[i] + 10);
// }



// let name = "akash"
// name = "kushal"         // let can be reassigned
// console.log(name)


// var name = "AKASH"
// name = "KUSHAL"        //var can be reassigned
// console.log(name);

// const name = "AKASH"
// name = "KUSHAL"           // const cannot be reassigned
// console.log(name);

// let name = "akash"
// let name = "kushal"
// console.log(name)         // we cannot redeclare in let  we get syntax error

var name = "AKASH"
name = "KUSHAL"            // we can redeclare in var
console.log(name)


// const name = "AKASH"
// const name = "KUSHAL"           // we cannot redeclare in let  we get syntax error
// console.log(name);


// let student = {
//     name: "AKASH",
//     id: 101,
//     dept: "ise",
// };



// console.log(student);

// console.log(student.name);
// console.log(student.id);
// console.log(student.dept);

// let age = 18;

// if (age >= 20) {
//     console.log("ready to get married");

// } else {
//     console.log("not the correct age to get marriage");

// }

// let name = "AKASH"
// let age = 12;

// console.log("MY NAME IS " + name + " " + "AND MY AGE IS " + age);
// console.log(`MY NAME IS ${name} and my age is ${age}`);
// console.log(`HELLO ${name}`);


// function greet() {
//     let name = "Akash";
//     console.log(name);
// }

// greet();

// console.log(this.name);

// let arr = [1, 2, 3, 4, 5]
// let i = 0;

// while (i <= arr.length) {
//     console.log(arr[i]);
//     i++;

// }
// let arr = [1, 2, 3, 4, 5]
// let i = 1;
// do {
//     console.log(arr[i]);
//     i++

// } while (i < 8)



// for (let i = 0; i < 5; i++) {
//     if (i == 3) {
//         break;
//     }
//     console.log(i);

// }


// for (let i = 0; i <= 5; i++) {
//     if (i == 3) {
//         continue;
//     }
//     console.log(i);

// }


// let target = 5;
// for (let i = 0; i < 10; i++) {
//     if (i == target) {
//         return;
//     }
//     console.log(i);

// }



// let products = ["Shirt", "Shoes", "Watch", "Jeans"];

// for (let i = 0; i < products.length; i++) {
//     console.log(products[i]);
// }



// let health = 10;

// while (health > 0) {
//     console.log("Player is alive");
//     break;

// }

// let choice = "no";

// do {
//     console.log("ADD A PRODUCT TO THE CART");


// } while (choice === "yes")


// functions

// function() {
//     console.log("HELLO");

// }
// ();

// function greet() {
//     console.log("HELLO");

// }
// greet();

// let name = function greet() {
//     console.log("HELLO JS");

// }
// name();   //FE

// (function greet() {
//     console.log("HELLO GOOD MORNING");

// })()  //iif


// let x = () =>
//     console.log("HELLO");


// x()

// let x = (() => {
//     return "HELLO"
// })();

























