function calc() {
    var nome = prompt('Digite o nome do produto:')
    var quantidadeP = parseFloat(prompt('Digite a quantidade de produtos no frete:'))
    var tipoFrete = parseFloat(prompt('Digite o tipo de frete desejado:\n1 - Frete rapido\n2 - frete regular\n3 - Frete economico'))
    var distanciaKm = parseFloat(prompt('Digite a distancia percorrida em km:'))
    var pesoM = prompt('Digite o peso da mercadoria:\nA - entre 1kg a 10kg\nB - entre 11kg a 25kg\nC - entre 26kg a 50kg\nD - mais de 50kg')

    pesoM = pesoM.toUpperCase()

    if (pesoM === 'B'){
        var taxaPeso = distanciaKm + (distanciaKm*0.15)
    } else if (pesoM === 'C') {
        var taxaPeso = distanciaKm + (distanciaKm*0.25)
    } else if (pesoM === 'D') {
        var taxaPeso = distanciaKm + (distanciaKm*0.35)
    } else { 
        var taxaPeso = distanciaKm + (distanciaKm*0.05)
    }

    if (tipoFrete == 1) {
        var finalFrete = taxaPeso + (taxaPeso*0.25)
    } else  if (tipoFrete == 3) {
        var finalFrete = taxaPeso - (taxaPeso*0.10)
    } else {
        var finalFrete = taxaPeso + (taxaPeso*0.15)
    }

    if (distanciaKm <= 35) {
        var taxaKm = finalFrete-(finalFrete*0.05)
    } else if (distanciaKm >= 70) {
        var taxaKm = finalFrete+(finalFrete*0.10)
    } else {
        var taxaKm = finalFrete
    }

    var valorKm = taxaKm/distanciaKm

    if (quantidadeP >=4) {
        var finalTaxa = taxaKm - (taxaKm*0.05)
    } else {
        var finalTaxa = taxaKm
    }

    document.getElementById('saida').innerHTML = `Produto: ${nome}<br>Quantidade de produtos: ${quantidadeP}<br>Quilometros rodados: ${distanciaKm}Km<br>O valor final do frete é de: R$${finalTaxa}<br>Valor por quilo: ${taxaPeso}<br>Valor por quilometro: ${valorKm}`

}