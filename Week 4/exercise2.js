
let score = prompt ("What is your score?")
if (score > 80 || score == 100){
    console.log ("A")
} else if (score > 70 && score == 89 ){    
    console.log("B")
} else if (score > 60 && score == 79){
    console.log("B")
}else if (score > 60 && score == 79){
    console.log("B")
}else if (score > 60 && score == 79){
    console.log("B")
} else {
    console.log("Input a number between 0 - 100")
}

let season = prompt("Enter a month to find out the season")

switch (season){
    case "January", "Decembr", "Febuary":
        console.log("Thee season is winter")
        break;
    case "March", "April", "May":
        console.log("The season is Spring")
        break;
    case "June", "July", "August":
        console.log("The season is Summer")
    case "September", "October", "November":
        console.log("The season is Autumn")
        break;
    default:
        console.log("Enter another month to know the season")
}

let day = prompt("What is today?")

switch (day){
    case "Monday", "Tuesday", "Wednesday", "Thursday", "Friday":
        console.log("it is a working day")
        break;
    case "Saturday":
        console.log("it is a weekend")
        break;
    default:
        console.log("It's Sunday")
}