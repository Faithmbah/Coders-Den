//Write a code which can give grades to students according to theirs scores:
let score = 80
// prompt ("What is your score?")
if (score >= 80 && score <= 100){
    console.log ("A")
} else if (score >= 70 && score <= 89 ){    
    console.log("B")
} else if (score >= 60 && score <= 69){
    console.log("C")
}else if (score >= 50 && score <= 59){
    console.log("D")
}else if (score >= 0 && score <= 49){
    console.log("F")
} else {
    console.log("Input a number between 0 - 100")
}

//Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
let season = "March"
// prompt("Enter a month to find out the season")

switch (season){
    case "January": 
    case "Decembr": 
    case "Febuary":
        console.log("The season is winter")
        break;
    case "March":
    case "April":
    case "May":
        console.log("The season is Spring")
        break;
    case "June":
    case "July":
    case "August":
        console.log("The season is Summer")
    case "September":
    case "October":
    case  "November":
        console.log("The season is Autumn")
        break;
    default:
        console.log("Enter another month to know the season. \n PS: The is case sensitive")
}


//Check if a day is weekend day or a working day. Your script will take day as an input.
let day = "Monday"
// prompt("What is today?")

switch (day){
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday": 
    case "Friday":
        console.log("it is a working day")
        break;
    case "Saturday":
        console.log("it is a weekend")
        break;
    default:
        console.log("It's Sunday")
}

