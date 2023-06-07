// Exercises Level 3

// 1. Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode)
// and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max,
// count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all
// the functions which do statistical calculations as method for the Statistics class. Check the output below.

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

class Statistics {
    constructor(data) {
      this.data = data;
    }
  
    count() {
      return this.data.length;
    }
  
    sum() {
      return this.data.reduce((total, value) => total + value, 0);
    }
  
    min() {
      return Math.min(...this.data);
    }
  
    max() {
      return Math.max(...this.data);
    }
  
    range() {
      return this.max() - this.min();
    }
  
    mean() {
      return this.sum() / this.count();
    }
  
    median() {
      const sortedData = this.data.sort((a, b) => a - b);
      const middle = Math.floor(this.count() / 2);
  
      if (this.count() % 2 === 0) {
        return (sortedData[middle - 1] + sortedData[middle]) / 2;
      } else {
        return sortedData[middle];
      }
    }
  
    mode() {
      const counts = new Map();
      let maxCount = 0;
      let mode = [];
  
      for (const value of this.data) {
        let count = counts.get(value) || 0;
        count++;
        counts.set(value, count);

        if (count > maxCount) {
          maxCount = count;
          mode = [value]
        } else if (count === maxCount) {
          mode.push(value);
        }
      }
  
      return { mode: mode, count: maxCount };
    }
  
    var() {
      const mean = this.mean();
      const squaredDifferences = this.data.map((value) => (value - mean) ** 2);
      return this.sum(squaredDifferences) / (this.count() - 1);
    }
  
    std() {
      return Math.sqrt(this.var());
    }
  
    freqDist() {
      const counts = new Map();
  
      for (const value of this.data) {
        let count = counts.get(value) ||   0;
        count++;
        counts.set(value, count);
      }
  
      return Array.from(counts.entries());
    }
  }
  
const statistics = new Statistics(ages);
  
console.log('Count:', statistics.count());
console.log('Sum: ', statistics.sum());
console.log('Min: ', statistics.min());
console.log('Max: ', statistics.max());
console.log('Range: ', statistics.range());
console.log('Mean: ', statistics.mean());
console.log('Median: ',statistics.median());
console.log('Mode: ', statistics.mode());
console.log('Variance: ', statistics.var());
console.log('Frequency distribution: ', statistics.freqDist())