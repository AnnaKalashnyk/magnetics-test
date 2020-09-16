const findingNumberOfAnagrams = (arr) => {
    
    let wordGroups = {}

    //create an array of strings from the input array, the letters in which sorting alphabetically; enter the data into the wordGroups object [transformed string]: [original word]
    let transformedArray = arr.map(item => {
        let sorted = item.split('').sort().join('')
        wordGroups[sorted] = item

        return sorted
    });

    //iterate over the new transformed array and calculate the number of anagrams for each group of words
    const counter = () => {
      const countArray = transformedArray.reduce((tally, item) => {
            tally[item] = (tally[item] || 0) + 1;
            return tally;
          } , {})

      return Object.values(countArray).map(val => val = val - 1)
    }
    
    //transform the resulting object so that the key is a word, and the value is the number of anagrams
    let result = Object.fromEntries(
      Object.entries(wordGroups).map(([key, value], i) => [key = value, value = counter()[i]])
    );
    
    return result
    
}
