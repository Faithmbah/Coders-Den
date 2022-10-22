
let month = prompt ("Enter a month to find out the nunber of days")

switch(month){
    case "September", "April", "june", "November":
        console.log(`${month} has 30 days`)
        break;
    case "January", "March", "May", "July", "August", "October", "Decembr":
        console.log(`${month} has 31 days`)
        break;
    case "Febuary":
        console.log(`${month} has 28 days and 29 days in each leap year`)
        break;
    default:
        console.log('Try another month')
}
