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
}