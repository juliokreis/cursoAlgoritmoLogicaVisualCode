var valor1, valor2, resultado, operacao;

function acaoBotao() {
   
valor1 = prompt("Digite o primeiro valor: ")
operacao = prompt("Digite a operação (Ex.:+, -, * ou /): ")
valor2 = prompt("Digite o segundo valor: ")

switch (operacao) {
    case "+":
        resultado = parseInt(valor1) + parseInt(valor2)        
        break;
    case "-":
        resultado = parseInt(valor1) - parseInt(valor2)        
    break;
    case "*":
        resultado = parseInt(valor1) * parseInt(valor2)        
    break;
    case "/":
        resultado = parseInt(valor1) / parseInt(valor2)        
    break;
default:
    break;
}

document.getElementById("paragrafo").innerText = resultado
    
}
