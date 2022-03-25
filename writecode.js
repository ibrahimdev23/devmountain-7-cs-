
// 1 Sum Zero
// Write a function that takes in an array of numbers. The function should
// return True if any two numberss in list sum to 0, and false otherwise.

const addToZero = (nums) => {

      for( let i = 0; i < nums.length; i++){
      for (let j = i + 1; j < nums.length; j++){   // This function is 0(n sqaured) b/c nested loop
    if(nums[i] + nums[j] === 0){
      return true
    }
     
      }
    }
    return false 
    
    }

//2 Unique Characters
// Write a function that takes in a single word, as a string. It should return 
// True if that word contains only unique characters. Return False otherwise.


const hasUniqueChars = (str) => {


    for(let i = 0; i < str.length; i++){
      for(let j = i + 1; j < str.length; j++){
        if(str[i].toLowerCase() === str[j].toLowerCase()){  //this function is also 0(n sqaured) for the same reason
          return true                                       //
        }
        
      }
      
    }
      return false 
    }


//3 Pangram Sentence
// A pangram is a sentence that contains all the letters of the English alphabet at least once, 
// like “The quick brown fox jumps over the lazy dog.”
// Write a function to check a sentence to see if it is a pangram or not.

function isPangram(string){


    let alphatbet = /([a-z])(?!.*\1)/gi;        //   this is 0(1) time complexity and 0(n) space 
    const letters = string.toLowerCase().match(alphatbet);
  
  
  return (letters.length === 26)
   
}


// 4 Longest Word
// Write a function, find_longest_word, that takes a list of words 
// and returns the length of the longest one.
// For example:


const findLongestWord = (array) => {

    let lengthArray = []
      array.forEach(item => {
        lengthArray.push(item.length)
        
        return lengthArray
      });
  
  let sorted = lengthArray.sort((a,b) => {
    return b - a
  })
    return sorted[0]
  }
  
// this is a 0(n squared)