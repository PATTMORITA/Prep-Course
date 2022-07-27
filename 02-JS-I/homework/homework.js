// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Patricia";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 1;

// Crea una variable booleana:
const nuevoBool = 13 < 12;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  var Devolveme = str
  return Devolveme
}

function suma(x, y) {
  var suma = x + y
  return suma
}

function resta(x, y) {
 var resta = x - y
 return resta
}

function multiplica(x, y) {
 var multiplicar = x * y 
 return multiplicar
}

function divide(x, y) {
  var division = x / y
  return division 
}

function sonIguales(x, y) {
 if (x == y){
  return true
}
return false}

function tienenMismaLongitud(str1, str2) {
if (str1.length == str2.length){
  return true;
}

  return false}

function menosQueNoventa(num) {
 if (num < 90){
  return true;
  } 
    return false;
}

function mayorQueCincuenta(num) {
 if (50 < num){
  return true;
}
  return false
}

function obtenerResto(x, y) {
var resto = x % y 
return resto
}

function esPar(num) {
if (num % 2 == 0){
  return true;
}
  return false
}

function esImpar(num) {
if (num % 2 == 1){
  return true;
}
  return false
  
}

function elevarAlCuadrado(num) {
var cuadrado = Math.pow (num, 2)
return cuadrado}

function elevarAlCubo(num) {
var cubo = Math.pow (num, 3)
return cubo}

function elevar(num, exponent) {
var Elevado = Math.pow (num, exponent)  
return Elevado}

function redondearNumero(num) {
var Redondear = Math.round (num)
return Redondear}

function redondearHaciaArriba(num) {
var RedondoaAbajo = Math.ceil (num)
return RedondoaAbajo}

function numeroRandom(Random) {
  var NumeroRandom = Math.random (Random)
  return NumeroRandom
  }

function esPositivo(numero){
  if (numero < 0){
   return "Es negativo";
}
   else if (numero > 0)
    return "Es positivo";
 else (numero === 0)
 return false;
}

function agregarSimboloExclamacion(str) {
var exclamacion = (str + "!")
return exclamacion}

function combinarNombres(nombre, apellido) {
var NombreYapellido = (nombre + " " + apellido)
return NombreYapellido
}

function obtenerSaludo(nombre) {
  var Saludo = ("Hola" + " " + nombre + "!")
  return Saludo 
}

function obtenerAreaRectangulo(alto, ancho) {
var Area = (alto * ancho)
  return Area
}


function retornarPerimetro(lado){
  var Perimetro = (lado * 4)
  return Perimetro
}


function areaDelTriangulo(base, altura){
 var Atriangulo = (base * altura / 2)
return Atriangulo
}


function deEuroAdolar(euro){
 var EquiEuroADolar = (euro * 1.20 / 1)
 return EquiEuroADolar
}


function esVocal(letra){
  if (letra.length > 1){
    return "Dato incorrecto";
    } 
     if (letra === 'a' || letra === 'e' || letra === 'i'|| letra === 'o'|| letra === 'u')
    return "Es vocal";
 else if (letra != 'a' || letra != 'e' || letra != 'i' || letra != 'o' || letra != 'u')
  return "Dato incorrecto";
}



  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
