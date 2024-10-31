//Classe duplamente encadeada possui um valor inicial e inicia com os dados de next
//e previous vazios.
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

//Construtor da lista duplamente encadeada
class DoublyLinkedList {
    constructor() {
        this.head = null; // Primeiro nó (cabeça)
        this.tail = null; // Último nó (cauda)
        this.length = 0; // Tamanho da lista
    }

    //Adiciona um nó no final da lista
    append(value) {
        const newNode = new Node(value); //Declarando uma variável que receberá um
                                         //novo objeto da classe Node.

        if (!this.head) { //Se não existir um nó no início (cabeça)
            this.head = newNode; //O início receberá o objeto criado na variável newNode
            this.tail = newNode; //O final também receberá o mesmo objeto pois só existirá ele na lista
        } else { //Se já existir
            this.tail.next = newNode; //O próximo objeto da cauda (último) receberá o novo nó
            newNode.prev = this.tail; //O novo nó criado receberá o valor que era o último nó em sua posição anterior
            this.tail = newNode; //O novo nó criado agora passa ser a cauda da lista.
        }
        
        this.length++;
    }

    //Adiciona um nó no início da lista
    prepend(value) {
        const newNode = new Node(value);

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.length++;
    }

    //Remove o nó do final da lista
    removeLast() {
        if(!this.tail)
        return null;

        const removeLastNode = this.tail;
        if(this.tail === this.head) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }

        this.length--;
        return removeLastNode.value;
    }

    //Remove o nó do início da lista
    removeFirst() {
        if(!this.head)
        return null;

        const removeFirstNode = this.head;
        if(this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }

        this.length--;
        return removeFirstNode.value;
    }

    //Percorrer a lista do início ao fim
    traverse() {
        let current = this.head;
        while(current) {
            console.log(current.value);
            current = current.next;
        }
    }

    //Percorrer a lista do fim ao início
    traverseReverse() {
        let current = this.tail;
        while(current) {
            console.log(current.value);
            current = current.prev;
        }
    }

    // Adicionando um nó em uma posição específica
    insertAt(value, index) {
        const newNode = new Node(value);
        
        // Se o índice for 0, insere no início
        if (index === 0) {
            this.prepend(value);
            return;
        }

        // Se o índice for maior ou igual ao tamanho da lista, insere no final
        if (index >= this.length) {
            this.append(value);
            return;
        }

        let current = this.head;
        let currentIndex = 0;

        // Percorre a lista até o índice desejado
        while (currentIndex < index) {
            current = current.next;
            currentIndex++;
        }

        // Insere o novo nó antes do nó atual
        newNode.prev = current.prev; // O anterior do novo nó aponta para o nó anterior ao atual
        newNode.next = current; // O próximo do novo nó aponta para o atual
        current.prev.next = newNode; // O próximo do nó anterior aponta para o novo nó
        current.prev = newNode; // O anterior do nó atual aponta para o novo nó

        this.length++;
    }

    find(value) {
        let current = this.head;
        let index = 0;

        while (current) {
            if (current.value === value) {
                return index; // Retorna o índice se o valor for encontrado
            }
            current = current.next; // Move para o próximo nó
            index++; // Incrementa o índice
        }

        return -1; // Retorna -1 se o valor não for encontrado
    }

        // Método removeAt para remover um nó em uma posição específica
        removeAt(index) {
            if (index < 0 || index >= this.length) {
                return null; // Retorna null se o índice for inválido
            }
    
            let current = this.head;
    
            // Se o índice for 0, remove o primeiro nó
            if (index === 0) {
                return this.removeFirst();
            }
    
            // Se o índice for o último, remove o último nó
            if (index === this.length - 1) {
                return this.removeLast();
            }
    
            // Percorre a lista até encontrar o nó na posição desejada
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
    
            // Ajusta os ponteiros dos nós vizinhos
            current.prev.next = current.next;
            current.next.prev = current.prev;
    
            this.length--;
            return current.value; // Retorna o valor do nó removido
        }
}

const list = new DoublyLinkedList();

list.append(10);
list.append(20);
list.append(30);

console.log("Percorrendo a lista do inicio ao fim");
list.traverse();

list.prepend(5);

console.log("Percorrendo a lista do inicio ao fim após adição no início");
list.traverse();

list.removeLast();
console.log("Percorrendo após remover o último nó");
list.traverse();

list.removeFirst();
console.log("Percorrendo após remover o primeiro nó");
list.traverse();

console.log("Percorrendo em ordem reversa");
list.traverseReverse();

console.log("Índice do valor 20:", list.find(20)); // Saída: 2
console.log("Índice do valor 5:", list.find(5));   // Saída: -1
console.log("Índice do valor 30:", list.find(30));  // Saída: -1
console.log("Índice do valor 100:", list.find(100)); // Saída: -1

list.append(30);
console.log("Adicionando 30 ao final da lista");
list.traverse();

list.removeAt(2);
console.log("Percorrendo após remover o índice 2")
list.traverse();