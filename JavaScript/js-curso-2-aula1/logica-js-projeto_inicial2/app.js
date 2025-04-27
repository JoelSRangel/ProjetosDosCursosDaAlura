function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = campo.innerHTML + texto;
}

let altura = 1.8;
let peso = 78.0;

function calculaIMC(altura, peso){
    let IMC = parseFloat(peso) / parseFloat(altura);
    return IMC;
}

let IMC = calculaIMC(altura, peso);

exibirTextoNaTela(`h3`, `<br>IMC = ` + IMC);

function calculaFatorial(numero){
    let fatorial = 1;
    while(numero > 0){
        fatorial = fatorial * numero;
        numero--;
    }
    return fatorial;
}

let fatorial = calculaFatorial(6);

exibirTextoNaTela(`h3`, `<br>Fatorial = ` + fatorial);

function converteDolar(valorEmDolar){
    let valorEmReais = parseFloat(valorEmDolar) * 4.80;
    return valorEmReais;
}

let valorEmReais = converteDolar(3);

exibirTextoNaTela(`h3`, `<br>Valor em Reais = ` + valorEmReais);

function mostrarAeP(altura, largura){
    let area = parseFloat(altura) * parseFloat(largura);
    let perimetro = 2 * parseFloat(altura) + 2 * parseFloat(largura);
    exibirTextoNaTela(`h3`, `<br> Area do retangulo = ` + area + `<br> Perimetro do retangulo = ` + perimetro);
}

mostrarAeP(5, 6);

function mostrarAePCirculo(raio){
    let area = parseFloat(raio) * parseFloat(raio) * 3.14;
    let perimetro = 2 * parseFloat(raio) * 3.14;
    exibirTextoNaTela(`h3`, `<br> Area do circulo= ` + area + `<br> Perimetro do circulo = ` + perimetro);
}

mostrarAePCirculo(3);

function mostrarTabuada(numero){
    let count = 1;
    while (count < 10){
        exibirTextoNaTela(`h3`, `<br>` + numero + ` * ` + count + ` = ` + (numero * count));
        count++;
    }
}

mostrarTabuada(5);



