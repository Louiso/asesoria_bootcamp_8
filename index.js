CONDICIONALES
  EXPLICADO
BUCLES
  EXPLICADO

Pseudocodigo
  // quiero hacer un carrito compras:
  //    que necesito?:
  //       necesito guardar en algun lugar las compras, carrito.
  //       necesito inventario de donde sacar las compras.
  //       necesito tener un usuario
  //       necesito crear una lista de compras realizadas

  - declarar lista de compras: purchaseList = []
  
  - declarar funcion para obtener elemento del inventario de compras: funcion

  - declarar una lista de compras realizadas: purchaseCompleteList = []

  - declarar funcion para llenar carrito de comprar: function agregarElementoACarritoDeCompras

  - declara function de verificacionSiHayElementoEnElInventario

  const pointer = 0
  const purchaseList: [3]

  const agregarElementoACarritoDeCompras = (item) => {
    // 
    // purchaseList.push(item)
    // purchaseList.add(item)

    // purchaseList[pointer + 1] = item
  }

  const consultarAInventarioSiExisteItemDisponibleParaVender (item) => {
    const existeElemento = Sql.query('SELECT * from inventario where ${item.type} === type')

    if() {

    }

    for() {

    }

    for() {
      for() {

      }
    }

    return existeElemento.length > 0
  }

  const validarSiPuedoComprarElementosDeCarritoDeCompras (items = []) {
    return items.every((item) => {
      return consultarAInventarioSiExisteItemDisponibleParaVender(item)
    })
  }

  const ejecutarCompra(items = []) {
    Sql.query('INSERT inventario INTO ${items.map((item) => ...)}')
  }

  agregarElementoACarritoDeCompras()
  agregarElementoACarritoDeCompras()

  comprarTodosLosElementosDelCarritoDeCompras()
    validarSiPuedoComprarElementosDeCarritoDeCompras()
      consultarAInventarioSiExisteItemDisponibleParaVender()
    
    ejecutarCompra()

Programacion estructurada: EXPLICADO

Programacion funcionales: EXPLICADO

Programacion orientada a objetos: 

// class Item {
//   price: Number;
//   name: String;
//   expirationDate: Date;
//   code: String;

//   verificarFechaDeExpiracion () {

//   }
// }

// class Carrito {
//   items: Item[];
//   agregarElemento() {

//   }

//   ejecutarCompra() {

//   }
// }

const saluda = (persona: Person) => {
  return `Hola mi nombre es: ${persona.firstName} ${persona.lastName} y tengo ${persona.age} anios`
}

class Person {
  firstName: String;
  lastName: String;
  age: Number;

  constructor({ firstName, lastName, age }) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }

  saluda() {
    return `Hola mi nombre es: ${this.firstName} ${this.lastName} y tengo ${this.age} anios`
  }
}

const raul = new Person({
  firstName: 'Raul',
  lastName: 'Prado',
  age: 27
})

raul.saluda()
saluda(raul)

const carola = new Person({
  firstName: 'Carola',
  lastName: 'Prado',
  age: 18
})

carola.saluda()
saluda(carola)

ALGORITMOS
- Libro de cormen

FUNCIONES ASINTOTICAS


RECURSIVIDAD