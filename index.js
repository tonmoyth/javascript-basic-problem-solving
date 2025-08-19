//Reverse a String
const string = 'nurislam hasan tonmoy';

function reverseStr (str) {
    let reversValue = ''
    for(let i = str.length - 1; i >= 0; i--){
        reversValue += str[i]
    }
    return reversValue;
}
// const result = reverseStr(string);
// console.log(result);

// Count Vowels in a String

const name = 'programing hero';

function countVowels (value){
    const Vowels = ['a','e','i','o','u'];
    let vowelNumber = 0;
    for(let i = 0; i < value.length; i++){
        if(Vowels.includes(value[i])){
            vowelNumber += 1
        }
    }
    return vowelNumber
}
// const result = countVowels(name);
// console.log(result)

// Check for Palindrome

function checkPalindrome(value){
    let reversValue = '';
    for(let i = value.length -1; i >= 0; i--){
        reversValue += value[i]
       
    }
    if(value === reversValue){
        return true
    }else{
        return false
    }
}
// const result = checkPalindrome('madam');
// console.log(result);

// Find the Maximum Number
const findMaxNumber = (value) => {
    let maxNum = 0;
    for(let i = 0; i < value.length; i++){
        if(value[i] > maxNum){
            maxNum = value[i]
        }
    }
    return maxNum;
}

// const result = findMaxNumber([23,43,22,33,22,12,33]);
// console.log(result);

// Remove Duplicates from an Array
const removeDuplicate = (value) => {
    const noDuplicate = [];
    for(let i = 0; i < value.length; i++){
        if(!noDuplicate.includes(value[i])){
            noDuplicate.push(value[i])
        }
    }
    return noDuplicate;
}
const result = removeDuplicate([2,3,3,2,4]);
console.log(result);