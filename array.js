// Crie uma array com os anos que o Brasil ganhou a copa
// 59, 62, 70, 94, 2002
/*
var brasilCampeao = ["1958", "1962", "1970", "1994", "2002"]



//interaja com a array utilizando um loop, para mostrar no console a seguinte mensagem, o brasil ganhou a copa de ${ano}



for(i=0; i < 5 ;i++){
  console.log(`O Brasil ganhou a copa de ${brasilCampeao[i]}`)
}
*/


//interaja com um loop de frutas abaixo e pare ao chegar em pera


var frutas = ["banana", "Maça", "Pera", "Uva", "Melancia"];
frutas.forEach(function(i){
if ( i == "Pera"){
  break
} else {
  console.log(i)
}
})



//coloque a ultima fruta da array acima 
//em uma variavel sem remover a mesma da arranjo