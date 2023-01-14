javascript funciones para array:
  push: agregar element al final
  pop: quitar ultimo elemento de la lista
  unshift: agregar elemento al inicio
  shift: quitar primer elemento de la lista
  splice: agregar elementos a partir de una posicion de una lista, quitar elements a partir de una posicion de la lista

  como recorrer un array:
    while con contador
    for con contador
    forof
    forEach

  funciones de transformacion
    filter: (element, index) => {}
    reduce


  funciones de consulta: 
    find
    some
    every


const purchasePrices = [1,2,3,4,5,6,7,9,10]

// let index = 0
// while(index < carrito.length) {
//   const element = carrito[index]
//   console.log("element", element)

//   index++
// }

// for(const index = 0; index < carrito.length; index++) {
//   const element = carrito[index]

//   console.log("element", element)
// }

// for(const element of carrito) {
//   console.log("element", element)
// }

// carrito.forEach((element) => {
//   console.log("element", element)
// })

----------------------------------------

Operaciones con arrays

el precio a subido: 1.2

// convertir un array de n elementos a otro array de n elemento

// const newPurchasePrices = purchasePrices.map((price) => {
//   return price * 1.2
// })

// const newPurchasePrices = []
// purchasePrices.forEach((price) => {
//   newPurchasePrices.push(price * 1.2)
// })

// filtar elementos de un array de n elementos a m elementos donde m <= n

// const newPurchasePrices = purchasePrices.filter((price) => {
//   return price > 5
// }) 

// const newPurchasePrices = []
// purchasePrices.forEach((price) => {
//   if(price > 5) {
//     newPurchasePrices.push(price)
//   }
// })

// sumar todos los elementos de un array de n elementos

// const sumTotal = purchasePrices.reduce((sum, price) => {
//   return sum + price
// }, 0)

// const sumTotal = 0
// purchasePrices.forEach((price) => {
//   sumTotal = sumTotal + price
// })

// en base a un array crea un objecto: [ 'firstName', 'lastName', 'email' ]

// const user = {
//   firstName: '',
//   lastName: '',
//   email: ''
// }

// const fields = [ 'firstName', 'lastName', 'email' ]

// const user = fields.reduce((acc, field) => {
//   return { ...acc, [field]: '' }
// }, 0)

// const user = {}
// fields.forEach((field) => {
//   user[field] = ''
// })


// buscar un precio que cumpla cierta condicion

const priceInteres = purchasePrices.find((price) => {
  return price > 7 && price < 10
})

const existeUnElementoMayorQue7MenorQue10 = purchasePrices.some((price) => {
  return price > 7 && price < 10
})

const todosLosElementosSonMayoresQue7MenoresQue10 = purchasePrices.every((price) => {
  return price > 7 && price < 10
})


// PROGRAMACION FUNCIONAL
const push = (items, item) => {
  items[items.length] = item
}

const items = []
push(items, 1)
push(items, 1)
push(items, 1)
push(items, 1)
push(items, 1)
push(items, 1)

const filter = (items, callback) => {
  const newItems = []
  for(const index = 0; index < items.length; i++) {
    const item = items[index]
    const condition = callback(item)

    if(condition) {
      newItems.push(item)
    }
  }

  return newItems
}

const pop = (items) => {
  return filter(items, (_, index) => {
    return index < items.length - 1
  })
}

pop(items)
pop(items)


