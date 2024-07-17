const readline = require('readline')
const Calculadora = require('./models/calculadora')

const calculadora = new Calculadora()
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let numero1
let numero2 
let operacao
let resposta

leitor.question("Digite o primeiro número: ",function(answer){
    numero1 = parseInt(answer)
    leitor.question("Digite o segundo número: ", function(answer){
        numero2 = parseInt(answer)
        leitor.question("Digite a operção: ",function(answer){
            operacao = answer
            leitor.close()
            switch (operacao) {
                case "soma":
                    resposta = calculadora.soma(numero1,numero2)
                    break;
                case "subtracao":
                    resposta = calculadora.subtracao(numero1,numero2)
                    break;
                case "multiplicacao":
                    resposta = calculadora.multiplicacao(numero1,numero2)
                    break;
                case "divisao":
                    resposta = calculadora.divisao(numero1,numero2)
                    break;
                default:
                    break;
            }
            
            console.log(`O valor da operacao é ${resposta}.`)
        })      
    })    
})