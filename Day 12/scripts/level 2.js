// Exercises: Level 2

// 1. Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

function tenMostFrequentWords(paragraph, limit) {
    const words = paragraph.match(/\w+/g);
   
    const wordFrequency = {};
  
    for (let word of words) {
      wordFrequency[word] = (wordFrequency[word] || 0) + 1;
    }
  
    const sortedWords = Object.keys(wordFrequency).sort((a, b) => wordFrequency[b] - wordFrequency[a]);
  
    const mostFrequentWords = sortedWords.slice(0, limit).map(word => ({ word, count: wordFrequency[word] }));
  
    return mostFrequentWords;
  }
console.log(tenMostFrequentWords(paragraph, 5))