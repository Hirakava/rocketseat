/* Transformar notas escolares
    
    Crie um algoritmo que transforme as notas do sistema numerico
    para o sistema de notas em caracteres tipo A B C.

    - de 90 pra cima -  A
    - entre 80 ~ 90   - B
    - entre 70 ~ 79   - C
    - entre 60 ~ 69   - D
    - menor que  60   - F


let score = -1

let scoreA = score >= 90 && score <= 100
let scoreB = score >= 80 && score <= 89
let scoreC = score >= 70 && score <= 79
let scoreD = score >= 60 && score <= 69
let scoreF = score < 60 && score  >= 0

let scoreFinal;

if (scoreA) {
    scoreFinal =  ( " Nota A ")
} 
else if (scoreB){
    scoreFinal =  ( " Nota B ")
}
else if (scoreC){
    scoreFinal =  ( " Nota C ")
}
else if (scoreD){
    scoreFinal =  ( " Nota D ")
}
else if (scoreF){
    scoreFinal =  ( " Nota F ")
}
else{
    scoreFinal =  ( "  Nota Invalida ")
}
console.log (scoreFinal)        


*/

function getScore(score){

        let scoreA = score >= 90 && score <= 100
        let scoreB = score >= 80 && score <= 89
        let scoreC = score >= 70 && score <= 79
        let scoreD = score >= 60 && score <= 69
        let scoreF = score < 60 && score  >= 0

        let scoreFinal;

        if (scoreA) {
            scoreFinal =  ( " Nota A ")
        } 
        else if (scoreB){
            scoreFinal =  ( " Nota B ")
        }
        else if (scoreC){
            scoreFinal =  ( " Nota C ")
        }
        else if (scoreD){
            scoreFinal =  ( " Nota D ")
        }
        else if (scoreF){
            scoreFinal =  ( " Nota F ")
        }
        else{
            scoreFinal =  ( "  Nota Invalida ")
        }
        return scoreFinal
}
console.log(getScore(101))
console.log(getScore(-1))
console.log(getScore(0))
console.log(getScore(1))
console.log(getScore(45))
console.log(getScore(60))
console.log(getScore(61))
console.log(getScore(75))
console.log(getScore(85))
console.log(getScore(95))