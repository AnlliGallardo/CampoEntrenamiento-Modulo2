let positivo = 0;
let arreglo = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

for(let i=1; i<=16; i++){
  num =  Number (prompt('Ingrese un número'));
  convertidor(num)
}

alert( `Numeros positivos: ${arreglo} ` ) ;

function convertidor(num){
  if (num < 0) {
    positivo = num * -1;
    arreglo.push(positivo);
  }else {
    alert('Ingrese un numero negativo');
  }

}