//Declare an array
const arr = []
console.log(arr)

//Declare an array with more than 5 number of elements
const elements = ["faith", 4, "Agnes", true, [], {country: "Nigeria", state: "Abia"}, {skills:['HTMLS', 'CSS']}]

//Find the length of your array
console.log(elements.length)

//Get the first item, the middle item and the last item of the array
const firstItem = elements[0]
const secondItem = elements[3]
const lastItem = elements[6]
console.log(`The first item is ${firstItem}`)
console.log(`The middle item is ${secondItem}`)
console.log(`The last item is ${lastItem}`)

/*Declare an array called mixedDataTypes, put different data types in the array 
and find the length of the array. The array size should be greater than 5*/
const mixedDataTypes = ["faith", 4, "Agnes", 3, true, [], {country: "Nigeria", state: "Abia"}, {skills:['HTMLS', 'CSS']}]
console.log(mixedDataTypes.length)

/*Declare an array variable name itCompanies and assign initial values Facebook, 
Google, Microsoft, Apple, IBM, Oracle and Amazon*/
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

//Print the array using console.log()
console.log(itCompanies)

//Print the number of companies in the array
console.log(itCompanies.length)


//Print the first company, middle and last company
const firstItem1 = itCompanies[0]
const secondItem1 = itCompanies[3]
const lastItem1 = itCompanies[6]
console.log(`The first item is ${firstItem1}`)
console.log(`The middle item is ${secondItem1}`)
console.log(`The last item is ${lastItem1}`)


//Print out each company
let firstItCompanies = itCompanies[0]
console.log(firstItCompanies)
firstItCompanies = firstItCompanies.toUpperCase()

let secondItCompanies = itCompanies[1]
console.log(secondItCompanies)
secondItCompanies = secondItCompanies.toUpperCase()

let thirdItCompanies = itCompanies[2]
console.log(thirdItCompanies)
thirdItCompanies = thirdItCompanies.toUpperCase()

let forthItCompanies = itCompanies[3]
console.log(forthItCompanies)
forthItCompanies = forthItCompanies.toUpperCase()

let fifthItCompanies = itCompanies[4]
console.log(fifthItCompanies)
fifthItCompanies = fifthItCompanies.toUpperCase()

let sixthItCompanies = itCompanies[5]
console.log(sixthItCompanies)
sixthItCompanies = sixthItCompanies.toUpperCase()

let seventhItCompanies = itCompanies[6]
console.log(seventhItCompanies)
seventhItCompanies = seventhItCompanies.toUpperCase()

//Change each company name to uppercase one by one and print them out
let companiesToUpperCase = []
companiesToUpperCase.push(firstItCompanies, secondItCompanies, thirdItCompanies, forthItCompanies, fifthItCompanies, sixthItCompanies, seventhItCompanies)
console.log(companiesToUpperCase)

/*Print the array like as a sentence: Facebook, 
, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.*/
const sentence = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM','Oracle', 'and, Amazon are big IT companies']
console.log(sentence.join(", "))

/*Check if a certain company exists in the itCompanies array. 
If it exist return the company else return a company is not found*/
let index = itCompanies.indexOf("Twitter")
let companyName = sentence[index] 
if (index === -1) {console.log('Company is not found')} else {console.log(companyName)}

//Filter out companies which have more than one 'o' without the filter method
let filter = itCompanies.splice(0, 3)
console.log(filter)

//Sort the array using sort() method
let sort = companiesToUpperCase.sort()
console.log(sort)

//Reverse the array using reverse() method
let reverse = companiesToUpperCase.reverse()
console.log(reverse)

//Slice out the first 3 companies from the array
let slice = companiesToUpperCase.slice(0, 3)
console.log(slice)

//Slice out the last 3 companies from the array
let slice1 = companiesToUpperCase.slice(4, 7)
console.log(slice1)

//Slice out the middle IT company or companies from the array
let slice2 = companiesToUpperCase.slice(3, 4)
console.log(slice2)

//Remove the first IT company from the array
const itCompanies1 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
removeFirtIt = itCompanies1.shift()
console.log(removeFirtIt)
console.log(itCompanies1)

//Remove the middle IT company or companies from the array
const itCompanies3 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
removeFirtIt = itCompanies3.splice(3, 1)
console.log(removeFirtIt)
console.log(itCompanies3)

//Remove the last IT company from the array
const itCompanies2 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
removeFirtIt = itCompanies2.pop()
console.log(removeFirtIt)

//Remove all IT companies
const itCompanies4 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
removeFirtIt = itCompanies4.splice()
console.log(removeFirtIt)



