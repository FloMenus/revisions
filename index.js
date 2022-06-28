// 1 - Alphabet

// let sortLetters = (sentence) => {
//     let lettersToNumber = []

    // Si il y a des nombres, retourner une erreur
    // if sentence =number {
    //     return "U cant put numbers"
    // }

    // convertir les lettres en numéro ascii
//     for (let i = 0; i < sentence.length; i++) {
//         lettersToNumber.push(sentence.charCodeAt(i))
//         console.log(lettersToNumber)
//     }

//     // Trier les numéros ascii


//     let numberSorted = lettersToNumber.sort((a, b) => a - b)
//     console.log(numberSorted)

//     // convertir les numéros convertis en string
//     let lettersSorted = ""
//     for (i = 0; i < numberSorted.length; i++) {
//         lettersSorted += numberSorted(String.fromCharCode[i])
//     }

//     return lettersSorted
// }

// console.log(sortLetters("Konexio"))


// 2- XOXO (erreur undefined)

// let countEach = (sentence) => {

//    elements = sentence.split('')
//    console.log (elements)

//    let verification = elements.forEach((element) => {

//         if (sentence.length % 2 !== 0 || (element !== "x" && element !== "o")) {
//             return 'Error in your input'
//         }

//         else {
//            return verification = true
//         }
        
//     })
    
//     return verification
// }

// console.log (countEach("x"))

// 3 - Palindrome (erreur undefined)

// let isPalindrome = (sentence) => {
//   let  splittedSentence = sentence.split("")
//     console.log (splittedSentence)

//   let reversedSplittedSentence = splittedSentence.reverse()
//     console.log (reversedSplittedSentence)

//     splittedSentence.forEach((letter) => {
//         if (letter !== reversedSplittedSentence.letter) {
//             return 'Nope'
//         }

//         else {
//             return 'Palindrome !'
//         }

//         return splittedSentence.forEach
//     })
// }

// console.log (isPalindrome("racecar"))

