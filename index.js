//Reverse a String
const string = 'nurislam hasan tonmoy';

function reverseStr (str) {
    let reversValue = ''
    for(let i = str.length - 1; i >= 0; i--){
        reversValue += str[i]
    }
    return reversValue;
}
const result = reverseStr(string);
console.log(result);