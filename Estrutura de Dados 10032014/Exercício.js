/*Implemente um sistema de carrinho de comprar em JavaScript
sem usar funções nativas de arrays (push(), pop(), length, etc.).
O carrinho deve permitir adicionar produtos, remover produtos,
exibir o total de itens e o valor total do carrinho.


Requisitos:
- Adicionar produtos: função adicionarProduto(produto, preco)
deve adicionar um produto ao final do carrinho
- Remover produto: a função removerProduto() deve remover o último
produto do carrinho
- Exibir total de itens: a função totalItens() deve exibir quantos
itens há no carrinho
- Calcular valor total: a função valorTotal() deve calcular o valor
total dos produtos no carrinho
- Limpar carrinho: a função limparCarrinho() deve esvaziar completamente
o carrinho.
*/

// Solução:
class Carrinho {
    constructor() {
        this.itens = {}; // Armazena os produtos
        this.produtosOrdenados = {}; // Armazena a ordem dos produtos
        this.indiceProduto = 0; // Controle do índice do próximo produto
        this.quantidade = 0; // Contador de itens
        this.total = 0; // Valor total
    }

    adicionarProduto(produto, preco) {
        if (!this.itens[produto]) {
            this.itens[produto] = { preco: preco, quantidade: 1 };
            this.produtosOrdenados[this.indiceProduto] = produto; // Adiciona o produto na posição do índice
            this.indiceProduto += 1; // Incrementa o índice para o próximo produto
        } else {
            this.itens[produto].quantidade += 1; // Incrementa a quantidade do produto existente
        }
        this.quantidade += 1; // Incrementa o contador total de itens
        this.total += preco; // Atualiza o total
    }

    removerProduto() {
        if (this.indiceProduto > 0) {
            this.indiceProduto -= 1; // Decrementa o índice para acessar o último produto
            const ultimoProduto = this.produtosOrdenados[this.indiceProduto]; // Obtém o último produto adicionado

            const item = this.itens[ultimoProduto];
            this.quantidade -= item.quantidade; // Decrementa a quantidade total
            this.total -= item.preco * item.quantidade; // Atualiza o total

            delete this.itens[ultimoProduto]; // Remove o produto do carrinho
            delete this.produtosOrdenados[this.indiceProduto]; // Remove o produto da lista de ordem
        }
    }

    totalItens() {
        return this.quantidade; // Retorna a quantidade total de itens
    }

    valorTotal() {
        return this.total; // Retorna o valor total dos produtos
    }

    limparCarrinho() {
        this.itens = {}; // Limpa os itens
        this.produtosOrdenados = {}; // Limpa a ordem dos produtos
        this.indiceProduto = 0; // Reseta o índice
        this.quantidade = 0; // Reseta o contador
        this.total = 0; // Reseta o total
    }
}

// Utilizando a função

const meuCarrinho = new Carrinho();

console.log("Bem-vindo ao sistema de carrinho de compras!");
console.log("Adicione produtos ao carrinho para começar.");
let Resposta = prompt('O que deseja fazer?\n 1 - Adicionar produto \n 2 - Remover produto \n 3 - Exibir total de itens \n 4 - Calcular valor total \n 5 - Limpar carrinho \n 6 - Sair'); // Pergunta ao usuário o que deseja fazer

while (Resposta <= "6") {
    if (Resposta == "1") {
        let produto = prompt('Digite o nome do produto:'); // Pergunta ao usuário o nome do produto
        let preco = parseFloat(prompt('Digite o preço do produto:')); // Pergunta ao usuário o preço do produto
        meuCarrinho.adicionarProduto(produto, preco); // Adiciona um produto
        console.log('Total de itens:', meuCarrinho.totalItens()); // Total de itens
        console.log('Valor total:', meuCarrinho.valorTotal()); // Valor total
        let Resposta1 = parseInt(prompt("Deseja adicionar mais produtos? \n 1 - Sim \n 2 - Não"));
            if (Resposta1 == 1) {
                continue;
            }
            else if (Resposta1 == 2) {
                break;
            }
    } else if (Resposta == "2") {
        console.log('Produtos no carrinho:', meuCarrinho.produtosOrdenados); // Produtos no carrinho
        indiceProduto = parseInt(prompt('Digite o numero do produto que deseja remover:')); // Pergunta ao usuário o nome do produto
        meuCarrinho.removerProduto(); // Remove um produto
        console.log('Total de itens:', meuCarrinho.totalItens()); // Total de itens
        console.log('Valor total:', meuCarrinho.valorTotal()); // Valor total
    } else if (Resposta == "3") {
        console.log('Total de itens:', meuCarrinho.totalItens()); // Total de itens
    } else if (Resposta == "4") {
        console.log('Valor total:', meuCarrinho.valorTotal()); // Valor total
    } else if (Resposta == "5") {
        meuCarrinho.limparCarrinho(); // Limpa o carrinho
        console.log('Total de itens:', meuCarrinho.totalItens()); // Total de itens
        console.log('Valor total:', meuCarrinho.valorTotal()); // Valor total
    } else if (Resposta == "6") {
        console.log("Obrigado por utilizar o sistema de carrinho de compras!");
        break;
    }
}