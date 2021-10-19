/*
    Sistemas de gasto familiar

    Crie um objeto que possuira 2 propriedades, ambas do tipo array:
    - receitas []
    - despesas []
    
    Agora, crie uma funcao que ira calcular o total de receitas e despesas
    e ira mostrar uma mensagem se a familia esta com 
    saldo positivo ou negativo, seguido do valor do saldo.
*/

let family = {
    incomes: [1200, 1200, 250.43, 360.45],
    expenses: [320.34, 128.45, 176.87, 1450.00, 2000]
}

function sum(array){
    let total=0;
    for (let value of array){
        total += value
    }
    return total
}

function calculateBalance() {
    const calculateIncomes = sum (family.incomes)
    const calculateExpensives = sum (family.expenses)

    const total = calculateIncomes - calculateExpensives

    const itsOk = total >= 0

    let balanceText= "negativo"

    if (itsOk) {
        balanceText= "positivo"
    }

    console.log(`Seu saldo é ${balanceText}: R$${total.toFixed(2)}`)

}

calculateBalance()