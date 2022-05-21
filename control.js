function mostrarMensagem() {
    var itemAdicionado = document.getElementById("novoItem");
    var itemDaLista = document.createElement("li")
    itemDaLista.innerHTML = itemAdicionado.value; 
    document.getElementById("lista").append(itemDaLista);
    itemAdicionado.value = ""; 

    var novo = document.getElementById('modelo').content.cloneNode(true);
    var li = novo.querySelector("li");

    document.getElementById("lista").append(li).append(itemDaLista);

    ocument.addEventListener("keypress"), function (e) {
    if (e.key === 'Enter') {
        mostrarMensagem()
    }
}};

function adicionarBotao() {
    var campo = document.getElementByClass("editando")
    campo.value
    var novoBotao = document.createElement("Button");
    novoBotao.innerHTML = "Excluir"
}

