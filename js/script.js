console.log('test yae mundo');



var nome = 'lucao';
var idade = 25; 
var possuiFaculdade = true;
var bom = null;


if(!nome) {
    console.log('Nome não está vazio');
}else {
    console.log('Nome está vazio');
}

console.log(typeof bom, bom);
console.log(typeof nome, nome);
console.log(typeof idade, idade, idade+idade);
console.log(typeof possuiFaculdade, possuiFaculdade);


let  pedidos = [
    {id: 1, pedido: 'pizza'},
    {id: 2, pedido: 'hamburguer'},
    {id: 3, pedido: 'salada'},
    {id: 4, pedido: 'batata frita'},
    {id: 5, pedido: 'refrigerante'}
];

console.log(pedidos);

pedidos.forEach(function(pedido) {
    console.log(pedido.id, pedido.pedido);
});


let pedido = pedidos.find(function(pedido) {
        return pedido.id == 3;
});

console.log(pedido);