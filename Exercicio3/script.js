var kmRodado = parseFloat(prompt('Digite a quantidade de kms rodados: (ex: 23)'))
var hora = parseFloat(prompt('Digite o horario do atendimento sem os minutos: (ex: 18)'))

if (hora >= 20){
    var pay = kmRodado*4.5
} else if (hora <= 5){
    var pay = kmRodado*5
} else {
    var pay = kmRodado*3
}

var taxaApp = pay - (pay*0.15)

var metPay = parseFloat(prompt('Qual foi a forma de pagamento: \n1 para cartão \n2 para dinheiro \n3 para pagamentos no app'))

if (metPay == 3) {
    var contaPay = taxaApp*0.05
    var finalPay = taxaApp-contaPay
} else {
    var finalPay = taxaApp
}

document.getElementById('idp').innerHTML = `O valor recebido pelo motorista é de: <b>R$ ${finalPay}</b> | O aplicativo recebeu 15% desta viagem.`