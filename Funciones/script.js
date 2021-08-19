function calcularArea(){
    let areaCalcular = document.getElementById("areaCalcular");
    let base = parseInt(document.getElementById("base").value);
    let alt = parseInt(document.getElementById("altura").value);
 
    let area = (base * alt) / 2;
 
    areaCalcular.innerHTML = "" + area;
}

function calcularPerimetro(){
    let perimetroCalcular = document.getElementById("perimetroCalcular");
    let ladoA = (document.getElementById("ladoA").value);
    let ladoB = (document.getElementById("ladoB").value);

    let perimetro = (ladoA * 2) + (ladoB * 2);

    perimetroCalcular.innerHTML = "" + perimetro;

}