let horaextra = 0;
let cantidadhora = 0;
let salariobase = 0;

function Calcular() {

    cantidadhora = document.getElementById('cantidadhora').value;

    console.log(cantidadhora)
    if(cantidadhora >= 1 && cantidadhora <= 40){
        salariobase = cantidadhora * 16000
        document.getElementById('salariobase').value = salariobase;
        document.getElementById('horaextra').value = 0;
        document.getElementById('total').value = salariobase;
    }
    else {
        horaextra = cantidadhora - 40;
        salariobase = (horaextra * 20000) + (40 * 16000)
        document.getElementById('salariobase').value = 40*16000;
        document.getElementById('horaextra').value = horaextra*20000;
        document.getElementById('total').value = salariobase;
    }
}



