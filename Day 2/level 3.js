// Exercises: level 3

// 1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.
//' Count the number of word love in this sentence.
const loveQuote = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
const lovePattern = /love/gi; 
loveMatch = loveQuote.match(lovePattern).length;
console.log(loveMatch);


// Use match() to count the number of all because in the following sentence:
// 'You cannot end a sentence with because because because is a conjunction'
const string3 = 'You cannot end a sentence with because because because is a conjunction';
const becPattern = /because/g;
const matchPattern = string3.match(becPattern).length;
console.log(matchPattern)

// Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
const matchRegex = /[^\w,.\s]/gi;
const cleanSentence = sentence.replace(matchRegex, '');
console.log(cleanSentence)
const word = cleanSentence.split(" ");

// Calculate the total annual income of the person by extracting the numbers from the following text.
// 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
const string4 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

const regex = /\d+/g;
const incomes = string4.match(regex);

const salaryPerMonth = incomes[0];
const annualBonus = parseInt(incomes[1]);
const onlineCoursesPerMonth = parseInt(incomes[2]);

const salaryPerYear = salaryPerMonth * 12;
const incomeFromOnlineCoursesPerYear = onlineCoursesPerMonth * 12;
const totalAnnualIncome = salaryPerYear + annualBonus + incomeFromOnlineCoursesPerYear;

console.log("Total Annual Income: " + totalAnnualIncome + " euro");
