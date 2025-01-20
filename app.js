let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    amigos.push(nome);
    atualizarLista();

    
    input.value = "";
}


function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";
    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione ao menos um nome para realizar o sorteio.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];


    const resultado = document.getElementById('resultado');
    resultado.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
}
