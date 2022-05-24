var tarefasAdicionadas = [];

document.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        inserirItemTemplate();
    
    }})

function inserirItem(){
     var itemAdicionado = document.getElementById("novoItem");
     var itemDaLista = document.createElement("li")
     itemDaLista.innerHTML = itemAdicionado.value; 
     document.getElementById("lista").append(itemDaLista);
     itemAdicionado.value = ""; 
 }

function inserirItemTemplate (){
    var itemAdicionado = document.getElementById("novoItem");
    tarefasAdicionadas.push(itemAdicionado.value);

    var novo = document.getElementById('modelo').content.cloneNode(true);
    var li = novo.querySelector("li");
    li.append(itemAdicionado.value);
    document.getElementById("lista").append(li);
    itemAdicionado.value = "";
 }

 function removerItem(){
    
 }