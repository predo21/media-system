let numero1 = document.getElementById('num1')
let numero2 = document.getElementById('num2')
let numero3 = document.getElementById('num3')
let numero4 = document.getElementById('num4')


let somar

function media() {

    somar = (parseInt(numero1.value) + parseInt(numero2.value) + parseInt(numero3.value) + parseInt(numero4.value)) / 4

    if (somar >= 7) {
        alert(`Sua nota foi total ${somar} voce foi aprovado!😀`)
    }
    if (somar >= 5 && somar < 7) {

        alert(`Sua nota foi total ${somar} voce ficou em exames`)
    }
    if (somar < 5) {

        alert(`Sua nota foi total ${somar} voce foi reprovado! :(`)
    }


}