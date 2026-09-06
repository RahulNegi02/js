"use strict";//treat all js code as newer version
//alert("Hello World");//we are suing nodejs ,not browser so alert will not work
console.log("Hello World");//this will work in nodejs
console.log("3+4")



let name = "Rahul"
let age = 22
let isLoggedIn = false


//number => 2 to the power of 53
//bigint => greater than 2 to the power of 53
//string => any text inside single or double quotes
//boolean => true or false
//null => empty value
//undefined => value is not assigned
//symbol => unique value
//object => key value pair

console.log(typeof null);
console.log(typeof undefined);


// stack => stack is a data structure which follows LIFO(Last In First Out) principle
// heap => heap is a data structure which follows FIFO(First In First Out) principle

let myname = "Rahul"
let anothername = myname
myname = "Rahul123"
console.log(myname);
console.log(anothername);

let user1 = {name:"Rahul",age:22}
let user2 = user1
user1.name = "Rahul123"
console.log(user1.name);
console.log(user2.name);