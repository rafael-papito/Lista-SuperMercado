function lista(){

    itens = [];
    var produtos = document.getElementById('produto');
    var preco = document.getElementById('preco');
    var register = document.getElementById('cadasSingle');
    itens.push({
        nome: produtos.value,
        valor: preco.value
    });
    if(produtos.value.length == 0 || preco.value.length == 0){
        alert('[ERROR]')
    }else{
        var listaProdutos = document.getElementById('cadasSingle');
        var soma = 0;
    listaProdutos.innerHTML +="";
    itens.map(function(val){
        listaProdutos.innerHTML+=`
        <div class="produtos-single" id="cadasSingle">
            <h2>`+val.nome+`</h2>
            <h3>R$`+val.valor+`</h3>
        </div>`;
    })
    }
}