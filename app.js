/////     PRACTICA CON VARIABLES

// 1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.

// alert('Esto es un alert')

// 2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).

// console.log('Hello World');

// 3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.

// console.log(3 + 5);

// 4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»

//  let usuario = prompt('Ingrese el usuario')

// console.log(`Hola ${usuario}`);

// 5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
// Nota: Tener en cuenta la siguiente función: parseInt
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt

// let numero1 = parseInt(prompt("Ingrese el primer numero"));
// let numero2 = parseInt(prompt("Ingrese el segundo numero"));

// console.log(numero1 + numero2);

// 6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

// let numero1 = parseInt(prompt("Ingrese el primer numero"));
// let numero2 = parseInt(prompt("Ingrese el segundo numero"));

// if(numero1 > numero2){
//     console.log(`${numero1} es mayor que ${numero2}`);

// } else {
//     console.log(`${numero2} es mayor que ${numero1}`);
// }

// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

// let numero1 = parseInt(prompt("Ingrese el primer numero"));
// let numero2 = parseInt(prompt("Ingrese el segundo numero"));
// let numero3 = parseInt(prompt("Ingrese el tercer numero"));

// if(numero1 > numero2 && numero1 > numero3) {
//     console.log(`${numero1} es mayor que ${numero2} y ${numero3}`);
// } else if(numero2 > numero1 && numero2 > numero3){
//     console.log(`${numero2} es mayor que ${numero1} y ${numero3}`);
// } else {
//     console.log(`${numero3} es mayor que ${numero1} y ${numero2}`);
// }

// 8.- Escribe un programa que pida un número y diga si es divisible por 2

// let numero = parseInt(
//   prompt("Ingrese un valor para ver si es divisible por 2")
// );

// if (numero % 2 == 0) {
//   console.log(`${numero} es divisible por 2`);
// } else {
//   console.log(`${numero} no es divisible por 2`);
// }

// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
// Nota: Tener en cuenta la función length y substr. (developer mozilla)

// let ingreseFrase = prompt("Ingrese una frase");
// let vocales = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
// let contarVocales = '';

// for (let i = 0; i < vocales.length; i++) {
//     console.log(contarVocales);

// } REPASAR

// 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro

// let numero = parseInt(prompt("Ingrese un numero"));

// if (numero % 2 == 0) {
//   console.log(`${numero} divisible por 2`);
// } else if (numero % 3 == 0) {
//   console.log(`${numero} divisible por 3`);
// } else if (numero % 5) {
//   console.log(`${numero} divisible por 5`);
// } else if (numero % 7) {
//   console.log(`${numero} divisible por 7`);
// } else {
//     console.log('No es divisible por ninguno');
// }

// 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

//Para ejercicio 11 practicar matematicas

/////////////////////////////////////////////////////////////////////////////////// BUCLES///////////////////////////////////////////////////////////////////////////////////////////////////
// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

// let ingresarEdad = parseInt(prompt("Ingrese su edad"));
// if (ingresarEdad > 18) {
//   alert("Puede conducir");
// } else if (ingresarEdad < 18) {
//   alert("No esta habilitado para conducir");
// } else {
//   alert("Por favor ingrese su edad en numeros");
// }

// 2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

// 0-2: Muy deficiente
// 3-4: Insuficiente
// 5-6: Suficiente
// 7: Bien
// 8-9: Notable
// 10: Sobresaliente

// Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

// let nota = Number(prompt("Ingrese una nota"));

// if (nota <= 2) {
//   alert("Muy deficiente");
// } else if (nota <= 4) {
//   alert("Insuficiente");
// } else if (nota <= 6) {
//   alert("Suficiente");
// } else if (nota == 7) {
//   alert("Bien");
// } else if (nota <= 9) {
//   alert("Notable");
// } else if (nota == 10) {
//   alert("Sobresaliente");
// } else if (nota < 0 || nota <= 10) {
// } else {
//   alert("Numero erroneo");
// }

/// Falta 'Introduce un numero valido'

// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

// Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

// let resultado = ''
// do {
//   let cadenaDeTexto = prompt("Ingrese un texto");
//   if (resultado == '') {
// resultado = cadenaDeTexto + resultado
//   } else {
// resultado = cadenaDeTexto + '-' + resultado  }
// } while (confirm("Desea agregar mas cadenas?"));
// {console.log(resultado);
// }

// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

// let suma = 0;
// do {
//   let numero = prompt("Introduce un numero");
//   if (Number(numero) == numero) {
//     numero = Number(numero);
//     suma = suma + numero;
//   } else {
//     if (numero != undefined) {
//       alert(numero + " No es un numero");
//     }
//   }
// } while (confirm("Desea agregar mas numeros?"));
// console.log(suma);

// 5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

// El algoritmo para calcular la letra del dni es el siguiente :

// El número debe ser entre 0 y 99999999
// Debemos calcular el resto de la división entera entre el número y el número 23.
// Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
// Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
// Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

// 6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

// 1
// 22
// 333
// 4444
// 55555
// 666666
// …….

///////////////////////////////////////////////////////////////////////////ARRAYS/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista  los doce nombres del arreglo.

// let Meses = [
//   "Enero",
//   "Febrero",
//   "Marzo",
//   "Abril",
//   "Mayo",
//   "Junio",
//   "julio",
//   "Agosto",
//   "Septiembre",
//   "Octubre",
//   "Noviembre",
//   "Diciembre",
// ];

// for (let i = 0; i < Meses.length; i++) {
//   console.log(Meses[i]);
// }
// 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

// let ciudades = [];
// do {
//   ciudades.push(prompt("Ingrese una ciudad"));
// } while (confirm("Desea agregar mas ciudades?"));
// {
// }
// console.log(ciudades.length);

// /// Posiciones

// console.log(ciudades[0]);
// console.log(ciudades[2]);
// console.log(ciudades[ciudades.length - 1]);
// // Añade en última posición la ciudad de París.

// ciudades.push = "Paris";
// // Escribe por pantalla el elemento que ocupa la segunda posición.
// console.log(ciudades[1]);

// // Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

// ciudades.push[1] = "Barcelona";
// console.log(ciudades);

// 3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.
// let dado1;
// let dado2;

// do {
//   let dado1 = Math.round(Math.random() * 6);
//   let dado2 = Math.round(Math.random() * 6);
//   alert(dado1);
//   alert(dado2);
//   if (dado1 > dado2) {
//     alert("Jugador 1 gana");
//   } else if (dado1 < dado2) {
//     alert("Jugador 2 gana");
//   } else {
//     alert("Empate");
//   }
// } while (confirm("Desea lanzar de nuevo?"));

// let suma = dado1 + dado2;
// let array = [];
// array.push
// console.log(array);

// 1- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

// function numeroEntero(numero) {
//   let numeroPar = Number(prompt("Ingrese un numero"));

//   if (numeroPar % 2 == 0) {
//     alert("El numero ingresado es Par");
//   } else {
//     alert("El numero ingresado NO es Par");
//   }
// }
// numeroEntero();

//2- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

// function info(cadenaDeTexto) {
//   if (cadenaDeTexto == cadenaDeTexto.toLowerCase()) {
//     alert("Texto ingresado contiene minisculas");
//   } else if (cadenaDeTexto == cadenaDeTexto.toUpperCase()) {
//     alert("Texto ingresado contiene mayusculas");
//   } else {
//     alert("texto ingresado contiene mayusculas y minusculas");
//   }
// }

// alert(info("AHSHDHASDHADD"));
// alert(info("snfnsnffnnffnn"));
// alert(info("andashbdHBVGVGGV"));

// 3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

// La fórmula del perímetro  es p = 2*(a +b)
// function rectángulo() {
//   let a = prompt("Ingrese el primer valor");
//   let b = prompt("Ingrese el segundo valor");
//   return (p = 2 * (a + b));
// }
// console.log(rectángulo());

// 4- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

// function multiplicar() {
//   let numero = Number(prompt("Ingrese un numero"));
//   for (let i = 0; i < 11; i++) {
//     console.log(numero * [i]);
//   }
// }

// multiplicar();
