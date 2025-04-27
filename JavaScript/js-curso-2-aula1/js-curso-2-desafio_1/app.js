let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function botaoConsole(){
    console.log('O botao foi clicado');
}

function botaoAlerta(){
    alert('Eu amo JS');
}

function botaoPrompt(){
    let cidade = prompt('Digite o nome de uma cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de você`);
}

function botaoSoma(){
    let numero1 = parseInt(prompt('Digite um numero inteiro'));
    let numero2 = parseInt(prompt('Digite outro numero inteiro'));
    let soma = numero1 + numero2;
    alert(`${numero1} + ${numero2} = ${soma}`);
}