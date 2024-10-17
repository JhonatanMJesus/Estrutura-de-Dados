class Node {
    constructor(value) {
        this.value = value; // Valor do nó
        this.next = null; // Aponta para o próximo nó
    }
}

class linkedList {
    constructor(){
        this.head = null; // Inicializa a lista vazia
    }

    //Funções da classe
    //Adicionar um nó no começo da lista
    inserirNoInicio(value){
        let newNode = new Node(value); // Cria um novo nó
        newNode.next = this.head; // O próximo nó do nó atual é o nó do começo da lista
        this.head = newNode; // O novo nó é o começo da lista
    }

    //Adicionar um nó no final da lista
    inserirNoFinal(value){
        let newNode = new Node(value); // Cria um novo nó
        if(this.head === null){ // Se a lista estiver vazia
            this.head = newNode; // O novo nó é o começo da lista
            console.log("Lista vazia, valor inserido no começo");
            return;
        }

        let atual = this.head; // Inicializa o nó atual como o começo da lista
        while(atual.next !== null){ // Enquanto o próximo nó não for nulo
            atual = atual.next; // O nó atual é o próximo nó
        }
        atual.next = newNode; // O próximo nó do nó atual é o novo nó
    }

    //Remover um nó pelo valor
    removerPorValor(value){
        if(this.head === null){ // Se a lista estiver vazia
            console.log("Lista vazia");
            return;
        }

        if(this.head.value === value){ // Se o valor do começo da lista for igual ao valor
            this.head = this.head.next; // O começo da lista é o próximo nó
            return;
        }

        let atual = this.head; // Inicializa o nó atual como o começo da lista
        while(atual.next !== null && atual.next.value !== value){ // Enquanto o próximo nó não for nulo e o valor do próximo nó for diferente do valor
            atual = atual.next; // O nó atual é o próximo nó
        }

        if(atual.next !== null){ // Se o próximo nó não for nulo
            atual.next = atual.next.next; // O próximo nó do nó atual é o próximo nó do próximo nó
        }
    }

    //Buscar um nó pelo valor
    buscarPorValor(value){
        let atual = this.head; // Inicializa o nó atual como o começo da lista

        while(atual !== null){ // Enquanto o nó atual não for nulo
            if(atual.value === value){ // Se o valor do nó atual for igual ao valor
                return "Valor " + atual.value + " encontrado"; // Retorna o valor atual
            }
            atual = atual.next; // O nó atual é o próximo nó
        }
        return "Valor " + value + " não encontrado"; // Se não encontrar o valor, retorna nulo
    }

    //Mostrar a lista
    mostrarLista(){
    let atual = this.head; // Inicializa o nó atual como o começo da lista
    let lista = ""; // Inicializa a lista como uma string vazia
        while(atual !== null){ // Enquanto o nó atual não for nulo
            lista += atual.value + " -> "; // Adiciona o valor do nó atual à lista
            atual = atual.next; // O nó atual é o próximo nó
        }
        console.log(lista + "vazio"); // Mostra a lista
    }
}

let lista = new linkedList(); // Cria uma nova lista
lista.inserirNoInicio(1); // Insere o valor 1 no começo da lista
lista.inserirNoFinal(2); // Insere o valor 2 no final da lista
lista.inserirNoFinal(3); // Insere o valor 3 no final da lista
lista.mostrarLista(); // Mostra a lista
lista.removerPorValor(2); // Remove o valor 2 da lista
lista.mostrarLista(); // Mostra a lista
console.log(lista.buscarPorValor(1)); // Busca o valor 3 na lista
console.log(lista.buscarPorValor(4)); // Busca o valor 4 na lista