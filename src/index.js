//Biblioteca instalada com o comando npm i readline
//para leitura e escrita via terminal
const readline = require('readline')

//Classe que contém os metodos basicos de uma calculadora
const Calculadora = require('./models/calculadora')

//Instância calculadora sendo criada
const calculadora = new Calculadora()

//Instância para interação com o console sendo criada
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//variáveis de ambiente
let numero1
let numero2 
let operacao
let resposta


//Código de leitura e escrita para se ter o primeiro número
leitor.question("Digite o primeiro número: ",function(answer){
    numero1 = parseInt(answer)
    //Código de leitura e escrita para ser ter o segundo número
    leitor.question("Digite o segundo número: ", function(answer){
        numero2 = parseInt(answer)
        //Codigo de leitura e escrita para se ter a operação
        leitor.question("Digite a operção: ",function(answer){
            operacao = answer
            leitor.close()
            //Condicional switch usado para executar uma operação baseado 
            //na escolha do usuário
            switch (operacao) {
                case "soma":
                    //numero1 + numero2
                    resposta = calculadora.soma(numero1,numero2)
                    break;
                case "subtracao":
                    //numero2 - numero1
                    resposta = calculadora.subtracao(numero1,numero2)
                    break;
                case "multiplicacao":
                    //numero1 * numero2
                    resposta = calculadora.multiplicacao(numero1,numero2)
                    break;
                case "divisao":
                    //numero2 / numero1
                    resposta = calculadora.divisao(numero1,numero2)
                    break;
                default:
                    break;
            }
            //Resposta impressa em tela da operação
            console.log(`O valor da operacao é ${resposta}.`)
        })      
    })    
})