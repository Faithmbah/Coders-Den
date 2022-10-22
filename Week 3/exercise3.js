//Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
const now = new Date()
const year = now.getFullYear() 
const month = now.getMonth() + 1 
const date = now.getDate() 
const hours = now.getHours() 
const minutes = now.getMinutes()

console.log(`${date}-${month}-${year} ${hours}:${minutes}`) 