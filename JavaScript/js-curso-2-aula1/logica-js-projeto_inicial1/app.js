function helloWorld() {
    console.log('Olá, mundo!');
}

function helloName(nome){
    console.log(`Olá, ${nome}!`);
}

function returnDouble(numero1){
    return (parseInt(numero1) * 2);
}

function returnMedia(numero1, numero2, numero3){
    return ((parseFloat(numero1) + parseFloat(numero2) + parseFloat(numero3))/3);
}

function returnMaior(numero1, numero2){
    if(numero2 > numero1){
        return numero2;
    } else {
        return numero1;
    }
}

function returnQuadrado(numero1){
    return (parseInt(numero1) * parseInt(numero1))
}

let teste = returnQuadrado(7);
alert(teste);