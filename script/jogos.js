


function calcular() {
    var inputVelocidade = document.getElementById('input-velocidade')
    var pVelocidade = document.getElementById('p-velocidade')
    var velocidade = Number(inputVelocidade.value)


    pVelocidade.innerHTML = 'O limite da via é de 60Km/h!<br>Sendo assim, você foi MULTADO.'
}



/*var velocidade = 59.99999999999

console.log(`A velocidade do seu carro é de ${velocidade}Km/h`)

if (velocidade > 60) {

    console.log('Você ultrapassou o limite da via, você foi MULTADO!')

}

console.log('Dirija sempre com cinto de segurança!!!')*/
