// Exercise: Level 3

// 1. Write a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.

const sentence2 = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

function cleanText(sentence2) {
    const regex = /[^a-zA-Z\s.,]/g;
    return sentence2.replace(regex, "");
}

console.log(cleanText(sentence2))


// 2. Write a function which find the most frequent words. After cleaning, count three most frequent words in the string.

const sentence3 = ' I am a teacher and I love teaching There is nothing as more rewarding as educating and empowering people I found teaching more interesting than any other jobs Does this motivate you to be a teacher'

function findMostFrequentWords(sentence, limit) {
    const words = sentence.split(/\s+/);
  
    const wordFrequency = {};
    for (const word of words) {
      wordFrequency[word] = (wordFrequency[word] || 0) + 1;
    }
  
    const sortedWords = Object.keys(wordFrequency).sort((a, b) => wordFrequency[b] - wordFrequency[a]);
  
    const mostFrequentWords = sortedWords.slice(0, limit).map(word => ({ word, count: wordFrequency[word] }));
    return mostFrequentWords;
  }
console.log(findMostFrequentWords(sentence3, 3))