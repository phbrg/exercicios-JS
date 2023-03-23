var idade = parseFloat(prompt('Digite a sua idade:'))

if (idade <16){
    document.getElementById('phtml').innerHTML="Você não pode votar!"
} else {
    if (idade <18) {
        document.getElementById('phtml').innerHTML="Voto facultativo, embarque permitido."
    } else {
        document.getElementById('phtml').innerHTML="Voto obrigatorio, embarque permitido."
    }
}