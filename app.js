//Convert Celsius to Fahrenheit

function convertToF(celsius) {
    let celcius;
    let fahrenheit;
    return fahrenheit=(celsius*9)/5+32;
  }
  
//   console.log(convertToF(30)); 

  //Reverse a String

  function reverseString(str) {
    // let splitStr=str.split("");
    // let reverseStr=splitStr.reverse();
    // let result=reverseStr.join("");
    // return result;

    return str.split("").reverse().join("");
  }
  
//   console.log(reverseString("hello")); 

  //Factorialize a Number

  function factorialize(num) {
    if(num===1)return 1;
    if(num===0)return 1;
    return num=num*factorialize(num-1);
  }
  
//   console.log(factorialize(5));   

  //Find the Longest Word in a String

  function findLongestWordLength(str) {
    let longest=0;
    let counter=str.split(" ")
    for (let i = 0; i < counter.length; i++) {
        if(counter[i].length > longest){
            longest=counter[i].length;
        }
        
    }
    return longest;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
//   console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

  //Return Largest Numbers in Arrays

  function largestOfFour(arr) {
    let results = [];
    for (let i = 0; i < arr.length; i++) {
      let largestNumber = arr[i][0];
      for (let j = 1; j < arr[i].length; j++) {
        if (arr[i][j] > largestNumber) {
          largestNumber = arr[i][j];
        }
      }
      results[i] = largestNumber;
    }
  
    return results;
  }
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26]]);
//   largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//Confirm the Ending

// function confirmEnding(str, target) {
//     return str.slice(str.length-target.length)===target;
//   }
  function confirmEnding(str, target) {
    return str.endsWith(target);
  }
  
  
//   console.log(confirmEnding("Bastian", "n")); 

//Repeat a String Repeat a String

// function repeatStringNumTimes(str, num) {
//     return str.repeat(num);
//   }

  function repeatStringNumTimes(str, num) {
    let counter= "";
    for (let i = 0; i <num; i++) {
         counter += str;
        
    }
    return counter
}
// return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
//   console.log(repeatStringNumTimes("abc", 3));


//Truncate a String
//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

function truncateString(str, num) {
    
    return str.length > num ? str.slice(0, num) + "..." : str;

   
  }
  
//   console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));   


//Finders Keepers

function findElement(arr, func) {
  let num = 0;
  return num;
  
}

findElement([1, 2, 3, 4], num => num % 2 === 0);


//Boo who

function booWho(bool) {
  return typeof bool === "boolean";
}

// booWho(null);

//Title Case a Sentence

function titleCase(str) {
  const newTitle = str.split(" ");
  const updatedTitle = [];
  for (let st in newTitle) {
    updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
  }
  return updatedTitle.join(" ");
}
titleCase("I'm a little tea pot");


//Slice and Splice

function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let localArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }
  return localArray;
}

//Falsy Bouncer

function bouncer(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) newArray.push(arr[i]);
  }
  return newArray;
}

bouncer([7, "ate", "", false, 9]);

//Where do I Belong

function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num)
      return i;
  }

  return arr.length;
}

getIndexToIns([40, 60], 50);

//Mutations

function mutation(arr) {
  let test = arr[1].toLowerCase();
  let target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}

//Chunky Monkey





