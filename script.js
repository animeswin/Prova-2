const nome = prompt("Digite seu nome:")
const peso = Number(prompt("Digite seu peso:"))
const altura = Number(prompt("Digite sua altura:"))

function calcularIMC(peso, altura_cm){
    const altura_metros = altura_cm
    return peso / (altura_metros ** 2)
}

function classificarIMC(imc){
    if (imc < 16) {
        return "Baixo peso muito grave"
    } else if (imc >= 16 && imc <= 16.99) {
        return "Baixo peso grave"
    } else if (imc >= 17 && imc <= 18.49) {
        return "Baixo peso"
    } else if (imc >= 18.5 && imc <= 24.99) {
        return "Peso normal"
    } else if (imc >= 25 && imc <= 29.99) {
        return "Sobrepeso"
    } else if (imc >= 30 && imc <= 34.99) {
        return "Obesidade grau I"
    } else if (imc >= 35 && imc <= 39.99) {
        return "Obesidade grau II"
    } else {
        return "Obesidade grau III"
    }
}
const imc = calcularIMC(peso, altura)
const classificacao = classificarIMC(imc)
document.write(`${nome}, seu IMC é de ${imc.toFixed(2)}, e sua classificação é ${classificacao}`)