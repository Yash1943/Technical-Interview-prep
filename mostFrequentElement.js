function mostFrequent(arr) {
  let frequency = {};
  let maxFreq = 0;
  let mostFrequentElement = null;

  for (let item of arr) {
    frequency[item] = (frequency[item] || 0) + 1;
    console.log("fraquency", frequency);
    if (frequency[item] > maxFreq) {
      maxFreq = frequency[item];
      console.log("maxFreq", maxFreq);
      mostFrequentElement = item;
      console.log("mostFrequentElement", mostFrequentElement);
    }
  }

  return mostFrequentElement;
}

// Example usage:
let arr = [1, 3, 1, 3, 2, 1];
console.log(mostFrequent(arr)); // Output: 1
