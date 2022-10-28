/*The following is an array of 10 students ages:*/
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

//Sort the array and find the min and max age
ages.sort()
console.log(ages)
console.log(ages.length)

// Find the median age(one middle item or two middle items divided by two)
let min = ages.slice(0, 2)
let int1 = parseInt(min)
console.log(int1)
console.log(min)

let max = ages.slice(9, 10)
let int2 = parseInt(max)
console.log(max)

let fig = ages.splice(4, 1)
fig = parseInt(fig)
console.log(fig)
console.log(ages)

let fig2 = ages.splice(5, 1)
fig2 = parseInt(fig2)
console.log(fig2)
console.log(ages)

let medianAge = fig + fig2 % 2
console.log(medianAge)

//Find the average age(all items divided by number of items)


//Find the range of the ages(max minus min)
let range = int2 - int1
console.log(range)

//Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array


//Find the middle country(ies) in the countries array
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
    'nigeria'
  ]
count1 = countries.length
console.log(count1)
let middleCountry = countries.splice(5, 1)
console.log(middleCountry)


//Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
let equal = countries.length % 2
console.log(equal)
let arr = ['gig']
if (countries.length % 2 == 0){
    console.log ( "it's even")
} else {console.log(countries.push(...arr))}

console.log(countries)

