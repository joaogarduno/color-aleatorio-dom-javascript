// SELECCIONAR LOS ELEMENTOS DEL DOM
const boton = document.querySelector('button');
const color = document.querySelector('#color');

// boton.addEventListener('click', () => {

// })

// Definir una funcion que maneje el proceso de generar un hexadecimal aleatorio
function generarColorAleatorio(){
  // 16 posibles opciones
  let digitos = '0123456789ABCDEF';
  let colorHex = '#';


  // Indice aleatorio
  // Este nos permitira seleccionar aleatoriamente a cada uno de los elementos de la variable "digitos"
  for (let i = 0; i < 6; i++){
    // utilizamos el metodo "random" que nos retornara un numero pseudo aleatorio entre 0 y 1, multiplicaremos ese numero por 16
    // let indiceAleatorio = Math.random() * 16;


    // Pero como luego queremos obtener un entero usamos el metodo "floor", "floor" nos va a permitir redondear el numero para obtener el mayor entero que es menor o igual a (Math.random() * 16)
    // estamos usando el numero 16 porque son 16 posibles opciones o caracteres disponibles
    let indiceAleatorio = Math.floor(Math.random() * 16);

    colorHex += digitos[indiceAleatorio];
  }

  return colorHex;

}

// Para poder ejecutar toda nuestra funcion tenemos que decirle que queremos asociar esta funcion con un click, cuando el usuario de clic sobre el botón queremos ejecutar la funcion " generarColorAleatorio() "
// Para poder hacer esa conexion vamos a necesitar y hacer uso del metodo " addEventListener() "

// Cual es el evento que queremos manejar el evento de "click" y como lo queremos manejar ya que eso es muy importante, es como queremos manejar ese evento.
// Necesitamos realizar distintos pasos no solo necesitamos llamar a este funcion "generarColorAleatorio()" porque la funcion solo va a generar un color aleatorio, pero NO actualizara nada el DOM no actualizara ningun color, ni ningun texto en ningun elemento, queremos llamara a esta funcion "generarColorAleatorio()" obtener ese color y luego hacer las actualizaciones necesarias.
// Para eso definimos una función, recuerda que podemos definir una funcion dentro pasandola como un segundo argumento, o tambien la podemos definir de manera independiente en el codigo son todas las alternativas diferentes

boton.addEventListener('click', () => {
  // 1. Obtener el color aleatorio
  let colorAleatorio = generarColorAleatorio();

  // 2. ¿Qué quieres hacer con ese color?, el color va a aparecer en el texto que vemos sobre el botón, asi que vamos a actualizar el contenido del texto de ese elemento "p", en este caso si vamos a trabajar con el elemento del DOM, es el color que obtuvimo a partir de su ID "const color = document.querySelector('#color')"

  // "const color = document.querySelector('#color')" recuerda que este es el elemento <p></p> el parrafo en el cual mostramos el color actual
  color.textContent = colorAleatorio;

  // 3. Y luego como podemos hacer para actualizar la etiqueta <body></body> de esta forma vamos a acceder al elemento <body></body>
  // document.body

  // 4. Y luego despues de accedimos al <body></body>, podemos acceder a sus propiedades, como por ejemplo
  // Debemos especificar cual de estas propiedades queremos actualizar en este caso es el color de fondo

  // Estas son las 2 funciones, actualizar el color de fondo y actualizar el texto
  document.body.style.backgroundColor = colorAleatorio;
});

