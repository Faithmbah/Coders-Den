/*Get user input using prompt(“Enter your age:”). If user is 18 or older , 
give feedback:'You are old enough to drive' but if not 18 give another feedback stating 
to wait for the number of years he needs to turn 18.*/
let age = 16
// prompt ("Enter age")
console.log(age >= 18? "You are old enough to drive" 
: " you are left with " + (18 - age) + " years to drive.")


/*Compare the values of myAge and yourAge using if … else. Based on the comparison and log the 
result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.*/
let myAge = 25
let yourAge = 76
// prompt ("Enter your age")

if (myAge > yourAge){
    console.log (`i am ` + (myAge - yourAge) + ` years older than you`)
}
else{
    console.log("you are " + (yourAge - myAge) + " years older than me")
}


/*If a is greater than b return 'a is greater than b' else 'a is less than b'. 
Try to implement it in to ways*/
let a = 4 
let b = 3

if (a > b)
{
    console.log(`${a} is greater than ${b}`)
}
else {
    console.log(`${a} is lesser than ${b}`)

}


`${a}` > `${b}`? console.log (`${a} is greater than ${b}`) : console.log(`${a} is lesser than ${b}`)


/*Even numbers are divisible by 2 and the remainder is zero. How do you check,
if a number is even or not using JavaScript?*/
const fig = 2

let number = 5
//  prompt ("Enter a number")
let even = number % 2

if (even == 0){
    console.log( `${number} is an even number`)

}
else{
    console.log(`${number} is an odd number`)
}




