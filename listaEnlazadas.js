array:
  estructuras definidas

pilas: LIFO
  son como arrays
  permiten nuevas operaciones:
    push
    pop

colas: FIFO
  son como arrays
  permiten nuevas operaciones:
    push
    shift: quitar el primero

unshift: agregar al inicio

lista enlazada:
  nodo:
    id: string
    description: ""
    nextNodo: nodo

-----------------------------------

  nodo1:
    id: 1
    description: "Hola"
    nextNodo: null

-------------------------------

ANADIR NODO AL FINAL: push

  nodo1:
    id: 1
    description: "Hola"
    nextNodo: 2

  nodo2:
    id: 2
    description: "Hola 2"
    nextNodo: null

-------------------------------

ANADIR NODO AL FINAL: push

  nodo1:
    id: 1
    description: "Hola"
    nextNodo: 2

  nodo2:
    id: 2
    description: "Hola 2"
    nextNodo: 3

  nodo3:
    id: 3
    description: "Hola 3"
    nextNodo: null

-------------------------------

ANADIR NODO EN LA POSICION 1:
  nodo_nuevo:
    id: 100
    description: "Hola 100"
    nextNodo: null


  nodo1:
    id: 1
    description: "Hola"
    nextNodo: 2

  nodo2:
    id: 2
    description: "Hola 2"
    nextNodo: 3

  nodo3:
    id: 3
    description: "Hola 3"
    nextNodo: null

-------------------------------

ANADIR NODO EN LA POSICION 1:

  nodo1:
    id: 1
    description: "Hola"
    nextNodo: 100

  nodo_nuevo:
    id: 100
    description: "Hola 100"
    nextNodo: 2

  nodo2:
    id: 2
    description: "Hola 2"
    nextNodo: 3

  nodo3:
    id: 3
    description: "Hola 3"
    nextNodo: null