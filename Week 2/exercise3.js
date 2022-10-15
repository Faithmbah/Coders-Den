// Count the number of word love in this sentence.

let word = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let count = /love/gi

console.log(word.match(count))

// Use match() to count the number of all because in the following sentence:

let newWord ='You cannot end a sentence with because because because is a conjunction'
let count2 = /because/gi

console.log(newWord.match(count2))

// Clean the following text and find the most frequent word

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

//Replace % with empty string

let sen =/%/gi
let sent = sentence.replace(sen, "")

//Replace @ with empty string

let sente = /@/gi
let senten = sent.replace(sente, "")

//Replace & with empty string

let sentenc = /&/gi
let sentencee = senten.replace(sentenc, "")

//Replace # with empty string

let sentenca = /#/gi
let sentencees = sentencee.replace(sentenca, "")

//Replace ; with empty string

let sentencas = /;/gi
let sentenceess = sentencees.replace(sentencas, "")

//Replace $ with empty string (having issue replacing $)

let sentencass = /$/gi

console.log(sentenceess.replace(sentencass, ""))


// Calculate the total annual income of the person by extracting the numbers from the following text.

let calculate = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let Number = calculate.match(/\d+/g)
console.log(Number)
