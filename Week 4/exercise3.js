
let month = "Febuary"
// prompt ("Enter a month to find out the nunber of days")

switch(month){
    case "September":
    case "April":
    case "june":
    case "November":
        console.log(`${month} has 30 days`)
        break;
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "Decembr":
        console.log(`${month} has 31 days`)
        break;
    case "Febuary":
        console.log(`${month} has 28 days and 29 days in each leap year`)
        break;
    default:
        console.log('Try another month')
}
