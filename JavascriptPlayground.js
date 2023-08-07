// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.

function convertString(str) {
    let strArr = str.split(' ');
    let newArr = [];
    strArr.forEach(word => {
         let wordFirstChar = word.charAt(0).toUpperCase();
         let remainingChar = word.slice(1).toLowerCase()
          newArr.push(wordFirstChar + remainingChar)
    });

    let result = newArr.toString().replace(/,/g, ' ');
    return result;

}
convertString('get that dog out of my sight');// 'Get That Dog Out Of My Sight 


// Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string

function longestWord(str) {
    let strArr = str.split(' ');
    let newArrSort = strArr.sort(function (a, b) {
        return b.length - a.length;
    })

    
return newArrSort[0];


}
longestWord('get that dog out of my sight'); // sight


// Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not.

function checkIsPrime(n) {
    let val = Math.floor(Math.sqrt(n))
    if(n < 2)  return false
    if(n === 2) return true

    for(let i = 2; i <= val; i++) {
        if(n % i === 0) {
             return false
            } 
        }
        return true
}

checkIsPrime(17); // true




//Write a JavaScript function that accepts an argument and returns the type.

 function  returnType(arg) {
    return typeof(arg)

 }

returnType(24); // number


// Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.

function findNum(arr) {
    let newArr = []
     let arrSort = arr.sort( function(a, b) {
        return b - a
     })
     let secondGreatest = arrSort[1]
     let secondLowest = arrSort[arrSort.length - 2]
     newArr.push(secondLowest, secondGreatest)
     return newArr;


}
findNum([100,5,80,2000,2, 61, 9]); // [5, 100]
