function mostrarMensagem() {
    var itemAdicionado = document.getElementById("novoItem");
    var itemDaLista = document.createElement("li")
    itemDaLista.innerHTML = itemAdicionado.value; 
    document.getElementById("lista").append(itemDaLista);
    itemAdicionado.value = ""; 
}
function adicionarBotao() {
    var campo = document.getElementByClass("editando")
    campo.value
    var novoBotao = document.createElement("Button");
    novoBotao.innerHTML = "Excluir"
}
document.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        mostrarMensagem()
    }
});


