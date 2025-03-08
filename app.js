//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let guardarNomeAmigos = [];

function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nomeDigitado = input.value.trim();

    if (nomeDigitado === "") {
        alert("Por favor, insira um nome.");
        return;  
    }

    guardarNomeAmigos.push(nomeDigitado);
    input.value = "";
    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let i = 0; i < guardarNomeAmigos.length; i++) {
        let amigo = guardarNomeAmigos[i];
        lista.innerHTML += `<li>${amigo}</li>`;
    }
}

function sortearAmigo() {
    if (guardarNomeAmigos.length === 0) {
        alert('Adicione amigos antes de sortear!');
        return;        
    }

    let indiceSorteado = Math.floor(Math.random() * guardarNomeAmigos.length);
    let amigoSorteado = guardarNomeAmigos[indiceSorteado];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>O amigo sorteado é: ${amigoSorteado}</li>`;

        setTimeout(() => {
        guardarNomeAmigos = [];  
        atualizarLista();        
        resultado.innerHTML = ""; 
    }, 5000); 
}

document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        adicionarAmigo();
    }
});
