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
const result = countVowels(name);
console.log(result)