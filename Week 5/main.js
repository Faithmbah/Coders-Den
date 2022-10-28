/*Create a separate countries.js file and store the countries array in to this file, create a 
separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file*/
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
    'Kenya'
  ]

  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  let contryWebTeschs = [countries, webTechs]
console.log(contryWebTeschs)

/*First remove all the punctuations and change the string to array and count 
the number of words in the array*/
let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python."


//In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

//add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift("meat")
console.log(shoppingCart)

//add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push("Sugar")
console.log(shoppingCart)

//remove 'Honey' if you are allergic to honey
shoppingCart.splice(4,1)
console.log(shoppingCart)

//modify Tea to 'Green Tea'
shoppingCart[3] = ' Green Tea'
console.log(shoppingCart)


/*In countries array check if 'Ethiopia' exists in the array if it exists print 
'ETHIOPIA'. If it does not exist add to the countries list.*/
let index = countries.indexOf('Canada')
let country1 = countries[index] 
let arr = []
arr = countries.push(index)
console.log(arr)

if (index === -1) {console.log(arr)} else {console.log(country1)}
console.log(countries)


/*In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS 
preprocess'. If it does not exist add Sass to the array and print the array.*/


// let index1 = webTechs.indexOf("php")
// let tech1 = webTechs[index1] 
// if (index === -1) {console.log(webTechs.push(""))} else {console.log(tech1)}
// //console.log(webTechs)

//Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

let fullStack = [frontEnd, backEnd]
console.log(fullStack)

