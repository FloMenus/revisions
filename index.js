// 1 - Alphabet

let sortLetters = (sentence) => {
    let lettersToNumber = []

    // Si il y a des nombres, retourner une erreur
    // if sentence =number {
    //     return "U cant put numbers"
    // }

    // convertir les lettres en numéro ascii
    for (let i=0; i< sentence.length ; i++) {
        lettersToNumber.push(sentence.charCodeAt(i))
        console.log (lettersToNumber)
    }

    // Trier les numéros ascii

 
      let numberSorted=  lettersToNumber.sort((a, b) => a - b)
        console.log (numberSorted)

    // convertir les numéros convertis en string
    let lettersSorted =""
    for (i=0; i< numberSorted.length; i++) {
        lettersSorted += numberSorted(String.fromCharCode[i])
    }

    return lettersSorted
}

console.log (sortLetters ("Konexio"))


// 2- XOXO

let countEach = (sentence) => {
    // vérifier que la sentence contient bien que des o et des x (boucle for)

    for (i=0; i<sentence.length; i++) {

    }

    // Faire sortir si la longueur de la sentence est impair

    //  Mettre les x et les o dans une variable chacuns

    // Comparer les deux variables, et afficher le résultat
}