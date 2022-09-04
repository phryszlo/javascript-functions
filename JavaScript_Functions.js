// 1.
function maxOfTwoNumbers(x, y) {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}

// 2.
// Define a function, as a function expression, maxOfThreethat takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.
const maxOfThree = (a, b, c) => {
  let largest = a
  if (b > a) largest = b
  if (c > largest) largest = c
  return largest
}

//3. Define a function, as a function declaration, isCharAVowelthat takes a character as an argument and returns true if it is a vowel, false otherwise.
function isCharAVowel(c) {
  //regex
  const vowelTest = /[aeiou]/i
  return vowelTest.test(c)

  // OR
  // const vowels = ['a','e','i','o','u']
  // return vowels.includes(c.toLowerCase())

}


//4. Define a function, as a function expression, sumArraythat takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.
const sumArray = (arr) => {

  return arr.reduce((a, b) => {
    return a + b
  })

  // OR
  // let accumulator = 0
  // arrNum.forEach(element => {
  //   accumulator += element  
  // });
  // return accumulator


}

//5. Define a function, as a function declaration, multiplyArraythat takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.
function multiplyArray(arr) {
  return arr.reduce((a, b) => {
    return a * b
  })
}

//6. Define a function, as a function expression, numArgsthat returns the number of arguments passed to the function when called.
const numArgs = (...args) => {
  return(args.length)
}

//7. Define a function, as a function declaration, reverseStringthat takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".
function reverseString(word) {
  let reversed = ""
  for (let letter = word.length - 1; letter >= 0; letter--) {
    reversed += word[letter]
  }
  return reversed
}

//8. Define a function, as a function expression, longestStringInArraythat takes an array of strings as an argument and returns the length of the longest string.
const longestStringInArray = (strings) => {
  let longest = 0
  strings.forEach((element) => {
    if (element.length > longest) longest = element.length
  });
  return longest
}


//9. Define a function, as a function declaration, stringsLongerThanthat takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"]. 
function stringsLongerThan(strings, longerThan) {
  const matching = strings.filter(word => word.length > longerThan)
  return matching
}

console.log(maxOfTwoNumbers(3, 9));
console.log(maxOfThree(6, 32, 7))
console.log(isCharAVowel('E'))
console.log(sumArray([2, 5, 5]))
console.log(multiplyArray([2, 4, 5]))
console.log(numArgs(1,2,3,5))
console.log(reverseString('rockstar'))
console.log(longestStringInArray(['emma','bauser','jackson','myrtle']))
console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3))