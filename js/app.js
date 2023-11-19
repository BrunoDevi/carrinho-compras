var carrinho = [];

function productInfo(){
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = parseFloat(produto.split('-')[1]);
    let quantidade = document.getElementById('quantidade').value;
    let preço = quantidade * valorProduto;
    return{nome: nomeProduto, valor: valorProduto, quantidade: quantidade, preço: preço};
}

function preçoTotal() {
    var precoTotal = 0;

    for (var i = 0; i < carrinho.length; i++) {
      precoTotal += parseFloat(carrinho[i]);
    }
    return precoTotal;
}

function productAdd(){
    let produto = productInfo();

    var novoProduto = `<section class='carrinho__produtos__produto'><span class="texto-azul">${produto.quantidade}x </span>${produto.nome} <span class="texto-azul">R$${produto.valor} </span></section>`;

    // é pra funicionar ne.

    // var novoProduto = document.createElement("section");
    // novoProduto.className = "carrinho__produtos__produto";

    // let quantidade = document.createElement('span');
    // quantidade.className = "texto-azul";
    // quantidade.textContent = `${produto.quantidade}x `;

    // let nome = document.createTextNode(produto.nome);

    // let valor = document.createElement('span');
    // valor.className = "texto-azul";
    // valor.textContent = `R$${produto.valor}`;

    // novoProduto.appendChild(quantidade);
    // novoProduto.appendChild(nome);
    // novoProduto.appendChild(valor);

    let inputQuantidade = document.getElementById('quantidade');
    let listaProdutos = document.getElementById("lista-produtos");

    if(inputQuantidade.value == null || inputQuantidade.value == '' || inputQuantidade.value == '0'){
        alert('Por favor, selecione a quantidade desejada.');
    }else{
        listaProdutos.innerHTML = novoProduto;
        carrinho.push(produto.preço);
        inputQuantidade.value = '';
    }   
}

function adicionar(){ 
    productAdd();

    let valorTotal = document.getElementById("valor-total");
    valorTotal.textContent = `R$${preçoTotal()}`;  
}

function limpar(){
    let listaProdutos = document.getElementById("lista-produtos");

    let inputQuantidade = document.getElementById('quantidade');
    inputQuantidade.value = '';

    let valorTotal = document.getElementById('valor-total');
    valorTotal.textContent = `R$0`;

    while (listaProdutos.firstChild) {
      listaProdutos.removeChild(listaProdutos.firstChild);
    }

    carrinho = [];
}    