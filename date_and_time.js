const date = new Date();
console.log("Current Date and Time:", date.toString());
console.log(date.toDateString());
console.log(date.toLocaleString());
console.log(typeof date);

let myDate = new Date("2023-01-01",'5','6');
console.log("My Date:", myDate.toLocaleString());

let mytime=Date.now()
console.log(mytime);
console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate.getFullYear());
console.log(newDate.getMonth()+1);

console.log(newDate.toLocaleString("default",{
    weekday:"long"
} ))