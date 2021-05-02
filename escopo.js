// por qual motivo o codigo abaixo retorna com erros?
/*
{
  var cor = "preto";
  const marca = "fiat"
  let portas = 4;
}
  console.log(cor, marca, portas);
*/
/*
{
  var cor = "preto";
  const marca = "fiat"
  let portas = 4;
  console.log(cor, marca, portas);
}
*/
//ou
/*
{
  var cor = "preto";
  var marca = "fiat"
  var portas = 4;
}
console.log(cor, marca, portas);
*/


//Corrija o erro abaixo
/*
function somarDois(x) {
  const dois = 2;
  return x + dois;
}
function dividirDois(x) {
  return x + dois;
}
somarDois(4);
dividirDois(6);
*/
/*
const dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
somarDois(4);
dividirDois(6);
*/

//o que fazer para total retornar 500?
/*
var numero = 50;

for (var numero = 0; numero < 10; numero++){
  console.log(numero)
}

const total = 10 * numero;
console.log(total);
*/

/*
var numero = 50;

for (let numero = 0; numero < 10; numero++){
  console.log(numero)
}
const total = 10 * numero;
console.log(total);
*/