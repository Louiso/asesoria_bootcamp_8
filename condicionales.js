1000 lineas:

400
if() {
  if() {
    if() {

    } else {
      if() {

      } else {
        
      } 
    }
  }
} else if() {

} else if() {

} else if() {
  
} else if() {
  
} else if() {
  
}
600


800

/* 
  creamos un programa donde se inserte un numero aleatorio
  si este es par entonces le multiplica por 3 y se le suma 1
  en caso contrario se le enviara un mensaje de error al usuario y se le indicara, buena suerte para la proxima vez.
*/


const numero = 10

if(numero % 2 === 0) {
  console.log("es par")
  numero = numero * 3 + 1

  console.log("este es tu nuevo numero", numero)
} else {
  // console.log("es impar")
  console.log("buena suerte para la proxima vez")
}


const esPar = (numero) => {
  return numero % 2 === 0
}

const main = () => {
  try {
    const numero = 10

    if(!esPar(numero)) throw new Error('buena suerte para la proxima vez')

    console.log("es par")
    numero = numero * 3 + 1

    console.log("este es tu nuevo numero", numero)
  } catch (error) {
    console.log(error.message)
  }
}
